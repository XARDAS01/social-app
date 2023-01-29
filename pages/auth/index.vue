<template>
  <section class="login-page">
    <div v-if="isLogin.status" class="login-page__wrapper">
      <h1 class="login-page__wrapper__title">{{ $t('login-enter') }}</h1>

      <form @submit.prevent="onLoginSubmit" class="login-page__wrapper__form">
        <ul class="login-page__wrapper__form__list list">
          <li class="list__item">
            <input type="login" name="login" id="login" :placeholder="$t('login')" v-model="loginData.login" />
          </li>

          <li class="list__item">
            <input type="password" name="password" id="password" :placeholder="$t('password')" v-model="loginData.passwordHASH" />
          </li>

          <li class="list__item">
            <button class="btn list__item__btn" type="submit">
              {{ $t('login-enter') }}
            </button>
          </li>
        </ul>
      </form>

      <div>
        <h5>{{ $t('dont-have-an-account') }}</h5>
        <button type="button" @click="isLogin.status = false">
          <strong>{{ $t('registration') }}</strong>
        </button>
      </div>
    </div>

    <div v-else class="login-page__wrapper">
      <h1 class="login-page__wrapper__title">{{ $t('registration') }}</h1>

      <form @submit.prevent="onRegistrationSubmit" class="login-page__wrapper__form">
        <ul class="login-page__wrapper__form__list list">
          <li class="list__item">
            <input type="name" name="name" id="name" :placeholder="$t('name')" v-model="registrationData.firstName" />
          </li>

          <li class="list__item">
            <input type="login" name="login" id="login" :placeholder="$t('login')" v-model="registrationData.login" />
          </li>

          <li class="list__item">
            <input type="password" name="password" id="password" :placeholder="$t('password')" v-model="registrationData.passwordHASH" />
          </li>

          <li class="list__item">
            <button class="btn list__item__btn" type="submit">
              {{ $t('registration') }}
            </button>
          </li>
        </ul>
      </form>

      <div>
        <h5>{{ $t('already-have-an-account') }}</h5>
        <button type="button" @click="isLogin.status = true">
          <strong>{{ $t('login-enter') }}</strong>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useSystemStore } from '../../store/system';

const { t } = useI18n();
const system = useSystemStore();
const isLogin = reactive({
  status: true
});

const loginData = reactive({
  login: null,
  passwordHASH: null
});

const registrationData = reactive({
  firstName: null,
  login: null,
  passwordHASH: null
});

function onLoginSubmit () {
  system.userLogin(loginData);
};

function onRegistrationSubmit () {
  system.userRegistration(registrationData);
};
</script>

<style scoped>
.login-page__wrapper {
  @apply p-[2rem];
}

.login-page__wrapper__title {
  @apply text-center text-[2.6rem] font-bold;
}

.list {
  @apply w-full max-w-[40rem] pt-[2rem] m-auto;
}

.list__item {
  @apply py-[1rem];
}

.list__item input {
  @apply w-full h-[5rem] p-[2rem] bg-[#1e1e20] rounded-[0.4rem];
}

.list__item__btn {
  @apply w-full rounded-[0.4rem];
}

.login-page__wrapper div {
  @apply text-center text-[2rem];
}
</style>