function button_big_gateway(_this) {
	var url=new Array();
	url[0]="https://smartsystemcm.github.io/my_page/writefile.php?data=Client:4";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url[0], false ); // false for synchronous request
    xmlHttp.send("Client:4");


	location.href = url[0];
	if(_this.value == "ABERTO"){
	  	_this.style.backgroundColor = "#77878A";
	  	_this.value = "FECHADO";
	}
	else{
 		_this.value = "ABERTO";
  		_this.style.backgroundColor = "#195B6A";
	}
	
    return xmlHttp.responseText;

}

function button_small_gateway(_this) {
	var url=new Array();
	url[0]="https://smartsystemcm.github.io/my_page/writefile.php?data=Client:5";

	location.href = url[0];
	if(_this.value == "ABERTO"){
	  	_this.style.backgroundColor = "#77878A";
	  	_this.value = "FECHADO";
	}
	else{
 		_this.value = "ABERTO";
  		_this.style.backgroundColor = "#195B6A";
	}
}