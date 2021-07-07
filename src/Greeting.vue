<template>
  <div id="app">
    <center>
      <p>Input your name</p>
      <input type="text" v-model="name">
      <button @click="isBtnClicked=true">click</button>
      <p v-if="isBtnClicked"> Welcome, {{name}} </p>
    </center>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      name: '',
      isBtnClicked: false
    }
  }
}

</script>
