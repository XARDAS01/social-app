<template>
  <div class="mobile-menu-modal" @click.self="onCloseMobileNavigationMenu">
    <div class="mobile-menu-modal__wrapper window">
      <div class="window__content">
        <button
						type="button"
						class="window__content__close-btn"
						@click="onCloseMobileNavigationMenu"
					/>

        <ul class="window__content__list list">
          <li class="list__item">
            <nuxt-link to="/" @click="onCloseMobileNavigationMenu">Home</nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="/profile" @click="onCloseMobileNavigationMenu">Profile</nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="/passwords" @click="onCloseMobileNavigationMenu">Passwords</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["closeMobileNavigationMenu"])
function onCloseMobileNavigationMenu () { emit("closeMobileNavigationMenu") }
</script>

<style scoped>
.mobile-menu-modal {
  @apply fixed top-0 left-0 w-full h-[100vh];
}

.window {
  @apply fixed top-0 right-0 w-[35rem] h-full bg-brandColorMain;
}

.window__content__close-btn {
  @apply absolute top-[1rem] right-[1.5rem] w-[3rem] h-[3rem];
}

.window__content__close-btn::before, .window__content__close-btn::after {
  @apply absolute top-0 left-[1.1rem] w-[0.2rem] h-full bg-brandColorSecond;
  content: ' ';
}

.window__content__close-btn::before {
  transform: rotate(45deg);
}

.window__content__close-btn::after {
  transform: rotate(-45deg);
}
</style>