<template>
  <section class="pass-card">
    <div class="pass-card__wrapper">
      <div @click="onCardClick" class="card__wrapper__header header">
        <div class="header__icon global-rounded-icon-wrapper">
          <!-- <img 
            class="header__icon__img"
            src="https://cataas.com/cat"
            alt="Profile icon" 
            height="60" 
            width="60"> -->
        </div>

        <div class="header__pass-info pass-info">
          <h5 class="pass-info__title">{{ service.name }}</h5>
          <span class="pass-info__separator">•</span>
          <h5 class="pass-info__date">date</h5>
        </div>
      </div>

      <div @click="onCardClick" class="card__wrapper__body body">
        <p class="body__login">
          {{ service.login }}
        </p>
        <p>
          {{ service.url }}
        </p>
        <p v-if="service.description" class="body__description">
          {{ service.description }}
        </p>
      </div>

      <div class="card__wrapper__footer footer">
        <ul class="footer__list list">
          <li class="list__item" @click="onPasswordCopy">
            <button type="button" class="list__item__copy" :class="{ 'list__item__copy--copied':isCopied.status }">
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none"/><path d="M32 2h-24c-2.21 0-4 1.79-4 4v28h4v-28h24v-4zm6 8h-22c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4zm0 32h-22v-28h22v28z"/></svg>
            </button>
          </li>
          <!-- <li class="list__item">
            <button type="button" class="list__item__copy">
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none"/><path d="M32 2h-24c-2.21 0-4 1.79-4 4v28h4v-28h24v-4zm6 8h-22c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4zm0 32h-22v-28h22v28z"/></svg>
            </button>
          </li> -->
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  service: {
    type: Object
  }
});

const isCopied = reactive({
  status: false
})

function onCardClick () {
  useRouter().push('/passwords/' + props.service.id)
};

function onPasswordCopy () {
  navigator.clipboard.writeText(props.service.password)
  .then(async () => {
    isCopied.status = true;
    await new Promise(resolve => setTimeout(resolve, 900));
    isCopied.status = false;
  })
  .catch(err => {
    console.log('Something went wrong', err);
  });
};
</script>

<style scoped>
.pass-card {
  @apply border-y border-y-[#18181a] cursor-pointer;
  transition: 0.4s;
}

.pass-card:hover {
  @apply bg-[#1b1b1d];
  transition: 0.4s;
}

.header {
  @apply flex items-center p-[1rem];
}

.header__icon {
  @apply bg-[grey];
}

.header__pass-info {
  @apply flex items-center pl-[2rem];
}

.pass-info__title {
  @apply text-white font-bold;
}

.pass-info__separator {
  @apply px-[0.5rem];
}

.pass-info__date {
  @apply text-[1.4rem];
}

.body {
  @apply px-[4rem] pt-[1rem] pb-[2rem];
}

.body__login {
  @apply text-white;
}

.body__description {
  @apply pt-[1.5rem] mt-[1.5rem] text-[1.4rem] border-t border-brandTextColor;
}

.footer {
  @apply h-[5rem];
}

.list {
  @apply flex justify-around;
}

.list__item {
  @apply flex items-center;
}

.list__item__copy {
  @apply fill-brandTextColor w-[2.5rem] h-[2.5rem];
  transition: 1s;
}

.list__item__copy--copied {
  @apply fill-brandColorSecond w-[4rem] h-[4rem];
  transition: 1s;
}
</style>