<?php
/*
 * Projeto: eleicoes2020
 * Arquivo: ms.php
 * ---------------------------------------------------------------------
 * Autor: Leonardo Nascimento
 * E-mail: leonardo.nascimento21@gmail.com
 * ---------------------------------------------------------------------
 * Data da criação: 03/11/2020 11:42:08 am
 * Last Modified:  03/11/2020 11:55:38 am
 * Modified By: Leonardo Nascimento - <leonardo.nascimento21@gmail.com> / MAC OS
 * ---------------------------------------------------------------------
 * Copyright (c) 2020 Leo
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */


$json = ' [ 
    { "code" : "90034", "cdi" : "5000203", "label" : "ÁGUA CLARA", "c" : "N", "z" : [ "0023" ] }, 
    { "code" : "55018", "cdi" : "5000252", "label" : "ALCINÓPOLIS", "c" : "N", "z" : [ "0038" ] }, 
    { "code" : "90115", "cdi" : "5000609", "label" : "AMAMBAI", "c" : "N", "z" : [ "0001" ] }, 
    { "code" : "90131", "cdi" : "5000708", "label" : "ANASTÁCIO", "c" : "N", "z" : [ "0049" ] }, 
    { "code" : "90158", "cdi" : "5000807", "label" : "ANAURILÂNDIA", "c" : "N", "z" : [ "0006" ] }, 
    { "code" : "91693", "cdi" : "5000856", "label" : "ANGÉLICA", "c" : "N", "z" : [ "0027" ] }, 
    { "code" : "90174", "cdi" : "5000906", "label" : "ANTÔNIO JOÃO", "c" : "N", "z" : [ "0052" ] }, 
    { "code" : "90190", "cdi" : "5001003", "label" : "APARECIDA DO TABOADO", "c" : "N", "z" : [ "0024" ] }, 
    { "code" : "90212", "cdi" : "5001102", "label" : "AQUIDAUANA", "c" : "N", "z" : [ "0010" ] }, 
    { "code" : "91715", "cdi" : "5001243", "label" : "ARAL MOREIRA", "c" : "N", "z" : [ "0019" ] }, 
    { "code" : "90298", "cdi" : "5001508", "label" : "BANDEIRANTES", "c" : "N", "z" : [ "0034" ] }, 
    { "code" : "90379", "cdi" : "5001904", "label" : "BATAGUASSU", "c" : "N", "z" : [ "0006" ] }, 
    { "code" : "90395", "cdi" : "5002001", "label" : "BATAYPORÃ", "c" : "N", "z" : [ "0005" ] }, 
    { "code" : "90417", "cdi" : "5002100", "label" : "BELA VISTA", "c" : "N", "z" : [ "0017" ] }, 
    { "code" : "98019", "cdi" : "5002159", "label" : "BODOQUENA", "c" : "N", "z" : [ "0015" ] }, 
    { "code" : "90433", "cdi" : "5002209", "label" : "BONITO", "c" : "N", "z" : [ "0030" ] }, 
    { "code" : "90450", "cdi" : "5002308", "label" : "BRASILÂNDIA", "c" : "N", "z" : [ "0041" ] }, 
    { "code" : "90557", "cdi" : "5002407", "label" : "CAARAPÓ", "c" : "N", "z" : [ "0028" ] }, 
    { "code" : "90492", "cdi" : "5002605", "label" : "CAMAPUÃ", "c" : "N", "z" : [ "0014" ] }, 
    { "code" : "90514", "cdi" : "5002704", "label" : "CAMPO GRANDE", "c" : "S", "z" : [ "0035", "0036", "0053", "0044", "0054", "0008" ] }, 
    { "code" : "90530", "cdi" : "5002803", "label" : "CARACOL", "c" : "N", "z" : [ "0017" ] }, 
    { "code" : "90573", "cdi" : "5002902", "label" : "CASSILÂNDIA", "c" : "N", "z" : [ "0003" ] }, 
    { "code" : "91782", "cdi" : "5002951", "label" : "CHAPADÃO DO SUL", "c" : "N", "z" : [ "0048" ] }, 
    { "code" : "90611", "cdi" : "5003108", "label" : "CORGUINHO", "c" : "N", "z" : [ "0040" ] }, 
    { "code" : "98590", "cdi" : "5003157", "label" : "CORONEL SAPUCAIA", "c" : "N", "z" : [ "0019" ] }, 
    { "code" : "90638", "cdi" : "5003207", "label" : "CORUMBÁ", "c" : "N", "z" : [ "0007", "0050" ] }, 
    { "code" : "98035", "cdi" : "5003256", "label" : "COSTA RICA", "c" : "N", "z" : [ "0038" ] }, 
    { "code" : "90654", "cdi" : "5003306", "label" : "COXIM", "c" : "N", "z" : [ "0012" ] }, 
    { "code" : "91758", "cdi" : "5003454", "label" : "DEODÁPOLIS", "c" : "N", "z" : [ "0039" ] }, 
    { "code" : "91804", "cdi" : "5003488", "label" : "DOIS IRMÃOS DO BURITI", "c" : "N", "z" : [ "0049" ] }, 
    { "code" : "98051", "cdi" : "5003504", "label" : "DOURADINA", "c" : "N", "z" : [ "0018" ] }, 
    { "code" : "90735", "cdi" : "5003702", "label" : "DOURADOS", "c" : "N", "z" : [ "0018", "0043" ] }, 
    { "code" : "91731", "cdi" : "5003751", "label" : "ELDORADO", "c" : "N", "z" : [ "0025" ] }, 
    { "code" : "90751", "cdi" : "5003801", "label" : "FÁTIMA DO SUL", "c" : "N", "z" : [ "0004" ] }, 
    { "code" : "55069", "cdi" : "5003900", "label" : "FIGUEIRÃO", "c" : "N", "z" : [ "0014" ] }, 
    { "code" : "90794", "cdi" : "5004007", "label" : "GLÓRIA DE DOURADOS", "c" : "N", "z" : [ "0039" ] }, 
    { "code" : "90816", "cdi" : "5004106", "label" : "GUIA LOPES DA LAGUNA", "c" : "N", "z" : [ "0022" ] }, 
    { "code" : "90859", "cdi" : "5004304", "label" : "IGUATEMI", "c" : "N", "z" : [ "0025" ] }, 
    { "code" : "90875", "cdi" : "5004403", "label" : "INOCÊNCIA", "c" : "N", "z" : [ "0023" ] }, 
    { "code" : "90891", "cdi" : "5004502", "label" : "ITAPORÃ", "c" : "N", "z" : [ "0043" ] }, 
    { "code" : "98078", "cdi" : "5004601", "label" : "ITAQUIRAÍ", "c" : "N", "z" : [ "0025" ] }, 
    { "code" : "90930", "cdi" : "5004700", "label" : "IVINHEMA", "c" : "N", "z" : [ "0027" ] }, 
    { "code" : "55034", "cdi" : "5004809", "label" : "JAPORÃ", "c" : "N", "z" : [ "0033" ] }, 
    { "code" : "90972", "cdi" : "5004908", "label" : "JARAGUARI", "c" : "N", "z" : [ "0034" ] }, 
    { "code" : "90999", "cdi" : "5005004", "label" : "JARDIM", "c" : "N", "z" : [ "0022" ] }, 
    { "code" : "91014", "cdi" : "5005103", "label" : "JATEÍ", "c" : "N", "z" : [ "0004" ] }, 
    { "code" : "91820", "cdi" : "5005152", "label" : "JUTI", "c" : "N", "z" : [ "0028" ] }, 
    { "code" : "91030", "cdi" : "5005202", "label" : "LADÁRIO", "c" : "N", "z" : [ "0050" ] }, 
    { "code" : "55026", "cdi" : "5005251", "label" : "LAGUNA CARAPÃ", "c" : "N", "z" : [ "0043" ] }, 
    { "code" : "91073", "cdi" : "5005400", "label" : "MARACAJU", "c" : "N", "z" : [ "0016" ] }, 
    { "code" : "91111", "cdi" : "5005608", "label" : "MIRANDA", "c" : "N", "z" : [ "0015" ] }, 
    { "code" : "91790", "cdi" : "5005681", "label" : "MUNDO NOVO", "c" : "N", "z" : [ "0033" ] }, 
    { "code" : "91138", "cdi" : "5005707", "label" : "NAVIRAÍ", "c" : "N", "z" : [ "0002" ] }, 
    { "code" : "91154", "cdi" : "5005806", "label" : "NIOAQUE", "c" : "N", "z" : [ "0045" ] }, 
    { "code" : "55000", "cdi" : "5006002", "label" : "NOVA ALVORADA DO SUL", "c" : "N", "z" : [ "0011" ] }, 
    { "code" : "91235", "cdi" : "5006200", "label" : "NOVA ANDRADINA", "c" : "N", "z" : [ "0005" ] }, 
    { "code" : "55042", "cdi" : "5006259", "label" : "NOVO HORIZONTE DO SUL", "c" : "N", "z" : [ "0027" ] }, 
    { "code" : "55050", "cdi" : "5006275", "label" : "PARAÍSO DAS ÁGUAS", "c" : "N", "z" : [ "0048" ] }, 
    { "code" : "91251", "cdi" : "5006309", "label" : "PARANAÍBA", "c" : "N", "z" : [ "0013" ] }, 
    { "code" : "91847", "cdi" : "5006358", "label" : "PARANHOS", "c" : "N", "z" : [ "0001" ] }, 
    { "code" : "91278", "cdi" : "5006408", "label" : "PEDRO GOMES", "c" : "N", "z" : [ "0026" ] }, 
    { "code" : "91316", "cdi" : "5006606", "label" : "PONTA PORÃ", "c" : "N", "z" : [ "0019", "0052" ] }, 
    { "code" : "91375", "cdi" : "5006903", "label" : "PORTO MURTINHO", "c" : "N", "z" : [ "0020" ] }, 
    { "code" : "91413", "cdi" : "5007109", "label" : "RIBAS DO RIO PARDO", "c" : "N", "z" : [ "0032" ] }, 
    { "code" : "91430", "cdi" : "5007208", "label" : "RIO BRILHANTE", "c" : "N", "z" : [ "0011" ] }, 
    { "code" : "91456", "cdi" : "5007307", "label" : "RIO NEGRO", "c" : "N", "z" : [ "0040" ] }, 
    { "code" : "91472", "cdi" : "5007406", "label" : "RIO VERDE DE MATO GROSSO", "c" : "N", "z" : [ "0021" ] }, 
    { "code" : "91499", "cdi" : "5007505", "label" : "ROCHEDO", "c" : "N", "z" : [ "0034" ] }, 
    { "code" : "91863", "cdi" : "5007554", "label" : "SANTA RITA DO PARDO", "c" : "N", "z" : [ "0041" ] }, 
    { "code" : "98094", "cdi" : "5007695", "label" : "SÃO GABRIEL DO OESTE", "c" : "N", "z" : [ "0040" ] }, 
    { "code" : "98116", "cdi" : "5007802", "label" : "SELVÍRIA", "c" : "N", "z" : [ "0009" ] }, 
    { "code" : "98132", "cdi" : "5007703", "label" : "SETE QUEDAS", "c" : "N", "z" : [ "0033" ] }, 
    { "code" : "91570", "cdi" : "5007901", "label" : "SIDROLÂNDIA", "c" : "N", "z" : [ "0031" ] }, 
    { "code" : "91880", "cdi" : "5007935", "label" : "SONORA", "c" : "N", "z" : [ "0026" ] }, 
    { "code" : "98159", "cdi" : "5007950", "label" : "TACURU", "c" : "N", "z" : [ "0033" ] }, 
    { "code" : "98175", "cdi" : "5007976", "label" : "TAQUARUSSU", "c" : "N", "z" : [ "0005" ] }, 
    { "code" : "91596", "cdi" : "5008008", "label" : "TERENOS", "c" : "N", "z" : [ "0054" ] }, 
    { "code" : "91650", "cdi" : "5008305", "label" : "TRÊS LAGOAS", "c" : "N", "z" : [ "0009", "0051" ] }, 
    { "code" : "91901", "cdi" : "5008404", "label" : "VICENTINA", "c" : "N", "z" : [ "0004" ] } ]';


    foreach(json_decode($json) as $cidade){
       echo '"' .$cidade->code . '" ,' ;
    }