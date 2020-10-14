<template>
  <div>
    <div id="main-city-header" class="main-city-header clearfix">
      <div class="main-search-city-input">
        <div class="search-city-input is-favorite-false">
          <div class="search-form-element search-form-close">
            <i class="icon-search"></i>
            <i class="icon-close"></i>
            <input type="text" class="input suggest-input" autocomplete="off" name="q" placeholder="Escreva o nome do estado" autofocus="">
            <div class="suggest-area suggest-area-disabled"></div>
          </div>
        </div>
      </div>
      <div class="main-city-info">
        <div class="city-info">
          <h2 class="city-name">{{ urnas.localAtual }}
            <span class="state-name">
            <a href="#" id="changeLocale" data-type="1">
            </a>
            </span>
          </h2>
          <div class="progress-bar-container">
            <span class="polls">
            <span class="polls-label">URNAS APURADAS</span>
            <span class="polls-number">{{ urnas.apuradas }}</span>
            <span class="polls-percent">%</span>
            </span>
            <span class="progress-bar-wrapper progress-bar-wrapper-full" data-percent="100" style="width: 100%;">
            <span class="progress-bar voters-bar" :data-percent="urnas.votantesP" :style="'width: '+urnas.votantes+'%;'"></span>
            <span class="progress-bar missing-voters-bar" :data-percent="urnas.ausentesP" :style="'width: '+urnas.ausentes+'%;'"></span>
            </span>
            <span class="progress-bar full-bar" style="width: 0%;"></span>
            <span class="progress-bar-labels">
            <span class="progress-label label-total left">
            <span class="total">{{ urnas.eleitoresTotal }}</span>
            <span class="name">ELEITORES</span>
            </span>
            </span>
            <span class="progress-bar-labels votantes" style="min-width: 235px; max-width: 693px; width: 727.96px;">
            </span>
            <span class="progress-bar-labels alinha" style="text-align: right; min-width: 355px; max-width: 813px; width: 847.96px;">
            <span class="progress-label label-percentage right"><span class="total">
            <span class="circle blue"></span> {{ urnas.votantes }}%</span>
            <span class="name">VOTANTES</span>
            </span>
            <span class="progress-label label-missing right">
            <span class="total">
            <span class="circle grey"></span> {{ urnas.ausentes }}%</span>
            <span class="name">AUSENTES</span>
            </span>
            </span>
            <span class="ranges" style="display: none; position: fixed; left: 113px; top: -56px; z-index: 37;"><br><br>
            SAP 
            <input class="range data-sap" type="range" min="0" max="100" step="1" style="margin-right: 10px;">
            VOP 
            <input class="range data-vop" type="range" min="0" max="100" step="1" style="margin-right: 10px;">
            FIG 
            <input class="range data-figures" type="range" min="0" max="100" step="1">
            </span>
            <p class="awaiting">Apuração não iniciada</p>
          </div>
        </div>
      </div>
      <div class="main-search-city search-desktop">
        <div class="search-city">
          <v-select :options="cidades" v-model="cidadeSelecionada" :clearable="false" @input="pegarCidadeSelecionada"></v-select>
          <!-- <button type="button" class="btn-change">
            <p>Mudar cidade</p> 
            <i class="icon-search"></i>
          </button> -->
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CityInfo',
    data () {
      return {
        urnas: [],
        cidadeSelecionada: [
          {
            label:"Cascavel",
            code:"cascavel"
          }
        ],
        cidades: [
          {
            label:"Cascavel",
            code:"cascavel"
          },
          {
            label:"Toledo",
            code:"toledo"
          } 
        ]
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
      pegarCidadeSelecionada(value) {
        alert(value.code);
      },
      dadosUrna: function () {
        var url = this.baseUrl + '/static/1turno/estado/br/br-c0001-e00295.json';
       		axios
      		.get(url)
      		.then(response => {
            console.log(response.data);
            this.urnas = {
              barraAtual: "Brasil",
              localAtual: "Cascavel",
              totalDeUrnas: response.data['s'],
              urnasApuradas: response.data['st'],
              eleitoresTotal: response.data['e'],
              eleitoresComparecimento: response.data['c'],
              eleitoreAbstencao: response.data['a']
            }
            this.urnas.votantes = this.urnas.eleitoresComparecimento * 100 / this.urnas.eleitoresTotal;
            this.urnas.votantes = parseFloat(this.urnas.votantes.toFixed(2));
            this.urnas.votantesP = this.urnas.votantes.toString().split(",")[0];
            
            this.urnas.ausentes = this.urnas.eleitoreAbstencao * 100 / this.urnas.eleitoresTotal;
            this.urnas.ausentes = parseFloat(this.urnas.ausentes.toFixed(2)); 
            this.urnas.ausentesP = this.urnas.ausentes.toString().split(",")[0];

            this.urnas.apuradas = this.urnas.urnasApuradas * 100 / this.urnas.totalDeUrnas;
            this.urnas.apuradas = parseFloat(this.urnas.apuradas.toFixed(2));
            this.urnas.apuradas = this.urnas.apuradas.toString();
            this.urnas.apuradas = this.urnas.apuradas.replace(".", ",");

            this.urnas.eleitoresTotal = this.milhar(this.urnas.eleitoresTotal);
            this.urnas.tipo = 1;
            if(parseInt(this.urnas.urnasApuradas) === 0){
              this.urnas['naoIniciouApuracao'] = true;
            }
          })
      		.catch(error => {
        		console.log(error)
        		this.errored = true
      		})
      		.finally(() => this.loading = false)
      }
    },
  	mounted(){
	  	this.dadosUrna();
      setInterval(async () => {
        this.dadosUrna();
      }, 10000)
  	}
}
</script>
<style>
  .vs--searchable .vs__dropdown-toggle {
    background:#fff;
  }
</style>