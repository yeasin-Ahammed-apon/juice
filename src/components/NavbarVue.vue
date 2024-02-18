<template>
    <div >
          <div class="flex justify-evenly items-center p-1 ">
              <div class="md:text-2xl text-red-400  font-bold" ><RouterLink  to="/recommended"><i class="bi bi-hand-thumbs-up"></i> <i class="bi bi-list"></i></RouterLink></div>
              <div  class="border-2 border-pink-100 px-3 py-1"><RouterLink to="/" > <img class="md:h-16 h-8"   src="/img/logo.jpg" alt=""></RouterLink></div>
              <div class="md:text-2xl text-yellow-300 font-bold"><RouterLink to="/list"><i class="bi bi-cup-straw"></i> <i class="bi bi-list"></i></RouterLink></div>
          </div>
    </div>
  </template>
  
  <script setup>
  import { RouterLink } from "vue-router";
  
  
  </script>
  
  <style>
  
  </style>