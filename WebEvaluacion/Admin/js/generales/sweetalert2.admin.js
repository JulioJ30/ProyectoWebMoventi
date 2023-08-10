// ##############
// ## MENSAJES ##
// ##############

// ADVERTIR
function Advertir(mensaje) {
    swal.fire(mensaje, "Textile Web", "error");
}

//CONFIRMADO
async function Confirmado_con_exito(title) {
    return Swal.fire(
        title,
        'Textile Web',
        'success'
    );
}


//INFORMAR -- SUCCESS
//function Informar(mensaje) {
//    swal.fire(mensaje, "Textile Web", "success");
//}
async function Informar(mensaje, autocierre = false, reload = false) {

    if (reload) {
        setTimeout(() => {
            location.reload();
        }, autocierre + 100);
    }

    if (autocierre) {

        Swal.fire({
            icon: 'success',
            title: mensaje,
            text: 'Textile Web',
            timer: autocierre,
            allowEscapeKey: false,
            allowOutsideClick: false
            // timerProgressBar: true,
        })

    } else {
           await Swal.fire(mensaje, "Textile Web", "success");
    }

}



async function PreguntarCongelado(pregunta) {
    let resultado = await Swal.fire({
        title: pregunta,
        text: "Textile Web",
        icon: 'warning',
        showDenyButton: true,
        showCancelButton: true,
        showConfirmButton:true,
        //showCloseButton:true,
        confirmButtonColor: '#3085d6',
        denyButtonText: 'Nueva versión',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Reemplazar',
        cancelButtonText: 'Cancelar'
    });

    return resultado;
}


// TOAST
function InformarMini(mensaje, tiempo = false) {


    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: tiempo ? tiempo : 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: mensaje
    })
}

// TOAST ADVERTIR
function AdvertirMini(mensaje, tiempo = false) {


    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: tiempo ? tiempo : 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'error',
        title: mensaje
    })
}

//PREGUNTAR
async function Preguntar(pregunta) {
    let resultado = await Swal.fire({
        title: pregunta,
        text: "Textile Web",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
    });

    return resultado;
}

function MostrarCarga(mensaje = "Cargando") {

    Swal.fire({
        title: mensaje,
        html: 'Esto puede tardar unos minutos',
        //timer: 2000,
        allowEscapeKey: false,
        allowOutsideClick: false,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        }
    })
}

function MostrarCarga_new(mensaje) {

    Swal.fire({
        title: mensaje,
        html: 'Esto puede tardar unos minutos',
        //timer: 2000,
        allowEscapeKey: false,
        allowOutsideClick: false,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        }
    })
}

function OcultarCarga() {
    Swal.hideLoading();
    Swal.clickConfirm();
}

//LOGIN ACCESO
function EntrarSistema(mensaje) {
    let timerInterval;

    Swal.fire({
        title: mensaje,
        icon: 'success',
        html: 'Cargando...',
        timer: 1000,
        didOpen: () => {
            Swal.showLoading()
        },
        onClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.timer
        ) {
            //REDIRECCIONANDO 
            location.href = "/dashboard/index";
        }
    })
}

// GET DATOS PREGUNTAR
async function getDatosPreguntar(pregunta) {


    //let valor = null;
    const { value: valor } = await Swal.fire({
        title: pregunta,
        input: 'text',
        //inputLabel: 'Your IP address',
        //inputValue: inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'Es necesario ingresar la información'
            }
        }
    })
    return valor;

    /*
    if (ipAddress) {
        Swal.fire(`Your IP address is ${ipAddress}`)
    }*/


}

// OBTENER DATOS
async function Obtener(mensaje, tipo, value = "") {

    // let valor = null;

    const { value: valor } = await Swal.fire({
        title: mensaje,
        input: tipo,
        inputValue: value,
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'Complete el campo'
            }
        }
    })

    return valor;

}
//Para inventario
async function Obtener_inv(mensaje, tipo, value = "") {

    // let valor = null;
    const { value: valor } = await Swal.fire({
        title: mensaje,
        input: tipo,
        inputValue: value,
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'Complete el campo'
            }
        }
    })

    return valor;

}

//version 3 del swal para inventario
async function ConfirmarContraseña() {
    const { value: password } = await Swal.fire({
        title: 'Enter your password',
        input: 'password',
        inputLabel: 'Password',
        inputPlaceholder: 'Enter your password',
        inputAttributes: {
            maxlength: 10,
            autocapitalize: 'off',
            autocorrect: 'off',
        }
    })

}


