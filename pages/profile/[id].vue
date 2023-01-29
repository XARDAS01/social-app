<template>
  <div class="page">
    <div class="page__wrapper">
      <!-- <section class="page__wrapper__profile-banner profile-banner">
        <div class="profile-banner__wrapper">
          mobile menu banner
        </div>
      </section> -->
      
      <PagesComponentsProfilesHeader class="page__wrapper__header header" :user="system.getUser" />

      <PagesComponentsProfilesBody class="page__wrapper__body body" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSystemStore } from '../../store/system';

const system = useSystemStore();

function test () {
  // 
}
</script>

<style scoped>
.page {
  /* @apply; */
}
.profile-banner {
  @apply fixed top-0 left-0 w-full;
}

.profile-banner__wrapper {
  @apply h-[5rem] bg-brandColorMain text-white border-b border-b-[#333333];
}
</style>
