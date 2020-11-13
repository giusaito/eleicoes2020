<template>
 <!-- 
  Projeto: eleicoes2020
  Arquivo: Header.vue
  ---------------------------------------------------------------------
  Autor: Leonardo Nascimento
  E-mail: leonardo.nascimento21@gmail.com
  ---------------------------------------------------------------------
  Data da criação: 19/10/2020 1:57:48 pm
  Last Modified:  11/11/2020 4:16:16 pm
  Modified By: Leonardo Nascimento - <leonardo.nascimento21@gmail.com> / MAC OS
  ---------------------------------------------------------------------
  Copyright (c) 2020 Leo
  HISTORY:
  Date      	By	Comments
  ----------	---	---------------------------------------------------------
 -->
  <div>
    <div class="gate"></div>
    <div class="overlay"></div>
    <div class="loading-overlay">
    </div>
    <div class="tooltip-container"></div>
  	<div class="header-bar">
      <span class="share"> 
        <a href="#" @click="socialShare(facebook)">
				  <i class="icon icon-facebook"></i>
			  </a>
        <a href="#" @click="socialShare(twitter)">
				  <i class="icon icon-twitter"></i>
			  </a>
        <a href="#" @click="socialShare(whatsapp)">
				  <i class="icon icon-whatsapp"></i>
			  </a>
      </span> 
      <h1 class="title"> 
        <span class="election">
          <a href="https://cgn.inf.br/eleicoes" data-metrics-location="header %page%" data-metrics-action="home_eleicoes">Eleições 2020</a> 
        </span> 
        <img src="https://i.imgur.com/2xTRzO7.jpg" class="cgn-logo">
        <span class="shift"> 
          Apuração 
          <a class="turno1 apuracao-desktop" href="https://cgn.inf.br" data-metrics-location="header %page%" data-metrics-action="home_placar" data-turno="1turno">1º turno</a> 

          <!-- <a class="change-round turno2 apuracao-desktop" href="https://cgn.inf.br/eleicoes/2-turno" data-metrics-location="header %page%" data-metrics-action="link_2turno" id="change-round" data-turno="2turno">2º turno</a>  -->
        </span>
        <span class="font" title="Os dados exibidos durante a apuração são de responsabilidade do TSE, a CGN apenas reproduz esses dados sem efetuar nenhum tipo de alterção no conteúdo dos arquivos disponibilizados.">Fonte: TSE</span>
      </h1>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  
   data () {
      return {
       currentUrl: '',
       urlShare: '',
       facebook: 'facebook',
       twitter: 'twitter',
       whatsapp: 'whatsapp',
      }
    },
    methods: {
      socialShare(social){
        var fb = `http://www.facebook.com/sharer.php?u=${this.baseUrl}index.html%23/${this.urlShare}/&quote=2222&hashtag=%23CGNELEICOES2020&quote=Acompanhe em tempo real a apuração dos votos para prefeito e vereador`
        var tw = `http://twitter.com/share?text=Acompanhe em tempo real a apuração dos votos para prefeito e vereador&url=${this.baseUrl}index.html%23/${this.urlShare}`;
        var whats = `https://api.whatsapp.com/send?phone=&text=Acompanhe em tempo real a apuração dos votos para prefeito e vereador ${this.baseUrl}index.html%23/${this.urlShare}%2F%3Futm_source%3DWhatsApp%26utm_medium%3DWhats%26utm_campaign%3DCGN%26utm_term%3DWhatsApp`;
        
        if(social == "facebook"){
          window.open(fb, 'facebookShare', 'width=626,height=436');
        }else if(social == "twitter"){
          window.open(tw, 'twitterShare', 'width=626,height=436');
        }else {
          window.open(whats, '_blank');
        }
      },
     },
    mounted(){
      this.$root.$on('share', (response) => {
       this.urlShare = response;
      });
    }
}
</script>
