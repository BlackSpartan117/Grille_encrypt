function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var ic=0, idc=0;
var tCAdd=600, tDcAdd=600;
var tCRemove=100, tDcRemove=100;

$("#adelanteInversaC").click(async function(){
	ic++;
	tCAdd = 10;
	tCRemove = 5;
});

$("#atrasInversaC").click(async function(){
	if (ic > 0) {
		ic--;
		tCAdd = 10;
		tCRemove = 5;
	}	
});

$("#adelanteInversaD").click(async function(){
	idc++;
	tDcAdd = 10;
	tDcRemove = 5;
});

$("#atrasInversaD").click(async function(){
	if (idc > 0) {
		idc--;
		tDcAdd = 10;
		tDcRemove = 5;
	}	
});

function mostrarPanelInversa(){
	$("#pnl-InteractivoInversa").slideToggle(1000);
	$("#contenidoPagina").slideToggle(1000);
}

function cerrarPanelInversa(){
	$("#pnl-InteractivoInversa").slideToggle(1000);
	$("#contenidoPagina").slideToggle(1000);
	limpiaPanelInversa();
}

function limpiaPanelInversa(){
	$("#textoPlanoInversaC").empty();
	$("#textoCifradoInversaC").empty();
	$("#textoPlanoInversaD").empty();
	$("#textoCifradoInversaD").empty();
	$("#in-txtPlanoInversa").val("");
	$("#out-txtCifradoInversa").val("");
	$("#in-txtCifradoInversa").val("");
	$("#out-txtPlanoInversa").val("");
}

function pararAnimacionInversa(){
	ic=999;
	idc=999;
	$("#btn-cifrarInversa").removeAttr("disabled");
    $("#btn-cifrarInversa").html('Cifrar');
    $("#cifradoAutomaticoInversa").removeAttr("disabled");
    $("#atrasInversaC").removeAttr("disabled");
    $("#adelanteInversaC").removeAttr("disabled");
    $("#btn-copiarTextoInversa").removeAttr("disabled");
    $("#btn-descifrarInversa").removeAttr("disabled");
    $("#btn-descifrarInversa").html('Descifrar');
    $("#descifradoAutomaticoInversa").removeAttr("disabled");
    $("#atrasInversaD").removeAttr("disabled");
    $("#adelanteInversaD").removeAttr("disabled");
    $("#textoPlanoInversaD").empty();
	$("#textoCifradoInversaD").empty();
	$("#textoPlanoInversaC").empty();
	$("#textoCifradoInversaC").empty();
	$("#infoAnimacionCiInversa").hide();
	$("#infoAnimacionDeInversa").hide();
}

async function cifrarInversa(){
    var plano = ($("#in-txtPlanoInversa").val().toUpperCase()).split("");
    var cifrado = [];
    var cadenaCifrado;
    var numeroInverso = plano.length-1;
    ic = 0;
	$("#infoAnimacionCiInversa").fadeIn();
    for (ic = 0; ic <= plano.length-1; ic++) {
		$("#textoPlanoInversaC").append('<label id="abcPlano'+numeroInverso+'C" class="circulo">'+plano[ic]+'</label>');
		numeroInverso = numeroInverso - 1;
    }
    // ANIMATION
    $("#textoPlanoInversaC").addClass('parpadeo');
    await sleep(tCAdd);
    $("#textoPlanoInversaC").removeClass('parpadeo');
    await sleep(tCRemove);
    // END ANIMATION
    ic = 0;
	cifrado = plano.reverse();
	for (ic = 0; ic <= cifrado.length-1; ic++) {
		$("#textoCifradoInversaC").append('<label id="abcCifrado'+ic+'C" class="circulo" style="display:none">'+cifrado[ic]+'</label>');
    }
    ic = 0;
	while (ic <= plano.length-1) {
     	$("#abcCifrado"+ic+"C").show();
     	
    	// ANIMATION
    	$("#abcPlano"+ic+"C").addClass('parpadeo');
    	$("#abcCifrado"+ic+"C").addClass('parpadeo');
    	await sleep(tCAdd);
    	$("#abcPlano"+ic+"C").removeClass('parpadeo');
    	$("#abcCifrado"+ic+"C").removeClass('parpadeo');
    	await sleep(tCRemove);
    	// END ANIMATION

    	if($("#cifradoAutomaticoInversa").prop('checked') == true){
    		ic++;
    	}
    	tCAdd = 800;
    	tCRemove = 300;
    }
    if (ic <= plano.length && ic!=999) {
	    cadenaCifrado = cifrado.join("");
		$("#out-txtCifradoInversa").val(cadenaCifrado);
		$("#btn-cifrarInversa").removeAttr("disabled");
	    $("#btn-cifrarInversa").html('Cifrar');
	    $("#cifradoAutomaticoInversa").removeAttr("disabled");
	    $("#atrasInversaC").removeAttr("disabled");
	    $("#adelanteInversaC").removeAttr("disabled");
	    toastr.options.timeOut = "1000";
		toastr['success']('Texto cifrado');
	}
}

async function descifrarInversa(){
    var cifrado = ($("#in-txtCifradoInversa").val().toUpperCase()).split("");
    var plano = [];
    var cadenaDescifrado;
    var numeroInverso = cifrado.length-1;
    idc = 0;
    $("#infoAnimacionDeInversa").fadeIn();
    for (idc = 0; idc <= cifrado.length-1; idc++) {
		$("#textoCifradoInversaD").append('<label id="abcCifrado'+numeroInverso+'D" class="circulo">'+cifrado[idc]+'</label>');
		numeroInverso = numeroInverso - 1;
    }
    // ANIMATION
    $("#textoCifradoInversaD").addClass('parpadeo');
    await sleep(tDcAdd);
    $("#textoCifradoInversaD").removeClass('parpadeo');
    await sleep(tDcRemove);
    // END ANIMATION
    idc = 0;
	plano = cifrado.reverse();
	for (idc = 0; idc <= plano.length-1; idc++) {
		$("#textoPlanoInversaD").append('<label id="abcPlano'+idc+'D" class="circulo" style="display:none">'+plano[idc]+'</label>');
    }
    idc = 0;
	while (idc <= cifrado.length-1) {
     	$("#abcPlano"+idc+"D").show();
     	
    	// ANIMATION
    	$("#abcCifrado"+idc+"D").addClass('parpadeo');
    	$("#abcPlano"+idc+"D").addClass('parpadeo');
    	await sleep(tDcAdd);
    	$("#abcCifrado"+idc+"D").removeClass('parpadeo');
    	$("#abcPlano"+idc+"D").removeClass('parpadeo');
    	await sleep(tDcRemove);
    	// END ANIMATION

    	if($("#descifradoAutomaticoInversa").prop('checked') == true){
    		idc++;
    	}
    	tDcAdd = 800;
    	tDcRemove = 300;
    }
    if (idc <= cifrado.length && idc!=999) {
	    cadenaDecifrado = plano.join("");
		$("#out-txtPlanoInversa").val(cadenaDecifrado);
	    $("#btn-copiarTextoInversa").removeAttr("disabled");
	    $("#btn-descifrarInversa").removeAttr("disabled");
	    $("#btn-descifrarInversa").html('Descifrar');
	    $("#descifradoAutomaticoInversa").removeAttr("disabled");
	    $("#atrasInversaD").removeAttr("disabled");
	    $("#adelanteInversaD").removeAttr("disabled");
	    toastr.options.timeOut = "1000";
		toastr['success']('Texto descifrado');
	}
}

function validarEntradaCifradoInversa(){
    var mensaje = "";
    var texto = $('#in-txtPlanoInversa').val();
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

function validarEntradaDescifradoInversa(){
    var mensaje = "";
    var texto = $('#in-txtCifradoInversa').val();
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
	$('[data-toggle="tooltip"]').tooltip(); 
	
	$("#btn-mostrarPanelInversa").click(function(){
		mostrarPanelInversa();
	});

	$("#btn-cerrarPanelInversa").click(function(){
		pararAnimacionInversa();
		cerrarPanelInversa();
	});

	$("#btn-teoriaInversa").click(function(){
		pararAnimacionInversa();
	});
	$("#btn-fundamentosMatematicosInversa").click(function(){
		pararAnimacionInversa();
	});
	$("#btn-cifrarAnimacionInversa").click(function(){
		pararAnimacionInversa();
	});
	$("#btn-descifrarAnimacionInversa").click(function(){
		pararAnimacionInversa();
	});

	$("#btn-cifrarInversa").click(function(){
		$("#out-txtCifradoInversa").val("");
		var mensaje = validarEntradaCifradoInversa();
		if ($("#in-txtPlanoInversa").val()!='' && mensaje.length == 0){
			if ($("#cifradoAutomaticoInversa").prop('checked') == true) {
				$("#cifradoAutomaticoInversa").attr("disabled","disabled");
				$("#atrasInversaC").attr("disabled","disabled");
				$("#adelanteInversaC").attr("disabled","disabled");
			}
			$("#btn-cifrarInversa").attr("disabled","disabled");
			$("#btn-cifrarInversa").html('<i class="fa fa-spinner fa-spin"></i> Cifrando...');
			$("#textoPlanoInversaC").empty();
			$("#textoCifradoInversaC").empty();
			cifrarInversa();
		} else{
            toastr.options.timeOut = "1500";
            toastr.options.closeButton = true;
            toastr['error'](mensaje);
        }
	});

	$("#btn-copiarTextoInversa").click(function(){
		if ($("#out-txtCifradoInversa").val()==''){
			toastr.options.timeOut = "1500";
			toastr.options.closeButton = true;
			toastr['info']('Primero debes cifrar un mensaje');
		} else {
			$("#in-txtCifradoInversa").val($("#out-txtCifradoInversa").val());
		}
	});

	$("#btn-descifrarInversa").click(function(){
		$("#out-txtPlanoInversa").val("");
		var mensaje = validarEntradaDescifradoInversa();
		if ($("#in-txtCifradoInversa").val()!='' && mensaje.length == 0){
			if ($("#descifradoAutomaticoInversa").prop('checked') == true) {
				$("#descifradoAutomaticoInversa").attr("disabled","disabled");
				$("#atrasInversaD").attr("disabled","disabled");
				$("#adelanteInversaD").attr("disabled","disabled");
			}
			$("#btn-copiarTextoInversa").attr("disabled","disabled");
			$("#btn-descifrarInversa").attr("disabled","disabled");
			$("#btn-descifrarInversa").html('<i class="fa fa-spinner fa-spin"></i> Descifrando...');
			$("#textoPlanoInversaD").empty();
			$("#textoCifradoInversaD").empty();
			descifrarInversa();
		} else{
            toastr.options.timeOut = "1500";
            toastr.options.closeButton = true;
            toastr['error'](mensaje);
        }
	});
	    
});