<template>
  <section class="header">
    <div class="header__wrapper">
      <div class="header__wrapper__bg-img" />

      <div class="header__wrapper__profile profile">
        <div class="profile__icon global-rounded-icon-wrapper">
          <img src="https://cataas.com/cat" alt="Profile icon">
        </div>

        <h1 class="profile__name">{{ user.firstName }}</h1>

        <span>{{ user.login }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  user: {
    type: Object
  }
});
</script>

<style scoped>
.header {
  @apply w-full;
}

.header__wrapper__bg-img {
  @apply w-full h-[18rem] bg-grey;
}

.profile {
  @apply flex flex-col items-center h-[18rem];
}

.profile__icon {
  @apply mt-[-6rem] w-[12rem] h-[12rem] outline outline-[0.6rem] outline-brandColorMain;
}
</style>
