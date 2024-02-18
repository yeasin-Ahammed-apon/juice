<template>  
        <div class=" flex justify-between text-white p-1 riot">
            <div class="flex justify-evenly text-xl  ">
                <RouterLink to="#" class="md:mx-2 mx-1 text-cyan-600"><i class="bi bi-facebook"></i></RouterLink>            
                <RouterLink to="#" class="md:mx-2 mx-1 text-pink-500"><i class="bi bi-instagram " ></i></RouterLink>            
                <RouterLink to="#" class="md:mx-2 mx-1 text-red-500"><i class="bi bi-youtube"></i></RouterLink>                        
            </div>
            <div class="  ">
                <span class="mx-1 text-xl text-yellow-300"><i class="bi bi-telephone"></i></span>                            
                <span class="mx-1">Call: 01934567891</span>                            
                <RouterLink to="/about" class="mx-1 text-xl text-white"><i class="bi bi-info-square-fill"></i></RouterLink>                            
            </div>
        </div>  
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style>

</style>