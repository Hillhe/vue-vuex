import Vue from "vue"
import Cell from "./cell"
new Vue({
  el: '#cell',
  template: "<Cell/>",
  components: { Cell: Cell }
})