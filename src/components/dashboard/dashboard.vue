<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
	<p v-if="email">Your email address: {{ email }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
	/*
	data() {
		return {
			email: ''
		}
	},
	*/
	/*
	created() {
		axios.get('/users.json')
		.then(res => {
			const data = res.data
			const users = []
			for(let key in data) {
				const user = data[key]
				user.id = key
				users.push(user)
			}
			console.log(users)
			this.email = users[0].email
		})
		.catch(error => console.log(error))
	}
	*/
	created() {
		this.$store.dispatch('fetchUser')
	},

	computed: {
		email() {
			return this.$store.getters.user ? this.$store.getters.user.email : false
		}
	}
}
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>