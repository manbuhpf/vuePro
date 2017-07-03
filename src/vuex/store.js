import Vue from "vue"
import Vuex from "vuex"
import userModule from "./Module/userModule/userModule.js"

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		userModule
	}
})