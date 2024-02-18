<template>
   <div class="flex justify-center items-center gfont h-screen bg-emerald-950">
      <div :style="{
        transform:cardTransform,
        transition:'transform 0.25s ease-out'
      }"
      class="w-60 h-60 rounded-xl  bg-gradient-to-r from-black via-transparent to-red-900 shadow-2xl shadow-yellow-400"
      ref="target">
        <div class="flex flex-col justify-center items-center text-white h-full ">
          <span class="text-2xl font-light">HI</span> <br>
          <span class="text-4xl font-bold">Apon</span> <br>
        </div>
      </div>
   </div>
 </template>
 
 <script setup>
import { useMouseInElement } from '@vueuse/core';
import { ref,computed } from 'vue';
const target =  ref(null)
const {elementX,elementY,isOutside,elementHeight,elementWidth} =useMouseInElement(target)


const cardTransform = computed(() => {
  const MAX_ROTATION = 10

  const rX = (MAX_ROTATION / 2 -(elementY.value / elementHeight.value) * MAX_ROTATION)
            .toFixed(2) // handles x-axis

  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2) // handles y-axis

  return isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
 
 </script>
 