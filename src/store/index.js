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
    async loginAluno({ commit }, user) {
      let userData;
      let response
      try {
        response = await axios.get('http://localhost:3000/alunos')
        response.data.forEach(element => {
          if (element.ra === user.ra && element.senha == user.password)
            userData = element
        });
        if (userData != undefined) {
          response = await axios.get('http://localhost:3000/infos/' + userData.id_infos)
          userData.name = response.data.nome
          userData.usertype = 'aluno'
          commit('setAccount', userData)
          return true
        }
        else {
          commit("error", "Usuário não encontrado")
        }
      }
      catch {
        commit('error', 'Servidor indisponível')
      }
    },
  }
})


export default store;