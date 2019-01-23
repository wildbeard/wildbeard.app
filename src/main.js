import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './routes/router';

Vue.use(VueRouter);

// SASS
require('./sass/sassy.scss');

new Vue({
	router
}).$mount('#app');