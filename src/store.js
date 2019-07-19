import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        analysis: [0, 0, 0, 0],
        user: true,
        articleDate: {
            needToAddArticle: false,
            needToEditArticle: false
        }
    },
    mutations: {
        _analysis(state, array) {
            state.analysis = array
        }
    },
    actions: {}
});
