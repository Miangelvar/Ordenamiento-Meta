$(document).ready(function () {

    // Donde queremos cambiar el tamaño de la fuente
    var donde = $('.mitexto');
    var titulo = $('.mititulo');
    var sizeFuenteOriginal = donde.css('font-size');
    var sizeFuenteOriginalTitulo= titulo.css('font-size');

    //DONDE QUEREMOS CAMBIAR EL BACKGROUND Y EL COLOR FONT
    var colorLetra = $('.colorLetra');
    var colorFondo=$('.textoPrincipio');
    var colorFondoBlanco=$('.fondoBlanco');
    var colorTitulos=$('.colorTitulos');
    
    var menufooter = $('.MenuFooter');
    var menufooterFondo = menufooter.css('background-color');

    var mapaNavFondo=$('.mapaNavFondo');
    var mapaNavLetra=$('.mapaNavLetra');


    var imagenContraste=$('.contraste');

    var x = false;

    $('.altoContraste').click(function(){
        if (x==false){
            colorTitulos.css('color', "yellow");
            mapaNavFondo.css('background-color', "black");
            mapaNavLetra.css('color', "yellow");
            colorLetra.css('color', "yellow");
            colorFondo.css('background-color',"black");
            colorFondoBlanco.css('background-color', "black");
            menufooter.css('color', "yellow")
            menufooter.css('background-color', "black")
            imagenContraste.css('-webkit-filter', "contrast(300%)" );
            x=true;
        }else{
            colorTitulos.css('color', "#e76f2b");
            mapaNavFondo.css('background-color', "#5745a1");
            mapaNavLetra.css('color', "white");
            colorLetra.css('color', "black");
            colorFondo.css('background-color',"rgb(233, 236, 239)");
            colorFondoBlanco.css('background-color', "white");
            menufooter.css('color', "white");
            menufooter.css('background-color', menufooterFondo);
            imagenContraste.css('-webkit-filter', "contrast(100%)" );
            x=false;
        }
    });

    // Resetear Font Size
    $(".resetearFont").click(function () {
        donde.css('font-size', sizeFuenteOriginal);
        titulo.css('font-size', sizeFuenteOriginalTitulo);

    });

    // Aumentar Font Size
    $(".aumentarFont").click(function () {
        
        var sizeFuenteActualTitulo = titulo.css('font-size');
        var sizeFuenteActualNumtitulo = parseFloat(sizeFuenteActualTitulo, 10);
        var sizeFuenteNuevoTitulo = sizeFuenteActualNumtitulo * 1.2;
        titulo.css('font-size', sizeFuenteNuevoTitulo);
        
        var sizeFuenteActual = donde.css('font-size');
        var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
        var sizeFuenteNuevo = sizeFuenteActualNum * 1.2;
        donde.css('font-size', sizeFuenteNuevo);

        return false;
    });

    // Disminuir Font Size
    $(".disminuirFont").click(function () {
        var sizeFuenteActualTitulo = titulo.css('font-size');
        var sizeFuenteActualNumtitulo = parseFloat(sizeFuenteActualTitulo, 10);
        var sizeFuenteNuevoTitulo = sizeFuenteActualNumtitulo * 0.8;
        titulo.css('font-size', sizeFuenteNuevoTitulo);

        var sizeFuenteActual = donde.css('font-size');
        var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
        var sizeFuenteNuevo = sizeFuenteActualNum * 0.8;
        donde.css('font-size', sizeFuenteNuevo);
        return false;
    });

});