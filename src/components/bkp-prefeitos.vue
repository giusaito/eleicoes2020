/*
 * Projeto: eleicoes2020
 * Arquivo: bkp-prefeitos.vue
 * ---------------------------------------------------------------------
 * Autor: Leonardo Nascimento
 * E-mail: leonardo.nascimento21@gmail.com
 * ---------------------------------------------------------------------
 * Data da criação: 27/10/2020 9:43:28 am
 * Last Modified:  27/10/2020 9:43:33 am
 * Modified By: Leonardo Nascimento - <leonardo.nascimento21@gmail.com> / MAC OS
 * ---------------------------------------------------------------------
 * Copyright (c) 2020 Leo
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

<template>
  <div>
    <!-- 
      -- HEADER COM AS INFORMAÇÕES DA CIDADE (URNAS, SELECIONAR CIDADE ETC) --
    -->
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
        </div>
        </div>
    </div>
    <div class="max-height">
      <!-- 
        -- LISTA DOS CANDIDATOS A PREFEITOS --
      -->
      <hr><br><br>
      <div class="city-mayor fullheight">
        <h2 class="heading">PREFEITO</h2>
        <div id="presidente" class="lift-box">
          <div class="avatares clearfix">
            ---{{ listaPrefeitos }}---
            <div class="avatar avatar-left" v-for="(mayor, index) in listaPrefeitos" :key="index">
              <div class="candidate-avatar candidate-avatar-type-big candidate-status-elected" v-if="index <= 1">
                <span>
                  <span class="candidate-mask">
                    <!-- <img class="candidate-image" :src="`/static/fotos/${mayor.sqcand}.jpg`" :title="mayor.nm" :alt="mayor.nm"> -->
                    <img class="candidate-image" :src="`http://divulgacandcontas.tse.jus.br/candidaturas/oficial/2020/PR/75230/426/candidatos/665468/foto.jpeg`" :title="mayor.nm" :alt="mayor.nm">
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
                    <span class="candidate-party situation-1">{{mayor.cc}}</span>
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
                <li class="list-item candidate-running-true" v-for="(mayor, index) in listaPrefeitos" :key="index">
                  <ul v-if="index >= 2">
                    <li class="item-name">{{mayor.nm}}</li>
                    <li class="item-social">
                      <span class="icon-facebook" data-metrics-location="bloco prefeitos" data-metrics-action="compartilhar_candidato_facebook" data-image="https://dev.cgn.inf.br/assets/eleicoes/apuracao.png" data-title="Apuração - Presidente: CIRO GOMES" data-desc="Veja mais em: https://dev.cgn.inf.br/eleicoes/" data-url="https://dev.cgn.inf.br/eleicoes/br"></span>
                      <span class="icon-twitter" data-metrics-location="bloco prefeitos" data-metrics-action="compartilhar_candidato_twitter" data-title="Apuração - Presidente: CIRO GOMES" data-desc="Veja mais em: https://dev.cgn.inf.br/eleicoes/" data-url="https://dev.cgn.inf.br/eleicoes/br"></span>
                    </li>
                    <li class="item-small-set">
                      <ul>
                        <li class="item-party"> {{mayor.cc}} </li>
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
            <div class="item white"><span class="label">BRANCOS</span><span class="total">{{ this.urnas.cVotosBrancos }}</span><span class="percent">{{ this.urnas.pVotosBrancos }}%</span></div>
            <div class="item null"><span class="label">NULOS</span><span class="total">{{ this.urnas.cVotosNulos }}</span><span class="percent">{{ this.urnas.pVotosNulos }}%</span></div>
            <div class="item valid"><span class="label">VÁLIDOS</span><span class="total">{{ this.urnas.cVotosValidos }}</span><span class="percent">{{ this.urnas.pVotosValidos }}%</span></div>
          </div>
        </div>
      </div>
      <!-- 
        -- LISTA DOS CANDIDATOS A VEREADORES --
      -->
      <CityCouncilman/>
    </div>
  </div>
</template>

<script>
import CityMayor from './CityMayor'
import CityCouncilman from './CityCouncilman'
export default {
    name: 'Prefeitos',
    data () {
      return {
        urnas: [],
        dadosPrefeitos: [],
        cidadeSelecionada: 
        {
          label:"Cascavel",
          code:"74934"
        },
        cidades: []
      }
    },
    components: {
      CityMayor,
      CityCouncilman
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
      listarCidades(){
        var url = this.baseUrl + '/static/cidades/pr.json';
        axios
          .get(url)
          .then(response => {
            this.cidades = response.data;
          })
      		.catch(error => {
        		console.log(error)
        		this.errored = true
      		})
      		.finally(() => this.setCidadeURL())
      },
      setCidadeURL(){
        if(this.$router.history.current.params.id) {
          var  codeDefault = this.$router.history.current.params.id;
        }else {
          var  codeDefault = this.cidadeSelecionada.code;
        }

        var FiltrarCidade = this.cidades.filter(d => d.code === codeDefault);

        this.cidadeSelecionada.code = codeDefault;
        this.cidadeSelecionada.label = FiltrarCidade[0].label;
      },
      pegarCidadeSelecionada(value) {
        this.$router.push({path:'/' + value.code });
        this.dadosUrna(this.$router.history.current.params.id);
      },
      // dadosUrna: function (codeDefault = null) {
      dadosUrna: async function (codeDefault = null) {
        if(!codeDefault && this.$router.history.current.params.id) {
          codeDefault = this.$router.history.current.params.id;
        }
        // setTimeout(async () => {
          var vm = this;
          var url = this.baseUrl + '/static/1turno/ele2020/divulgacao/simulado/8707/dados/pr/pr'+this.cidadeSelecionada.code+'-c0011-e008707-v.json';
           axios
          .get(url)
          .then(response => {
            var url2 = this.baseUrl + '/static/1turno/ele2020/divulgacao/simulado/8707/dados/pr/pr'+this.cidadeSelecionada.code+'-c0011-e008707-006-f.json';
          axios
            .get(url2)
            .then(response2 => {
              console.log('foor');
              Array.from(response2.data['carg']['col']).forEach(function(value, key){
                vm.dadosPrefeitos = [].concat(response.data['abr'][0]['cand'][key], value['par'][0]['cand']);
              });
              console.log('eeach');

            })
            .catch(error => {
              console.log(error)
              this.errored = true
            })
            .finally(() => {
              console.log('final');
              this.loading = false;
            });

        // setTimeout(async () => {
console.log('======= oi ======== 111');

console.log(vm.dadosPrefeitos);
console.log('======= oi ======== 333');
            // },2000);

            this.urnas = {
              barraAtual: "Brasil",
              localAtual: this.cidadeSelecionada.label,
              totalDeUrnas: response.data['abr'][0]['s'],
              urnasApuradas: response.data['abr'][0]['st'],
              eleitoresTotal: response.data['abr'][0]['e'],
              eleitoresComparecimento: response.data['abr'][0]['c'],
              eleitoreAbstencao: response.data['abr'][0]['a'],
              // candidatos: response.data['abr'][0]['cand'],
              candidatos: this.dadosPrefeitos,
              // info geral da votação
              cVotosBrancos: response.data['vb'],
              cVotosNulos: response.data['vn'],
              cVotosValidos: response.data['vv'],
              eleitoresTotal: response.data['e'],
            }

            // DADOS DAS URNAS
            this.urnas.votantes = this.urnas.eleitoresComparecimento * 100 / this.urnas.eleitoresTotal;
            if(isNaN(this.urnas.votantes)){
                this.urnas.votantes = 0;
            }
            this.urnas.votantes = parseFloat(this.urnas.votantes.toFixed(2));
            this.urnas.votantesP = this.urnas.votantes.toString().split(",")[0];
            
            this.urnas.ausentes = this.urnas.eleitoreAbstencao * 100 / this.urnas.eleitoresTotal;
            if(isNaN(this.urnas.ausentes)){
                this.urnas.ausentes = 0;
            }
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

            // DADOS GERAIS (BRANCOS, NULOS, TOTAL ETC)
            this.urnas.pVotosBrancos = this.urnas.cVotosBrancos * 100 / this.urnas.eleitoresTotal;
            this.urnas.pVotosBrancos = parseFloat(this.urnas.pVotosBrancos.toFixed(2));
            this.urnas.pVotosBrancos = this.urnas.pVotosBrancos.toString();
            this.urnas.pVotosBrancos = this.urnas.pVotosBrancos.replace(".", ","); 
            this.urnas.cVotosBrancos = this.milhar(this.urnas.cVotosBrancos);

            this.urnas.pVotosNulos = this.urnas.cVotosNulos * 100 / this.urnas.eleitoresTotal;
            this.urnas.pVotosNulos = parseFloat(this.urnas.pVotosNulos.toFixed(2)); 
            this.urnas.pVotosNulos = this.urnas.pVotosNulos.toString();
            this.urnas.pVotosNulos = this.urnas.pVotosNulos.replace(".", ",");
            this.urnas.cVotosNulos = this.milhar(this.urnas.cVotosNulos);
            
            this.urnas.pVotosValidos = this.urnas.cVotosValidos * 100 / this.urnas.eleitoresTotal;
            this.urnas.pVotosValidos = parseFloat(this.urnas.pVotosValidos.toFixed(2)); 
            this.urnas.pVotosValidos = this.urnas.pVotosValidos.toString();
            this.urnas.pVotosValidos = this.urnas.pVotosValidos.replace(".", ",");
            this.urnas.cVotosValidos = this.milhar(this.urnas.cVotosValidos);
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => this.loading = false)
        // }, 1000)
      }
    },
  	mounted(){
      this.listarCidades();

      this.dadosUrna(this.$router.history.current.params.id);
      setInterval(async () => {
        this.dadosUrna(this.$router.history.current.params.id);
      }, 10000)
  	},
  	computed: {
      listaPrefeitos: function() {
        if(typeof this.urnas.candidatos !== 'undefined'){
          function compare(a, b) {
            if (Number(a.v) > Number(b.v))
              return -1;
            if (Number(a.v) < Number(b.v))
              return 1;
              return 0;
          }
          console.log('-----');
          console.log(this.urnas.candidatos);
          console.log('-----');
          return this.urnas.candidatos.sort(compare);
        }
      }
    }
}
</script>
<style>
  .vs--searchable .vs__dropdown-toggle {
    background:#fff;
  }
</style>