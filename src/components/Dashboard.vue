<template>
  <div>
    <h1>Dashboard</h1>
    <h2 v-bind:textContent="data1"></h2>
    <h1>{{data1}}</h1>
    <h3 :textContent="data1"></h3>
    <h1>{{name}}</h1>
    <h2>{{uppername}}</h2>
<button @click="name = name === 'sabari' ? 'james' : 'sabari'">
  Toggle Name
</button>
<button v-on:click="name=name=='sabari'?'james':'sabari'">Toggle</button>
<h1>{{rawhtml}}</h1>
<h1 v-text="rawhtml"></h1>
<h1 v-html="rawhtml"></h1>
<h1 v-bind:textContent="rawhtml"></h1>
<h5 :textContent="data1" :style="{'font-size':fontsize+'px','color':colorofthis}"></h5>
<h1 v-for="(data,index) in arrayofdata" :key="index">{{index}}->{{data}}</h1>
<h1 v-for="(data,index) in arrayofobj" :key="index">{{data.name}}->{{data.age}}</h1>


<!-- This would be an error as v-if would be read by browserr before v-for-->
<!--<h2 v-for="(data,index) in arrayofdata" v-bind:key="index" v-if="data=="sabari">{{data}}</h2>-->

<!-- conditional rendering with list -->
<template v-for="(data,index) in arrayofdata" :key="index">
<h2 v-if="data=='sabari'">{{data}}</h2>
</template>

<ul v-if="arrayofdata.length>0">
    <li v-for="(data,index) in arrayofdata" :key="index">{{ data }}</li>
</ul>

  </div>
</template>

<script>
export default {
  name: "DashboardPage",
  data() {
    return {
      data1: "hello",
      name:"sabar",
      rawhtml:"<h1>hi</h1>",
      fontsize:50 ,
      colorofthis:"red",
      arrayofdata:["aravind","sabari","sudha"],
      arrayofobj:[
      {
      name:"sabari",
      age:11
      },
      {
      name:"james bond",
      age:30
      },
      {
      name:"manickam",
      age:40
      }
      ]
    };
  },
  computed:{
uppername(){
return this.name.toUpperCase()
}

  }
};
</script>

<style scoped></style>
