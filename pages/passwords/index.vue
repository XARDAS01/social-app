<template>
  <div class="pass-page">
    <div class="pass-page__wrapper">
      <section class="pass-page__wrapper__header header">
        <div class="header__item">
          <form>
            <!-- <input placeholder="Search password" /> -->
          </form>
        </div>

        <div class="header__item">
          <button
            class="header__item__add-btn btn" 
            @click="openModalWindow"
            type="button"
          >{{ $t('add-new-passport') }}</button>
        </div>
      </section>

      <ul v-if="passwordsStore.getServiceList.length" class="pass-page__wrapper__list list">
        <li class="list__item" v-for="service of passwordsStore.getServiceList" :key="service.id">
          <CardsPasswordCard :service="service" />
        </li>
      </ul>

      <section v-else class="pass-page__wrapper__empty">
        {{ $t('dont-have-services') }}
      </section>
    </div>
  </div>

  <ModalsTemplateModal v-if="isModalWindow.isOpen" :title="$t('add-new-passport')" @closeModalWindow="closeModalWindow">
    <template #content>
      <ModalsPasswordAddModal @onSubmit="onSubmit" />
    </template>
  </ModalsTemplateModal>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { usePasswordsStore } from '../../store/passwords';

const { t } = useI18n();
const passwordsStore = usePasswordsStore();

function onSubmit (service:Object) {
  passwordsStore.addService(service);
  closeModalWindow();
}

const isModalWindow = reactive({ isOpen: false });
function closeModalWindow () { isModalWindow.isOpen = false; }
function openModalWindow () { isModalWindow.isOpen = true; }

onMounted(() => {
  passwordsStore.loadServices();
});
</script>

<style scoped>
/* .pass-page {
  @apply border;
} */
.header {
  @apply flex justify-between w-full p-[1rem];
}

.list {
  @apply flex flex-col;
}

.list__item {
  @apply mb-[3rem];
}

.list__item:last-child { @apply m-0; }

.header__item__add-btn {
  @apply rounded-[2rem] h-[4rem];
}

.pass-page__wrapper__empty {
  @apply pt-[6rem] text-center text-[2.6rem];
}
</style>