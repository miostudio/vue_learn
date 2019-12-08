<template>
	<div>
		<h1>Users 组件</h1>
		<p>{{name}}</p>
		
		<!--添加用户信息-->
		<form v-on:submit="addUser">
			<input v-model="newUser.name" placeholder="Enter name">
			<input v-model="newUser.email" placeholder="Enter email">
			<input type="submit" value="Submit">
		</form>
		
		
		
		<!--展示用户信息-->
		<ul>
			<li v-for="user in users" :key="user.name">
				<input type="checkbox" class="toggle" v-model="user.contacted">
				<span :class="{contacted:user.contacted}">
					{{user.name}}:{{user.email}}
					<button @click="deleteUser(user)">x</button>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>

export default{
	'name':"Users31",
	data:function(){
		return {
			"name":"UserTest002",
			users:[
				{
					name:'Tom',
					email:'Tom@gmail.com',
					contacted:false
				},
				{
					name:'Robin',
					email:'Robin@gmail.com',
					contacted:false
				},
				{
					name:'Lily',
					email:'lily@gmail.com',
					contacted:false
				}
			],
			newUser:{},
		}
	},
	methods:{
		addUser:function(e){
			//console.log('addUser now.');
			this.users.push({
				name:this.newUser.name,
				email:this.newUser.email,
				contacted:false,
			});
			
			//取消默认事件
			e.preventDefault();
		},
		deleteUser:function(user){
			//
			var index=this.users.indexOf(user);
			//console.log('deleteUser now.',user,index);
			this.users.splice(index,1);
		},
	},
}
</script>

<style scoped>
div{border:1px solid red;}
.contacted{
	text-decoration:line-through;
}
</style>

