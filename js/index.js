
$(function () {
    $('[data-toggle=\'tooltip\']').tooltip();
    $('[data-toggle=\'[popover\']').popover();
});
$('.carousel').carousel({
    interval: 1500
});
$('#contacto').on('show.bs.modal', function (e) {
    console.log('el modal se esta ejecutando');

    $('#contactoBtn').prop('disable', true );
});
