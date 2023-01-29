import { defineStore } from 'pinia';
import { useSystemStore } from './system';

export const usePasswordsStore = defineStore('passwordsStore', {
	state: () => {
		return {
			serviceList: []
		};
	},
	getters: {
		getServiceList ():Array<Object> { return this.serviceList; },
	},
	actions: {
		generateSafetyPassword ():String {
			var result = '';

			const alphabet = "abcdefghijklmnopqrstuvwxyz";
			const numbers = "0123456789";
			const specialSign = "!@#$*?";
			const passwordLength = 16;

			const passwordSignArray = (alphabet + alphabet.toUpperCase() + numbers + specialSign).split("");
			for (var i = 0; i < passwordLength; i++) { result += passwordSignArray[Math.floor(Math.random() * passwordSignArray.length)] };
			
			return result;
		},
		addService (service:Object) {
			service.id = 1;
			var flag = true;
			while (flag) {
				if (this.serviceList.find(service => service.id === service.id)) { service.id++; }
				flag = false;
			}

			if (useSystemStore().getUser.login) { service.authorUID = useSystemStore().getUser.login; }

			fetch(useRuntimeConfig().API_BASE_URL + '/passwords/addNew', {
				method: 'POST',
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(service)
			})
			.then((response) => response.json())
			.then((data) => {
				if (data.code === 200) {
					this.serviceList.push(service);
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		},
		loadServices () {
			if (useSystemStore().getUser.login) {
				fetch(useRuntimeConfig().API_BASE_URL + '/passwords/getAllByUser?authorUID=' + useSystemStore().getUser.login, {
					method: 'GET',
					headers: { "Content-Type": "application/json" }
				})
				.then((response) => response.json())
				.then((data) => {
					if (data.code === 200) {
						this.serviceList = data.payload;
					}
				})
				.catch((error) => {
					console.error('Error:', error);
				});
			}
		}
	}
});