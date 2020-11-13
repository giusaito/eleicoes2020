<?php
/*
 * Projeto: eleicoes2020
 * Arquivo: cache.php
 * ---------------------------------------------------------------------
 * Autor: Leonardo Nascimento
 * E-mail: leonardo.nascimento21@gmail.com
 * ---------------------------------------------------------------------
 * Data da criação: 04/11/2020 11:55:24 am
 * Last Modified:  13/11/2020 4:09:09 pm
 * Modified By: Leonardo Nascimento - <leonardo.nascimento21@gmail.com> / MAC OS
 * ---------------------------------------------------------------------
 * Copyright (c) 2020 Leo
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */



ini_set('max_execution_time', 900); //300 seconds = 5 minutes

set_time_limit(900);



$cidades = [ '77615' , '75043' , '74640' , '77631' , '77658' , '77674' , '77690' , '77712' , '74667' , '77739' , '77755' , '75523' , '77798' , '77810' , '75540' , '77836' , '77852' , '75566' , '79910' , '77879' , '77895' , '77917' , '75582' , '77933' , '77950' , '74683' , '79553' , '77976' , '77992' , '78018' , '74705' , '78034' , '74721' , '78050' , '78077' , '78093' , '78115' , '75604' , '78131' , '78158' , '78174' , '78190' , '74748' , '75620' , '78212' , '78239' , '78255' , '78271' , '78298' , '75744'];

$countCity = count($cidades);



$k = 0;
for ($i=0; $i < $countCity; $i++) {
        $url = "https://resultados.tse.jus.br/oficial/ele2020/divulgacao/oficial/426/dados-simplificados/pr/pr".$cidades[$i]."-c0013" ."-e000426-r.json";
        $str = file_get_contents($url);
        $decode = json_decode($str);

        $countCand = count($decode->cand);
        // echo $countCand;
        $z = 0;
        for ($j=0; $j < $countCand ; $j++) { 
            $urlPhoto = "https://resultados.tse.jus.br/oficial/ele2020/divulgacao/oficial/426/fotos/pr/". $decode->cand[$j]->sqcand .".jpeg";
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT , 6);
            curl_setopt($ch, CURLOPT_URL,$urlPhoto);
        
            $result = curl_exec($ch);

            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
                if($httpCode == 200){
                    $diretorio = "../fotos/ver/" . $cidades[$i] . "/";
                    if(!is_dir($diretorio)){
                        mkdir($diretorio,0755);
                    }
                    $filename = $diretorio . $decode->cand[$j]->sqcand . ".jpeg";
                    // if(!file_exists($filename)){
                        // mkdir($diretorio,0755);

                    // $filename = $diretorio .$cidades[$i]. "c0011-" . $code[$j] .'e008334-v.json';
                    $fp = fopen($filename, "w+");

                    fputs($fp, trim($result));
                    fclose($fp);
                // }
                
                    // echo $url;  
                } else {
                    echo "" . $url . ' result ' . $result. ' http err ' . $httpCode . "<br>";
                }

                
            // echo $filename . "<br><br>";
            curl_close($ch);

            // curl_close($ch);
            if($k > 100) {
                $k = 0;
                sleep(2);
                echo 'dormi foto' . "<br>";
            } else {
                $k++;
            }
        }
        echo $cidades[$i] . ' total  - ' . $countCand. '<br/>';
}

