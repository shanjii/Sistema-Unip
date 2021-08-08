import { createStore } from 'vuex'
import axios from 'axios'

// Create a new store instance.
const store = createStore({
  state: {
    currentScreen: 'login',
    account: null,
    error: '',
    initialAccess: false,
    loggedIn: false
  },
  
  mutations: {
    //Store user data on state
    setAccount(state, element) {
      state.account = element
      state.loggedIn = true
    },

    //Activate error notification
    error(state, error) {
      state.error = error;
      document.getElementById("error").classList.add("active");
      setTimeout(
        () => document.getElementById("error").classList.remove("active"),
        4000
      );
    },
  },

  actions: {
    //Login request
    async login({ commit }, user) {
      let approved = false
      let response = await axios.get('https://60b31bc11bec230017bf33a3.mockapi.io/users')
      if (response.status === 200) {
        response.data.forEach(element => {
          if (element.ra === user.ra && element.password == user.password) {
            commit('setAccount',  element)
            approved = true
          }
        });
      }
      return approved
    },
  }
})


export default store;