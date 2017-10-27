import $ from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Mint from 'mint-ui'

import myMain from "./components/main.vue"
import singer from "./components/singer.vue"
import last from "./components/last.vue"
import search from "./components/search.vue"

Vue.use(VueRouter);
Vue.use(Mint);
var router = new VueRouter({
  routes: [
    {path: "/", component: myMain},
    {path: "/singer", component: singer},
    {path: "/last", component: last},
    {path: "/search", component: search}
  ]
});
new Vue({
  el: '#box',
  render: h => h(App),
  router
});

