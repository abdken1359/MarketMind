<style scoped>
	@media (max-width:750px){
		.fixit{
			flex-direction: column!important;
	
		}
	}
</style>
<template>
	<v-main>

		<v-img src="images/herobackground.svg" cover class="align-center" height="100vh" alt="Hero background" >
		<v-container>
			<v-row align="center" justify="center">
          <v-col cols="12" md="6">

          	<!--ON MIDDLE AND UP-->
          	<template v-if="$vuetify.display.lgAndUp">
			<router-link to="/" class=" d-flex text-decoration-none text-grey-darken-4 fixit align-center" style="width:max-content">
				<img src="/images/logo.svg" width="150"> <span class="text-h4 font-weight-bold ">MarketMind</span>
			</router-link>
		</template>

		<!-- ON SMALL ONLY-->
		<template v-else>
			<router-link to="/" class=" d-flex text-decoration-none text-grey-darken-4  align-center" style="width:max-content">
				<img src="/images/logo.svg" alt="Illutration of a girl sitting in a speeding Shopping cart." width="100"> <span class="text-h6 font-weight-black ">MarketMind</span>
			</router-link>
		</template>
			<p class=" text-h5 text-md-h5 text-lg-h4 font-weight-bold" v-html="utils.isEnglish? pageContent.en.intro : pageContent.fr.intro"></p>
			<div class="mt-10">
			<v-btn color="red-accent-2" to="/account" :text="utils.isEnglish? pageContent.en.signup : pageContent.fr.signup" class="my-3" block :size="buttonSize"></v-btn>
			<v-btn color="grey-darken-3" variant="flat" :size="buttonSize" :text="utils.isEnglish? pageContent.en.login : pageContent.fr.login" block></v-btn>
		</div>
		</v-col>
		<v-col cols="12" md="6" v-if="$vuetify.display.mdAndUp">
			<v-img src="images/illustrations/2.svg"></v-img>

		</v-col>
		</v-row>
		<language/>
		</v-container>
	</v-img>
	</v-main>
</template>
<script>
import {utilities} from '../stores/utilities.js'
import {useHead} from '@unhead/vue'
	export default{
		name:'Home',
		data(){
			return{
				utils:utilities(),
				pageContent:{
					
					fr:{
                       intro:'Créez et gérez votre liste de courses avec cette application <span class="text-red">Simple</span>, <span class="text-red">Efficace</span> et <span class="text-red">Gratuit</span> de panier de marché.',
                       signup:'Crée un compte',
                       login:'S\'enregistrer'


					},
					en:{
					 intro:'Create and manage your Shopping list with this <span class="text-red">Simple</span>, <span class="text-red">Efficient</span> and <span class="text-red">Free</span> market bucket list app.',
					 signup:'SignUp',
					 login:'Login'

					},
				}

			}

		},
		computed:{
			buttonSize(){
				if(this.$vuetify.display.mdAndUp){
					return 'large'
				}else {
					return 'large'
				}
			},
		},

		methods:{
			setMeta(){
				useHead({
				title:'MarketMind',
				meta:[
					{
						name:'description',content:'Create and manage your shopping list easily and efficiently for free with MarketMind. Créez et gérez facilement et efficacement votre liste de courses gratuitement avec MarketMind'
					}
				]

			})

			}
		},
		mounted(){
			this.setMeta()
			this.utils.setLanguage()
			
		}
	}
</script>