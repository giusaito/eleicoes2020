<?php
/*
 * Projeto: eleicoes2020
 * Arquivo: simulado-pa.php
 * ---------------------------------------------------------------------
 * Autor: Leonardo Nascimento
 * E-mail: leonardo.nascimento21@gmail.com
 * ---------------------------------------------------------------------
 * Data da criação: 03/11/2020 11:47:54 am
 * Last Modified:  04/11/2020 2:25:46 pm
 * Modified By: Leonardo Nascimento - <leonardo.nascimento21@gmail.com> / MAC OS
 * ---------------------------------------------------------------------
 * Copyright (c) 2020 Leo
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

// $cidades = ["90034" ,"55018" ,"90115"];
$cidades = ["04014" ,"04502" ,"04030" ,"04057" ,"04260" ,"04073" ,"04090" ,"04111" ,"04138" ,"04154" ,"04723" ,"04170" ,"04340" ,"04197" ,"04219" ,"04235" ,"04588" ,"04251" ,"04278" ,"04804" ,"04294" ,"04049" ,"04316" ,"04332" ,"04227" ,"05932" ,"04448" ,"04359" ,"04375" ,"04391" ,"04766" ,"04413" ,"04707" ,"04430" ,"04456" ,"04472" ,"04499" ,"04510" ,"04537" ,"05819" ,"04529" ,"05851" ,"04553" ,"04740" ,"04570" ,"05975" ,"04120" ,"04596" ,"04561" ,"05878" ,"04006" ,"04618" ,"04634" ,"04650" ,"04677" ,"04189" ,"04693" ,"04715" ,"04731" ,"04200" ,"04758" ,"04774" ,"04790" ,"04103" ,"04812" ,"04839" ,"04855" ,"04871" ,"04642" ,"05770" ,"04898" ,"04910" ,"04936" ,"04863" ,"04952" ,"04979" ,"04480" ,"04600" ,"04995" ,"04383" ,"04421" ,"05010" ,"05037" ,"05053" ,"05070" ,"05959" ,"05916" ,"04162" ,"05096" ,"05835" ,"04308" ,"05118" ,"04782" ,"04626" ,"05134" ,"05150" ,"05177" ,"05193" ,"05215" ,"04685" ,"05673" ,"05690" ,"05738" ,"05894" ,"05231" ,"05258" ,"04243" ,"05274" ,"05290" ,"04146" ,"05991" ,"05312" ,"05339" ,"05355" ,"05371" ,"05398" ,"05410" ,"04464" ,"05436" ,"05452" ,"05479" ,"05797" ,"04820" ,"04065" ,"05495" ,"05517" ,"05533" ,"04847" ,"05550" ,"05576" ,"04022" ,"04545" ,"04367" ,"05592" ,"04669" ,"04286" ,"04081" ,"05614" ,"04324" ,"05754" ,"05630" ,"05657" ,"04405" ,"05711"];

$countCity = count($cidades);

echo $countCity;

$code = ["11", "13"];

// echo $countCity;
$k = 0;
for ($i=0; $i < $countCity; $i++) {
    // for ($j=0; $j < count($code); $j++) { 
        $url = "https://resultados.tse.jus.br/publico/ele2020/divulgacao/simulado/8334/dados-simplificados/pa/pa".$cidades[$i]."-c0011" ."-e008334-r.json";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json');
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT , 6);
        curl_setopt($ch, CURLOPT_URL,$url);
    
        $result = curl_exec($ch);

        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            if($httpCode == 200){
                $diretorio = "../eleicoes/1turno/pa/json/pref/" . $cidades[$i] . "/";
                if(!is_dir($diretorio)){
                    mkdir($diretorio,0755);
                }

                // $filename = $diretorio .$cidades[$i]. "c0011-" . $code[$j] .'e008334-v.json';
                $filename = $diretorio . "pa" .$cidades[$i]. "-c0011-e008334-v.json";
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
        $url = "https://resultados.tse.jus.br/publico/ele2020/divulgacao/simulado/8334/dados-simplificados/pa/pa".$cidades[$i]."-c0013" ."-e008334-r.json";
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json');
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT , 6);
        curl_setopt($ch, CURLOPT_URL,$url);
    
        $result = curl_exec($ch);


        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            if($httpCode == 200){
                $diretorio = "../eleicoes/1turno/pa/json/ver/" . $cidades[$i] . "/";
                if(!is_dir($diretorio)){
                    mkdir($diretorio,0755);
                }

                // $filename = $diretorio .$cidades[$i]. "c0011-" . $code[$j] .'e008334-v.json';
                $filename = $diretorio . "pa" .$cidades[$i]. "-c0013-e008334-v.json";
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


