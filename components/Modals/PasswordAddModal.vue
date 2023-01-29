<template>
  <div class="password-add-modal">
    <div class="password-add-modal__wrapper">
      <form v-if="!loading.status" class="password-add-modal__wrapper__form form" @submit.prevent="onSubmit">
        <ul class="form__list">
          <li class="form__list__item">
            <input type="text" v-model="service.name" :placeholder="$t('service-name')">
          </li>
          <li class="form__list__item">
            <input type="text" v-model="service.url" :placeholder="$t('service-url')">
          </li>
          <li class="form__list__item">
            <input type="text" v-model="service.login" :placeholder="$t('login')">
          </li>
          <li class="form__list__item">
            <input type="text" v-model="service.password" :placeholder="$t('password')">
          </li>
          <li class="form__list__item">
            <textarea v-model="service.description" :placeholder="$t('service-description')" />
          </li>
          <li class="form__list__item controll">
            <button class="btn btn--fill controll__generate" @click="generatePassword" type="button">{{ $t('generate-safe-password') }}</button>
            <button class="btn controll__save" type="submit">{{ $t('save') }}</button>
          </li>
        </ul>
      </form>

      <LoadingsLoadingComponent v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { usePasswordsStore } from '../../store/passwords';

const { t } = useI18n();
const passwordsStore = usePasswordsStore();
const emits = defineEmits(['onSubmit']);

const loading = reactive({
  status: false
});

const service = reactive({
  id: null,
  authorUID: '',
  name: '',
  url: '',
  login: '',
  password: '',
  description: ''
});

async function onSubmit () {
  loading.status = true;
  await new Promise(resolve => setTimeout(resolve, 500));
  loading.status = false;
  emits('onSubmit', service); 
};

function generatePassword () { service.password = passwordsStore.generateSafetyPassword(); };
</script>

<style scoped>
input, textarea {
  @apply w-full px-[2rem] py-[1rem] bg-[#1e1e20] text-brandColorSecond resize-none;
}

.form {
  @apply w-full max-w-[60rem] m-auto py-[3rem];
}

.form__list {
  /* @apply */
}

.form__list__item {
  @apply py-[1rem];
}

.form__list__item input {
  @apply h-[5rem];
}

.form__list__item textarea {
  @apply h-[10rem];
}

.form__list__item input::placeholder, .form__list__item textarea::placeholder {
  @apply text-brandColorSecond;
}

.controll {
  @apply flex flex-wrap justify-between;
}

.controll__generate {
  @apply w-full mb-[2rem]
  
  tablet:w-[30rem] tablet:m-0;
}

.controll__save {
  @apply w-full 
  
  tablet:w-[20rem];
}

.controll button {
  @apply py-[1.3rem] rounded-[0.4rem];
}
</style>