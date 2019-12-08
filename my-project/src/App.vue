<template>
  <div id="app">
    <h1>Hello, Vue Router! </h1>
	<p>$ vue --version // @vue/cli 4.1.1</p>

    <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/">Go to Users</router-link> | 
        <router-link to="/test">Go to VueTest</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
	<div class="showView">
		router-view:<hr>
		<router-view></router-view>
	</div>
  </div>
</template>

<script>
window.a002="this is a002";

export default {
  name: 'app',
  components: {
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.showView{
	border:1px solid red;
}
</style>
