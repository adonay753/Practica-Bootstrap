$(function () {
    $('[data-toggle=\'tooltip\']').tooltip();
    $('[data-toggle=\'[popover\']').popover();
});
$('.carousel').carousel({
    interval: 1500
});
$('#contacto').on('show.bs.modal', function (e) {
    console.log('el modal se esta ejecutando');
});
$('#contacto').on('shown.bs.modal', function (e) {
    console.log('el modal temmino de ejecutarse ');
});
$('#contacto').on('hide.bs.modal', function (e) {
    console.log('el modal se oculta');
});
$('#contacto').on('hidden.bs.modal', function (e) {
    console.log('el modal se oculto');
    $('#contactoBtn').prop('disable', true);
});
