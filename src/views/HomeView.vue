<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">


    <br>
    <br>
    <br>
    <button @click="currentComponent = 'aa'">aa</button>
    <button @click="currentComponent = 'bb'">bb</button>
    <button @click="currentComponent = 'cc'">cc</button>
    <br>
    <br>
    <br>

    <template v-if="currentComponent">
      <template v-for="item in links">
        <component :key="item" v-show="currentComponent === item" :is="item"></component>
      </template>
    </template>





    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>


    <HelloWorld msg="Welcome to Your Vue.js App"/>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  data() {
    return {
      currentComponent: '',
      links: ['aa', 'bb', 'cc']
    };
  },
  mounted() {
    import('../router').then(res => {
      res.routes.forEach(item => {
        // comp[item.name] = item.component;
        this.$options.components[item.name] = item.component;
      })

      this.currentComponent = 'bb'
    })
  },
}
</script>
