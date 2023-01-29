import { defineStore } from 'pinia';

export const useSystemStore = defineStore('systemStore', {
	state: () => {
		return {
			userIsEntered: false,
			token: null,
			user: {
				firstName: null,
				login: null
			},
			navigationList: [
        { id: 1, name: 'HO', url: '/' },
        { id: 2, name: 'PR', url: '/profile' },
				{ id: 3, name: 'PA', url: '/passwords' },
      ]
		};
	},
	getters: {
		getNavigationList ():Array<Object> { return this.navigationList; },
		getUser ():Object { return this.user; },
		isUserEntered ():boolean { return this.userIsEntered; }
	},
	actions: {
		userLogin (payload:Object) {
			fetch(useRuntimeConfig().API_BASE_URL + '/auth/login', {
				method: 'POST',
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload)
			})
			.then((response) => response.json())
			.then((data) => {
				if (data.code === 200) {
					this.user.firstName = data.payload.firstName;
					this.user.login = data.payload.login;
					this.token = data.payload.token;
					this.userIsEntered = true;

					useRouter().push('/profile/' + this.user.login)
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		},
		userRegistration (payload:Object) {
			fetch(useRuntimeConfig().API_BASE_URL + '/auth/registration', {
				method: 'POST',
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload)
			})
				.then((response) => response.json())
				.then((data) => {
					if (data.code === 200) {
						const loaginData = {
							login: payload.login,
							passwordHASH: payload.passwordHASH
						}
						this.userLogin(loaginData);
					}
				})
				.catch((error) => {
					console.error('Error:', error);
				});
		},
	}
});