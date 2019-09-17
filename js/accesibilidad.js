$(document).ready(function () {

    //  queremos cambiar el tamaño de la fuente
    var miBody = $('.miBody');//para los <p>
    var miP = $('.miP');//para los <p>
    var miA = $('.miA');//para los <a>
    var miH1 = $('.miH1');//para <h1>
    var miH2 = $('.miH2');//para <h2>
    var miH3 = $('.miH3');//para <h3>
    var miH4 = $('.miH4');//para <h4>
    var miH5 = $('.miH5');//para <h5>
    var miH6 = $('.miH6');//para <h6>
    var miBodyOriginal = miBody.css('font-size');
    var miPOriginal = miP.css('font-size');
    var miAOriginal = miA.css('font-size');
    var miH1Original= miH1.css('font-size');
    var miH2Original= miH2.css('font-size');
    var miH3Original= miH3.css('font-size');
    var miH4Original= miH4.css('font-size');
    var miH5Original= miH5.css('font-size');
    var miH6Original= miH6.css('font-size');

    // QUEREMOS CAMBIAR EL BACKGROUND Y EL COLOR FONT
    var colorLetra = $('.colorLetra');
    var colorFondo = $('.textoPrincipio');
    var colorFondoBlanco = $('.fondoBlanco');
    var colorTitulos = $('.colorTitulos');
    var menufooter = $('.MenuFooter');
    var menufooterFondo = menufooter.css('background-color');
    var mapaNavFondo = $('.mapaNavFondo');
    var mapaNavLetra = $('.mapaNavLetra');
    var imagenContraste = $('.contraste');

    var x = false;

    $('.altoContraste').click(function () {
        if (x == false) {
            colorTitulos.css('color', "yellow");
            mapaNavFondo.css('background-color', "black");
            mapaNavLetra.css('color', "yellow");
            colorLetra.css('color', "yellow");
            colorFondo.css('background-color', "black");
            colorFondoBlanco.css('background-color', "black");
            menufooter.css('color', "yellow")
            menufooter.css('background-color', "black")
            imagenContraste.css('-webkit-filter', "contrast(300%)");
            x = true;
        } else {
            colorTitulos.css('color', "#e76f2b");
            mapaNavFondo.css('background-color', "#5745a1");
            mapaNavLetra.css('color', "white");
            colorLetra.css('color', "black");
            colorFondo.css('background-color', "rgb(233, 236, 239)");
            colorFondoBlanco.css('background-color', "white");
            menufooter.css('color', "white");
            menufooter.css('background-color', menufooterFondo);
            imagenContraste.css('-webkit-filter', "contrast(100%)");
            x = false;
        }
    });

    // Resetear Font Size
    $(".resetearFont").click(function () {
        miBody.css('font-size', parseFloat(miBodyOriginal));
        miP.css('font-size', parseFloat(miPOriginal));
        miA.css('font-size', parseFloat(miAOriginal));
        miH1.css('font-size',parseFloat (miH1Original));
        miH2.css('font-size', parseFloat (miH2Original));
        miH3.css('font-size',parseFloat ( miH3Original));
        miH4.css('font-size', parseFloat (miH4Original));
        miH5.css('font-size', parseFloat (miH5Original));
        miH6.css('font-size', parseFloat(miH6Original));
    });

    // Aumentar Font Size
    $(".aumentarFont").click(function () {
        miBody.css('font-size', parseFloat(miBody.css('font-size'), 10) * 1.2);
        miP.css('font-size', parseFloat(miP.css('font-size'), 10) * 1.2);
        miA.css('font-size', parseFloat(miA.css('font-size'), 10) * 1.2);
        miH1.css('font-size', parseFloat(miH1.css('font-size'), 10) * 1.2);
        miH2.css('font-size', parseFloat(miH2.css('font-size'), 10) * 1.2);
        miH3.css('font-size', parseFloat(miH3.css('font-size'), 10) * 1.2);
        miH4.css('font-size', parseFloat(miH4.css('font-size'), 10) * 1.2);
        miH5.css('font-size', parseFloat(miH5.css('font-size'), 10) * 1.2);
        miH6.css('font-size', parseFloat(miH6.css('font-size'), 10) * 1.2);
        return false;
    });

    // Disminuir Font Size
    $(".disminuirFont").click(function () {
        miBody.css('font-size', parseFloat(miBody.css('font-size'), 10)* 0.8);
        miP.css('font-size', parseFloat(miP.css('font-size'), 10)* 0.8);
        miA.css('font-size', parseFloat(miA.css('font-size'), 10)* 0.8);
        miH1.css('font-size', parseFloat(miH1.css('font-size'), 10) * 0.8);
        miH2.css('font-size', parseFloat(miH2.css('font-size'), 10) * 0.8);
        miH3.css('font-size', parseFloat(miH3.css('font-size'), 10) * 0.8);
        miH4.css('font-size', parseFloat(miH4.css('font-size'), 10) * 0.8);
        miH5.css('font-size', parseFloat(miH5.css('font-size'), 10) * 0.8);
        miH6.css('font-size', parseFloat(miH6.css('font-size'), 10) * 0.8);
        return false;
    });

});