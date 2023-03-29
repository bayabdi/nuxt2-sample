<template>
  <div>
    <ValidationObserver ref="obs">
      <v-card slot-scope="{ invalid, validated }" class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>VeeValidate Providers</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <ValidationProvider name="Name" rules="required|max:10">
              <v-text-field
                v-model="name"
                slot-scope="{
                  errors,
                  valid
                }"
                :counter="10"
                :error-messages="errors"
                :success="valid"
                label="Name"
                required
              />
            </ValidationProvider>
            <ValidationProvider name="email" rules="required|email">
              <v-text-field
                v-model="email"
                slot-scope="{
                  errors,
                  valid
                }"
                :error-messages="errors"
                :success="valid"
                label="E-mail"
                required
              />
            </ValidationProvider>

            <ValidationProvider rules="required" name="checkbox">
              <v-checkbox
                v-model="checkbox"
                slot-scope="{
                  errors,
                  valid
                }"
                :error-messages="errors"
                :success="valid"
                value="1"
                label="Option"
                type="checkbox"
                required
              />
            </ValidationProvider>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="clear">
            Clear
          </v-btn>
          <v-spacer />
          <v-btn @click="submit">
            Validate
          </v-btn>
          <v-btn
            color="primary"
            :disabled="invalid || !validated"
            @click="submit"
          >
            Sign Up
          </v-btn>
        </v-card-actions>
      </v-card>
    </ValidationObserver>
  </div>
</template>

<script>
import {
    // eslint-disable-next-line import/named
    ValidationObserver,
    // eslint-disable-next-line import/named
    ValidationProvider
} from 'vee-validate'

export default {
    components: {
        ValidationProvider,
        ValidationObserver
    },

    data: () => ({
        items: ['', 'Foo', 'Bar'],
        name: '',
        email: '',
        select: '',
        checkbox: ''
    }),

    mounted () {
        console.log(this.$store)
        this.$store.dispatch('user/signUp', { text: 'asdasd' })
    },

    methods: {
        clear () {
            this.name = this.email = this.select = this.checkbox = ''
            this.$nextTick(() => {
                this.$refs.obs.reset()
            })
        },
        async submit () {
            const result = await this.$refs.obs.validate()
            // eslint-disable-next-line no-console
            console.log(result)
        }
    }
}
</script>
