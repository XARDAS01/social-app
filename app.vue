<template>
  <LoadingsLoadingScreen v-if="isLoading" />
  
  <NuxtLayout v-else class="layout">
    <div class="layout__wrapper">
      <NuxtNavigation class="layout__wrapper__item navigation"/>
      <MobileNavigationMenu class="navigation__mobile" />
      
      <main class="layout__wrapper__item main" >
        <NuxtPage />

        <p class="text-[grey] text-center pt-[5rem]">
          v. alfa 0.58
        </p>
      </main>

      <NuxtAdditionalMenu class="layout__wrapper__item additional"/>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useSystemStore } from './store/system';

const systemStore = useSystemStore();
const isLoading = ref(false);

function authMove () {
  if (!systemStore.isUserEntered) { useRouter().push('/auth') }
}

useNuxtApp().hook('page:start', () => {
  authMove();
  isLoading.value = true;
});
useNuxtApp().hook('page:finish', async () => {
	// await someStore.someLoad();
	await new Promise(resolve => setTimeout(resolve, 400));
	isLoading.value = false;
});

onMounted(() => {
  localStorage.removeItem('theme')
  isLoading.value = true;
  authMove();
});
</script>

<style>
.layout__wrapper {
  @apply flex justify-center w-full max-w-[160rem] m-auto;
}

.layout__wrapper__item {
  @apply h-[100vh];
}

.main {
  @apply w-full max-w-[70rem] h-[100vh] border-[#3c3c42] pb-[8rem] overflow-y-auto
  
  tablet:border-x;
}

.navigation {
  @apply hidden
  
  tablet:w-[10rem] tablet:block
  notebook:w-[45rem];
}

.additional {
  @apply hidden
  
  notebook:w-[45rem] notebook:block;
}

.navigation__mobile {
  @apply block
  
  tablet:hidden;
}
</style>
