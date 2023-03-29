export default {
    async signUp (state, { text }) {
        await console.log(text)
        const ip = await this.$axios.$get('http://api.2study.org/health')
        console.log(ip)
    }
}
