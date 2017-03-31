function crearRejilla(tam){
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
    for(i = 0; i < tam; i++){
        $('#rejilla').append('<tr>');
        for(j = 0; j < tam; j++){
            $('#rejilla').append("<td data-id=" + indices[i][j] + " class=''>" + indices[i][j] + "</td>");
        }
        $('#rejilla').append('</tr>');
    }
}

crearRejilla(4);
new APP.fleissner(".key.grille");

$('#dimension').change(function(){
    crearRejilla($(this).val());
new APP.fleissner(".key.grille");
});