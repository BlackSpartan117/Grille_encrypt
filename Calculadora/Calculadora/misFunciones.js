
function resultado() {
	var operacionUsuario = document.getElementById("Operacion").value;
	var numerosYoperandos = operacionUsuario.split(" ");
	
	numerosYoperandos = realizarOperaciones( numerosYoperandos, "x", "÷" );
	if( numerosYoperandos === "MAL" ) {
		numerosYoperandos = "SYNTAXIS ERROR";
	} else {
		numerosYoperandos = realizarOperaciones( numerosYoperandos, "+", "-" );
	}
	
	document.getElementById("resp").innerHTML = numerosYoperandos;
	document.getElementById("resp").style.display = "block";
}

function realizarOperaciones( numerosYoperandos, oper1, oper2  ) {
	var num1, num2, operando, resultado;
	var n = numerosYoperandos.length;
	
	for( var i = 0; i < numerosYoperandos.length; i++ ) {
		if( numerosYoperandos[i] == oper1 || numerosYoperandos[i] == oper2 ) { //isNan( NaN ) == true 
			if( i - 1 >= 0 && i + 1 < numerosYoperandos.length ) {
				num1 = parseFloat( numerosYoperandos[i-1] );
				num2 = parseFloat( numerosYoperandos[i+1] );
				
				if( !isNaN( num1 ) && !isNaN( num2 ) ) {
					if( numerosYoperandos[i] == "x" ) {
						resultado = num1 * num2;
					} else if( numerosYoperandos[i] == "÷" ) {
						resultado = num1 / num2;
					} else if( numerosYoperandos[i] == "+" ) {
						resultado = num1 + num2;
					} else if( numerosYoperandos[i] == "-" ) {
						resultado = num1 - num2;
					}
				} else {
					return "MAL";
				}
				
				numerosYoperandos = reacomodarArreglo( numerosYoperandos, i, resultado );
				n = numerosYoperandos.length;
				i = 0;
			}
		}
	}
	
	return numerosYoperandos;
}

function reacomodarArreglo( array, index, valor ) {
	var arrayAux = [];
	
	for( var i = 0; i < array.length; i++ ) {
		if( i != index - 1 ) {
			arrayAux.push( array[i] );
		} else {
			arrayAux.push( valor );
			i += 2;
		}
	}
	
	return arrayAux;
}

function agregarValorTecla( id ) {
	var valorTecla = id.value;
	var pantalla = document.getElementById("Operacion").value;
	
	if( valorTecla != "10x" )  {
		pantalla += valorTecla;
	} else {
		pantalla += "x";
		pantalla += valorTecla;
	}
	
	document.getElementById("Operacion").value = pantalla;
}

function limpiar( id ) {
	var opcion = id.value;
	var pantalla = document.getElementById("Operacion").value;
	
	if( opcion == "AC" ) {
		document.getElementById("Operacion").value = "";
	} else {
		if( pantalla.substr( pantalla.length - 3, pantalla.length ) == "10x" ) {
			pantalla = pantalla.substr( 0, pantalla.length - 3 );
			document.getElementById("Operacion").value = pantalla;
		} else {
			pantalla = pantalla.substr( 0, pantalla.length - 1 );
			document.getElementById("Operacion").value = pantalla;
		}
	}
	
	document.getElementById("resp").style.display = "none";
}

function agregarEvento() {
	var botones = "botones";
	var nodos;
	var numNodos;
	
	for( var j = 1; j <= 4; j++ ) {
		botones += j;
		nodos = document.getElementById( botones ).children;
		numNodos = nodos.length;
		botones = botones.substr( 0, botones.length - 1 );
		
		for( var i = 0; i < numNodos; i++ ) {
			if( j != 4 ) {
				if( j == 1 && i >= numNodos - 2 ) {
					nodos[i].setAttribute("onclick", "limpiar( this )" );
				} else {
					nodos[i].setAttribute("onclick", "agregarValorTecla( this )" );
				}
			} else if( i < numNodos - 1 ) {
				nodos[i].setAttribute("onclick", "agregarValorTecla( this )" );
			}
		}
	}
}