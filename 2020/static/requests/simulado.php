<?php
/*
 * Projeto: eleicoes2020
 * Arquivo: simulado.php
 * ---------------------------------------------------------------------
 * Autor: Leonardo Nascimento
 * E-mail: leonardo.nascimento21@gmail.com
 * ---------------------------------------------------------------------
 * Data da criação: 03/11/2020 11:47:54 am
 * Last Modified:  12/11/2020 9:25:47 am
 * Modified By: Leonardo Nascimento - <leonardo.nascimento21@gmail.com> / MAC OS
 * ---------------------------------------------------------------------
 * Copyright (c) 2020 Leo
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

// $cidades = ["04278"];

$cidades = ["04014" ,"04502" ,"04030" ,"04057" ,"04260" ,"04073" ,"04090" ,"04111" ,"04138" ,"04154" ,"04723" ,"04170" ,"04340" ,"04197" ,"04219" ,"04235" ,"04588" ,"04251" ,"04278" ,"04804" ,"04294" ,"04049" ,"04316" ,"04332" ,"04227" ,"05932" ,"04448" ,"04359" ,"04375" ,"04391" ,"04766" ,"04413" ,"04707" ,"04430" ,"04456" ,"04472" ,"04499" ,"04510" ,"04537" ,"05819" ,"04529" ,"05851" ,"04553" ,"04740" ,"04570" ,"05975" ,"04120" ,"04596" ,"04561" ,"05878" ,"04006" ,"04618" ,"04634" ,"04650" ,"04677" ,"04189" ,"04693" ,"04715" ,"04731" ,"04200" ,"04758" ,"04774" ,"04790" ,"04103" ,"04812" ,"04839" ,"04855" ,"04871" ,"04642" ,"05770" ,"04898" ,"04910" ,"04936" ,"04863" ,"04952" ,"04979" ,"04480" ,"04600" ,"04995" ,"04383" ,"04421" ,"05010" ,"05037" ,"05053" ,"05070" ,"05959" ,"05916" ,"04162" ,"05096" ,"05835" ,"04308" ,"05118" ,"04782" ,"04626" ,"05134" ,"05150" ,"05177" ,"05193" ,"05215" ,"04685" ,"05673" ,"05690" ,"05738" ,"05894" ,"05231" ,"05258" ,"04243" ,"05274" ,"05290" ,"04146" ,"05991" ,"05312" ,"05339" ,"05355" ,"05371" ,"05398" ,"05410" ,"04464" ,"05436" ,"05452" ,"05479" ,"05797" ,"04820" ,"04065" ,"05495" ,"05517" ,"05533" ,"04847" ,"05550" ,"05576" ,"04022" ,"04545" ,"04367" ,"05592" ,"04669" ,"04286" ,"04081" ,"05614" ,"04324" ,"05754" ,"05630" ,"05657" ,"04405" ,"05711"];

$countCity = count($cidades);


$code = ["11", "13"];

$k = 0;
for ($i=0; $i < $countCity; $i++) {
        $url = "https://resultados.tse.jus.br/publico/ele2020/divulgacao/simulado/8334/dados-simplificados/pa/pa".$cidades[$i]."-c0011" ."-e008334-r.json";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT , 4);
        curl_setopt($ch, CURLOPT_URL,$url);

        $result = curl_exec($ch);

        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            if($httpCode == 200){
                $diretorio = "../eleicoes/1turno/pa/json/pref/" . $cidades[$i] . "/";
                if(!is_dir($diretorio)){
                    mkdir($diretorio,0755);
                }

                $filename = $diretorio . "pa" .$cidades[$i]. "-c0011-e008334-v.json";
                $fp = fopen($filename, "w+");

                fputs($fp, trim($result));
                fclose($fp);
            } else {
                echo "" . $url . 'result' . $result. ' http err ' . $httpCode . "<br>";
            }
        curl_close($ch);
    if($k > 20) {
        $k = 0;
        sleep(2);
        echo 'dormi pref' . "<br>";
    } else {
        $k++;
    }

}


// ====================================================================================================================================


// Envia solicitação de limpeza de cache Desktop
    sleep(2);
    $curlCacheDesk = curl_init();
    curl_setopt_array($curlCacheDesk, array(
    CURLOPT_URL => "https://api.edgecast.com/v2/mcc/customers/DFA6E/edge/purge",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 2,
    CURLOPT_TIMEOUT => 4,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "PUT",
    CURLOPT_POSTFIELDS =>"{\"MediaPath\":\"https://cgn.inf.br/eleicoes/2020/static/eleicoes/1turno/pa/*\", \"MediaType\":\"3\"}",
    CURLOPT_HTTPHEADER => array(
            "Authorization: TOK:BQaM1OcpJC06xCsJVWjKd4rcgaRXneoq",
            "Accept: application/json",
            "Content-Type: application/json",
            "Host: api.edgecast.com",
            "MediaPath: https://cgn.inf.br/eleicoes/2020//static/eleicoes/1turno/pa/*",
            "MediaType: 3"
        ),
    ));

    $responseCacheDesk = curl_exec($curlCacheDesk);
    $httpCodeCacheDesk = curl_getinfo($curlCacheDesk, CURLINFO_HTTP_CODE);
    curl_close($curlCacheDesk);

    if($httpCodeCacheDesk != 200){
        $decode = json_decode($responseCacheDesk);
        $to = "webmaster@cgn.inf.br";
        $subject = "Erro ao limpar o cache Desktop - ELEICOES 2020";

        $message = "
            Ocorreu um erro ao tentar limpar o cache no Desktop código $httpCodeCacheDesk resposta $decode->Message
        ";

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: <webmaster@cgn.inf.br>' . "\r\n";
        mail($to,$subject,$message,$headers);
    }

    echo 'cache purge Desk ' . $httpCodeCacheDesk . '<br><br>';

// ====================================================================================================================================

// Envia solicitação de limpeza de cache Mobile
    $curlCacheMobile = curl_init();
    curl_setopt_array($curlCacheMobile, array(
    CURLOPT_URL => "https://api.edgecast.com/v2/mcc/customers/DFA6E/edge/purge",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 2,
    CURLOPT_TIMEOUT => 4,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "PUT",
    CURLOPT_POSTFIELDS =>"{\"MediaPath\":\"https://cgn.inf.br/mobile/eleicoes/2020/static/eleicoes/1turno/pa/*\", \"MediaType\":\"3\"}",
    CURLOPT_HTTPHEADER => array(
            "Authorization: TOK:BQaM1OcpJC06xCsJVWjKd4rcgaRXneoq",
            "Accept: application/json",
            "Content-Type: application/json",
            "Host: api.edgecast.com",
            "MediaPath: https://cgn.inf.br/mobile/eleicoes/2020/static/eleicoes/1turno/pa/*",
            "MediaType: 3"
        ),
    ));

    $response = curl_exec($curlCacheMobile);
    $httpCodeCacheMobile = curl_getinfo($curlCacheMobile, CURLINFO_HTTP_CODE);
    curl_close($curlCacheMobile);

    if($httpCodeCacheMobile != 200){
        $decode = json_decode($response);
        $to = "webmaster@cgn.inf.br";
        $subject = "Erro ao limpar o cache Mobile - ELEICOES 2020";

        $message = "
            Ocorreu um erro ao tentar limpar o cache no mobile código $httpCodeCacheMobile resposta $decode->Message
        ";

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: <webmaster@cgn.inf.br>' . "\r\n";
        mail($to,$subject,$message,$headers);

    }
    echo 'cache purge Mobile ' . $httpCodeCacheMobile . '<br><br>';

// ====================================================================================================================================

$l = 0;
for ($v=0; $v < $countCity; $v++) {
        $urlVer = "https://resultados.tse.jus.br/publico/ele2020/divulgacao/simulado/8334/dados-simplificados/pa/pa".$cidades[$v]."-c0013" ."-e008334-r.json";
        $curlVer = curl_init();
        curl_setopt($curlVer, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curlVer, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curlVer, CURLOPT_CONNECTTIMEOUT , 4);
        curl_setopt($curlVer, CURLOPT_URL,$urlVer);
        $resultVer = curl_exec($curlVer);

        $httpCodeVer = curl_getinfo($curlVer, CURLINFO_HTTP_CODE);
            if($httpCodeVer == 200){
                $diretorio = "../eleicoes/1turno/pa/json/ver/" . $cidades[$v] . "/";
                if(!is_dir($diretorio)){
                    mkdir($diretorio,0755);
                }
                $filename = $diretorio . "pa" .$cidades[$v]. "-c0013-e008334-v.json";
                $fp = fopen($filename, "w+");

                fputs($fp, trim($resultVer));
                fclose($fp);
            } else {
                echo "===" . $urlVer . 'resultVer ' . $resultVer. ' http err ' . $httpCodeVer . "<br>";
            }
        curl_close($curlVer);
    if($l > 30) {
        $l = 0;
        sleep(2);
        echo 'dormi ver' . "<br>";
    } else {
        $l++;
    }
}