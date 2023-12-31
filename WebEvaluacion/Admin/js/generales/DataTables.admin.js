﻿function DataTable_DataSource(tabla,columnas,datasource, armarnewdata = true,exportexcel = true) {

    // CREAMOS DATATABLE Y ELIMINAMOS
    //var tbl = $(`#${tabla}`).DataTable();
    //tbl.destroy();


    // ARMAMOS CABECERAS
    let newdatasource = [];

    if (armarnewdata) {
        for (let item of datasource) {

            let array = [];
            for (let col of columnas) {
                array.push(item[col.title]);
            }
            newdatasource.push(array);
        }
    } else {
        newdatasource = datasource;
    }

    //`#${tabla}`.DataTable().destroy();
    if (exportexcel) {

        // ARMAMOS CUERPO
        $(`#${tabla}`).DataTable({
            data: newdatasource,
            columns: columnas,
            destroy: true,
            "language": { 'url': '/libs/datatables/spanish.json' },
            //responsive: true,
            dom: 'Bfrtip',
            buttons: [
                'excel'
            ],
            scrollX: true

        });

    } else {

        // ARMAMOS CUERPO
        $(`#${tabla}`).DataTable({
            data: newdatasource,
            columns: columnas,
            destroy: true,
            "language": { 'url': '/libs/datatables/spanish.json' },
            scrollX: true

        });

    }


    //$('#example').DataTable({
    //    processing: true,
    //    serverSide: true,
    //    ajax: 'scripts/server_processing.php',
    //});
    

}


function DataTable_DataSource_New(tabla, columnas, datasource, armarnewdata = true, exportexcel = true) {

    // CREAMOS DATATABLE Y ELIMINAMOS
    //var tbl = $(`#${tabla}`).DataTable();
    //tbl.destroy();

    //$(`#${tabla}`).remove();
    if ($.fn.DataTable.isDataTable(`#${tabla}`)) {
        $(`#${tabla}`).DataTable().destroy();
        $(`#${tabla}`).html("");
    }

    //$(`#${tabla}_Contenedor`).append(`
    //      <table class="table table-sm table-bordered text-center display nowrap tablainput" id="${tabla}" style="width:100%">
    //     </table>
    //`);




    // ARMAMOS CABECERAS
    let newdatasource = [];

    if (armarnewdata) {
        for (let item of datasource) {

            let array = [];
            for (let col of columnas) {
                array.push(item[col.title]);
            }
            newdatasource.push(array);
        }
    } else {
        newdatasource = datasource;
    }

    //`#${tabla}`.DataTable().destroy();
    if (exportexcel) {

        // ARMAMOS CUERPO
        $(`#${tabla}`).DataTable({
            data: newdatasource,
            columns: columnas,
            destroy: true,
            "language": { 'url': '/libs/datatables/spanish.json' },
            //responsive: true,
            dom: 'Bfrtip',
            buttons: [
                'excel'
            ],
            scrollX: true,
            ordering: false


        });

    } else {

        // ARMAMOS CUERPO
        $(`#${tabla}`).DataTable({
            data: newdatasource,
            columns: columnas,
            destroy: true,
            "language": { 'url': '/libs/datatables/spanish.json' },
            scrollX: true,
            ordering: false


        });

    }


    //$('#example').DataTable({
    //    processing: true,
    //    serverSide: true,
    //    ajax: 'scripts/server_processing.php',
    //});


}




function ArmarDataTable_Actualizado(tabla, pixeles = '200px', pexport = false, pfiltro = false) {

    if (pexport == false) {
        $(`#${tabla}`).DataTable(
            {

                "language": { 'url': '/libs/datatables/spanish.json' },
                "scrollX": true,
                "scrollY": true,
                "ordering": false,
                "searching": pfiltro,
                "bSort": false,        
                scrollY: pixeles,
                scrollCollapse: true,
                paging: false,
                "ordering": false,

            });
    }

    else {
        $(`#${tabla}`).DataTable(
            {

                "language": { 'url': '/libs/datatables/spanish.json' },
                "scrollX": true,
                "scrollY": true,
                "ordering": false,
                "searching": pfiltro,
                "bSort": false,
                dom: 'Bfrtip',
                buttons: [
                    'excel'
                ],
                scrollY: pixeles,
                scrollCollapse: true,
                paging: false,
            });
    }

}

function ArmarDataTable(tabla, exportar = false, minimo = true, scrool = false) {

    if (!scrool) {
        var objeto = {};
        objeto.language = { 'url': "/Libs/datatables/Spanish.json" };
        objeto.ordering = false;
        //objeto.scrollbar = true;
        if (minimo) {
            objeto.lengthMenu = [[5, 10, 20, -1], [5, 10, 20, 'Todos']];
        }
        if (exportar) {
            objeto.dom = 'Bfrtip';
            objeto.buttons = ['excel', 'pdf', 'print'];
        }

        $(`#${tabla}`).DataTable(objeto);
    } else {
        $(`#${tabla}`).DataTable(
            {
                "language": { 'url': '/libs/datatables/spanish.json' },
                "initComplete": function (settings, json) {
                    // var api = this.api();

                },
                "footerCallback": function (row, data, start, end, display) {
                    //var api = this.api(), data;
                    //sumaMontos(this);
                    return;
                },
                "scrollX": true,
                "bSort": false,
                //dom: 'Bfrtip',
                //buttons: [
                //    'excel', 'pdf', 'print'
                //],
                scrollY: '60vh',
                scrollCollapse: true,
                paging: true
            });
    }



}

// SET DATATABLE SIMPLE
function setDataTableSimple(tabla, scroolx = false, dato = false, exportar = false) {
    var tbl = $(`#table${tabla}`).DataTable();
    tbl.destroy();

    if (dato || dato == "") {
        console.log("ENTREEEE");
        $(`#tbody${tabla}`).html(dato);
    }

    var objeto = {};
    objeto.language = { 'url': "/Libs/datatables/Spanish.json" };
    objeto.ordering = false;

    objeto.scrollX = scroolx;
    //objeto.processing = true;

    if (!scroolx) {
        objeto.lengthMenu = [[5, 10, 20, -1], [5, 10, 20, 'Todos']];
    }

    if (exportar) {

        //objeto.dom = 'Bfrtip';
        //objeto.buttons = ['excel', 'pdf', 'print'];

        objeto.dom = 'Bfrtip';
        objeto.buttons = ['excel'];
    }

    $(`#table${tabla}`).DataTable(objeto);



}

// ARMAR DATABLA NEW
function ArmarDataTable_New(tabla, dato, ordenar = false, minimo = true, exportar = false, scroolx = false) {

    // REFRESCAMOS
    var tbl = $(`#table${tabla}`).DataTable();
    tbl.destroy();



    // LLENAMOS DATOS
    $(`#tbody${tabla}`).html(dato);


    var objeto = {};
    objeto.language = { 'url': "/Libs/datatables/Spanish.json" };
    objeto.ordering = ordenar;

    objeto.scrollX = scroolx;

    if (minimo) {
        objeto.lengthMenu = [[5, 10, 20, -1], [5, 10, 20, 'Todos']];
    }

    if (exportar) {
        objeto.dom = 'Bfrtip';
        objeto.buttons = ['excel', 'pdf', 'print'];
    }

    $(`#table${tabla}`).DataTable(objeto);


}

// ARMAR DATABLA NEW
function ArmarDataTable_New_Pdf_Horizontal(tabla, dato, ordenar = false, minimo = true, exportar = false, scroolx = false) {

    // REFRESCAMOS
    var tbl = $(`#table${tabla}`).DataTable();
    tbl.destroy();

    // LLENAMOS DATOS
    $(`#tbody${tabla}`).html(dato);

    var objeto = {};
    objeto.language = { 'url': "/Libs/datatables/Spanish.json" };
    objeto.ordering = ordenar;

    objeto.scrollX = scroolx;

    if (minimo) {
        objeto.lengthMenu = [[5, 10, 20, -1], [5, 10, 20, 'Todos']];
    }

    if (exportar) {
        objeto.dom = 'Bfrtip';
        objeto.buttons = ['excel', 'print', {
            extend: 'pdf', orientation: 'landscape'
        },];
    }

    $(`#table${tabla}`).DataTable(objeto);


}