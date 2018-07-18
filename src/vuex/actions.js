export default {
	countAdd ({commit}, obj) {
		setTimeout(() => {
	      commit('countAdd', obj.n)
	    }, 100)
	}
}