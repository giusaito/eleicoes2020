<?php
/*
 * Projeto: eleicoes2020
 * Arquivo: download.php
 * ---------------------------------------------------------------------
 * Autor: Leonardo Nascimento
 * E-mail: leonardo.nascimento21@gmail.com
 * ---------------------------------------------------------------------
 * Data da criação: 26/10/2020 2:34:01 pm
 * Last Modified:  28/10/2020 3:54:24 pm
 * Modified By: Leonardo Nascimento - <leonardo.nascimento21@gmail.com> / MAC OS
 * ---------------------------------------------------------------------
 * Copyright (c) 2020 Leo
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */




// $url = "http://dev.cgn.inf.br/json/ele2020/divulgacao/simulado/8707/dados/pr/pr75230-c0011-e008707-v.json";
// $url = "http://dev.cgn.inf.br/json/ele2020/divulgacao/simulado/8707/dados/pr/pr75230-c0011-e008707-006-f.json";


$cidades = ['74012' , '74039' , '74055' , '74071' , '84557' , '74926' , '74098' , '74110' , '79510' , '74136' , '74152' , '74179' , '74101' , '74195' , '74128' , '74217' , '74233' , '74250' , '74276' , '74292' , '75108' , '74314' , '74357' , '75086' , '74373' , '79537' , '74390' , '74411' , '74438' , '74454' , '74470' , '74519' , '74497' , '75124' , '74535' , '74551' , '74578' , '74144' , '75140' , '79812' , '74594' , '75167' , '74616' , '74160' , '74632' , '79839' , '74187' , '74659' , '79855' , '74209' , '74675' , '74691' , '74713' , '74730' , '74756' , '75183' , '74772' , '74780' , '74799' , '74810' , '75205' , '74837' , '74853' , '74225' , '84514' , '74870' , '74896' , '75221' , '74918' , '74934' , '74950' , '74977' , '74993' , '75019' , '79570' , '75035' , '75051' , '75078' , '75094' , '75132' , '75159' , '75175' , '75191' , '75213' , '75230' , '75256' , '75248' , '75272' , '75280' , '75337' , '74241' , '75299' , '75310' , '75264' , '75353' , '75370' , '75396' , '74268' , '75400' , '75418' , '84654' , '75434' , '74942' , '75450' , '75477' , '74284' , '75302' , '75329' , '74306' , '75493' , '74322' , '75515' , '75345' , '84573' , '74349' , '75531' , '75558' , '75574' , '75590' , '75612' , '75639' , '75361' , '79774' , '75655' , '75671' , '74004' , '75698' , '75388' , '79596' , '75710' , '75736' , '75426' , '75752' , '75779' , '75795' , '75817' , '75833' , '75850' , '75876' , '74365' , '75892' , '74020' , '75914' , '75930' , '75957' , '74381' , '75442' , '75973' , '75990' , '76015' , '79618' , '76031' , '76058' , '74403' , '76074' , '76090' , '76112' , '75000' , '76139' , '76155' , '76171' , '74446' , '76198' , '76210' , '76236' , '74462' , '76252' , '76279' , '76295' , '76317' , '76333' , '76350' , '76376' , '76392' , '76414' , '76430' , '76457' , '76473' , '79979' , '76490' , '76511' , '84638' , '76538' , '76554' , '76570' , '74985' , '76597' , '76619' , '74489' , '74047' , '76635' , '76651' , '76678' , '75809' , '84590' , '76694' , '76716' , '76732' , '76759' , '76775' , '76791' , '75469' , '75116' , '76813' , '76830' , '76856' , '76872' , '74330' , '79758' , '76899' , '76910' , '76937' , '74500' , '76953' , '75485' , '76970' , '76996' , '79634' , '74527' , '74543' , '77011' , '74560' , '77038' , '77054' , '84697' , '77070' , '77097' , '77119' , '77135' , '77151' , '77178' , '79650' , '77194' , '77216' , '75027' , '77232' , '74586' , '77259' , '79677' , '79952' , '74608' , '79790' , '75760' , '74420' , '77275' , '77291' , '74063' , '77313' , '77330' , '77356' , '77372' , '77399' , '77410' , '77437' , '77453' , '77470' , '77496' , '74624' , '77518' , '77534' , '77550' , '77577' , '75507' , '79693' , '77593' , '77615' , '75043' , '74640' , '77631' , '77658' , '77674' , '77690' , '77712' , '74667' , '77739' , '77755' , '77771' , '75523' , '77798' , '77810' , '75540' , '77836' , '77852' , '75566' , '79910' , '77879' , '77895' , '77917' , '75582' , '77933' , '77950' , '74683' , '79553' , '77976' , '77992' , '78018' , '74705' , '78034' , '74721' , '78050' , '78077' , '78093' , '78115' , '75604' , '78131' , '78158' , '78174' , '78190' , '74748' , '75620' , '78212' , '78239' , '78255' , '78271' , '78298' , '75744' , '78310' , '78336' , '78352' , '78379' , '78395' , '78417' , '78433' , '78450' , '79715' , '78476' , '78492' , '78514' , '74764' , '74802' , '78530' , '74829' , '74080' , '84670' , '78557' , '78590' , '78611' , '78638' , '78573' , '78654' , '78670' , '78697' , '78719' , '78735' , '78751' , '78778' , '78794' , '79995' , '78816' , '78832' , '84719' , '78859' , '74845' , '78875' , '78891' , '74861' , '78913' , '78930' , '78956' , '78972' , '78999' , '84611' , '75060' , '79014' , '75647' , '79030' , '79057' , '79073' , '75787' , '75663' , '79090' , '79111' , '79731' , '79138' , '79154' , '79170' , '79197' , '79219' , '79235' , '79251' , '79278' , '79294' , '79871' , '74888' , '79316' , '79936' , '84530' , '79332' , '79359' , '79375' , '79391' , '79413' , '74900' , '79898' , '79456' , '74969' , '79472' , '79430' , '79499'];
// $countCity = count($cidades);

$code = ["006-f", "v"];

$k = 0;
for ($i=1; $i < $countCity; $i++) {
    for ($j=0; $j < count($code); $j++) { 
        $url = "http://dev.cgn.inf.br/json/ele2020/divulgacao/simulado/8707/dados/pr/pr".$cidades[$i]."-c0011-e008707-".$code[$j].".json";

        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json');
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT , 3);
        curl_setopt($ch, CURLOPT_URL,$url);
    
        $result = curl_exec($ch);

        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            if($httpCode == 200){
                $diretorio = "../eleicoes/1turno/pr/json/" . $cidades[$i] . "/";
                if(!is_dir($diretorio)){
                    mkdir($diretorio,0755);
                }

                $filename = $diretorio .'c0011-'.$cidades[$i]. $code[$j].'.json';
                $fp = fopen($filename, "w+");

                fputs($fp, trim($result));
                fclose($fp);
                // echo "CGN";
            } else {
                echo "TSE " . $code[$j] . "<br>";
            }

            
        // echo $filename . "<br><br>";
        curl_close($ch);
        $ch = curl_init();
    }
   
    if($k > 60) {
        $k = 0;
        sleep(2);
        echo 'dormi ' . "<br>";
    } else {
        $k++;
    }
    
}


$n = 0;
for ($l=1; $l < $countCity; $l++) {
    for ($m=0; $m < count($code); $m++) { 
        $url = "http://dev.cgn.inf.br/json/ele2020/divulgacao/simulado/8707/dados/pr/pr".$cidades[$l]."-c0013-e008707-".$code[$m].".json";
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json');
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT , 3);
        curl_setopt($ch, CURLOPT_URL,$url);
    
        $result = curl_exec($ch);

        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            if($httpCode == 200){
                $diretorio = "../eleicoes/1turno/pr/json/" . $cidades[$l] . "/";
                if(!is_dir($diretorio)){
                    mkdir($diretorio,0755);
                }

                $filename = $diretorio .'c0013-'.$cidades[$l]. $code[$m].'.json';
                $fp = fopen($filename, "w+");

                fputs($fp, trim($result));
                fclose($fp);
                // echo "CGN";
            } else {
                echo "TSE " . $code[$m] . "<br>";
            }

            
        // echo $filename . "<br><br>";
        curl_close($ch);
    }
   
    if($n > 60) {
        $n = 0;
        sleep(2);
        echo 'dormi 2' . "<br>";
    } else {
        $n++;
    }
    
}
    

    //$this->load->view("eleicoes/buscar", ['eleicoes' => $dddd]);


