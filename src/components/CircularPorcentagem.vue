<template><template>
 <!-- 
  Projeto: eleicoes2020
  Arquivo: CircularPorcentagem.vue
  ---------------------------------------------------------------------
  Autor: Giuliano Saito
  E-mail: giulianosaito@gmail.com
  ---------------------------------------------------------------------
  Data da criação: 30/10/2020 2:51:42 pm
  Last Modified:  30/10/2020 2:53:57 pm
  Modified By: Giuliano Saito - <giulianosaito@gmail.com> / MAC OS
  ---------------------------------------------------------------------
  Copyright (c) 2020 BEWWEB
  HISTORY:
  Date      	By	Comments
  ----------	---	---------------------------------------------------------
 -->



<div>
    <svg class="stat-circle" viewBox="1.6 1.6 16.8 16.8">
        <circle class="bg" cx="10" cy="10" r="8"/></circle>
        <circle class="progress" cx="10" cy="10" r="8" :data-percentage="percentage"/></circle>
        <text x="62%" y="70%">{{ percentage }}%</text>
    </svg>
</div>
</template>

