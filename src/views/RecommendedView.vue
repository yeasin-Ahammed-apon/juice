<template>
  <!-- wraper -->
  <section class="">
    <div v-for="(data,index) in datas" :key="index" class="grid md:grid-cols-2 grid-cols-1 card md:mt-10 mt-1">
      <div class="relative flex justify-center items-center md:pt-0 pt-10 m-2">          
        <img class="border-2 border-pink-500 md:p-5 p-1 rounded-3xl shadow-xl shadow-zinc-300/25 md:h-72 h-36" src="/img/juice/lemon_juice.jpg" alt="">
      </div>
      <div class="md:p-0 p-3 riot m-2">
        <h1 class=" md:text-6xl text-3xl font-extrabold text-white uppercase underline">{{ data.name }}</h1>          
        <h2 class="md:text-3xl text-xl font-bold text-white">
          <span class="text-emerald-400 ">Price : </span>
          <span class="text-yellow-300">{{ data.price }} tk </span>                        
        </h2>
        <h3 class="md:text-2xl text-xl font-light text-white">
          Information: <span class="text-cyan-100 font-mono"> {{ data.info }}</span>            
        </h3>
        <h4 :class="`text-white inline-block rounded-md p-3 ${data.status==='recommend'?'bg-yellow-400':data.status==='top_sell'?'bg-red-600':''}`">
          <i :class="
          `${data.status==='recommend'?'bi bi-star':data.status==='top_sell'?'bi bi-rocket':''}`
          ">

          </i> 
          {{ data.status}}
        </h4>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const datas =  ref([
  {name:'Lemon juice ',status:"recommend", price:100,info:'water,suger,lemon, chili and ice',img:'lemon_juice.jpg'},
  {name:'Lemon juice ',status:"top_sell", price:100,info:'water,suger,lemon, chili and ice',img:'lemon_juice.jpg'},  
  {name:'Lemon juice ',status:"recommend", price:100,info:'water,suger,lemon, chili and ice',img:'lemon_juice.jpg'},
  {name:'Lemon juice ',status:"top_sell", price:100,info:'water,suger,lemon, chili and ice',img:'lemon_juice.jpg'},  
  {name:'Lemon juice ',status:"recommend", price:100,info:'water,suger,lemon, chili and ice',img:'lemon_juice.jpg'},
  {name:'Lemon juice ',status:"top_sell", price:100,info:'water,suger,lemon, chili and ice',img:'lemon_juice.jpg'},  
  {name:'Lemon juice ',status:"recommend", price:100,info:'water,suger,lemon, chili and ice',img:'lemon_juice.jpg'},
  {name:'Lemon juice ',status:"top_sell", price:100,info:'water,suger,lemon, chili and ice',img:'lemon_juice.jpg'},  
  {name:'Lemon juice ',status:"recommend", price:100,info:'water,suger,lemon, chili and ice',img:'lemon_juice.jpg'},
  {name:'Lemon juice ',status:"top_sell", price:100,info:'water,suger,lemon, chili and ice',img:'lemon_juice.jpg'},  
])

</script>

<style>

</style>