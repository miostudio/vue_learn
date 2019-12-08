<template>
  <div class="test01">
	<h1>Test01-h1 获取数据</h1>
	
	<p>Title: {{title}}</p>
	<p>Auther: {{user.firstName}}(模板绑定), (也可以使用指令)<b v-text="user.lastName"></b></p>
	
	<hr>
	<!-- v-if -->
	<p v-if="showName">{{user.firstName}}</p>
	<!-- v-else -->
	<p v-else>Nobody</p>
	
	<hr>
	<!-- v-for :key=""中的值要是具体的值，不知道啥用？-->
	<ul>
		for循环中，绑定的key值不能为对象，而是取一个字符串或数值：
		<li v-for="book in books" :key="book.title">{{book.title}}: {{book.price}}</li>
	</ul>
	
  </div>
</template>



<script>
export default{
	name:'VueTest', //一般是组件名一模一样, 这个名字貌似没啥用？
	data:function(){
		return{
			title:"Hello, test(from data)",
			user:{
				firstName:'Jim',
				lastName:'Smith',
			},
			showName:false,
			books:[
				{title:'book1', price:100},
				{title:'book2', price:200},
				{title:'book3', price:300},
				{title:'book10', price:3000},
			],
		}
	},
}
</script>

<!-- 使用scoped，则只会对当前内容起作用 -->
<style scoped>
.test01 h1{
	color:red;
}
</style>