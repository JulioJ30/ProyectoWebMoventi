// LLENAR COMBO SIMPLE
function setComboSimple(combo, data, nombre, id, select = true, datajson = false, textdefault = "SELECCIONE", valordefault = '') {

    let option = select ? `<option value='${valordefault}'>${textdefault}</option>` : "";

    for (let obj of data) {
        let datahtml = "";
        if (datajson) {
            for (let i in datajson) {
                datahtml += ` data-${i}='${obj[i]}' `;
            }
        }

        option += `
          <option value='${obj[id]}' ${datahtml} > ${obj[nombre]} </option>
        `;
    }
    //console.log("data", data, option, "option", datajson, "datajson")
    $(`#${combo}`).html(option);

}


// SOLICITUDES GET PARA OBTENER UN JSON O UN HTML
async function get(controller, operacion, parameters, html = false) {

    // DATOS QUE VAMOS A DEVOLVER
    let response;
    // PARAMETROS 
    let datos = {};

    datos = parameters;
    //datos.operacion = operacion;



    //  EJECUTAMOS
    response = await $.ajax({
        url: `/${controller}/${operacion}`,
        type: 'get',
        data: datos
    })
    // PARSEAMOS RESULTADO
    response = !html ? JSON.parse(response) : response;
    // DEVOLVEMOS
    return response;
}

// SOLICITUDES POST
async function post(controller, operacion, parameters, html = false) {


    // DATOS QUE VAMOS A DEVOLVER
    let response;
    // PARAMETROS 
    let datos = {};


    //datos.parameters = parameters;
    datos = parameters;

    //  EJECUTAMOS
    response = await $.ajax({
        url: `/${controller}/${operacion}`,
        type: 'post',
        data: datos,
        dataType:'json'
    })

    // PARSEAMOS RESULTADO
    // response = JSON.parse(response);
    response = !html ? JSON.parse(response) : response;

    // DEVOLVEMOS
    return response;
}

// SOLICITUDES POST CON ARCHIVO
async function postFile(controller, operacion, parameters, html = false) {


    // DATOS QUE VAMOS A DEVOLVER
    let response;
    // PARAMETROS 
    let datos = {};


    //datos.parameters = parameters;
    datos = parameters;

    //  EJECUTAMOS
    response = await $.ajax({
        url: `/${controller}/${operacion}`,
        type: 'post',
        data: datos,
        cache: false,
        contentType: false,
        processData: false
    })

    // PARSEAMOS RESULTADO
    // response = JSON.parse(response);
    response = !html ? JSON.parse(response) : response;

    // DEVOLVEMOS
    return response;
}


function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}


// CONCATENA PARA UN TITULO
function Concat(titulo, texto) {
    // console.log(titulo,texto)
    return ` <strong>${titulo}:</strong>  ${texto}`;
}


// AGREGA Y REMUEVE CLASES
function AddRemoveClass(input, class1, class2) {
    $(`#${input}`).removeClass(class1);
    $(`#${input}`).addClass(class2);
}



// AGREGA ELEMTOS PARA VALIDACION
function ValidarFormulario(arraydatos) {

    var array = [];
    var valor = "";
    var input = "";
    var response = true;
    // console.log(arraydatos)

    for (let key of arraydatos) {
        // console.log(key)

        valor = key.data;
        input = key.input;

        // console.log()
        // SI ES OBLIGATORIO
        if (key.type) {

            if (valor == null || valor == 0 || valor == "") {
                valor = $(`#${input}`).val().trim();
                if (valor == null || valor == 0 || valor == "") {
                    response = false;
                    $(`#${input}`).addClass("is-invalid");
                } else {
                    $(`#${input}`).removeClass("is-invalid");
                }
            } else {
                $(`#${input}`).removeClass("is-invalid");
            }

        } else {
            // SI NO TIENE VALOR AGREGAMOS EL DE SU INPUT
            if (valor == null) {
                if (input != "") {
                    valor = $(`#${input}`).val().trim();
                }
            }
            // AGREGAMOS VALOR
        }

        array.push(valor);


    }

    return response ? array : false;



}

// CREA UN OBJETO CON LOS VALORES ASIGNAMOS
function ObjetoValidacion(valor, input, tipo) {
    return {
        data: valor,
        input: input,
        type: tipo
    };
}