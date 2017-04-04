function crearRejilla() {
	var numRejillas = document.getElementById("numRej").value;
	document.getElementById("rejilla").innerHTML = "";
	
	if( !( numRejillas > 5 && numRejillas < 17 ) || numRejillas == "" || Number(numRejillas).toString() == "NaN" ) {
		alert("Numero de rejillas no valido");
		
		return;
	}
	
	var tabla = document.createElement("table");
	var tbody = document.createElement("tbody");
	var fila, boton;
	
	for( var i = 0; i < numRejillas; i++ ) {
		fila = document.createElement("tr");
		
		for( var j = 0; j < numRejillas; j++ ) {
			col = document.createElement("td");
			boton = document.createElement("input");
			boton.setAttribute("type", "button");
			boton.addEventListener("click", cambiarColorBorde );
			
			col.appendChild( boton );
			fila.appendChild( col );
		}
		
		tbody.appendChild( fila );
	}
	
	tabla.setAttribute("boder", "2");
	tabla.setAttribute("class", "center");
	tabla.appendChild( tbody );
	
	document.getElementById("rejilla").appendChild( tabla );
}

function cambiarColorBorde() {
	if( this.style.borderColor == "rgb(0, 255, 64)" ) {
		this.removeAttribute("style");
	} else {
		this.style.borderColor = "#00ff40";
	}
}

function escribirMensaje() {
	var rejilla = document.getElementById("rejilla");
	
	alert( rejilla );
}

function eventoEnter( event ) {
	if( event.key == "Enter" ) {
		crearRejilla();
	}
}















