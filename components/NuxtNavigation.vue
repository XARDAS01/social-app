<template>
  <nav class="component">
    <div class="component__wrapper">
      <ul class="component__wrapper__list list">
        <li class="list__item">
          <nuxt-link to="/" class="list__item__link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="grey" viewBox="0 0 48 48" width="50x" height="50px"><path d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 40.5 C 6 41.863594 7.1364058 43 8.5 43 L 18.5 43 C 19.863594 43 21 41.863594 21 40.5 L 21 30.5 C 21 30.204955 21.204955 30 21.5 30 L 26.5 30 C 26.795045 30 27 30.204955 27 30.5 L 27 40.5 C 27 41.863594 28.136406 43 29.5 43 L 39.5 43 C 40.863594 43 42 41.863594 42 40.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.285156 17.876953 C 38.369258 18.731322 39 20.030807 39 21.410156 L 39 40 L 30 40 L 30 30.5 C 30 28.585045 28.414955 27 26.5 27 L 21.5 27 C 19.585045 27 18 28.585045 18 30.5 L 18 40 L 9 40 L 9 21.410156 C 9 20.030807 9.6307412 18.731322 10.714844 17.876953 L 24 7.4101562 z"/></svg>
          </nuxt-link>
        </li>
        <li class="list__item">
          <nuxt-link :to="/profile/ + system.getUser.login" class="list__item__link">
            <svg version="1.1" id="Layer_1" fill="grey" xmlns="http://www.w3.org/2000/svg" width="50x" height="50px" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
            <g>
              <g>
                <path d="M16,14c-3.8598633,0-7-3.1401367-7-7s3.1401367-7,7-7s7,3.1401367,7,7S19.8598633,14,16,14z M16,2
                  c-2.7568359,0-5,2.2431641-5,5s2.2431641,5,5,5s5-2.2431641,5-5S18.7568359,2,16,2z"/>
              </g>
              <g>
                <path d="M23.9423828,32H8.0576172C5.8203125,32,4,30.1796875,4,27.9423828c0-6.6166992,5.3833008-12,12-12s12,5.3833008,12,12
                  C28,30.1796875,26.1796875,32,23.9423828,32z M16,17.9423828c-5.5141602,0-10,4.4858398-10,10
                  C6,29.0771484,6.9228516,30,8.0576172,30h15.8847656C25.0771484,30,26,29.0771484,26,27.9423828
                  C26,22.4282227,21.5141602,17.9423828,16,17.9423828z"/>
              </g>
            </g>
            </svg>
          </nuxt-link>
        </li>
        <li class="list__item keys">
          <nuxt-link to="/passwords" class="list__item__link">
            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="256" width="256"/><path d="M93.2,122.8A70.3,70.3,0,0,1,88,96a72,72,0,1,1,72,72,70.3,70.3,0,0,1-26.8-5.2h0L120,176H96v24H72v24H32V184l61.2-61.2Z" fill="none" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle fill="none" cx="180" cy="76" r="10"/></svg>
          </nuxt-link>
        </li>

        <!-- <li class="list__item" v-for="link of system.getNavigationList" :key="link.id">
          <nuxt-link :to="link.url">
            {{ link.name }}
          </nuxt-link>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useSystemStore } from '../store/system';

const system = useSystemStore();
</script>

<style scoped>
.component__wrapper {
  @apply flex justify-end h-[50rem];
}

.list {
  @apply flex flex-col items-center w-[10rem] h-[100vh];
}

.list__item {
  @apply w-[5rem] h-[5rem] my-[1rem] text-center text-[3.4rem];
}

.router-link svg {
  @apply w-[5rem] h-[5rem] fill-brandTextColor;
}

.router-link-active svg {
  @apply fill-[#aa66bd];
}

.keys svg circle {
  @apply fill-[grey];
}

.keys svg path {
  @apply stroke-[grey];
}

.keys .router-link-active svg path {
  @apply stroke-brandColorSecond;
}

.keys .router-link-active svg circle {
  @apply fill-brandColorSecond;
}
</style>