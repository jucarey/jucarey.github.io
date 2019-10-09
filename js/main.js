$(document).ready(function(){
    // cambio estilo barra navegacion
    $(window).on("scroll", function(){
        var positionParagraph = $("#primera").offset();
        var positionDocument = $(window).scrollTop();
        console.log(position.top);
        // console.log(positin.top);
        if (positionDocument > positionParagraph.top - 60){
            $('nav').removeClass('white');
            $('burger').removeClass('white');

        } else {
            $('nav').addClass('white');
            $('.burger').addClass('white');

        }
    });
    
    // menu lateral
    $('.burger').click(function(){
        $('.burger').toggleClass('open');
        $('aside').toggleClass('open');

    });
});