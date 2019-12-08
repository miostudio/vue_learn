<!--
备份 /src/App.vue 三个练手组件。

-->
<template>
  <div id="app">
	<PropsTest2 msg="新属性值"></PropsTest2>
    <EventTest1></EventTest1>
    <VueTest3></VueTest3>
    
  </div>
</template>

<script>
import VueTest3 from './components/VueTest.vue'
import EventTest1 from './components/EventTest1.vue'
import PropsTest2 from './components/PropsTest.vue'

export default {
  name: 'app',
  components: {
    VueTest3, 
	EventTest1,
	PropsTest2
  }
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
</style>