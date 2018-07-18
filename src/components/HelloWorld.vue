<template>
  <div class="root">
  	<div class="hello">{{Acount}}</div>
  	<div class="hello">{{count}}</div>
    <div>{{carcount}}</div>
   	<button @click="add">增加</button>
   <!--  <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-view></router-view> -->
    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive> 
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
export default {
  data () {
    return {
      currentTabComponent: "bar"
    }
  },
  computed: mapState({
  	//Acount: state => state.count
  	Acount: 'count',
  	count: 'count',
    carcount: state => state.car.carcount
  }),
  // computed: mapState(["count"]),
  methods: {
  	add () {
  		// this.$store.dispatch('countAdd', {n: 10});
      this.$store.dispatch('addCarCount', 50);
      this.$store.dispatch('addRootCount', 10); 
  	}	
  },
  components: {
    Foo,
    Bar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
