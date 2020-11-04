<?php
/*
 * Projeto: eleicoes2020
 * Arquivo: simulado-ms.php
 * ---------------------------------------------------------------------
 * Autor: Leonardo Nascimento
 * E-mail: leonardo.nascimento21@gmail.com
 * ---------------------------------------------------------------------
 * Data da criação: 03/11/2020 11:47:54 am
 * Last Modified:  03/11/2020 5:53:34 pm
 * Modified By: Leonardo Nascimento - <leonardo.nascimento21@gmail.com> / MAC OS
 * ---------------------------------------------------------------------
 * Copyright (c) 2020 Leo
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

// $cidades = ["90034" ,"55018" ,"90115"];
$cidades = ["90034" ,"55018" ,"90115" ,"90131" ,"90158" ,"91693" ,"90174" ,"90190" ,"90212" ,"91715" ,"90298" ,"90379" ,"90395" ,"90417" ,"98019" ,"90433" ,"90450" ,"90557" ,"90492" ,"90514" ,"90530" ,"90573" ,"91782" ,"90611" ,"98590" ,"90638" ,"98035" ,"90654" ,"91758" ,"91804" ,"98051" ,"90735" ,"91731" ,"90751" ,"55069" ,"90794" ,"90816" ,"90859" ,"90875" ,"90891" ,"98078" ,"90930" ,"55034" ,"90972" ,"90999" ,"91014" ,"91820" ,"91030" ,"55026" ,"91073" ,"91111" ,"91790" ,"91138" ,"91154" ,"55000" ,"91235" ,"55042" ,"55050" ,"91251" ,"91847" ,"91278" ,"91316" ,"91375" ,"91413" ,"91430" ,"91456" ,"91472" ,"91499" ,"91863" ,"98094" ,"98116" ,"98132" ,"91570" ,"91880" ,"98159" ,"98175" ,"91596" ,"91650" ,"91901"];

$countCity = count($cidades);

$code = ["11", "13"];

// echo $countCity;
$k = 0;
for ($i=0; $i < $countCity; $i++) {
    // for ($j=0; $j < count($code); $j++) { 
        $url = "https://resultados.tse.jus.br/publico/ele2020/divulgacao/simulado/8334/dados-simplificados/ms/ms".$cidades[$i]."-c0011" ."-e008334-r.json";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json');
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT , 6);
        curl_setopt($ch, CURLOPT_URL,$url);
    
        $result = curl_exec($ch);

        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            if($httpCode == 200){
                $diretorio = "../eleicoes/1turno/ms/json/pref/" . $cidades[$i] . "/";
                if(!is_dir($diretorio)){
                    mkdir($diretorio,0755);
                }

                // $filename = $diretorio .$cidades[$i]. "c0011-" . $code[$j] .'e008334-v.json';
                $filename = $diretorio . "ms" .$cidades[$i]. "-c0011-e008334-v.json";
                $fp = fopen($filename, "w+");

                fputs($fp, trim($result));
                fclose($fp);
                // echo $url;  
            } else {
                echo "" . $url . 'result' . $result. ' http err ' . $httpCode . "<br>";
            }

            
        // echo $filename . "<br><br>";
        curl_close($ch);
        $ch = curl_init();
    // }
   
    if($k > 20) {
        $k = 0;
        sleep(2);
        echo 'dormi ' . "<br>";
    } else {
        $k++;
    }
    
}


$k = 0;
for ($i=0; $i < $countCity; $i++) {
    // for ($j=0; $j < count($code); $j++) { 
        $url = "https://resultados.tse.jus.br/publico/ele2020/divulgacao/simulado/8334/dados-simplificados/ms/ms".$cidades[$i]."-c0013" ."-e008334-r.json";
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json');
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT , 6);
        curl_setopt($ch, CURLOPT_URL,$url);
    
        $result = curl_exec($ch);


        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            if($httpCode == 200){
                $diretorio = "../eleicoes/1turno/ms/json/ver/" . $cidades[$i] . "/";
                if(!is_dir($diretorio)){
                    mkdir($diretorio,0755);
                }

                // $filename = $diretorio .$cidades[$i]. "c0011-" . $code[$j] .'e008334-v.json';
                $filename = $diretorio . "ms" .$cidades[$i]. "-c0013-e008334-v.json";
                $fp = fopen($filename, "w+");

                fputs($fp, trim($result));
                fclose($fp);
                // echo $url;  
            } else {
                echo "===" . $url . 'result' . $result. ' http err ' . $httpCode . "<br>";
            }

            
        // echo $filename . "<br><br>";
        curl_close($ch);
        $ch = curl_init();
    // }
   
    if($k > 20) {
        $k = 0;
        sleep(2);
        echo 'dormi ' . "<br>";
    } else {
        $k++;
    }
    
}
    

    //$this->load->view("eleicoes/buscar", ['eleicoes' => $dddd]);


