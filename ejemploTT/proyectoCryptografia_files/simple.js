$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}

function mostrarPanelTransposicionSimple(){
    $("#pnl-Interactivo4").slideToggle(1000);
    $("#contenidoPagina").slideToggle(1000);
}

function cerrarPanelTransposicionSimple(){
    $("#pnl-Interactivo4").slideToggle(1000);
    $("#contenidoPagina").slideToggle(1000);
    limpiaPanelTransposicionSimple();
}

function crearPanelCifradoTransposicionSimple(){
    var criptograma_length = $('#in-textoPlanoTransposicionSimple').val().length;

    for(var i = 0 ; i < criptograma_length ; i++){
        $('#textoCifradoSimple').append('<label class="circulo" id="TS-Ccell1'+i+'"></label>');
    }

    $("#table-transposicionSimple").css("text-align","center");
}

function crearPanelDescifradoTransposicionSimple(){
    var mensaje_claro_length = $('#in-textoPlanoCifradoTransposicionSimple').val().length;

    for(var i = 0 ; i < mensaje_claro_length ; i++){
        $('#textoDescifradoSimple').append('<label class="circulo" id="TS-MCcell1'+i+'"></label>');
    }

    $("#table-transposicionSimple2").css("text-align","center");
}

function limpiaPanelTransposicionSimple(){
    $("#row1").empty();
    $("#row2").empty();
    $("#in-textoPlanoTransposicionSimple").val("");
    $("#out-textoCifradoTransposicionSimple").val("");

    $("#row12").empty();
    $("#row22").empty();
    $("#in-textoPlanoCifradoTransposicionSimple").val("");
    $("#out-textoDescifradoTransposicionSimple").val("");
}

async function cifrarTransposicionSimple(){
    $("#btn-cifrarSimple").attr("disabled","disabled");
    $("#btn-cifrarSimple").html('<i class="fa fa-spinner fa-spin"></i> Cifrando...');

    var plano = ($("#in-textoPlanoTransposicionSimple").val().toLowerCase()).split("");
    var cadenaCifrado = "";
    var j = 1, k = 1, l = 0;
    
    $("#TSrow1").empty();
    $("#TSrow2").empty();
    $('#textoCifradoSimple').empty();
    $("#out-textoCifradoTransposicionSimple").val("");

    crearPanelCifradoTransposicionSimple();

    $('#TSdiv1').html('El mensaje en claro se reescribe en dos renglones: la primera letra en el primer renglón, la segunda en el segundo renglón, la tercera en el primer renglón, la cuarta en el segundo renglón y así uno y uno hasta acabar con todos los caracteres del mensaje claro.');
    $('#TSdiv1').slideToggle(1000);

    await sleep(10000);
    $('#TSdiv1').scrollView();

    $("#TSrow1").append('<td id="TSR1-0" class="title-table">R1</td>');
    $("#TSrow2").append('<td id="TSR2-0" class="title-table">R2</td>');

    for (var i = 1; i < 6; i++) {
        $("#TSrow1").append('<td id="TSR1-'+i+'"> </td>');
        $("#TSrow2").append('<td id="TSR2-'+i+'"> </td>');
    }

    for (var i = 0 ; i < plano.length ; i++) {
        if(i%2 == 0){
            $("#TSR1-" + j).html(plano[i]);
            $("#TSR1-" + j).addClass('parpadeo');
            await sleep(1000);
            
            $("#TSR1-" + j).removeClass('parpadeo');

            j++;
        }
        else if(i%2 == 1){
            $("#TSR2-"+ k).html(plano[i]);
            $("#TSR2-" + k).addClass('parpadeo');
            await sleep(1000);
            
            $("#TSR2-" + k).removeClass('parpadeo');

            k++;
        }
    }

    $('#TSdiv1').slideToggle(1000);
    
    await sleep(1000);

    $('#TSdiv1').html('Se reescribe el mensaje por renglones: primero R1 seguido de R2.');
    $('#TSdiv1').slideToggle(1000);

    await sleep(5000);
    $('#TSdiv1').scrollView();

    for (var i = 1 ; i < j ; i++, l++){
        cadenaCifrado = cadenaCifrado + plano[(i-1)*2].toUpperCase();
        
        $("#TSR1-" + i).addClass('parpadeo');
        $("#TS-Ccell1"+l).addClass('parpadeoNext');
        $("#TS-Ccell1"+l).html(plano[(i-1)*2].toUpperCase());
        await sleep(1000);
        
        $("#TSR1-" + i).removeClass('parpadeo');
        $("#TS-Ccell1"+l).removeClass('parpadeoNext');
    }

    for (var i = 1 ; i < k ; i++, l++){
        cadenaCifrado = cadenaCifrado + plano[i*2 - 1].toUpperCase();

        $("#TSR2-" + i).addClass('parpadeo');
        $("#TS-Ccell1"+l).addClass('parpadeoNext');
        $("#TS-Ccell1"+l).html(plano[i*2 - 1].toUpperCase());
        await sleep(1000);
        
        $("#TSR2-" + i).removeClass('parpadeo');
        $("#TS-Ccell1"+l).removeClass('parpadeoNext');
    }

    $("#out-textoCifradoTransposicionSimple").val(cadenaCifrado);
    $('#TSdiv1').slideToggle(1000);
    $("#btn-cifrarSimple").removeAttr("disabled");
    $("#btn-cifrarSimple").html('Cifrar');

    toastr.options.timeOut = "1000";
    toastr['success']('Texto Cifrado');
}

async function descifrarTransposicionSimple(){
    $("#btn-descifrarSimple").attr("disabled","disabled");
    $("#btn-descifrarSimple").html('<i class="fa fa-spinner fa-spin"></i> Descifrando...');

    var cifrado = ($("#in-textoPlanoCifradoTransposicionSimple").val().toUpperCase()).split("");
    var cadenaDescifrado = "";
    var j = 1, k = 1, l = 0, m = 0;

    $("#TSrow12").empty();
    $("#TSrow22").empty();
    $('#textoDescifradoSimple').empty();
    $("#out-textoDescifradoPolybios").val("");
    
    crearPanelDescifradoTransposicionSimple();
    
    $('#TSdiv2').html('Se toma la primera mitad del criptograma y se coloca en R1, la ultima mitad se coloca en R2.');
    $('#TSdiv2').slideToggle(1000);

    await sleep(6000);
    $('#TSdiv2').scrollView();

    $("#TSrow12").append('<td id="TSR1-20" class="title-table">R1</td>');
    $("#TSrow22").append('<td id="TSR2-20" class="title-table">R2</td>');

    for (var i = 1; i < 6; i++) {
        $("#TSrow12").append('<td id="TSR1-2'+i+'"> </td>');
        $("#TSrow22").append('<td id="TSR2-2'+i+'"> </td>');
    }

    for (var i = 0 ; i < cifrado.length ; i++) {
        if(i < Math.round(cifrado.length / 2)){
            $("#TSR1-2"+(j)).html(cifrado[i]);

            $("#TSR1-2"+(j)).addClass('parpadeo');
            await sleep(1000);

            $("#TSR1-2"+(j++)).removeClass('parpadeo');
        }
        else{
            $("#TSR2-2"+(k)).html(cifrado[i]);

            $("#TSR2-2"+(k)).addClass('parpadeo');
            await sleep(1000);

            $("#TSR2-2"+(k++)).removeClass('parpadeo');
        }
    }

    j = 1;
    k = 1;
    
    $('#TSdiv2').slideToggle(1000);
    
    await sleep(1000);

    $('#TSdiv2').html('El mensaje en claro se conforma tomando uno y uno de los caracteres de cada renglón: la primera letra de R1, luego la primera letra de R2, luego la segunda de R1, luego la segunda de R2 y así sucesivamente.');
    $('#TSdiv2').slideToggle(1000);

    await sleep(8000);
    $('#TSdiv2').scrollView();

    for (var i = 0 ; i < cifrado.length ; i++) {
        if(i%2 == 0){
            cadenaDescifrado = cadenaDescifrado + cifrado[l].toLowerCase();

            $("#TSR1-2" + j).addClass('parpadeo');
            $("#TS-MCcell1"+i).addClass('parpadeoNext');
            $("#TS-MCcell1"+i).html(cifrado[l].toLowerCase());
            await sleep(1000);
            
            $("#TSR1-2" + j++).removeClass('parpadeo');
            $("#TS-MCcell1"+i).removeClass('parpadeoNext');

            l = l + Math.round(cifrado.length/2);
        }
        else if(i%2 == 1){
            cadenaDescifrado = cadenaDescifrado + cifrado[l].toLowerCase();

            $("#TSR2-2" + k).addClass('parpadeo');
            $("#TS-MCcell1"+i).addClass('parpadeoNext');
            $("#TS-MCcell1"+i).html(cifrado[l].toLowerCase());
            await sleep(1000);
            
            $("#TSR2-2" + k++).removeClass('parpadeo');
            $("#TS-MCcell1"+i).removeClass('parpadeoNext');

            l = l - Math.round(cifrado.length/2) + 1;
        }
    }


    $("#out-textoDescifradoTransposicionSimple").val(cadenaDescifrado);
    $('#TSdiv2').slideToggle(1000);
    $("#btn-descifrarSimple").removeAttr("disabled");
    $("#btn-descifrarSimple").html('Descifrar');

    toastr.options.timeOut = "1000";
    toastr['success']('Texto Descifrado');
}

function validarEntradaCifradoTransposicionSimple(){
    var mensaje = "";
    var texto = $('#in-textoPlanoTransposicionSimple').val();

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

function validarEntradaDescifradoTransposicionSimple(){
    var mensaje = "";
    var texto = $('#in-textoPlanoCifradoTransposicionSimple').val();

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
    $("#btn-cifrarSimple").click(function(){
        var mensaje = validarEntradaCifradoTransposicionSimple();
        if(mensaje.length == 0){
            // if( $('#alert-cifrarTransposicionSimple').is(":visible") ){
            //     $('#alert-cifrarTransposicionSimple').slideToggle(1000);
            // }
            $("#btn-cifrarSimple").attr("disabled","disabled");
            $("#btn-cifrarSimple").html('<i class="fa fa-spinner fa-spin"></i> Cifrando...');
            cifrarTransposicionSimple();
        }
        else{
            // $('#alert-cifrarTransposicionSimple').html(mensaje);
            // if( !$('#alert-cifrarTransposicionSimple').is(":visible") ){
            //     $('#alert-cifrarTransposicionSimple').slideToggle(1000);
            // }
            toastr.options.timeOut = "1500";
            toastr.options.closeButton = true;
            toastr['error'](mensaje);
        }
    });

    $("#btn-copiarTextoSimple").click(function(){
        if ($("#out-textoCifradoTransposicionSimple").val()==''){
            toastr.options.timeOut = "1500";
            toastr.options.closeButton = true;
            toastr['info']('Primero debes cifrar un mensaje');
        } else {
            $("#in-textoPlanoCifradoTransposicionSimple").val($("#out-textoCifradoTransposicionSimple").val());
        }
    });

    $("#btn-descifrarSimple").click(function(){
        var mensaje = validarEntradaDescifradoTransposicionSimple();
        if(mensaje.length == 0){
            // if( $('#alert-descifrarTransposicionSimple').is(":visible") ){
            //     $('#alert-descifrarTransposicionSimple').slideToggle(1000);
            // }
            $("#btn-descifrarSimple").attr("disabled","disabled");
            $("#btn-descifrarSimple").html('<i class="fa fa-spinner fa-spin"></i> Descifrando...');
            descifrarTransposicionSimple();
        }
        else{
            // $('#alert-descifrarTransposicionSimple').html(mensaje);
            // if( !$('#alert-descifrarTransposicionSimple').is(":visible") ){
            //     $('#alert-descifrarTransposicionSimple').slideToggle(1000);
            // }
            toastr.options.timeOut = "1500";
            toastr.options.closeButton = true;
            toastr['error'](mensaje);
        }
    });
        
});