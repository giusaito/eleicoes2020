<template>
	<div>
		<div class="city-mayor fullheight">
		  <h2 class="heading">PREFEITO</h2>
		  <div id="presidente" class="lift-box">
		    <div class="avatares clearfix">
		      <div class="avatar avatar-left" v-for="(mayor, index) in sortedArray" :key="index">
		        <div class="candidate-avatar candidate-avatar-type-big candidate-status-elected" v-if="index <= 1">
		          <span>
		          	<span class="candidate-mask">
		          		<img class="candidate-image" :src="`/static/fotos/${mayor.sqcand}.jpg`" :title="mayor.nm" :alt="mayor.nm">
		          	</span>
		          </span>
		          <div class="gauge">
		            <canvas class="candidate-canvas" width="110" height="110"></canvas>
		          </div>
		          <span class="info-candidate">
		          	<span class="candidate-votes">
		          		{{mayor.v | votePercentage}}
		          		<span class="percent">%</span>
		          	</span>
		          		<span class="candidate-name">{{mayor.nm}}</span>
		          		<span class="candidate-party situation-1">{{mayor.cc | politicalParty}}</span>
		          		<span class="candidate-total-votes">{{mayor.v | voteTotal}}
		          		<span class="candidate-total-votes-label">votos</span>
		          	</span>
		      	</span>
		          <div class="share">
		          	<i class="icon icon-facebook" data-metrics-location="bloco prefeitos" data-metrics-action="compartilhar_candidato_destaque_facebook" data-image="https://dev.cgn.inf.br/assets/eleicoes/apuracao.png" data-title="Apuração - Prefeito: `${$mayor.nm}`" data-desc="Veja mais em: https://dev.cgn.inf.br/eleicoes/" data-url="https://dev.cgn.inf.br/eleicoes/"></i>
		          	<i class="icon icon-twitter" data-metrics-location="bloco prefeitos" data-metrics-action="compartilhar_candidato_destaque_twitter" data-title="Apuração - Prefeito: `${$mayor.nm}`" data-desc="Veja mais em: https://dev.cgn.inf.br/eleicoes/" data-url="https://dev.cgn.inf.br/eleicoes/"></i>
		          </div>
		        </div>
		      </div>
		      <div class="avatares-bg"></div>
		    </div>
		    <div class="mayor-list list-content">
		      <span>
		        <ul class="list-items type-mayor">
		          <li class="list-item candidate-running-true" v-for="(mayor, index) in sortedArray" :key="index">
		            <ul v-if="index >= 2">
		              <li class="item-name">{{mayor.nm}}</li>
		              <li class="item-social">
		              	<span class="icon-facebook" data-metrics-location="bloco prefeitos" data-metrics-action="compartilhar_candidato_facebook" data-image="https://dev.cgn.inf.br/assets/eleicoes/apuracao.png" data-title="Apuração - Presidente: CIRO GOMES" data-desc="Veja mais em: https://dev.cgn.inf.br/eleicoes/" data-url="https://dev.cgn.inf.br/eleicoes/br"></span>
		              	<span class="icon-twitter" data-metrics-location="bloco prefeitos" data-metrics-action="compartilhar_candidato_twitter" data-title="Apuração - Presidente: CIRO GOMES" data-desc="Veja mais em: https://dev.cgn.inf.br/eleicoes/" data-url="https://dev.cgn.inf.br/eleicoes/br"></span>
		              </li>
		              <li class="item-small-set">
		                <ul>
		                  <li class="item-party"> {{mayor.cc | politicalParty}} </li>
		                  <li class="item-votes-v"> {{mayor.v | voteTotal}} </li>
		                </ul>
		              </li>
		              <li class="item-votes-vp">{{mayor.v | votePercentage}}<span>%</span></li>
		              <li class="item-notification elected-0"></li>
		            </ul>
		          </li>
		        </ul>
		      </span>
		    </div>
		  </div>
		  <div class="main-votes-count mayor-votes-count clearfix">
		    <div class="votes-count">
		      <div class="item white"><span class="label">BRANCOS</span><span class="total">{{ this.infoPrefeitos.cVotosBrancos }}</span><span class="percent">{{ this.infoPrefeitos.pVotosBrancos }}%</span></div>
		      <div class="item null"><span class="label">NULOS</span><span class="total">{{ this.infoPrefeitos.cVotosNulos }}</span><span class="percent">{{ this.infoPrefeitos.pVotosNulos }}%</span></div>
		      <div class="item valid"><span class="label">VÁLIDOS</span><span class="total">{{ this.infoPrefeitos.cVotosValidos }}</span><span class="percent">{{ this.infoPrefeitos.pVotosValidos }}%</span></div>
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>

 export default {
  name: 'CityMaior',
  data () {
    return {
	  prefeitos: [],
	  infoPrefeitos: []
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
		} else {
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
    	fetchUsers: function () {
    		var url = this.baseUrl + '/static/1turno/estado/br/br-c0001-e00295.json';
       		axios
      		.get(url)
      		.then(response => {
				this.prefeitos = response.data.cand;
				this.infoPrefeitos = {
					cVotosBrancos: response.data['vb'],
					cVotosNulos: response.data['vn'],
					cVotosValidos: response.data['vv'],
					eleitoresTotal: response.data['e'],
				}
				this.infoPrefeitos.pVotosBrancos = this.infoPrefeitos.cVotosBrancos * 100 / this.infoPrefeitos.eleitoresTotal;
				this.infoPrefeitos.pVotosBrancos = parseFloat(this.infoPrefeitos.pVotosBrancos.toFixed(2));
				this.infoPrefeitos.pVotosBrancos = this.infoPrefeitos.pVotosBrancos.toString();
				this.infoPrefeitos.pVotosBrancos = this.infoPrefeitos.pVotosBrancos.replace(".", ","); 
				this.infoPrefeitos.cVotosBrancos = this.milhar(this.infoPrefeitos.cVotosBrancos);

				this.infoPrefeitos.pVotosNulos = this.infoPrefeitos.cVotosNulos * 100 / this.infoPrefeitos.eleitoresTotal;
				this.infoPrefeitos.pVotosNulos = parseFloat(this.infoPrefeitos.pVotosNulos.toFixed(2)); 
				this.infoPrefeitos.pVotosNulos = this.infoPrefeitos.pVotosNulos.toString();
				this.infoPrefeitos.pVotosNulos = this.infoPrefeitos.pVotosNulos.replace(".", ",");
				this.infoPrefeitos.cVotosNulos = this.milhar(this.infoPrefeitos.cVotosNulos);
				
				this.infoPrefeitos.pVotosValidos = this.infoPrefeitos.cVotosValidos * 100 / this.infoPrefeitos.eleitoresTotal;
				this.infoPrefeitos.pVotosValidos = parseFloat(this.infoPrefeitos.pVotosValidos.toFixed(2)); 
				this.infoPrefeitos.pVotosValidos = this.infoPrefeitos.pVotosValidos.toString();
				this.infoPrefeitos.pVotosValidos = this.infoPrefeitos.pVotosValidos.replace(".", ",");
				this.infoPrefeitos.cVotosValidos = this.milhar(this.infoPrefeitos.cVotosValidos);
        		//console.log(this.prefeitos);
      		})
      		.catch(error => {
        		console.log(error)
        		this.errored = true
      		})
      		.finally(() => this.loading = false)
    	},
  	},
  	mounted(){
	  	this.fetchUsers();
		setInterval(async () => {
			this.fetchUsers();
		}, 10000)
  	},
  	computed: {
		sortedArray: function() {
			function compare(a, b) {
				if (Number(a.v) > Number(b.v))
					return -1;
				if (Number(a.v) < Number(b.v))
					return 1;
					return 0;
			}

			return this.prefeitos.sort(compare);
		}
	}
}
</script>