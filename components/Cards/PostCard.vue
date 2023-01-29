<template>
  <section class="post-card" @click="moveToPost()">
    <div class="post-card__wrapper">
      <div class="post-card__wrapper__header header">
        <div class="header__icon global-rounded-icon-wrapper">
          <img 
            class="header__icon__img"
            src="https://cataas.com/cat"
            alt="Profile icon" 
            height="60" 
            width="60">
        </div>

        <div class="header__profile">
          <h5 class="header__profile__title">
            profile name
          </h5>
          <span class="header__profile__separator">•</span>
          <h5 class="header__profile__nickname">
            @nickname
          </h5>
        </div>
      </div>

      <div class="post-card__wrapper__body body">
        body post
      </div>

      <div class="post-card__wrapper__footer footer">
        <ul class="footer__list list">
          <li class="list__item" @click="click">
            <span>10</span>
            <button type="button">
              <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
              <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M64.998,39.998C78.809,39.998,90,49.792,90,61.875c0,5.547-2.362,10.604-6.25,14.462L86.875,90l-11.391-8.266
                c-3.19,1.289-6.74,2.016-10.486,2.016c-13.806,0-24.999-9.792-24.999-21.875C39.999,49.792,51.192,39.998,64.998,39.998z"/>
              <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M39.999,61.875c0-12.083,11.193-21.877,24.999-21.877c5.52,0,10.604,1.585,14.739,4.234C79.896,43.047,80,41.848,80,40.625
                C80,23.712,64.33,10,45.001,10C25.67,10,10,23.712,10,40.625c0,7.764,3.308,14.847,8.749,20.246l-4.375,19.127L30.323,68.43
                c3.707,1.5,7.774,2.413,12.044,2.696C40.864,68.313,39.999,65.186,39.999,61.875z"/>
              </svg>
            </button>
          </li>
          <li class="list__item">
            <span>10</span>
            <button type="button">
              <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
              <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M64.998,39.998C78.809,39.998,90,49.792,90,61.875c0,5.547-2.362,10.604-6.25,14.462L86.875,90l-11.391-8.266
                c-3.19,1.289-6.74,2.016-10.486,2.016c-13.806,0-24.999-9.792-24.999-21.875C39.999,49.792,51.192,39.998,64.998,39.998z"/>
              <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M39.999,61.875c0-12.083,11.193-21.877,24.999-21.877c5.52,0,10.604,1.585,14.739,4.234C79.896,43.047,80,41.848,80,40.625
                C80,23.712,64.33,10,45.001,10C25.67,10,10,23.712,10,40.625c0,7.764,3.308,14.847,8.749,20.246l-4.375,19.127L30.323,68.43
                c3.707,1.5,7.774,2.413,12.044,2.696C40.864,68.313,39.999,65.186,39.999,61.875z"/>
              </svg>
            </button>
          </li>
          <li class="list__item">
            <span>10</span>
            <button type="button">
              <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
              <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M64.998,39.998C78.809,39.998,90,49.792,90,61.875c0,5.547-2.362,10.604-6.25,14.462L86.875,90l-11.391-8.266
                c-3.19,1.289-6.74,2.016-10.486,2.016c-13.806,0-24.999-9.792-24.999-21.875C39.999,49.792,51.192,39.998,64.998,39.998z"/>
              <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                M39.999,61.875c0-12.083,11.193-21.877,24.999-21.877c5.52,0,10.604,1.585,14.739,4.234C79.896,43.047,80,41.848,80,40.625
                C80,23.712,64.33,10,45.001,10C25.67,10,10,23.712,10,40.625c0,7.764,3.308,14.847,8.749,20.246l-4.375,19.127L30.323,68.43
                c3.707,1.5,7.774,2.413,12.044,2.696C40.864,68.313,39.999,65.186,39.999,61.875z"/>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  card: {
    type: Object
  }
});

function click () {
  console.log('hello');
};

function moveToPost (postId) { useRouter().push('post/' + postId) };
</script>

<style scoped>
.post-card {
  @apply border-y border-y-[#18181a] cursor-pointer;
  transition: 0.4s;
}

.post-card:hover {
  @apply bg-[#1b1b1d];
  transition: 0.4s;
}

.header {
  @apply flex items-center p-[1rem];
}

.header__profile {
  @apply flex items-center pl-[2rem];
}

.header__profile__title {
  @apply text-white font-bold;
}

.header__profile__separator {
  @apply px-[0.5rem];
}

.header__profile__nickname {
  @apply text-brandTextColor text-[1.4rem];
}

.body {
  @apply h-[15rem] p-[2rem];
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

.list__item button {
  @apply fill-none stroke-brandTextColor w-[2.5rem] h-[2.5rem];
}
</style>
