function button_big_gateway(_this) {
	var url=new Array();
	url[0]="https://smartsystemcm.github.io/my_page/writefile.php?data=Client:4";
	url[1]="https://smartsystemcm.github.io/my_page/";

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
			if(_this.value == "ABERTO"){
			  	_this.style.backgroundColor = "#77878A";
			  	_this.value = "FECHADO";
			}
			else{
		 		_this.value = "ABERTO";
		  		_this.style.backgroundColor = "#195B6A";
			}
	    }
	};
	xhttp.open("GET", "writefile.php?data=Client:4", true);
	xhttp.send();
}

function button_small_gateway(_this) {
	var url=new Array();
	url[0]="https://smartsystemcm.github.io/my_page/writefile.php?data=Client:5";
	url[1]="https://smartsystemcm.github.io/my_page/";

    $.get( "writefile.php", { "data": "Client:5"} )
     	.done(function( data ) {
    	alert( "Data Loaded: " + data );
  	});
	if(_this.value == "ABERTO"){
	  	_this.style.backgroundColor = "#77878A";
	  	_this.value = "FECHADO";
	}
	else{
 		_this.value = "ABERTO";
  		_this.style.backgroundColor = "#195B6A";
	}
	location.href = url[1];
}

