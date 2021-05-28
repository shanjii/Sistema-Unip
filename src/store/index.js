import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state: {
    currentScreen: 'login',
    typeUser: '',
    error: ''
  }
})


export default store;