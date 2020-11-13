<?php
/*
 * Projeto: eleicoes2020
 * Arquivo: sync-unitario.php
 * ---------------------------------------------------------------------
 * Autor: Leonardo Nascimento
 * E-mail: leonardo.nascimento21@gmail.com
 * ---------------------------------------------------------------------
 * Data da criação: 13/11/2020 4:23:04 pm
 * Last Modified:  13/11/2020 4:34:05 pm
 * Modified By: Leonardo Nascimento - <leonardo.nascimento21@gmail.com> / MAC OS
 * ---------------------------------------------------------------------
 * Copyright (c) 2020 Leo
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */



 $code = $_GET['code'];

 if(!$code){
     echo '404';
 }


ini_set('max_execution_time', 300); //300 seconds = 5 minutes
set_time_limit(300);


    $url = "https://resultados.tse.jus.br/oficial/ele2020/divulgacao/oficial/426/dados-simplificados/pr/pr".$code."-c0011" ."-e000426-r.json";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT , 6);
    curl_setopt($ch, CURLOPT_URL,$url);

    $result = curl_exec($ch);

    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        if($httpCode == 200){
            $diretorio = "../eleicoes/1turno/pr/json/pref/" . $code . "/";
            if(!is_dir($diretorio)){
                mkdir($diretorio,0755);
            }

            $filename = $diretorio . "pr" .$code. "-c0011-e000426-v.json";
            $fp = fopen($filename, "w+");

            fputs($fp, trim($result));
            fclose($fp);
        } else {
            echo "" . $url . 'result' . $result. ' http err ' . $httpCode . "<br>";
        }
    curl_close($ch);


// ====================================================================================================================================


// Envia solicitação de limpeza de cache Desktop
  
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
    CURLOPT_POSTFIELDS =>"{\"MediaPath\":\"https://cgn.inf.br/eleicoes/2020/static/eleicoes/1turno/pr/*\", \"MediaType\":\"3\"}",
    CURLOPT_HTTPHEADER => array(
            "Authorization: TOK:BQaM1OcpJC06xCsJVWjKd4rcgaRXneoq",
            "Accept: application/json",
            "Content-Type: application/json",
            "Host: api.edgecast.com",
            "MediaPath: https://cgn.inf.br/eleicoes/2020//static/eleicoes/1turno/pr/*",
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
    CURLOPT_POSTFIELDS =>"{\"MediaPath\":\"https://cgn.inf.br/mobile/eleicoes/2020/static/eleicoes/1turno/pr/*\", \"MediaType\":\"3\"}",
    CURLOPT_HTTPHEADER => array(
            "Authorization: TOK:BQaM1OcpJC06xCsJVWjKd4rcgaRXneoq",
            "Accept: application/json",
            "Content-Type: application/json",
            "Host: api.edgecast.com",
            "MediaPath: https://cgn.inf.br/mobile/eleicoes/2020/static/eleicoes/1turno/pr/*",
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



    $urlVer = "https://resultados.tse.jus.br/oficial/ele2020/divulgacao/oficial/426/dados-simplificados/pr/pr" . $code ."-c0013" ."-e000426-r.json";
    $curlVer = curl_init();
    curl_setopt($curlVer, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curlVer, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curlVer, CURLOPT_CONNECTTIMEOUT , 6);
    curl_setopt($curlVer, CURLOPT_URL,$urlVer);
    $resultVer = curl_exec($curlVer);

    $httpCodeVer = curl_getinfo($curlVer, CURLINFO_HTTP_CODE);
        if($httpCodeVer == 200){
            $diretorio = "../eleicoes/1turno/pr/json/ver/" . $code . "/";
            if(!is_dir($diretorio)){
                mkdir($diretorio,0755);
            }
            $filename = $diretorio . "pr" .$code . "-c0013-e000426-v.json";
            $fp = fopen($filename, "w+");

            fputs($fp, trim($resultVer));
            fclose($fp);
        } else {
            echo "===" . $urlVer . 'resultVer ' . $resultVer. ' http err ' . $httpCodeVer . "<br>";
        }
    curl_close($curlVer);
