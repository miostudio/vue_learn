<template>
	<div>
		<h1>Props属性：从父组件的属性标签获取值</h1>
		<p>{{name}}</p>
		<p>{{msg}}</p>
		
	</div>
</template>

<script>
export default{
	'name':"PropsTes3tfsfd",
	props:{
		msg:{
			type:String,
			default:"默认文字",
		}
	},
	data:function(){
		return {
			"name":"BookName2"
		}
	},
}
</script>

<style scoped>
div{border:1px solid red;}
</style>

