<!-- 
  Projeto: eleicoes2020
  Arquivo: CityCouncilman.vue
  ---------------------------------------------------------------------
  Autor: Leonardo Nascimento
  E-mail: oi@bewweb.com.br
  ---------------------------------------------------------------------
  Data da criação: 13/11/2020 9:40:07 pm
  Last Modified:  14/11/2020 12:16:54 am
  Modificado por: Leonardo Nascimento - <oi@bewweb.com.br>
  ---------------------------------------------------------------------
  Copyright (c) 2020 Bewweb
  HISTORY:
  Date      	By	Comments
  ----------	---	---------------------------------------------------------
  -->
<template>
	<div>
		<div class="city-councilman fullheight">
		  <h2 class="heading">VEREADORES</h2>
		  <br>
		  <div class="councilman-content">
		    <div class="city-progress-elected">
		      <div class="councilman-header">
		        <p class="councilman-caption-virt-elected">Candidatos eleitos se a apuração terminasse agora <span></span></p>
		        <p class="councilman-caption-elected no-expand">Eleito <span></span></p>
		        <!-- <ul class="councilman-tabs tab-acive-governador">
		          <li class="councilman-tab"><a href="javascript://" class="tab-link-governador" data-tab="0003">Governador</a></li>
		          <li class="councilman-tab"><a href="javascript://" class="tab-link-senadores" data-tab="0005">Senadores</a></li>
		          <li class="councilman-tab"><a href="javascript://" class="tab-link-deputado_federal" data-tab="0006">Dep. Federal</a></li>
		          <li class="councilman-tab"><a href="javascript://" class="tab-link-deputado_estadual" data-tab="0007">Dep. Estadual</a></li>
		        </ul> -->
		        <div class="councilman-search disabled-false">
		          <i class="icon-close"></i>
		          <!-- <form ref="formulario" class="suggest-form"> -->
		            <div class="ui-widget">
		              <input type="text" class="councilman-search-input suggest-input" v-model="searchQuery" name="q" autocomplete="off" placeholder="Encontre candidatos para seguir a apuração">
		            </div>
		            <div class="fading-circle">
		              <div class="circle1 circle"></div>
		              <div class="circle2 circle"></div>
		              <div class="circle3 circle"></div>
		              <div class="circle4 circle"></div>
		              <div class="circle5 circle"></div>
		              <div class="circle6 circle"></div>
		              <div class="circle7 circle"></div>
		              <div class="circle8 circle"></div>
		              <div class="circle9 circle"></div>
		              <div class="circle10 circle"></div>
		              <div class="circle11 circle"></div>
		              <div class="circle12 circle"></div>
		            </div>
		            <div class="suggest-area suggest-area-disabled"></div>
		          <!-- </form> -->
		        </div>
		      </div>
		      <div class="councilman-list list-content">
		        <span>
		          <div class="candidates-content">
		            <ul class="list-items type-councilman container-governador">
						<li class="list-item list-item-candidate candidates-running-true" v-for="(vereador, index) in rListarVereadores" :key="index">
							<ul>
								<li class="item-favorite">
									<div class="favorite-star type-candidate has-id-true theme-dark is-favorite-false" data-item-id="17517">
										<img class="candidate-image"  :src="`${baseUrl}static/fotos/ver/${cidadeSelecionada.codigo}/${vereador.sqcand}.jpeg`" :title="vereador.nm" :alt="vereador.nm">
									</div>
								</li>
								<li class="item-name">{{vereador.nm}}</li>
								<!-- <li class="item-social">
									<span class="icon-facebook" data-metrics-location="bloco candidatos" data-metrics-action="compartilhar_candidato_facebook" data-image="https://dev.cgn.inf.br/assets/eleicoes/apuracao.png" data-title="Apuração - Governador - Paraná: RATINHO JUNIOR se elegeu!" data-desc="Veja mais em: https://dev.cgn.inf.br/eleicoes/pr" data-url="https://dev.cgn.inf.br/eleicoes/pr">
									</span>
									<span class="icon-twitter" data-metrics-location="bloco candidatos" data-metrics-action="compartilhar_candidato_twitter" data-title="Apuração - Governador - Paraná: RATINHO JUNIOR se elegeu!" data-desc="Veja mais em: https://dev.cgn.inf.br/eleicoes/pr" data-url="https://dev.cgn.inf.br/eleicoes/pr">
									</span>
								</li> -->
								<li class="item-small-set">
									<ul>
									<li class="item-party">{{vereador.cc | politicalParty}}</li>
									<li class="item-votes-vp">{{vereador.pvap}}<span>%</span></li>
									</ul>
								</li>
								<li class="item-votes-v">{{vereador.vap | voteTotal}}</li>
								<li class="item-notification elected-1" v-if="vereador.e === 's'"></li>
								<li class="item-notification elected-0" v-if="vereador.e === 'n'"></li>
							</ul>
						</li>
		            </ul>
		          </div>
		        </span>
		      </div>
		    </div>
		  </div>
		  <div class="main-votes-count councilman-votes-count clearfix">
		    <div class="votes-count">
		      <div class="item white"><span class="label">BRANCOS</span><span class="total">{{ this.infoVereadores.cVotosBrancos }}</span><span class="percent">{{ this.infoVereadores.pVotosBrancos }}%</span></div>
		      <div class="item null"><span class="label">NULOS</span><span class="total">{{ this.infoVereadores.cVotosNulos }}</span><span class="percent">{{ this.infoVereadores.pVotosNulos }}%</span></div>
		      <div class="item valid"><span class="label">VÁLIDOS</span><span class="total">{{ this.infoVereadores.cVotosValidos }}</span><span class="percent">{{ this.infoVereadores.pVotosValidos }}%</span></div>
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CityConcilman',
	data () {
		return {
			searchQuery: null,
			vereadores: [],
			infoVereadores: [],
			cidadeSelecionada:{
				label: "",
				codigo: ""
			},
		}
	},
	filters: {
		votePercentage: function (value, eleitoresTotal) {
			if (value > 0){
				var percentage;
				percentage = value * 100 / eleitoresTotal;
				percentage = parseFloat(percentage.toFixed(2));
				percentage = percentage.toString();
				percentage = percentage.replace(".", ",");
				return percentage;
			}else {
				return 0;
			}
		},
		politicalParty: function(value){
			return value.split(' - ')[0]
		},
		voteTotal: function (n){
			var n = ''+n, t = n.length -1, novo = '';

			for( var i = t, a = 1; i >=0; i--, a++ ){
				var ponto = a % 3 == 0 && i > 0 ? '.' : '';
				novo = ponto + n.charAt(i) + novo;
			}
			return novo;
		}
	},
	methods: {
		milhar(n){
			var n = ''+n, t = n.length -1, novo = '';

			for( var i = t, a = 1; i >=0; i--, a++ ){
				var ponto = a % 3 == 0 && i > 0 ? '.' : '';
				novo = ponto + n.charAt(i) + novo;
			}
			return novo;
		},
	},
	mounted(){
		this.$root.$on('share', (response) => {
			this.cidadeSelecionada.codigo = response;
			console.log(this.cidadeSelecionada.codigo);
		});
		
		this.$root.$on('dadosVereador', (response) => {
			this.vereadores = response.cand;
			this.infoVereadores = {
				cVotosBrancos: response['vb'],
				pVotosBrancos: response['pvb'],
				cVotosNulos: response['vn'],
				pVotosNulos: response['ptvn'],
				cVotosValidos: response['vv'],
				pVotosValidos: response['pvvc'],
				eleitoresTotal: response['e'],
			}
			// this.infoVereadores.pVotosBrancos = this.infoVereadores.cVotosBrancos * 100 / this.infoVereadores.eleitoresTotal;
			// this.infoVereadores.pVotosBrancos = parseFloat(this.infoVereadores.pVotosBrancos.toFixed(2));
			// this.infoVereadores.pVotosBrancos = this.infoVereadores.pVotosBrancos.toString();
			// this.infoVereadores.pVotosBrancos = this.infoVereadores.pVotosBrancos.replace(".", ","); 
			// this.infoVereadores.cVotosBrancos = this.milhar(this.infoVereadores.cVotosBrancos);

			// this.infoVereadores.pVotosNulos = this.infoVereadores.cVotosNulos * 100 / this.infoVereadores.eleitoresTotal;
			// this.infoVereadores.pVotosNulos = parseFloat(this.infoVereadores.pVotosNulos.toFixed(2)); 
			// this.infoVereadores.pVotosNulos = this.infoVereadores.pVotosNulos.toString();
			// this.infoVereadores.pVotosNulos = this.infoVereadores.pVotosNulos.replace(".", ",");
			// this.infoVereadores.cVotosNulos = this.milhar(this.infoVereadores.cVotosNulos);
			
			// this.infoVereadores.pVotosValidos = this.infoVereadores.cVotosValidos * 100 / this.infoVereadores.eleitoresTotal;
			// this.infoVereadores.pVotosValidos = parseFloat(this.infoVereadores.pVotosValidos.toFixed(2)); 
			// this.infoVereadores.pVotosValidos = this.infoVereadores.pVotosValidos.toString();
			// this.infoVereadores.pVotosValidos = this.infoVereadores.pVotosValidos.replace(".", ",");
			// this.infoVereadores.cVotosValidos = this.milhar(this.infoVereadores.cVotosValidos);
		});
			
	},
	computed: {
		rListarVereadores: function() {
			function compare(a, b) {
				if(Number(a.vap) > Number(b.vap)){
					return -1;
				}
				if(Number(a.vap) < Number(b.vap)){
					return 0;
				}
			}
			
			// Exibe no max 50 candidatos a vereador
			var vereadoresList = this.vereadores.sort(compare).slice(0,50);

			if(this.searchQuery && this.searchQuery.length > 2){
				// Minímo 3 caracteres e pesquisa em todo o json
				vereadoresList = this.vereadores.sort(compare);
				return vereadoresList.filter((item)=>{
					return this.searchQuery.toLowerCase().split(' ').every(v => item.nm.toLowerCase().includes(v)) || 
					this.searchQuery.toLowerCase().split(' ').every(v => item.cc.toLowerCase().includes(v))
				})
			}else{
				return vereadoresList;
			}
		}
	}
}
</script>