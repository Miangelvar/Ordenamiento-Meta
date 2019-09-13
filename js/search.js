
var buscador = $("#table").DataTable();

$("#buscador").keyup(function(){

    buscador.search($(this).val()).draw();

    if ($("#buscador").val() == ""){
        $(".content-search").fadeOut(300);
    }else{
        $(".content-search").fadeIn(300);
    }
})
