<?php
/*
 * Projeto: eleicoes2020
 * Arquivo: download.php
 * ---------------------------------------------------------------------
 * Autor: Leonardo Nascimento
 * E-mail: leonardo.nascimento21@gmail.com
 * ---------------------------------------------------------------------
 * Data da criação: 21/10/2020 11:26:35 am
 * Last Modified:  26/10/2020 1:38:59 pm
 * Modified By: Leonardo Nascimento - <leonardo.nascimento21@gmail.com> / MAC OS
 * ---------------------------------------------------------------------
 * Copyright (c) 2020 Leo
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */


require __DIR__ . '../../../vendor/autoload.php';

use \GuzzleHttp\Client; 

// Prefeito

$url = "http://dev.cgn.inf.br/json/ele2020/divulgacao/simulado/8707/dados/pr/pr75230-c0011-e008707-006-f.json";
$url = "http://dev.cgn.inf.br/json/ele2020/divulgacao/simulado/8707/dados/pr/pr75230-c0011-e008707-v.json";

// Vereador
$url = "http://dev.cgn.inf.br/json/ele2020/divulgacao/simulado/8707/dados/pr/pr75230-c0013-e008707-006-f.json";
$url = "http://dev.cgn.inf.br/json/ele2020/divulgacao/simulado/8707/dados/pr/pr75230-c0013-e008707-006-v.json";



// $baseUrl = "http://dev.cgn.inf.br/json/ele2020/divulgacao/simulado/8707/dados/pr/pr75230-";
$urls = "http://dev.cgn.inf.br/json/ele2020/divulgacao/simulado/8707/dados/pr/pr";
// $codePrefV = "c0011-e008707-v.json";
// $codePrefF = "c0011-e008707-006-f.json";
// $codeVerV =  "c0013-e008707-v.json";
// $codeVerF =  "c0013-e008707-006-f.json";


// $urls = [
//             $baseUrl . $codePrefV,
//             $baseUrl . $codePrefF,
//             $baseUrl . $codeVerV,
//             $baseUrl . $codeVerF
//         ];



$cidades = array(75230);

for ($i=0; $i < 1 ; $i++) { 
  $prefeitoDados = json_decode(file_get_contents($urls.$cidades[0].'-c0011-e008707-006-f.json'), true);
  $prefeitoVotos = json_decode(file_get_contents($urls.$cidades[0].'-c0011-e008707-v.json'), true);
  $countPrefeitoVotos = count($prefeitoVotos['abr']); // Contagem de abr

  $dadosF['cdabr'] = $prefeitoDados['cdabr'];
  $dadosF['nmabr'] = $prefeitoDados['nmabr'];
  $dadosF['turno'] = $prefeitoDados['t'];
  $dadosF['v'] = $prefeitoDados['v'];
  $dadosF['col'] = $prefeitoDados['carg']['col'];
  $dadosFCountPar = count($prefeitoDados['carg']['col']); // Contagem de partidos
  $dadosV['dv'] = $prefeitoVotos['dv'];

    
  for ($i=0 ; $i < $countPrefeitoVotos; $i++) { 
    $dadosV['cand'] = $prefeitoVotos['abr'][$i]['cand'];
    $dadosV['colig'] = $prefeitoVotos['abr'][0]['colig'];
    $dadosV['psa'] = $prefeitoVotos['abr'][$i]['psa'];
    $dadosV['pvnom'] = $prefeitoVotos['abr'][$i]['pvnom'];
    $dadosV['psna'] = $prefeitoVotos['abr'][$i]['psna'];
    $dadosV['van'] = $prefeitoVotos['abr'][$i]['van'];
    $dadosV['sna'] = $prefeitoVotos['abr'][$i]['sna'];
    $dadosV['pst'] = $prefeitoVotos['abr'][$i]['pst'];
    $dadosV['psnt'] = $prefeitoVotos['abr'][$i]['psnt'];
    $dadosV['pvnt'] = $prefeitoVotos['abr'][0]['pvnt'];
    $dadosV['s'] = $prefeitoVotos['abr'][$i]['s'];
    $dadosV['vscv'] = $prefeitoVotos['abr'][$i]['vscv'];
    $dadosV['snt'] = $prefeitoVotos['abr'][$i]['snt'];
    $dadosV['pa'] = $prefeitoVotos['abr'][$i]['pa'];
    $dadosV['pc'] = $prefeitoVotos['abr'][$i]['pc'];
    $dadosV['tv'] = $prefeitoVotos['abr'][$i]['tv'];
  }

  for ($i=0; $i < $dadosFCountPar; $i++) { 
      $dadosFCountPar;
  }

  $merge = array_merge($dadosF, $dadosV);

  print_r($merge);

  foreach($prefeitoVotos as $key => $pdadoV){
    // $dados['coligacao'] = $pdado['col'];
    // $dados['partido'] = $p
    // $dados['cand'] = array_merge($pdado['cand'], $pvoto['cand']);
  }

    // $merge = array_merge($prefeitoDados, $prefeitoVotos);
    // print_r($merge);
    // array_merge
  // }
    //  salvar json com o nome da cidade $cidades[0].json

    // aqui vereadores
}

//  $jobs = [];
//  foreach ($urls as $url){
//    $json = json_decode(file_get_contents($url), true);

//    print_r($json);
//   //  array_push($jobs, $json);
//  }

//  $unique = [];
//  foreach ($jobs as $piece) {
//     $unique = array_merge($unique, $piece);
//  }
//  $retour = json_encode($unique);
//  print_r($retour); //it gives merged json :: {"key1":"value1","key2":"value2","key3":"value3","key4":"value4"}
//  $test[] = $retour;

//  json_encode($test);





// for ($i=0; $i < 10 ; $i++) { 

//         //The resource that we want to download.
//         $fileUrl = $baseUrl . $codePrefV;
        
//         //The path & filename to save to.
//         $saveTo = $codePrefV;
        
//         //Open file handler.
//         $fp = fopen($saveTo, 'w+');
        
//         //If $fp is FALSE, something went wrong.
//         if($fp === false){
//             throw new Exception('Could not open: ' . $saveTo);
//         }
        
//         //Create a cURL handle.
//         $ch = curl_init($fileUrl);
        
//         //Pass our file handle to cURL.
//         curl_setopt($ch, CURLOPT_FILE, $fp);
        
//         //Timeout if the file doesn't download after 20 seconds.
//         curl_setopt($ch, CURLOPT_TIMEOUT, 20);
        
//         //Execute the request.
//         curl_exec($ch);
        
//         //If there was an error, throw an Exception
//         if(curl_errno($ch)){
//             throw new Exception(curl_error($ch));
//         }
        
//         //Get the HTTP status code.
//         $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        
//         //Close the cURL handler.
//         curl_close($ch);
        
//         //Close the file handler.
//         fclose($fp);
        
//         if($statusCode == 200){
//             echo 'Downloaded!';
//         } else{
//             echo "Status Code: " . $statusCode;
//         }


    
    
// }



// echo $baseUrl . $codePrefV;



