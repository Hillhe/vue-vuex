var state = {
	carcount: 100,
	carname: "购物车"
};
var mutations = {
	addCarCount(state, n){
		state.carcount += n;
	}
};
var actions = {
	addCarCount({commit}, n){
		commit('addCarCount', n);
	},
	addRootCount({commit}, n){
		commit('countAdd', n);
	}
};
export default {
	state: state,
	mutations: mutations,
	actions: actions
}