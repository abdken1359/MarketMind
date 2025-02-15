import {createWebHistory,createRouter} from 'vue-router'
import Home from '../views/home.vue'
import Sign from '../views/signup.vue'
const routes = [
	{
		path:'/',
		name:'Home',
		component:Home

	},
	{
		path:'/account',
		name:'Signup',
		component:Sign,
	}
]
const router = createRouter({
	history:createWebHistory(),
	routes
})
export default router