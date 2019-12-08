<template>
	<div class="e1">
		<h1>event test 1</h1>
		{{event1}}
		<p>鼠标事件 v-on:click 或者 @click，与传参:
			<button v-on:click="say">greetings</button>
			<button @click="say2('night')">greetings2 传参</button>
		</p>
		
		<p>键盘事件，与参数获取; 事件修饰符.enter :
		
			<input type='input' v-on:keydown="pressedKey" @keyup.enter="enterHit(this)"  v-model="userName">{{userName}}<br>
			多修饰符: <input type='input' @keyup.alt.enter="altEnterHit" value="alt+enter">
		</p>
		
		<p class=greenBg>computed 计算属性，只有变化的时候才计算<br>
		first Name:<input type='input' v-model="user.firstName"><br>
		last Name:<input type='input' v-model="user.lastName"><br>
		full Name: {{fullName}}<br>
		<button v-on:click="showFullName">showFullName 计算属性不变化不更新</button>
		<button v-on:click="showFullName_Method">showFullName_Method方法每次单击都更新</button>
		
		</p>
	</div>
</template>

<script>
export default{
	name:'EventTest1fs',
	data:function(){
		return{
			'event1':'click event1 demo',
			'userName':'wangjl',
			'user':{
				'firstName':'George',
				'lastName':'Smith',
			},
		}
	},
	computed:{
		fullName:function(){
			return this.user.firstName+" "+this.user.lastName+" "+new Date().getTime();
		}
	},
	methods:{
		say:function(){
			console.log('Good morning!')
		},
		say2:function(xx){
			alert('Hello, '+xx);
		},
		pressedKey:function(e){
			console.log('pressedKey:', e.key, e.code,e.keyCode)
		},
		enterHit:function(obj){ //this接收不到
			console.log('回车发送这条消息：', this.userName,obj)
		},
		pressedShift:function(){
			console.log('pressedShift')
		},
		altEnterHit:function(e){
			console.log('多修饰符，使用点号连起来。altEnterHit:', e.key)
		},
		showFullName:function(){
			alert( this.fullName );
		},
		showFullName_Method:function(){
			var fname=this.user.firstName+" "+this.user.lastName+" "+new Date().getTime();
			alert( fname );
		}
	}
}
</script>


<style scoped>
h1{color:purple;}
.e1{border:1px dashed purple;}
.e1 p{border-top:1px dashed #ccc; margin:15px 5px; padding:5px;}
</style>