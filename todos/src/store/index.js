
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
const state = {
    todos : [
        {text : '学习vuex', done : true},
        {text : '研究react', done : false},
        {text : '找工作', done : false},
        {text : '做项目', done : true},
    ]
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
