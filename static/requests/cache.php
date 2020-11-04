<?php
/*
 * Projeto: eleicoes2020
 * Arquivo: cache.php
 * ---------------------------------------------------------------------
 * Autor: Leonardo Nascimento
 * E-mail: leonardo.nascimento21@gmail.com
 * ---------------------------------------------------------------------
 * Data da criação: 04/11/2020 11:55:24 am
 * Last Modified:  04/11/2020 2:14:15 pm
 * Modified By: Leonardo Nascimento - <leonardo.nascimento21@gmail.com> / MAC OS
 * ---------------------------------------------------------------------
 * Copyright (c) 2020 Leo
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */


$ch = curl_init("https://api.gocache.com.br/v1/cache/cgn.inf.br");
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array("Authorization: TOK:12345678-1234-1234-1234-1234567890ab"));

    $urls = array(
        "urls[1]=https://cgn.inf.br/",

        // "urls[2]=https://www.cgn.inf.br/",

        "urls[3]=https://cgn.inf.br/|mobile",

        "urls[4]=https://cgn.inf.br/?CGNAPP=TRUE",

        "urls[5]=https://www.cgn.inf.br/|mobile"

        // "urls[6]=https://cgn.inf.br/editoria/*",

        // "urls[7]=https://www.cgn.inf.br/editoria/*",

        // "urls[8]=https://cgn.inf.br/mais-noticias*"
    );

    curl_setopt($ch, CURLOPT_POSTFIELDS, implode("&", $urls));

    $response = curl_exec($ch);
    $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    curl_close($ch);

    print_r($response);