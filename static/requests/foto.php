<?php
/*
 * Projeto: eleicoes2020
 * Arquivo: cache.php
 * ---------------------------------------------------------------------
 * Autor: Leonardo Nascimento
 * E-mail: leonardo.nascimento21@gmail.com
 * ---------------------------------------------------------------------
 * Data da criação: 04/11/2020 11:55:24 am
 * Last Modified:  12/11/2020 6:27:16 pm
 * Modified By: Leonardo Nascimento - <leonardo.nascimento21@gmail.com> / MAC OS
 * ---------------------------------------------------------------------
 * Copyright (c) 2020 Leo
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */



ini_set('max_execution_time', 900); //300 seconds = 5 minutes

set_time_limit(900);



$cidades = ['74012', '74055', '74071', '84557', '74098', '74110', '79510', '74136', '74152', '74713', '74730', '74756', '75183', '74772', '74780', '74799', '74810', '75205', '74837', '74853', '74225', '84514', '74870', '75221', '74918', '74950', '74950', '74993', '75019', '79570', '75035', '75051', '75078', '75094', '75132', '75159', '75175', '7519', '75213', '75256', '75248', '75280', '75337', '74241', '75299', '75370', '75396', '75418', '84654', '74942', '75450'];


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

