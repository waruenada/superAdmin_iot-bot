import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected_value: "operators_page",
    professor_value:"",
    url_get_API_axios: "http://203.151.164.229:8000",
    delete_data:"",
    update_data:"",
    add_data:"",
    update_user:""
  },
  mutations: {
    update_selected(state, val){
      state.selected_value = val
      // console.log(val);
    },
    getData_professor(state, val){
      state.professor_value = val
    },
    get_token(state, val){
      state.user_token = val
      // console.log(val);
    },
    delete_data(state, val){
      state.delete_data = val
      console.log(val);
    },
    update_data(state ,val){
      state.update_data = val
    },
    add_data(state, val){
      state.add_data = val
    },
    update_user(state, val){
      state.update_user = val
    }

  },
  actions: {
  },
  modules: {
  }
})
