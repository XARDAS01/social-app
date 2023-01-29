<template>
	<section class="template-modal" @click.self="onCloseModalWindow">
		<div class="template-modal__wrapper">
			<div class="template-modal__wrapper__closeBox" @click="onCloseModalWindow">
				<button type="button" class="template-modal__wrapper__closeBox__closeBtn" />
			</div>

			<div class="template-modal__wrapper__header header">
				<h2 v-if="title" class="header__title">
					{{ title }}
				</h2>
			</div>

			<div class="template-modal__wrapper__content content">
				<slot name="content" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String
  }
});

const onCloseModalWindow = () => { emit('closeModalWindow'); };
const emit = defineEmits([ 'closeModalWindow' ]);
onBeforeMount(() => { document.getElementsByTagName('html')[0].style.overflowY = 'hidden'; });
onBeforeUnmount(() => { document.getElementsByTagName('html')[0].style.overflowY = 'auto'; });
</script>

<style scoped>
.template-modal {
	@apply fixed top-0 left-0
  
  flex items-center justify-center
  w-full h-full z-1000 px-[1rem];
	background: rgba(17, 16, 20, 0.8);
}

.template-modal__wrapper {
	@apply relative w-full max-w-[75rem] max-h-[calc(100%_-_15rem)] rounded-[0.7rem] overflow-auto;
}

.template-modal__wrapper__header {
	@apply flex items-center justify-center h-[6rem] bg-[#161617] rounded-t-[0.7rem]
	
	tablet:h-[12rem] border-b border-brandTextColor;
}

.header__title {
	@apply text-brandTextColor text-[2rem] font-bold

	tablet:text-[4rem];
}

.content {
	@apply relative min-h-[15rem] bg-[#161617];
}

.template-modal__wrapper__closeBox {
	position: absolute;
	top: 0;
	right: 0;
	width: 4rem;
	height: 4rem;
	cursor: pointer;
}

.template-modal__wrapper__closeBox__closeBtn {
	/* empty */
}

.template-modal__wrapper__closeBox__closeBtn::before {
	@apply bg-brandColorSecond;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 2rem;
	height: 0.2rem;
	transform: translate(-50%, -50%) rotate(-45deg);
	content: "";
}

.template-modal__wrapper__closeBox__closeBtn::after {
	@apply bg-brandColorSecond;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 2rem;
	height: 0.2rem;
	transform: translate(-50%, -50%) rotate(45deg);
	content: "";
}
</style>