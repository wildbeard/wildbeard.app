import VueRouter from 'vue-router';
import Home from '../components/home.vue';
import Resume from '../components/resume.vue';
import NotFound from '../components/404.vue';
const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/resume',
		component: Resume,
	},
	{
		path: '*',
		component: NotFound,
	}
];
const router = new VueRouter({
	mode: 'history',
	routes,
});
export default router;