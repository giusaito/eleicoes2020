<?php
/*
 * Projeto: eleicoes2020
 * Arquivo: teste.php
 * ---------------------------------------------------------------------
 * Autor: Leonardo Nascimento
 * E-mail: leonardo.nascimento21@gmail.com
 * ---------------------------------------------------------------------
 * Data da criação: 28/10/2020 3:44:04 pm
 * Last Modified:  29/10/2020 4:30:38 pm
 * Modified By: Leonardo Nascimento - <leonardo.nascimento21@gmail.com> / MAC OS
 * ---------------------------------------------------------------------
 * Copyright (c) 2020 Leo
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

 sleep(1);
 
    $rand = rand(10, 15);

        if($rand == 10 || $rand == 12){
            $rand = 11;
            $url = "https://resultados.tse.jus.br/publico/ele2020/divulgacao/simulado/8334/dados-simplificados/ro/ro00396-c00". $rand ."-e008334-r.json";
        }elseif($rand == 14 || $rand == 15){
            $rand = 13;
            $url = "https://resultados.tse.jus.br/publico/ele2020/divulgacao/simulado/8334/dados-simplificados/ro/ro00396-c00". $rand ."-e008334-r.json";
        }
        else {
            $url = "https://resultados.tse.jus.br/publico/ele2020/divulgacao/simulado/8334/dados-simplificados/ro/ro00396-c00". $rand ."-e008334-r.json";
        }

        echo $rand;

        // $url = "https://resultados.tse.jus.br/publico/ele2020/divulgacao/simulado/8334/dados-simplificados/ro/ro00396-c0011-e008334-r.json";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json');
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT , 3);
        curl_setopt($ch, CURLOPT_URL,$url);
    
        $result = curl_exec($ch);

        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        // echo $httpCode; 
        
            if($httpCode == 200){
                $diretorio = "eleicoes/";
                if(!is_dir($diretorio)){
                    mkdir($diretorio,0755);
                }

                $filename = $diretorio .'ro00396-c0013-e008334-r.json';
                $fp = fopen($filename, "w+");

                fputs($fp, trim($result));
                fclose($fp);
                // echo "CGN " . $filename;
            } else {
                // echo "TSEw " . $httpCode . "<br>";
            }
            
            // echo json_encode($httpCode);
            
        // echo $filename . "<br><br>";
        curl_close($ch);
   
 header("Refresh: 120");

?>

<title> <?php echo " ---- " . $rand . " === "  .$httpCode . " --- " . rand(1, 700); ?></title>
