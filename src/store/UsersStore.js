import { defineStore } from "pinia";
import axios from "axios";

export let useUsersStore = defineStore('users',  {
  state() {
    return {
      friends: []
    }
  },

  actions: {
    getAllUsers() {
      return axios('http://localhost:3001/users').then(response => {
        this.friends = response.data
      })
    }
  }
})
