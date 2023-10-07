const app = Vue.createApp({
    data() {
        return {
            name: '',
            login: '',
            location: '',
            company: '',
            avatar_url: '',
            searchInput: '',
        }
    },
    methods: {
        async fetchGitHubUser() { 
            const res = await fetch(`https://api.github.com/users/${this.searchInput}`)
            const { login, name, location, company, avatar_url } = await res.json()
            this.name = name
            this.login = login
            this.location = location 
            this.company = company
            this.avatar_url = avatar_url
        }
    },
})

app.mount('#app')
