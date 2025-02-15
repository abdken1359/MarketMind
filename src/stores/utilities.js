import {defineStore} from 'pinia'
export const utilities = defineStore('Utilities',{
	state:()=>({
		isEnglish:true,
	}),
	actions:{
		switchLanguage(){
			this.isEnglish=!this.isEnglish;
			localStorage.setItem('language', this.isEnglish)
		},
		setLanguage(){
			const language = localStorage.getItem('language');
			if(language==='false'){
				this.isEnglish=false
			}else {
				this.isEnglish=true
			}
		}
	}
})