var cols = 0, rows = 0;
var matriz = [];

$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}

function mostrarPanelTransposicionColumnas(){
	$("#pnl-Interactivo5").slideToggle(1000);
	$("#contenidoPagina").slideToggle(1000);
}

function crearPanelCifradoTransposicionColumas(){
	for(var i = 0 ; i < rows*cols ; i++){
        $('#textoCifradoColumnas').append('<label class="circulo" id="TC-Ccell1'+i+'"></label>');
    }

	$("#table-transposicionColumnas").css("text-align","center");
}

function crearPanelDescifradoTransposicionColumas(){
	for(var i = 0 ; i < rows*cols ; i++){
        $('#textoDescifradoColumnas').append('<label class="circulo" id="TC-MCcell1'+i+'"></label>');
    }

	$("#table-transposicionColumnas2").css("text-align","center");
}

function cerrarPanelTransposicionColumnas(){
	$("#pnl-Interactivo5").slideToggle(1000);
	$("#contenidoPagina").slideToggle(1000);

	limpiaPanelTransposicionColumnas();
}

function limpiaPanelTransposicionColumnas(){
	$("#TCrow0").empty();
	$("#TCrow1").empty();
	$("#TCrow2").empty();
	$("#TCrow3").empty();
	$("#TCrow4").empty();
	$("#TCrow5").empty();
	$("#TCrow6").empty();
	$("#in-textoPlanoTransposicionColumnas").val("");
	$('#in-claveCifradoTransposicionColumnas').val("");
	$("#out-textoCifradoTransposicionColumnas").val("");

	$("#TCrow20").empty();
	$("#TCrow21").empty();
	$("#TCrow22").empty();
	$("#TCrow23").empty();
	$("#TCrow24").empty();
	$("#TCrow25").empty();
	$("#TCrow26").empty();
	$("#in-textoPlanoCifradoTransposicionColumnas").val("");
	$('#in-claveDescifradoTransposicionColumnas').val("");
	$("#out-textoDescifradoTransposicionColumnas").val("");
}

function burbuja(clave){
	var aux;
	var ordenados = new Array(clave.length);

	for(var i = 0 ; i < clave.length ; i++){
		ordenados[i] = i;
	}

	for(var i = 0 ; i < (clave.length-1) ; i++){
	    for(j = 0 ; j < (clave.length-i) ; j++){
	        if(clave[j] > clave[j+1]){
				aux = clave[j];
				clave[j] = clave[j+1];
				clave[j+1] = aux;

				aux = ordenados[j];
				ordenados[j] = ordenados[j+1];
				ordenados[j+1] = aux;
	        }
 		}
    }

    return ordenados;
}

async function cifrarTransposicionColumnas(){
	$("#btn-cifrarColumnas").attr("disabled","disabled");
	$("#btn-cifrarColumnas").html('<i class="fa fa-spinner fa-spin"></i> Cifrando...');
	
	var plano = ($("#in-textoPlanoTransposicionColumnas").val().toLowerCase()).split("");
    var clave = ($("#in-claveCifradoTransposicionColumnas").val().toLowerCase()).split("");
    var texto_length = plano.length;

    var cadenaCifrado = "";
    var k = 0, l = 0;
    var matriz = new Array(7);
    var orden;
    
	$("#TCrow0").empty();
    $("#TCrow1").empty();
	$("#TCrow2").empty();
	$("#TCrow3").empty();
	$("#TCrow4").empty();
	$("#TCrow5").empty();
	$("#TCrow6").empty();
	$('#textoCifradoColumnas').empty();

	$("#out-textoCifradoTransposicionColumnas").val("");

	cols = clave.length;
	rows = (((texto_length/cols - Math.round(texto_length/cols)) < 0.5 && (texto_length/cols - Math.round(texto_length/cols)) > 0)?Math.round(texto_length/cols)+1:Math.round(texto_length/cols)) + 2;

	crearPanelCifradoTransposicionColumas();

	$('#TCdiv1').html('Se toman los caracteres que conforman la llave y se enumeran por orden alfabético: a=0 , b=1, ..., z=25.');
	$('#TCdiv1').slideToggle(1000);

	await sleep(6000);
	$('#TCdiv1').scrollView();

	for (var i = 0 ; i < rows ; i++) {
		for(var j = 0 ; j < cols ; j++){
			$("#TCrow"+i).append('<td id="TCcell' + i + '-' + j + '"></td>');
		}
	}

	for(var i = 0 ; i < cols ; i++){
		$("#TCcell0-"+i).addClass('title-table');
		$("#TCcell1-"+i).addClass('title-table2');
	}

	orden = new Array(cols);

	for (var i = 0 ; i < 7 ; i++) {
	   matriz[i] = new Array(cols);
	}

	//Colocar Llave
	for(var i = 0 ; i < cols ; i++){
		$("#TCcell0-"+i).html(clave[i]);
		$("#TCcell0-"+i).addClass('parpadeocorto');

		await sleep(500);

		$("#TCcell0-"+i).removeClass('parpadeocorto');
	}

	for(var i = 0 ; i < cols ; i++){
		$("#TCcell1-"+i).html(clave[i].charCodeAt()-97);

		$("#TCcel1l-"+i).addClass('parpadeocorto');

		await sleep(500);

		$("#TCcell1-"+i).removeClass('parpadeocorto');

		matriz[1][i] = clave[i].charCodeAt()-65;
	}

	orden = burbuja(matriz[1]);

	$('#TCdiv1').slideToggle(1000);
    
    await sleep(1000);

    $('#TCdiv1').html('El mensaje en claro se reescribe debajo de la llave enumerada formando varios renglones. Se usa la letra X para completar un renglón.');
	$('#TCdiv1').slideToggle(1000);

	await sleep(7000);
	$('#TCdiv1').scrollView();

	for(var i = 2 ; i < rows ; i++){
		for(var j = 0 ; j < cols ; j++){
			if(plano[k] != undefined){
				$("#TCcell"+i+"-"+j).html(plano[k]);

				$("#TCcell"+i+"-"+j).addClass('parpadeocorto');

				await sleep(500);

				$("#TCcell"+i+"-"+j).removeClass('parpadeocorto');

				matriz[i][j] = plano[k++];
			}
			else{
				$("#TCcell"+i+"-"+j).html("X");

				$("#TCcell"+i+"-"+j).addClass('parpadeocorto');

				await sleep(500);

				$("#TCcell"+i+"-"+j).removeClass('parpadeocorto');

				matriz[i][j] = "x";	
			}
		}
	}

	$('#TCdiv1').slideToggle(1000);
    
    await sleep(1000);

    $('#TCdiv1').html('El criptograma se obtiene escribiendo columna por columna en orden numerico.');
	$('#TCdiv1').slideToggle(1000);

	await sleep(5000);
	$('#TCdiv1').scrollView();

	for(var i = 0 ; i < cols ; i++){
		$("#TCcell0-"+orden[i]).addClass('seleccionado');
		$("#TCcell1-"+orden[i]).addClass('seleccionado');

		for(var j = 2 ; j < rows ; j++){
			cadenaCifrado = cadenaCifrado + matriz[j][orden[i]].toUpperCase();

			$("#TCcell"+j+"-"+orden[i]).addClass('parpadeocorto');
			$("#TC-Ccell1"+l).addClass('parpadeoNext');
        	$("#TC-Ccell1"+l).html(matriz[j][orden[i]].toUpperCase());

			await sleep(500);

			$("#TCcell"+j+"-"+orden[i]).removeClass('parpadeocorto');
			$("#TC-Ccell1"+l).removeClass('parpadeoNext');
			l++;
		}

		$("#TCcell0-"+orden[i]).removeClass('seleccionado');
		$("#TCcell1-"+orden[i]).removeClass('seleccionado');
	}

	$("#out-textoCifradoTransposicionColumnas").val(cadenaCifrado);
	$('#TCdiv1').slideToggle(1000);
	$("#btn-cifrarColumnas").removeAttr("disabled");
	$("#btn-cifrarColumnas").html('Cifrar');

	toastr.options.timeOut = "1000";
    toastr['success']('Texto Cifrado');
}

async function descifrarTransposicionColumnas(){
	$("#btn-descifrarColumnas").attr("disabled","disabled");
	$("#btn-descifrarColumnas").html('<i class="fa fa-spinner fa-spin"></i> Descifrando...');

    var cifrado = ($("#in-textoPlanoCifradoTransposicionColumnas").val().toUpperCase()).split("");
    var clave = ($("#in-claveDescifradoTransposicionColumnas").val().toUpperCase()).split("");
    var texto_length = cifrado.length;

    var cadenaDescifrado = "";
    var k = 0, l = 0;
    var matriz = new Array(7);
    var orden;
    
	$("#TCrow20").empty();
    $("#TCrow21").empty();
	$("#TCrow22").empty();
	$("#TCrow23").empty();
	$("#TCrow24").empty();
	$("#TCrow25").empty();
	$("#TCrow26").empty();
	$('#textoDescifradoColumnas').empty();

	$("#out-textoDescifradoTransposicionColumnas").val("");

	cols = $('#in-claveDescifradoTransposicionColumnas').val().split("").length;
	rows = (((texto_length/cols - Math.round(texto_length/cols)) < 0.5 && (texto_length/cols - Math.round(texto_length/cols)) > 0)?Math.round(texto_length/cols)+1:Math.round(texto_length/cols)) + 2;
	
	crearPanelDescifradoTransposicionColumas();

	$('#TCdiv2').html('Se toman los caracteres que conforman la clave y se enumeran por orden alfabético: a=0 , b=1, ..., z=25.');
	$('#TCdiv2').slideToggle(1000);

	await sleep(6000);
	$('#TCdiv2').scrollView();

	for (var i = 0 ; i < rows ; i++) {
		for(var j = 0 ; j < cols ; j++){
			$("#TCrow2"+i).append('<td id="TCcell2' + i + '-' + j + '"></td>');
		}
	}

	for(var i = 0 ; i < cols ; i++){
		$("#TCcell20-"+i).addClass('title-table');
		$("#TCcell21-"+i).addClass('title-table2');
	}

	orden = new Array(cols);

	for (var i = 0 ; i < 7 ; i++) {
	   matriz[i] = new Array(cols);
	}

	//Colocar Clave
	for(var i = 0 ; i < cols ; i++){
		$("#TCcell20-"+i).html(clave[i]);
		$("#TCcell20-"+i).addClass('parpadeocorto');

		await sleep(500);

		$("#TCcell20-"+i).removeClass('parpadeocorto');
	}

	for(var i = 0 ; i < cols ; i++){
		$("#TCcell21-"+i).html(clave[i].charCodeAt()-65);
		$("#TCcell21-"+i).addClass('parpadeocorto');

		await sleep(500);

		$("#TCcell21-"+i).removeClass('parpadeocorto');

		matriz[1][i] = clave[i].charCodeAt()-65;
	}

	orden = burbuja(matriz[1]);

	$('#TCdiv2').slideToggle(1000);
    
    await sleep(1000);

    $('#TCdiv2').html('Debajo de la clave se escribe el criptograma por columnas en orden numerico. Se escriben n caracteres en cada columna (n = criptograma/clave = '+cifrado.length+'/'+clave.length+'= '+(cifrado.length/clave.length)+').');
	$('#TCdiv2').slideToggle(1000);

	await sleep(7000);
	$('#TCdiv2').scrollView();

	for(var i = 0 ; i < cols ; i++){
		for(var j = 2 ; j < rows ; j++){
			$("#TCcell2"+j+"-"+orden[i]).html(cifrado[k]);

			$("#TCcell2"+j+"-"+orden[i]).addClass('parpadeocorto');

			await sleep(500);

			$("#TCcell2"+j+"-"+orden[i]).removeClass('parpadeocorto');

			matriz[j][orden[i]] = cifrado[k++];
		}
	}

	$('#TCdiv2').slideToggle(1000);
    
    await sleep(1000);

    $('#TCdiv2').html('El mensaje en claro se obtiene leyendo fila por fila.');
	$('#TCdiv2').slideToggle(1000);

	await sleep(5000);
	$('#TCdiv2').scrollView();

	for(var i = 2 ; i < rows ; i++){
		for(var j = 0 ; j < cols ; j++){
			cadenaDescifrado = cadenaDescifrado + matriz[i][j].toLowerCase();

			$("#TCcell2"+i+"-"+j).addClass('parpadeocorto');
			$("#TC-MCcell1"+l).addClass('parpadeoNext');
            $("#TC-MCcell1"+l).html(matriz[i][j].toLowerCase());

			await sleep(500);

			$("#TCcell2"+i+"-"+j).removeClass('parpadeocorto');
			$("#TC-MCcell1"+l).removeClass('parpadeoNext');
			l++;
		}
	}

	$("#out-textoDescifradoTransposicionColumnas").val(cadenaDescifrado);
	$('#TCdiv2').slideToggle(1000);
	$("#btn-descifrarColumnas").removeAttr("disabled");
	$("#btn-descifrarColumnas").html('Descifrar');

	toastr.options.timeOut = "1000";
    toastr['success']('Texto Descifrado');
}

function validarEntradaCifradoTransposicionColumnas(){
	var mensaje = "";
	var texto = $('#in-textoPlanoTransposicionColumnas').val();
	var clave = $('#in-claveCifradoTransposicionColumnas').val();

	if(texto.indexOf(' ') >= 0){
		mensaje = "El mensaje claro no debe contener espacios.";
	}
	else if (texto.length < 1 || texto.length > 10) {
		mensaje = "El mensaje claro debe contener entre 1 y 10 caracteres.";
	}
	else if(!texto.match(/^[a-zA-Z]+$/)){
		mensaje = "El mensaje claro solo puede contener caracteres de la <strong>a</strong> a la <strong>z</strong>.";
	}
	else if(clave.indexOf(' ') >= 0){
		mensaje = "La llave no debe contener espacios.";
	}
	else if (clave.length < 1 || clave.length > 10) {
		mensaje = "La llave debe contener entre 1 y 10 caracteres.";
	}
	else if(!clave.match(/^[a-zA-Z]+$/)){
		mensaje = "La llave solo puede contener caracteres de la <strong>a</strong> a la <strong>z</strong>.";
	}

	return mensaje;
}

function validarEntradaDescifradoTransposicionColumnas(){
	var mensaje = "";
	var texto = $('#in-textoPlanoCifradoTransposicionColumnas').val();
	var clave = $('#in-claveDescifradoTransposicionColumnas').val();

	if(texto.indexOf(' ') >= 0){
		mensaje = "El criptograma no debe contener espacios.";
	}
	else if (texto.length < 1 || texto.length > 10) {
		mensaje = "El criptograma debe contener entre 1 y 10 caracteres.";
	}
	else if(!texto.match(/^[a-zA-Z]+$/)){
		mensaje = "El criptograma solo puede contener caracteres de la <strong>a</strong> a la <strong>z</strong>.";
	}
	else if(clave.indexOf(' ') >= 0){
		mensaje = "La clave no debe contener espacios.";
	}
	else if (clave.length < 1 || clave.length > 10) {
		mensaje = "La clave debe contener entre 1 y 10 caracteres.";
	}
	else if(!clave.match(/^[a-zA-Z]+$/)){
		mensaje = "La clave solo puede contener caracteres de la <strong>a</strong> a la <strong>z</strong>.";
	}

	return mensaje;
}

$(document).ready(function(){
	$("#btn-cifrarColumnas").click(function(){
		var mensaje = validarEntradaCifradoTransposicionColumnas();
		if(mensaje.length == 0){
			// if( $('#alert-cifrarTransposicionColumnas').is(":visible") ){
			//     $('#alert-cifrarTransposicionColumnas').slideToggle(1000);
			// }
			$("#btn-cifrarColumnas").attr("disabled","disabled");
			$("#btn-cifrarColumnas").html('<i class="fa fa-spinner fa-spin"></i> Cifrando...');
			cifrarTransposicionColumnas();
		}
		else{
			// $('#alert-cifrarTransposicionColumnas').html(mensaje);
			// if( !$('#alert-cifrarTransposicionColumnas').is(":visible") ){
			// 	$('#alert-cifrarTransposicionColumnas').slideToggle(1000);
			// }
			toastr.options.timeOut = "1500";
			toastr.options.closeButton = true;
			toastr['error'](mensaje);
		}
	});

	$("#btn-copiarTextoColumnas").click(function(){
		if ($("#out-textoCifradoTransposicionColumnas").val()==''){
			toastr.options.timeOut = "1500";
			toastr.options.closeButton = true;
			toastr['info']('Primero debes cifrar un mensaje');
		} else {
			$("#in-textoPlanoCifradoTransposicionColumnas").val($("#out-textoCifradoTransposicionColumnas").val());
			$("#in-claveDescifradoTransposicionColumnas").val($("#in-claveCifradoTransposicionColumnas").val());
		}
	});

	$("#btn-descifrarColumnas").click(function(){
		var mensaje = validarEntradaDescifradoTransposicionColumnas();
		if(mensaje.length == 0){
			// if( $('#alert-descifrarTransposicionColumnas').is(":visible") ){
			//     $('#alert-descifrarTransposicionColumnas').slideToggle(1000);
			// }
			$("#btn-descifrarColumnas").attr("disabled","disabled");
			$("#btn-descifrarColumnas").html('<i class="fa fa-spinner fa-spin"></i> Descifrando...');
			descifrarTransposicionColumnas();
		}
		else{
			// $('#alert-descifrarTransposicionColumnas').html(mensaje);
			// if( !$('#alert-descifrarTransposicionColumnas').is(":visible") ){
			// 	$('#alert-descifrarTransposicionColumnas').slideToggle(1000);
			// }
			toastr.options.timeOut = "1500";
			toastr.options.closeButton = true;
			toastr['error'](mensaje);
		}
	});
	    
});