/*Dibujar la rejilla de tamanio 4*/
crearRejilla(4);
new APP.fleissner(".key.grille");

/*Funcion para dibujar la rejilla dado el tamanio*/

function crearRejilla( tam ){
    var indices = [];
    
    for(i = 0; i < tam; i++){
        indices[i] = [];
        for(j = 0; j < tam; j++){
            indices[i][j] = j;
        }
    }
    
    for(m = 1; m < 5; m++){
        contador = 1;
        for(i = 0; i < tam/2; i++){
            for(j = 0; j < tam/2; j++){
                switch(m){
                        case 1:
                            indices[i][j] = contador++;
                        break;
                        case 2:
                            indices[j][tam - i -1] = contador++;
                        break;
                        case 3:
                            indices[tam - j - 1][i] = contador++;
                        break;
                        case 4:
                            indices[tam - i - 1][tam - j -1] = contador++;
                        break;
                }
            }
        }
    }
    
    $('#rejilla').html('');
    
    for(i = 0; i < tam; i++) {
        var fila  = $("<tr>", { "id": i+1 } );
        
        for(j = 0; j < tam; j++){
            fila.append("<td data-id=" + indices[i][j] + " class=''>" + indices[i][j] + "</td>");
        }
        
        $('#rejilla').append( fila );
    }
}

/*Evento cuando se cambia el tamanio de la rejilla*/
$('#dimension').change(function(){
    crearRejilla( $(this).val() );
	new APP.fleissner(".key.grille");
});


$("#rotarD").click( function() {
	var tabla = $("#rejilla").children(); /* Retorna los primeros hijos de la etiqueta tbody */
	var trow, tcol, fila;
	var tbody = $("<tbody>", {"id": "rejilla"} );
	
	for( var j = 0, index = 1; j < tabla.length; j++, index++ ) {
		fila = $("<tr>", { "id": index } );
		
		for( var i = tabla.length; i > 0; i-- ) {
			trow = $("#" + i ).children();
			tcol = trow.toArray();
			
			fila.append("<td data-id=" + tcol[j].getAttribute("data-id") + 
			" class='" + tcol[j].getAttribute("class") + "'>" + tcol[j].innerHTML + "</td>");
		}
		
		tbody.append( fila );
	}
	
	var tabs = $("#rejilla").parent();
	$("#rejilla").remove();
	tabs.append( tbody );
	
} );

$("#rotarI").click( function() {
	var tabla = $("#rejilla").children();
	var trow, tcol, fila;
	var tbody = $("<tbody>", {"id": "rejilla"} );
	
	for( var j = tabla.length - 1, index = 1; j >= 0; j--, index++ ) {
		fila = $("<tr>", { "id": index } );
		
		for( var i = 1; i <= tabla.length; i++ ) {
			trow = $("#" + i ).children();
			tcol = trow.toArray();
			
			fila.append("<td data-id=" + tcol[j].getAttribute("data-id") + 
			" class='" + tcol[j].getAttribute("class") + "'>" + tcol[j].innerHTML + "</td>");
		}
		
		tbody.append( fila );
	}
	
	var tabs = $("#rejilla").parent();
	$("#rejilla").remove();
	tabs.append( tbody );
	
} );

$("#mensaje").click( function() {
    $('#rejilla-mensaje').html('');
    var tabla = $("#rejilla").children();
	var trow, tcol;
	var inputs = $("<input>", { "class" : "x", "type": "text" } );
	var inp;
    var etrow, etcol;
	
	for( var i = 1; i <= tabla.length; i++ ) {
		trow = $("#" + i ).children();
		tcol = trow.toArray();
        etrow = document.createElement("tr");
        etrow.setAttribute('id', 'e' + i);
		for( var j = 0; j < tcol.length; j++ ) {
            var id = tcol[j].getAttribute('data-id');
            etcol = document.createElement('td');
            etcol.setAttribute('data-id', id);
            etcol.setAttribute('style', 'background-color:#2C3B63;');
			if( tcol[j].getAttribute("class") === "X" ) {
				inp = document.createElement("input");
				inp.setAttribute("type", "text");
				inp.setAttribute("class", "X");
				inp.setAttribute("style", "width: 100%; height:33px; margin: 0 0 0 0;");
                inp.setAttribute("maxlength", '1');
				etcol.appendChild( inp );
			}
            etrow.appendChild(etcol);
            $('#rejilla-mensaje').append(etrow);
		}
	}
		
});


















