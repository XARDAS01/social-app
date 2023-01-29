<template>
  <section class="posts-section">
    <div class="posts-section__wrapper">
      <ul v-if="postList.length" class="posts-section__wrapper__list list">
        <li class="list__item">
          <cards-post-card />          
        </li>
      </ul>

      <section v-else class="posts-section__wrapper__empty">
        <h1>{{ $t('in-proccess') }}</h1>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const postList = [];
</script>

<style scoped>
.list {
  @apply flex flex-col;
}

.list__item {
  @apply mb-[5rem];
}

.list__item:last-child { @apply m-0; }

.posts-section__wrapper__empty {
  @apply pt-[5rem] text-center text-[2.6rem];
}
</style>
