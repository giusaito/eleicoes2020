<template>
	<div>
		<div class="city-councilman fullheight">
		  <h2 class="heading">Vereadores</h2>
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
		          <form ref="formulario" class="suggest-form">
		            <div class="ui-widget">
		              <input type="text" class="councilman-search-input suggest-input" name="q" autocomplete="off" placeholder="Encontre candidatos para seguir a apuração">
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
		          </form>
		        </div>
		      </div>
		      <div class="councilman-list list-content">
		        <span>
		          <div class="candidates-content">
		            <ul class="list-items type-councilman container-governador">
						<li class="list-item list-item-candidate candidates-running-true" v-for="(vereador, index) in vereadores.cand" :key="index">
							<ul>
								<li class="item-favorite">
									<div class="favorite-star type-candidate has-id-true theme-dark is-favorite-false" data-item-id="17517">
										<!-- <img class="candidate-image"  :src="`/static/fotos/${vereador.sqcand}.jpg`" :title="vereador.nm" :alt="vereador.nm"> -->
										<img class="candidate-image"  src="/static/fotos/280000601173.jpg" :title="vereador.nm" :alt="vereador.nm">
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
									<li class="item-votes-vp">{{vereador.v | votePercentage}}<span>%</span></li>
									</ul>
								</li>
								<li class="item-votes-v">{{vereador.v | voteTotal}}</li>
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
		      <div class="item white"><span class="label">BRANCOS</span><span class="total">366.334</span><span class="percent">4,6%</span></div>
		      <div class="item null"><span class="label">NULOS</span><span class="total">550.549</span><span class="percent">6,91%</span></div>
		      <div class="item valid"><span class="label">VÁLIDOS</span><span class="total">5.352.022</span><span class="percent">67,17%</span></div>
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
		vereadores: []
	}
	},
	filters: {
		votePercentage: function (value) {
			if (value > 0){
				var percentage;
				percentage = value * 100 / 107050530;
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
		listarVereadores: function () {
			// var url = this.baseUrl + '/static/1turno/estado/br/br-c0001-e00295.json';
			// var url = this.baseUrl + estado+"/"+estado+"-c"+cargo+"-e00"+neEstadual+".json?t="+timestamp;
			var url = this.baseUrl + "/static/1turno/estado/pr/pr-c0001-e007555-w.json";
			axios
			.get(url)
			.then(response => {
				this.vereadores = response.data;
				console.log(this.vereadores);
			})
			.catch(error => {
				console.log(error)
				this.errored = true
			})
			.finally(() => this.loading = false)
		}
	},
	mounted(){
		this.listarVereadores();
	}
}
</script>