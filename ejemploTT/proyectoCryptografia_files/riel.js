function mostrarPanelRiel()
{	
	$("#panelInteractivo-CifradoRiel").slideToggle(1000);
	$("#contenidoPagina").slideToggle(1000);	
}

function cerrarPanelRiel()
{
	$("#panelInteractivo-CifradoRiel").slideToggle(1000);
	$("#contenidoPagina").slideToggle(1000);
	limpiaPanelRiel();
}

function limpiaPanelRiel()
{			
	$("#textoPlanoRielEscrito").empty();
	
	$("#informacionRiel1").slideToggle(1000);
	$("#informacionRiel2").slideToggle(1000);
	$("#informacionRiel1").empty();
	$("#informacionRiel2").empty();
		
	$("#fila1Riel").empty();
	$("#fila2Riel").empty();
	$("#fila3Riel").empty();
	$("#fila4Riel").empty();
	
	$("#informacionRiel3").empty();	
}

function limpiaPanelRiel2()
{
	$("#informacionRiel1D").slideToggle(1000);
	$("#informacionRiel2D").slideToggle(1000);
	$("#informacionRiel1D").empty();
	$("#informacionRiel2D").empty();
	
	$("#textoCifradoRielEscrito").empty();
	
	$("#fila1RielD").empty();
	$("#fila2RielD").empty();
	
	$("#informacionRiel3D").empty();
}

async function cifrarRiel()
{
	$("#btn-cifrarRiel").attr("disabled","disabled");
	$("#btn-cifrarRiel").html('<i class="fa fa-spinner fa-spin"></i> Cifrando...');
	
	$("#textoCifradoRiel2").val("");

	var textoPlano = ($("#textoPlanoRiel").val().toUpperCase()).split("");
	var i, j= 0;
	var cifrado= [];
	var cadenaCifrado;
	var posArrayTextoCifrado= 0;
	var posicion;
	var numLetraTextoPlano= 0;
	
	$("#informacionRiel1").append("Mensaje plano que se quiere cifrar:");
	$('#informacionRiel1').slideToggle(1000);
	await sleep(2000);
	
	for (i = 0; i < textoPlano.length; i++)
	{		
		$("#textoPlanoRielEscrito").append('<td id="textoPlanoRielCifrar'+numLetraTextoPlano+'">'+String.fromCharCode(textoPlano[i].charCodeAt())+'</td>');
		numLetraTextoPlano++;
		await sleep(150);		
	}
	
	$("#informacionRiel2").append("Ahora dibujamos unas vias de tren:");	
	$('#informacionRiel2').slideToggle(1000);
	await sleep(3000);
	
	for (i = 0; i < 25; i++)
	{		
		$("#fila1Riel").append('<td id="fila1Riel'+i+'"></td>');
		$("#fila1Riel"+i).css("backgroundColor", "black");
		
		$("#fila2Riel").append('<td id="fila2Riel'+i+'"></td>');
		$("#fila3Riel").append('<td id="fila3Riel'+i+'"></td>');
		
		if(i%2)
		{
			$("#fila2Riel"+i).css("backgroundColor", "black");
			$("#fila3Riel"+i).css("backgroundColor", "black");
		}
		
		$("#fila4Riel").append('<td id="fila4Riel'+i+'"></td>');
		$("#fila4Riel"+i).css("backgroundColor", "black");
		await sleep(150);
	}
	
	await sleep(500);
	
	$('#informacionRiel2').slideToggle(1000);
	await sleep(1000);
	$("#informacionRiel2").empty();
	$("#informacionRiel2").append("Ahora vamos a colocar las letras del texto a cifrar de la siguiente forma:");	
	$('#informacionRiel2').slideToggle(1000);
	await sleep(2500);
	
	numLetraTextoPlano= 0;
	
	for(i= 0; i<textoPlano.length; i++)
	{		
		$("#textoPlanoRielCifrar"+numLetraTextoPlano).css("backgroundColor", "#337ab7");
		$("#textoPlanoRielCifrar"+numLetraTextoPlano).css("color", "white");
		//$("#textoPlanoRielCifrar"+textoPlano[i].charCodeAt()).addClass('parpadeo');
		await sleep(1000);
		
		if(j%2)
		{
			//$("#fila4Riel"+i).addClass('parpadeo');
			//.css("fontSize", 20);
			$("#fila4Riel"+j).css("backgroundColor", "#337ab7");
			$("#fila4Riel"+j).html(textoPlano[i]);
			$("#fila4Riel"+j).css("color", "white");
			await sleep(1000);
			//$("#fila4Riel"+i).removeClass('parpadeo');
			$("#fila4Riel"+j).css("backgroundColor", "black");
		}
		else
		{
			//$("#fila1Riel"+i).addClass('parpadeo');
			$("#fila1Riel"+j).css("backgroundColor", "#337ab7");
			$("#fila1Riel"+j).html(textoPlano[i]);
			$("#fila1Riel"+j).css("color", "white");
			await sleep(1000);
			//$("#fila1Riel"+i).removeClass('parpadeo');
			$("#fila1Riel"+j).css("backgroundColor", "black");
		}	
				
		$("#textoPlanoRielCifrar"+numLetraTextoPlano).css("backgroundColor", "transparent");
		$("#textoPlanoRielCifrar"+numLetraTextoPlano).css("color", "black");
		//$("#textoPlanoRielCifrar"+textoPlano[i].charCodeAt()).removeClass('parpadeo');
		j++;
		numLetraTextoPlano++;		
	}
	
	$('#informacionRiel2').slideToggle(1000);
	await sleep(1000);
	$("#informacionRiel2").empty();
	$("#informacionRiel2").append("El criptograma se escribe de la siguiente forma:");
	$('#informacionRiel2').slideToggle(1000);
	await sleep(2500);		
	
	for(i= 0; i<25; i++)
	{
		$("#fila1Riel"+i).css("backgroundColor", "#337ab7");
		await sleep(100);
		
		if($("#fila1Riel"+i).text()!="")
		{
			$("#fila1Riel"+i).css("backgroundColor", "#66ff33");								
			
			cifrado[posArrayTextoCifrado]= $("#fila1Riel"+i).text();
			cadenaCifrado = cifrado.join("");
			
			$("#informacionRiel3").append('<label id="abcCifrado'+posArrayTextoCifrado+'C" class="circulo">'+cifrado[posArrayTextoCifrado]+'</label>');
			$("#abcCifrado"+posArrayTextoCifrado+"C").css("backgroundColor", "#66ff33");					
			
			await sleep(2000);
			
			$("#abcCifrado"+posArrayTextoCifrado+"C").css("backgroundColor", "transparent");
			
			posArrayTextoCifrado++;
		}
		
		$("#fila1Riel"+i).css("backgroundColor", "black");
	}
	
	for(i= 0; i<25; i++)
	{
		$("#fila4Riel"+i).css("backgroundColor", "#337ab7");
		await sleep(100);
		
		if($("#fila4Riel"+i).text()!="")
		{
			$("#fila4Riel"+i).css("backgroundColor", "#66ff33");									
			
			cifrado[posArrayTextoCifrado]= $("#fila4Riel"+i).text();
			cadenaCifrado = cifrado.join("");
			
			$("#informacionRiel3").append('<label id="abcCifrado'+posArrayTextoCifrado+'C" class="circulo">'+cifrado[posArrayTextoCifrado]+'</label>');
			$("#abcCifrado"+posArrayTextoCifrado+"C").css("backgroundColor", "#66ff33");					
			
			await sleep(2000);
			
			$("#abcCifrado"+posArrayTextoCifrado+"C").css("backgroundColor", "transparent");
			
			posArrayTextoCifrado++;
		}
		
		$("#fila4Riel"+i).css("backgroundColor", "black");
	}	
	
	posicion = $("#textoCifradoRiel2").offset().top;
	$("html, body").animate({
		scrollTop: posicion
	}, 1000);
	
	toastr.options.timeOut = "1000";
	toastr['success']('Texto cifrado');
	
	$("#textoCifradoRiel2").val(cadenaCifrado);	
	
	limpiaPanelRiel();

	$("#btn-cifrarRiel").removeAttr("disabled");
	$("#btn-cifrarRiel").html('Cifrar');
}

async function descifrarRiel()
{
	$("#btn-descifrarRiel").attr("disabled","disabled");
	$("#btn-descifrarRiel").html('<i class="fa fa-spinner fa-spin"></i> Descifrando...');
	
	$("#textoDescifradoRiel2").val("");

	var textoCifrado = ($("#textoCifradoRielD").val().toUpperCase()).split("");	
	var i, j= 0;
	var descifrado= [];
	var cadenaDescifrado;
	var posArrayTextoDescifrado= 0;
	var posicion;
	var numLetraTextoCifrado= 0;
	var numeroLetrasPorPalabra= 0;
	var numeroFila= 0;
	
	$("#informacionRiel1D").append("Criptograma que se quiere descifrar:");
	$('#informacionRiel1D').slideToggle(1000);
	await sleep(2000);
	
	for (i = 0; i < textoCifrado.length; i++)
	{		
		$("#textoCifradoRielEscrito").append('<td id="textoCifradoRielDescifrar'+numLetraTextoCifrado+'">'+String.fromCharCode(textoCifrado[i].charCodeAt())+'</td>');
		numLetraTextoCifrado++;
		await sleep(150);		
	}
	
	$("#informacionRiel2D").append("Dividimos en 2 palabras el criptograma:");	
	$('#informacionRiel2D').slideToggle(1000);
	await sleep(3000);	
	
	numeroLetrasPorPalabra= Math.ceil(textoCifrado.length/2);
	numLetraTextoCifrado= 0;
	
	for (i = 0; i < textoCifrado.length; i++)
	{
		$("#textoCifradoRielDescifrar"+numLetraTextoCifrado).css("backgroundColor", "#337ab7");
		$("#textoCifradoRielDescifrar"+numLetraTextoCifrado).css("color", "white");
		await sleep(900);
		
		if(i%numeroLetrasPorPalabra==0)
		{
			numeroFila++;
		}
		
		$("#fila"+numeroFila+"RielD").append('<td id="fila'+numeroFila+'RielD'+numLetraTextoCifrado+'">'+$("#textoCifradoRielDescifrar"+numLetraTextoCifrado).text()+'</td>');
		$("#fila"+numeroFila+"RielD"+numLetraTextoCifrado).css("backgroundColor", "#337ab7");
		$("#fila"+numeroFila+"RielD"+numLetraTextoCifrado).css("color", "white");

		await sleep(900);
		
		$("#textoCifradoRielDescifrar"+numLetraTextoCifrado).css("backgroundColor", "transparent");
		$("#textoCifradoRielDescifrar"+numLetraTextoCifrado).css("color", "black");
		
		$("#fila"+numeroFila+"RielD"+numLetraTextoCifrado).css("backgroundColor", "#transparent");
		$("#fila"+numeroFila+"RielD"+numLetraTextoCifrado).css("color", "black");
		
		numLetraTextoCifrado++;
	}
	
	await sleep(500);			
	
	$('#informacionRiel2D').slideToggle(1000);
	await sleep(1000);
	$("#informacionRiel2D").empty();
	$("#informacionRiel2D").append("El mensaje claro se escribe de la siguiente forma:");
	$('#informacionRiel2D').slideToggle(1000);
	await sleep(2500);	
	
	numLetraTextoCifrado= 0;	
	
	for(i= 0; i<numeroLetrasPorPalabra; i++)
	{
		numLetraTextoCifrado= i;
		
		for(j= 1; j<=2; j++)
		{
			if(numLetraTextoCifrado<textoCifrado.length)
			{
				$("#fila"+j+"RielD"+numLetraTextoCifrado).css("backgroundColor", "#337ab7");
				$("#fila"+j+"RielD"+numLetraTextoCifrado).css("color", "white");
				await sleep(100);							
				
				descifrado[posArrayTextoDescifrado]= $("#fila"+j+"RielD"+numLetraTextoCifrado).text();
				cadenaDescifrado = descifrado.join("");
				
				$("#informacionRiel3D").append('<label id="abcDescifrado'+posArrayTextoDescifrado+'C" class="circulo">'+descifrado[posArrayTextoDescifrado]+'</label>');
				$("#abcDescifrado"+posArrayTextoDescifrado+"C").css("backgroundColor", "#337ab7");													
				
				posicion = $("#textoDescifradoRiel2").offset().top;
				$("html, body").animate({
					scrollTop: posicion
				}, 1000); 
				
				await sleep(2500);
				
				$("#fila"+j+"RielD"+numLetraTextoCifrado).css("backgroundColor", "transparent");
				$("#fila"+j+"RielD"+numLetraTextoCifrado).css("color", "black");
								
				$("#abcDescifrado"+posArrayTextoDescifrado+"C").css("backgroundColor", "transparent");
				
				posArrayTextoDescifrado++;
				
				numLetraTextoCifrado= numLetraTextoCifrado+numeroLetrasPorPalabra;
			}
		}									
	}		
	
	posicion = $("#textoDescifradoRiel2").offset().top;
	$("html, body").animate({
		scrollTop: posicion
	}, 1000); 
	
	toastr.options.timeOut = "1000";
	toastr['success']('Texto descifrado');
	$("#textoDescifradoRiel2").val(cadenaDescifrado);
	
	limpiaPanelRiel2();

	$("#btn-descifrarRiel").removeAttr("disabled");
	$("#btn-descifrarRiel").html('Descifrar');
}

function validarEntradaCifradoRiel(){
	var mensaje = "";
	var texto = $('#textoPlanoRiel').val();

	if(texto.indexOf(' ') >= 0){
		mensaje = "El mensaje claro no debe contener espacios.";
	}
	else if (texto.length < 1 || texto.length > 10) {
		mensaje = "El mensaje claro debe contener entre 1 y 10 caracteres.";
	}
	else if(!texto.match(/^[a-zA-Z]+$/)){
		mensaje = "El mensaje claro solo puede contener caracteres de la <strong>a</strong> a la <strong>z</strong>.";
	}

	return mensaje;
}

function validarEntradaDescifradoRiel(){
	var mensaje = "";
	var texto = $('#textoCifradoRielD').val();

	if(texto.indexOf(' ') >= 0){
		mensaje = "El criptograma no debe contener espacios.";
	}
	else if (texto.length < 1 || texto.length > 10) {
		mensaje = "El criptograma debe contener entre 1 y 10 caracteres.";
	}
	else if(!texto.match(/^[a-zA-Z]+$/)){
		mensaje = "El criptograma solo puede contener caracteres de la <strong>a</strong> a la <strong>z</strong>.";
	}

	return mensaje;
}

$(document).ready(function(){
	$("#btn-cifrarRiel").click(function(){
		var mensaje = validarEntradaCifradoRiel();
		if(mensaje.length == 0){
			// if( $('#alert-cifrarRiel').is(":visible") ){
			//     $('#alert-cifrarRiel').slideToggle(1000);
			// }
			$("#btn-cifrarRiel").attr("disabled","disabled");
			$("#btn-cifrarRiel").html('<i class="fa fa-spinner fa-spin"></i> Cifrando...');
			cifrarRiel();
		}
		else{
			// $('#alert-cifrarRiel').html(mensaje);
			// if( !$('#alert-cifrarRiel').is(":visible") ){
			// 	$('#alert-cifrarRiel').slideToggle(1000);
			// }
			toastr.options.timeOut = "1500";
			toastr.options.closeButton = true;
			toastr['error'](mensaje);
		}
	});

	$("#btn-copiarTextoRiel").click(function(){
		if ($("#textoCifradoRiel2").val()==''){
			toastr.options.timeOut = "1500";
			toastr.options.closeButton = true;
			toastr['info']('Primero debes cifrar un mensaje');
		} else {
			$("#textoCifradoRielD").val($("#textoCifradoRiel2").val());
		}
	});

	$("#btn-descifrarRiel").click(function(){
		var mensaje = validarEntradaDescifradoRiel();
		if(mensaje.length == 0){
			// if( $('#alert-descifrarRiel').is(":visible") ){
			//     $('#alert-descifrarRiel').slideToggle(1000);
			// }
			$("#btn-descifrarRiel").attr("disabled","disabled");
			$("#btn-descifrarRiel").html('<i class="fa fa-spinner fa-spin"></i> Descifrando...');
			descifrarRiel();
		}
		else{
			// $('#alert-descifrarRiel').html(mensaje);
			// if( !$('#alert-descifrarRiel').is(":visible") ){
			// 	$('#alert-descifrarRiel').slideToggle(1000);
			// }
			toastr.options.timeOut = "1500";
			toastr.options.closeButton = true;
			toastr['error'](mensaje);
		}
	});		   
});