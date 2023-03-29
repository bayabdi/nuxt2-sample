import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

export default ({ app }) => {
  extend('required', {
    ...required,
    message: app.i18n.t('rules.required')
  })
}
