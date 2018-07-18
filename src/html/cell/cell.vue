<template>
  <div class="root">
  	<div>{{message}}</div>
  	<bar></bar>
  </div>
</template>

<script>
import Bar from '@/components/Bar'
export default {
  data () {
    return {
    	message: "cell"
    }
  },
  components: {
  	Bar
  }
}
</script>
<style scoped>

</style>
