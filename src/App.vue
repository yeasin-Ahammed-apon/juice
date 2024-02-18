<script setup>
import { RouterView } from "vue-router";
import HeaderVueVue from "@/components/HeaderVue.vue";
import NavbarVueVue from "@/components/NavbarVue.vue";
import FooterVueVue from "@/components/FooterVue.vue"
</script>
<template  >    

<div class="bg-primary ">                  
  <div style="                   
        background: url('/img/background.png');
        background-size: 400px;
        background-position: cover;               
              ">
                

              <!-- <img 
                class="z-0 absolute
                md:top-[-50px] top-[70%] 
                md:right-[-90px] -right-10 
                md:h-96 h-44 
                md:w-96 w-44  
                transform -rotate-45"                
                src="/img/watermelon.png"
                alt=""
              >             -->
            
              <div class="z-0 h-fit"
                style="
                background: 
                  url('/img/single_fruits/watermelon.png'),
                  url('/img/single_fruits/grape.png'),
                  url('/img/single_fruits/lime.png'),
                  url('/img/single_fruits/pineapple.png'),
                  url('/img/single_fruits/orange.png'),
                  url('/img/single_fruits/banana.png'),
                  url('/img/single_fruits/strawbarry.png'),
                  url('/img/single_fruits/watermelon.png'),
                  url('/img/single_fruits/grape.png')                  
                  ;
                background-position:
                  top 15% right,top 25% left,top 35% right,
                  top 45% left,top 55% right,top 65% left,
                  top 75% right,top 85% left,top 95% right;                
                background-size: 80px;
                background-repeat: no-repeat;
                "
                >              
                  <section class="z-30 flex flex-col fixed top-1/2 right-0 rounded-lg" style="background:rgba(0, 0, 0, 0.233) ;">
                    <RouterLink to="#" class="md:p-4 p-2 md:text-3xl text-xl text-blue-700  " ><i class="bi bi-facebook"></i></RouterLink>
                    <RouterLink to="#" class="md:p-4 p-2 md:text-3xl text-xl text-pink-700 " ><i class="bi bi-instagram"></i></RouterLink>
                    <RouterLink to="#" class="md:p-4 p-2 md:text-3xl text-xl text-red-600  " ><i class="bi bi-youtube"></i></RouterLink>
                  </section>            
            <HeaderVueVue class="z-30 sticky bg-gradient-to-r from-emerald-900 via-transparent to-emerald-900  " />
            <NavbarVueVue
              class="z-30 sticky top-0 rounded-b-xl bg-gradient-to-r from-emerald-900 via-transparent to-emerald-900"
            />              
            <RouterView class="z-10 sticky pt-10" />
            <FooterVueVue class="w-full bg-gradient-to-r from-emerald-900 via-transparent to-emerald-900"/>
      </div>
  </div>
</div>
</template>


