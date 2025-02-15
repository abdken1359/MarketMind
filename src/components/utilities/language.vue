<style scoped>
	.language{
		position: fixed;
		top:20px;
		right:20px;
	}
</style>
<template>
	<v-btn :aria-label="assistive" size="small" v-tooltip="tooltipped" variant="flat" class="language" icon="mdi-translate" color="brown-darken-3" @click="utils.switchLanguage()"></v-btn>
</template>
<script>
import {utilities} from '../../stores/utilities.js'
	export default{
		name:'Language',

		data(){
			return{
				utils:utilities()

			}
		},
		computed:{
			assistive(){
				return this.utils.isEnglish?'Switch to french language':'Switch to English language'
			},
			tooltipped(){
				return this.utils.isEnglish?'Francais(fr)':'English(en)'
			}
		}
	}
</script>