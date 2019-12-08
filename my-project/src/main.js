// 0. 如果使用模块化机制编程，导入Vue和VueRouter，
//要调用 Vue.use(VueRouter)
import Vue from 'vue'
import VueRouter from 'vue-router' //1.引用路由
import App from './App.vue'

Vue.use(VueRouter) //0.2 中间件，使用该插件

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
//const Users = { template: '<div>Users</div>' }
//const VueTest = { template: '<div>VueTest</div>' }
import Users from './components/Users.vue'
import VueTest from './components/VueTest.vue'

Vue.config.productionTip = false

//3.设置路由
const router=new VueRouter({
	//RouterMode = "hash" | "history" | "abstract";
	mode:'history', //记得要写上，否则url出现#。
	base:__dirname,
	routes:[  //注意这是是routes，不是routers，少了r
		{path:'/',  component:Users},
		{path:'/test', component:VueTest},
		
		//{path: '/*', component: NotFound}, //默认路由
	]
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
	router:router,
	render: h => h(App),
}).$mount('#app')
