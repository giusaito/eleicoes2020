<template>
 <!-- 
  Projeto: eleicoes2020
  Arquivo: CityCouncilman.vue
  ---------------------------------------------------------------------
  Autor: Leonardo Nascimento
  E-mail: leonardo.nascimento21@gmail.com
  ---------------------------------------------------------------------
  Data da criação: 19/10/2020 1:57:48 pm
  Last Modified:  29/10/2020 5:51:23 pm
  Modified By: Leonardo Nascimento - <leonardo.nascimento21@gmail.com> / MAC OS
  ---------------------------------------------------------------------
  Copyright (c) 2020 Leo
  HISTORY:
  Date      	By	Comments
  ----------	---	---------------------------------------------------------
 -->
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
										<!-- <img class="candidate-image"  :src="`/static/fotos/${vereador.sqcand}.jpg`" :title="vereador.nm" :alt="vereador.nm"> -->
										<img class="candidate-image"  :src="`https://resultados.tse.jus.br/publico/ele2020/divulgacao/simulado/8334/fotos/rr/230000001938.jpeg`" :title="vereador.nm" :alt="vereador.nm">
									</div>
								</li>
								<li class="item-name">{{vereador.nm}}</li>
								<li class="item-social">
									<span class="icon-facebook" data-metrics-location="bloco candidatos" data-metrics-action="compartilhar_candidato_facebook" data-image="https://dev.cgn.inf.br/assets/eleicoes/apuracao.png" data-title="Apuração - Governador - Paraná: RATINHO JUNIOR se elegeu!" data-desc="Veja mais em: https://dev.cgn.inf.br/eleicoes/pr" data-url="https://dev.cgn.inf.br/eleicoes/pr">
									</span>
									<span class="icon-twitter" data-metrics-location="bloco candidatos" data-metrics-action="compartilhar_candidato_twitter" data-title="Apuração - Governador - Paraná: RATINHO JUNIOR se elegeu!" data-desc="Veja mais em: https://dev.cgn.inf.br/eleicoes/pr" data-url="https://dev.cgn.inf.br/eleicoes/pr">
									</span>
								</li>
								<li class="item-small-set">
									<ul>
									<li class="item-party">{{vereador.cc | politicalParty}}</li>
									<li class="item-votes-vp">{{vereador.vap | votePercentage}}<span>%</span></li>
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
//var baseUrlEstadosJson = "/assets/eleicoes/1turno/estado/json/";
//$.getJSON( baseUrlEstadosJson+estado+"/"+estado+"-c"+cargo+"-e00"+neEstadual+".json?t="+timestamp, function( data ) {
export default {
	name: 'CityConcilman',
	data () {
		return {
			searchQuery: null,
			vereadores: [],
			infoVereadores: [],
			cidadeSelecionada:{
				label: "Cascavel",
				codigo: "74934"
			},
		}
	},
	filters: {
		votePercentage: function (value) {
			if (value > 0){
				var percentage;
				percentage = value * 100 / 591310;
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

		async listarVereadores() {

		 var vm = this;

		 // Url de teste 
        //   var url = this.baseUrl + '/static/1turno/ele2020/divulgacao/simulado/8707/dados-simplificados/pr/pr'+this.cidadeSelecionada.codigo+'-c0013-e008707-r.json';
		  
		   var url = 'static/requests/eleicoes/ro00396-c0013-e008334-r.json';

        // const requestPrefV = axios.get(urlPrefV);
        const requestVereador = axios.get(url);
        this.finishLoadData = false;
        axios
          .all([requestVereador])
          .then(
            axios.spread((...responses) => {
			  const response = responses[0];
			  
			this.vereadores = response.data.cand;
			this.infoVereadores = {
				cVotosBrancos: response.data['vb'],
				cVotosNulos: response.data['vn'],
				cVotosValidos: response.data['vv'],
				eleitoresTotal: response.data['e'],
			}
			this.infoVereadores.pVotosBrancos = this.infoVereadores.cVotosBrancos * 100 / this.infoVereadores.eleitoresTotal;
			this.infoVereadores.pVotosBrancos = parseFloat(this.infoVereadores.pVotosBrancos.toFixed(2));
			this.infoVereadores.pVotosBrancos = this.infoVereadores.pVotosBrancos.toString();
			this.infoVereadores.pVotosBrancos = this.infoVereadores.pVotosBrancos.replace(".", ","); 
			this.infoVereadores.cVotosBrancos = this.milhar(this.infoVereadores.cVotosBrancos);

			this.infoVereadores.pVotosNulos = this.infoVereadores.cVotosNulos * 100 / this.infoVereadores.eleitoresTotal;
			this.infoVereadores.pVotosNulos = parseFloat(this.infoVereadores.pVotosNulos.toFixed(2)); 
			this.infoVereadores.pVotosNulos = this.infoVereadores.pVotosNulos.toString();
			this.infoVereadores.pVotosNulos = this.infoVereadores.pVotosNulos.replace(".", ",");
			this.infoVereadores.cVotosNulos = this.milhar(this.infoVereadores.cVotosNulos);
			
			this.infoVereadores.pVotosValidos = this.infoVereadores.cVotosValidos * 100 / this.infoVereadores.eleitoresTotal;
			this.infoVereadores.pVotosValidos = parseFloat(this.infoVereadores.pVotosValidos.toFixed(2)); 
			this.infoVereadores.pVotosValidos = this.infoVereadores.pVotosValidos.toString();
			this.infoVereadores.pVotosValidos = this.infoVereadores.pVotosValidos.replace(".", ",");
			this.infoVereadores.cVotosValidos = this.milhar(this.infoVereadores.cVotosValidos);
			// console.log(this.vereadores);






            // this.urnas = {
            //   barraAtual: "Brasil",
            //   localAtual: this.cidadeSelecionada.label,
            //   totalDeUrnas: responsePrefV.data['s'],
            //   urnasApuradas: responsePrefV.data['st'],
            //   eleitoresTotal: responsePrefV.data['e'],
            //   eleitoresComparecimento: responsePrefV.data['c'],
            //   eleitoreAbstencao: responsePrefV.data['a'],
            //   candidatos: responsePrefV.data['cand'],
            //   // candidatos: this.dadosPrefeitos,
            //   // info geral da votação
            //   cVotosBrancos: responsePrefV.data['vb'],
            //   cVotosNulos: responsePrefV.data['vn'],
            //   cVotosValidos: responsePrefV.data['vv'],
            //   eleitoresTotal: responsePrefV.data['e'],
            // }
            // this.UniqueMayor = responsePrefV.data['cand'].length < 2 ? true : false;

            // console.log("========");
            // console.log(this.UniqueMayor);
            // console.log("========");

            // // DADOS DAS URNAS
            // this.urnas.votantes = this.urnas.eleitoresComparecimento * 100 / this.urnas.eleitoresTotal;
            // if(isNaN(this.urnas.votantes)){
            //     this.urnas.votantes = 0;
            // }
            // this.urnas.votantes = parseFloat(this.urnas.votantes.toFixed(2));
            // this.urnas.votantesP = this.urnas.votantes.toString().split(",")[0];
            
            // this.urnas.ausentes = this.urnas.eleitoreAbstencao * 100 / this.urnas.eleitoresTotal;
            // if(isNaN(this.urnas.ausentes)){
            //     this.urnas.ausentes = 0;
            // }
            // this.urnas.ausentes = parseFloat(this.urnas.ausentes.toFixed(2)); 
            // this.urnas.ausentesP = this.urnas.ausentes.toString().split(",")[0];

            // this.urnas.apuradas = this.urnas.urnasApuradas * 100 / this.urnas.totalDeUrnas;
            // this.urnas.apuradas = parseFloat(this.urnas.apuradas.toFixed(2));
            // this.urnas.apuradas = this.urnas.apuradas.toString();
            // this.urnas.apuradas = this.urnas.apuradas.replace(".", ",");

            // this.urnas.eleitoresTotal = this.milhar(this.urnas.eleitoresTotal);
            // this.urnas.tipo = 1;
            // if(parseInt(this.urnas.urnasApuradas) === 0){
            //   this.urnas['naoIniciouApuracao'] = true;
            // }

            // // DADOS GERAIS (BRANCOS, NULOS, TOTAL ETC)
            // this.urnas.pVotosBrancos = this.urnas.cVotosBrancos * 100 / this.urnas.eleitoresTotal;
            // this.urnas.pVotosBrancos = parseFloat(this.urnas.pVotosBrancos.toFixed(2));
            // this.urnas.pVotosBrancos = this.urnas.pVotosBrancos.toString();
            // this.urnas.pVotosBrancos = this.urnas.pVotosBrancos.replace(".", ","); 
            // this.urnas.cVotosBrancos = this.milhar(this.urnas.cVotosBrancos);

            // this.urnas.pVotosNulos = this.urnas.cVotosNulos * 100 / this.urnas.eleitoresTotal;
            // this.urnas.pVotosNulos = parseFloat(this.urnas.pVotosNulos.toFixed(2)); 
            // this.urnas.pVotosNulos = this.urnas.pVotosNulos.toString();
            // this.urnas.pVotosNulos = this.urnas.pVotosNulos.replace(".", ",");
            // this.urnas.cVotosNulos = this.milhar(this.urnas.cVotosNulos);
            
            // this.urnas.pVotosValidos = this.urnas.cVotosValidos * 100 / this.urnas.eleitoresTotal;
            // this.urnas.pVotosValidos = parseFloat(this.urnas.pVotosValidos.toFixed(2)); 
            // this.urnas.pVotosValidos = this.urnas.pVotosValidos.toString();
            // this.urnas.pVotosValidos = this.urnas.pVotosValidos.replace(".", ",");
            // this.urnas.cVotosValidos = this.milhar(this.urnas.cVotosValidos);



              // use/access the results
            })
          ).finally(() => {
              this.finishLoadData = true;
            })
          .catch(errors => {
           this.finishLoadData = true;
            console.error(errors);
          });










		// 	var url = this.baseUrl + "/static/1turno/estado/pr/pr-c0001-e007555-w.json";
		// 	await axios
		// 	.get(url)
		// 	.then(response => {
		// 		this.vereadores = response.data.cand;
		// 		this.infoVereadores = {
		// 			cVotosBrancos: response.data['vb'],
		// 			cVotosNulos: response.data['vn'],
		// 			cVotosValidos: response.data['vv'],
		// 			eleitoresTotal: response.data['e'],
		// 		}
		// 		this.infoVereadores.pVotosBrancos = this.infoVereadores.cVotosBrancos * 100 / this.infoVereadores.eleitoresTotal;
		// 		this.infoVereadores.pVotosBrancos = parseFloat(this.infoVereadores.pVotosBrancos.toFixed(2));
		// 		this.infoVereadores.pVotosBrancos = this.infoVereadores.pVotosBrancos.toString();
		// 		this.infoVereadores.pVotosBrancos = this.infoVereadores.pVotosBrancos.replace(".", ","); 
		// 		this.infoVereadores.cVotosBrancos = this.milhar(this.infoVereadores.cVotosBrancos);

		// 		this.infoVereadores.pVotosNulos = this.infoVereadores.cVotosNulos * 100 / this.infoVereadores.eleitoresTotal;
		// 		this.infoVereadores.pVotosNulos = parseFloat(this.infoVereadores.pVotosNulos.toFixed(2)); 
		// 		this.infoVereadores.pVotosNulos = this.infoVereadores.pVotosNulos.toString();
		// 		this.infoVereadores.pVotosNulos = this.infoVereadores.pVotosNulos.replace(".", ",");
		// 		this.infoVereadores.cVotosNulos = this.milhar(this.infoVereadores.cVotosNulos);
				
		// 		this.infoVereadores.pVotosValidos = this.infoVereadores.cVotosValidos * 100 / this.infoVereadores.eleitoresTotal;
		// 		this.infoVereadores.pVotosValidos = parseFloat(this.infoVereadores.pVotosValidos.toFixed(2)); 
		// 		this.infoVereadores.pVotosValidos = this.infoVereadores.pVotosValidos.toString();
		// 		this.infoVereadores.pVotosValidos = this.infoVereadores.pVotosValidos.replace(".", ",");
		// 		this.infoVereadores.cVotosValidos = this.milhar(this.infoVereadores.cVotosValidos);
		// 		// console.log(this.vereadores);
		// 	})
		// 	.catch(error => {
		// 		console.log(error)
		// 		this.errored = true
		// 	})
		// 	.finally(() => this.loading = false)
		}


	},
	mounted(){
		// Senão existir parâmetro na url pega a cidade Padrão Cascavel 
      if(this.$router.history.current.params.id == 'undefined'){
        this.cidadeSelecionada.code = "74934";
      } else {
        this.cidadeSelecionada.code = this.$router.history.current.params.id;
	  }
	  
		this.listarVereadores();
		setInterval(async () => {
			this.listarVereadores();
		}, 10000)


		this.$root.$on('cidadeSelecionada', (event) => {
			      console.log('id active');
			      console.log(event);


			});
			
	},
	computed: {
		rListarVereadores: function() {
			// alert(this.$options.filters.votePercentage('677957'));
			function compare(a, b) {
				if(a.e == "s"){
					return -1;
				}
				if(b.e == "s"){
					return 0;
				}
				if (Number(a.vap) > Number(b.vap)) {
					return -1;
				}
				if (Number(a.vap) < Number(b.vap)){
					return 0;
				}
			}

			var vereadoresList = this.vereadores.sort(compare);

			if(this.searchQuery){
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