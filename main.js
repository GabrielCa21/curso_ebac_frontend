$(document).ready(function() {
    $('#tarefa-Form').submit(function(e) {
        e.preventDefault();

        var tarefa = $('#nome-tarefa').val();

        if (tarefa.trim() !== '') {
            $('#lista-tarefa').append('<li>' + tarefa + '</li>');
            $('#nome-tarefa').val('');
        }
    });

    $('#lista-tarefa').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
