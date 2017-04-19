import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
Vue.use(Vuex);
import * as m_types from './mutations-types'
import * as a_types from './actions-types'
//import ajax from '/src/js/components/helpers/ajax.js'
import ajax from './../js/components/helpers/ajax.js'
const operation = {};
let test = true;
const store = new Vuex.Store({
    /*strict: process.env.NODE_ENV !== 'production',*/
    state: {
        app: {
            MenuPoints: []
        }
    },
    mutations: {
        [m_types.SET_CATEGORY](state, payload){
            state.app.MenuPoints = payload;
        }
    },
    actions: {
        [a_types.GET_CATEGORY]({ commit, state }){
            let res = [];
            operation.name = 'categories';
            test = !test;
            let self = this;
            ajax.exec(operation, function (resp) {
                if (test) {
                    //state.appState.MenuPoints = _.reverse(resp.data);
                    commit('SET_CATEGORY', _.reverse(resp.data));
                }
                else {
                    commit('SET_CATEGORY', resp.data);
                }
                console.log(666);
                console.log(state.app.MenuPoints);
            });
        }
    }
});
export default store;