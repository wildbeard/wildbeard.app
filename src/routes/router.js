import VueRouter from 'vue-router';
// const Home = require('../components/home.vue');
// const Resume = require('../components/resume.vue');
import Home from '../components/home.vue';
import Resume from '../components/resume.vue';
const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/resume',
		component: Resume,
	},
];
const router = new VueRouter({routes});
export default router;