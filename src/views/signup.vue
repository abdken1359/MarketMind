 <style scoped>
.title{
	width: max-content;
	 background: linear-gradient(45deg, #ff0000, #ff4d4d);
	color: transparent;
	margin: auto;
	background-clip: text;
}
 </style>
 <template>
 	<v-main>
 		<v-img src="images/herobackground.svg" cover height="100vh" alt="Hero background" class="align-center overflw-hidden">
 			<v-container>

 				<!--ON MIDDLE AND UP-->
 				<template v-if="$vuetify.display.lgAndUp">
			<router-link to="/" class=" d-flex mx-auto text-decoration-none text-grey-darken-4 fixit align-center" style="width:max-content">
				<img src="/images/logo.svg" width="150"> <span class="text-h4 font-weight-bold ">MarketMind</span>
			</router-link>
		</template>

		<!-- ON SMALL ONLY-->
		<template v-else>
			<router-link to="/" class=" d-flex mx-auto text-decoration-none text-grey-darken-4  align-center" style="width:max-content">
				<img src="/images/logo.svg" alt="Illutration of a girl sitting in a speeding Shopping cart." width="100"> <span class="text-h6 font-weight-black ">MarketMind</span>
			</router-link>
		</template>
              <v-card elevation="5" rounded="large"  :width="cardWidth" class="mx-auto">
              	<v-card-title class="text-center text-h5 text-lg-h5 text-red font-weight-bold">
              		{{utils.isEnglish? pageContent.en.title : pageContent.fr.title}}
              	</v-card-title>
              	
              	<v-card-text>
              		
              		<div>
              			<v-form @submit.prevent="signUp">
              				<v-text-field :disabled="loading" variant="underlined" v-model="userInfos.username" type="text" prepend-icon="mdi-account" :label="utils.isEnglish? pageContent.en.username : pageContent.fr.username" color="pink" autocomplete="username" aria-label="Username"></v-text-field>

              				<v-text-field :disabled="loading" variant="underlined" v-model="userInfos.email" type="text" prepend-icon="mdi-email" :label="utils.isEnglish? pageContent.en.email : pageContent.fr.email" color="pink" autocomplete="email" aria-label="Username"></v-text-field>

              				<v-text-field :disabled="loading" v-model="userInfos.password" variant="underlined" :type="visible?'text':'password'" prepend-icon="mdi-key" :label="utils.isEnglish? pageContent.en.password : pageContent.fr.password" color="pink" autocomplete="current-password">
              					<template #append-inner>
              						<v-icon @click="visible=!visible" :icon="visible?'mdi-eye-off':'mdi-eye'"></v-icon>
              					</template>
              				</v-text-field>
              				<v-btn color="red" class="mt-5" :loading="loading" :disabled="goodForm" block type="submit" :text="utils.isEnglish? pageContent.en.submit : pageContent.fr.submit" variant='flat'></v-btn>
              			</v-form>

              		</div>
              		
              	</v-card-text>
              	<v-card-actions>
              		<v-btn block color="blue-darken-2" append-icon="mdi-arrow-right" :text="utils.isEnglish? pageContent.en.login : pageContent.fr.login"></v-btn>
              	</v-card-actions>
              </v-card>
 			</v-container>
 			<language/>
 			
 		</v-img>
 	</v-main>
 </template>
 <script>
import {utilities} from '../stores/utilities.js'
export default {
	name:'SignUp',
	data(){
		return{
			utils:utilities(),
			pageContent:{
				fr:{
					title:'Crée un nouveau compte',
					username:'Nom d\'utilisateur',
					email:'Email',
					password:'Mot de passe',
					submit:'Crée un compte',
					login:'S\'enregistrer'
				},
				en:{
					title:'Sign Up',
					username:'Username',
					email:'Email',
					password:'Password',
					submit:'Create Account',
					login:'Sign In'
				}
			},
			userInfos:{
				username:'',
				email:'',
				password:''
			},
			visible:false,
			loading:false,
		}
	},
	computed:{
		cardWidth(){
			if (this.$vuetify.display.lgAndUp) {
				return '40%'
			}else if (this.$vuetify.display.mdAndUp) {
				return '70%'				
			}
			else {
				return '100%'
			}
		},
		goodForm(){
			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
			return (this.userInfos.username===''||!emailRegex.test(this.userInfos.email)||this.userInfos.password==='')

		}
	},
	methods:{
		signUp(){
			this.loading=true
			setTimeout( () =>{
               this.loading=false
			},2000)
             
		}
	}

}
</script>
