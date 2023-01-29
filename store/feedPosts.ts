import { defineStore } from 'pinia';

export const useFeedPostsStore = defineStore('feedPostsStore', {
	state: () => {
		return {
			postList: [
        { id: 1, author: '' }
      ]
		};
	},
	getters: {
		getPostList ():Array<Object> { return this.postList; },
	},
	actions: {
	}
});