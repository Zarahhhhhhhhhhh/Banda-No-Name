$(document).ready(function () {
    $('.card').hide();
    $('.card').fadeIn(1500);
});

$(document).ready(function () {
    // Esconder o menu quando a página carregar
    $('.menu-mobile').hide();
    // Adicionar um evento de clique no botão de menu
    $('#menu-button').click(function () {
        // Mostrar ou esconder o menu
        $('.menu-mobile').toggle();
        // Adicionar ou remover a classe "menu-mobile-active"
        $(this).toggleClass('menu-mobile-active');
    });
});
