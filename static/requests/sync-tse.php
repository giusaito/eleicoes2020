<?php


ini_set('max_execution_time', 300); //300 seconds = 5 minutes
set_time_limit(300);

$cidades = ['74934', '75353', '79278', '75230', '74080', '79650', '79839', '79855', '76830', '74012' , '74039' , '74055' , '74071' , '84557' , '74926' , '74098' , '74110' , '79510' , '74136' , '74152' , '74179' , '74101' , '74195' , '74128' , '74217' , '74233' , '74250' , '74276' , '74292' , '75108' , '74314' , '74357' , '75086' , '74373' , '79537' , '74390' , '74411' , '74438' , '74454' , '74470' , '74519' , '74497' , '75124' , '74535' , '74551' , '74578' , '74144' , '75140' , '79812' , '74594' , '75167' , '74616' , '74160' , '74632' , '74187' , '74659' , '74209' , '74675' , '74691' , '74713' , '74730' , '74756' , '75183' , '74772' , '74780' , '74799' , '74810' , '75205' , '74837' , '74853' , '74225' , '84514' , '74870' , '74896' , '75221' , '74918' , '74950' , '74977' , '74993' , '75019' , '79570' , '75035' , '75051' , '75078' , '75094' , '75132' , '75159' , '75175' , '75191' , '75213' , '75256' , '75248' , '75272' , '75280' , '75337' , '74241' , '75299' , '75310' , '75264' , '75370' , '75396' , '74268' , '75400' , '75418' , '84654' , '75434' , '74942' , '75450' , '75477' , '74284' , '75302' , '75329' , '74306' , '75493' , '74322' , '75515' , '75345' , '84573' , '74349' , '75531' , '75558' , '75574' , '75590' , '75612' , '75639' , '75361' , '79774' , '75655' , '75671' , '74004' , '75698' , '75388' , '79596' , '75710' , '75736' , '75426' , '75752' , '75779' , '75795' , '75817' , '75833' , '75850' , '75876' , '74365' , '75892' , '74020' , '75914' , '75930' , '75957' , '74381' , '75442' , '75973' , '75990' , '76015' , '79618' , '76031' , '76058' , '74403' , '76074' , '76090' , '76112' , '75000' , '76139' , '76155' , '76171' , '74446' , '76198' , '76210' , '76236' , '74462' , '76252' , '76279' , '76295' , '76317' , '76333' , '76350' , '76376' , '76392' , '76414' , '76430' , '76457' , '76473' , '79979' , '76490' , '76511' , '84638' , '76538' , '76554' , '76570' , '74985' , '76597' , '76619' , '74489' , '74047' , '76635' , '76651' , '76678' , '75809' , '84590' , '76694' , '76716' , '76732' , '76759' , '76775' , '76791' , '75469' , '75116' , '76813' , '76856' , '76872' , '74330' , '79758' , '76899' , '76910' , '76937' , '74500' , '76953' , '75485' , '76970' , '76996' , '79634' , '74527' , '74543' , '77011' , '74560' , '77038' , '77054' , '84697' , '77070' , '77097' , '77119' , '77135' , '77151' , '77178' , '77194' , '77216' , '75027' , '77232' , '74586' , '77259' , '79677' , '79952' , '74608' , '79790' , '75760' , '74420' , '77275' , '77291' , '74063' , '77313' , '77330' , '77356' , '77372' , '77399' , '77410' , '77437' , '77453' , '77470' , '77496' , '74624' , '77518' , '77534' , '77550' , '77577' , '75507' , '79693' , '77593' , '77615' , '75043' , '74640' , '77631' , '77658' , '77674' , '77690' , '77712' , '74667' , '77739' , '77755' , '77771' , '75523' , '77798' , '77810' , '75540' , '77836' , '77852' , '75566' , '79910' , '77879' , '77895' , '77917' , '75582' , '77933' , '77950' , '74683' , '79553' , '77976' , '77992' , '78018' , '74705' , '78034' , '74721' , '78050' , '78077' , '78093' , '78115' , '75604' , '78131' , '78158' , '78174' , '78190' , '74748' , '75620' , '78212' , '78239' , '78255' , '78271' , '78298' , '75744' , '78310' , '78336' , '78352' , '78379' , '78395' , '78417' , '78433' , '78450' , '79715' , '78476' , '78492' , '78514' , '74764' , '74802' , '78530' , '74829' , '84670' , '78557' , '78590' , '78611' , '78638' , '78573' , '78654' , '78670' , '78697' , '78719' , '78735' , '78751' , '78778' , '78794' , '79995' , '78816' , '78832' , '84719' , '78859' , '74845' , '78875' , '78891' , '74861' , '78913' , '78930' , '78956' , '78972' , '78999' , '84611' , '75060' , '79014' , '75647' , '79030' , '79057' , '79073' , '75787' , '75663' , '79090' , '79111' , '79731' , '79138' , '79154' , '79170' , '79197' , '79219' , '79235' , '79251' , '79294' , '79871' , '74888' , '79316' , '79936' , '84530' , '79332' , '79359' , '79375' , '79391' , '79413' , '74900' , '79898' , '79456' , '74969' , '79472' , '79430' , '79499'];
$countCity = count($cidades);


$k = 0;
for ($i=0; $i < $countCity; $i++) {
        $url = "https://resultados.tse.jus.br/oficial/ele2020/divulgacao/oficial/426/dados-simplificados/pr/pr".$cidades[$i]."-c0011" ."-e000426-r.json";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT , 6);
        curl_setopt($ch, CURLOPT_URL,$url);

        $result = curl_exec($ch);

        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            if($httpCode == 200){
                $diretorio = "../eleicoes/1turno/pr/json/pref/" . $cidades[$i] . "/";
                if(!is_dir($diretorio)){
                    mkdir($diretorio,0755);
                }

                $filename = $diretorio . "pr" .$cidades[$i]. "-c0011-e000426-v.json";
                $fp = fopen($filename, "w+");

                fputs($fp, trim($result));
                fclose($fp);
            } else {
                echo "" . $url . 'result' . $result. ' http err ' . $httpCode . "<br>";
            }
        curl_close($ch);
    if($k > 40) {
        $k = 0;
        sleep(1);
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

$l = 0;
for ($v=0; $v < $countCity; $v++) {
        $urlVer = "https://resultados.tse.jus.br/oficial/ele2020/divulgacao/oficial/426/dados-simplificados/pr/pr".$cidades[$v]."-c0013" ."-e000426-r.json";
        $curlVer = curl_init();
        curl_setopt($curlVer, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curlVer, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curlVer, CURLOPT_CONNECTTIMEOUT , 6);
        curl_setopt($curlVer, CURLOPT_URL,$urlVer);
        $resultVer = curl_exec($curlVer);

        $httpCodeVer = curl_getinfo($curlVer, CURLINFO_HTTP_CODE);
            if($httpCodeVer == 200){
                $diretorio = "../eleicoes/1turno/pr/json/ver/" . $cidades[$v] . "/";
                if(!is_dir($diretorio)){
                    mkdir($diretorio,0755);
                }
                $filename = $diretorio . "pr" .$cidades[$v]. "-c0013-e000426-v.json";
                $fp = fopen($filename, "w+");

                fputs($fp, trim($resultVer));
                fclose($fp);
            } else {
                echo "===" . $urlVer . 'resultVer ' . $resultVer. ' http err ' . $httpCodeVer . "<br>";
            }
        curl_close($curlVer);
    if($l > 40) {
        $l = 0;
        sleep(1);
        echo 'dormi ver' . "<br>";
    } else {
        $l++;
    }
}