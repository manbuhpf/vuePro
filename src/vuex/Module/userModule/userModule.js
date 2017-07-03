import * as types from '@/vuex/types.js'

// user的vuex树的state
const state = {
	userName: '32312',
	password: ''
}
// user的vuex树的同步操作状态的mutations
const mutations = {
	[types.USER_NAME]( state, newVal) {
		state.userName = newVal;
	},
	[types.PASSWORD]( state, newVal) {
		state.password = newVal;
	}
}
// user的vuex树的异步操作actions
const actions = {
	[types.USER_NAME]( context, newVal) {
		context.commit(types.USER_NAME,newVal);
	},
	[types.PASSWORD]( context, newVal){
		context.commit(types.PASSWORD, newVal)
	}
}
// user的vuex树的getters
const getters = {
	getUserName( state ) {
		return state.userName;
	}
}

export default {
	state,
	mutations,
	getters,
	actions
}