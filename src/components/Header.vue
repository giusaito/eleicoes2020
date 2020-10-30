<template>
 <!-- 
  Projeto: eleicoes2020
  Arquivo: Header.vue
  ---------------------------------------------------------------------
  Autor: Leonardo Nascimento
  E-mail: leonardo.nascimento21@gmail.com
  ---------------------------------------------------------------------
  Data da criação: 19/10/2020 1:57:48 pm
  Last Modified:  30/10/2020 11:56:45 am
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
        <i class="icon icon-facebook" data-image="https://cgn.inf.br/assets/eleicoes/apuracao.png" data-title="Apuração Eleições 2020" data-desc="Veja mais em: https://cgn.inf.br/eleicoes/" data-url="https://cgn.inf.br/eleicoes/" data-metrics-location="header %page%" data-metrics-action="compartilhar_%page%_facebook"></i> 
        <i class="icon icon-twitter" data-title="Apuração Eleições 2020" data-desc="Veja mais em: https://cgn.inf.br/eleicoes/" data-url="https://cgn.inf.br/eleicoes/" data-metrics-location="header %page%" data-metrics-action="compartilhar_%page%_twitter"></i> 
        <i class="icon icon-whatsapp" data-title="Apuração Eleições 2020" data-desc="Veja mais em: https://cgn.inf.br/eleicoes/" data-url="https://cgn.inf.br/eleicoes/" data-metrics-location="header %page%" data-metrics-action="compartilhar_%page%_twitter"></i> 
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
        <span class="font">Fonte: TSE</span>
      </h1>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Prefeitos Vue'
    }
  }
}
</script>
