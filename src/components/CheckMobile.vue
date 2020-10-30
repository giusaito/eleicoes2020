<template>
 <!-- 
  Projeto: eleicoes2020
  Arquivo: CheckMobile.vue
  ---------------------------------------------------------------------
  Autor: Leonardo Nascimento
  E-mail: leonardo.nascimento21@gmail.com
  ---------------------------------------------------------------------
  Data da criação: 19/10/2020 1:57:48 pm
  Last Modified:  30/10/2020 11:44:02 am
  Modified By: Leonardo Nascimento - <leonardo.nascimento21@gmail.com> / MAC OS
  ---------------------------------------------------------------------
  Copyright (c) 2020 Leo
  HISTORY:
  Date      	By	Comments
  ----------	---	---------------------------------------------------------
 -->
  <div></div>
</template>

<script>
export default {
    name: 'CheckMobile',
    data() {
    	return {
    		check: false,
    	}
    },
    methods: {
      mobileCheck(){
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
          let file = document.createElement('link');
          file.rel = 'stylesheet';
          file.href = '/static/template/css/mobile.css?v=2'
          document.head.appendChild(file);
        }else{
         let file = document.createElement('link');
          file.rel = 'stylesheet';
          file.href = '/static/template/css/style.css?v=2'
          document.head.appendChild(file);
        }
      if(process.env.NODE_ENV == "production")
        console.log("%cCGN - CENTRAL GAZETA DE NOTÍCIAS","font-family: 'Times New Roman', Arial, serif; font-weight: bold; color: #289DFD; font-size: 45px;"),console.log("%cSistema desenvolvido por: ","font-family: Arial, serif;color: #000; font-size: 15px;"),console.log("%cGiuliano Saito, Leonardo Nascimento","font-family: Arial, serif; color: black; font-size: 18px; font-weight: bold;"),console.log("%cgiulianosaito@gmail.com, leonardo.nascimento21@gmail.com","font-family: Arial, serif; color: black; font-size: 18px; font-weight: bold;"),console.log=function(){},console.info=function(){},console.warn=function(){};
      }

   	},
    created() {
         this.mobileCheck();
        // alert(this.check);
        console.log('oooi');
    }
}
</script>