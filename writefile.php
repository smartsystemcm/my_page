<?php

function gravar_dados($msg){
	$msg .= "\n";
	//$fileStatus=file_put_contents("datastorage.txt", $msg, FILE_APPEND);
	$fileStatus=file_put_contents("datastorage.txt", $msg);
	if($fileStatus != false){
		echo file_get_contents ('index.html');
		//echo  "SUCCESS. Data written in file.";
	}
	else{
	   echo  "FAIL. Could not connect to file.";
	}
}

function main(){
	while(1){
		$req_dump = print_r($_REQUEST, true);
		$fp = file_put_contents('datastorage.txt', $req_dump, FILE_APPEND);

		if(strlen($_GET["data"]) != 0){
			gravar_dados($GET["data"]);
		}	
	}
}

main();
?>