import {defineStore} from 'pinia'

export const themeStore=defineStore('Theme',{
	state:()=>({
		isDark:false
	}),
	actions:{
		changeTheme(){
			this.isDark=!this.isDark;

		}
	}
})