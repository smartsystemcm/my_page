function button_big_gateway(_this) {
	var url=new Array();
	url[0]="http://cg-pagina-web-marcelo.1d35.starter-us-east-1.openshiftapps.com/writefile.php?data=Client:4";

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

function button_small_gateway(_this) {
	var url=new Array();
	url[0]="http://cg-pagina-web-marcelo.1d35.starter-us-east-1.openshiftapps.com/writefile.php?data=Client:5";

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