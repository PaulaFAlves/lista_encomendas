$(document).ready(function() {
    $.ajax({
        url: '/server.json',
        method: 'get',
        dataType: 'json',
        success: function(data) {
            console.log(data)
            let valorFinal = []
            len = data.encomendas.length;
            console.log(len)
            for (i = 0; i < len;i++) {
                valorFinal.push((data.encomendas[i].valor * 1.043).toFixed(2));
            }
            console.log(valorFinal)
            let exampleTable = $('#example')
                .DataTable({
                    data: data.encomendas,
                        'aaSorting': [[1, 'asc']],
                    dom: "<'row'<'col-md-6 text-left'T><'col-md-6 text-right'f>>" +
                        "<'row'<'col-md-12't>>" +
                        "<'row'<'col-md-6'i><'col-md-6'p>>",
                        'columns': [
                            { 'data': 'codigo' },  
                            { 'data': 'cliente.nome' },
                            { 'data': 'valor' },
                            { 'data': 'valor' } ,
                            { 'data': 'data' },       
                    ],
                    language: {
                        "sZeroRecords": "Nenhum registro encontrado",
                    },
                    pageLength: 4,
                });
        }
    });
});

