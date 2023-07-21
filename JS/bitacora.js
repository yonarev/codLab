// Establecemos la fecha actual como valor por omisión del campo de fecha
var fechaActual = new Date();
var anio = fechaActual.getFullYear();
var mes = (fechaActual.getMonth()+1).toString().padStart(2, '0');
var dia = fechaActual.getDate().toString().padStart(2, '0');
var fechaPorOmision = anio + '-' + mes + '-' + dia;
//PARA f5
const textarea = document.getElementById("nota");
document.getElementById("fechaBit").value = fechaPorOmision;
// Función para cargar la nota correspondiente a la fecha seleccionada
function cargarNota() {
    // Obtenemos la fecha seleccionada
    var fecha = document.getElementById("fechaBit").value;
    // Convertimos la fecha al formato "dd-mm-yyyy"
    var fechaFormateada = fecha.split("-").reverse().join("-");
    // Obtenemos la lista de notas almacenadas en el Local Storage
    var bitacora = JSON.parse(localStorage.getItem("bitacora")) || [];
    // Buscamos la nota correspondiente a la fecha seleccionada
    var notaEncontrada = bitacora.find(function(nota) {
        return nota.fecha == fechaFormateada;
    });
    // Si encontramos una nota para la fecha seleccionada, la cargamos en el campo de nota
    if (notaEncontrada) {
        document.getElementById("nota").value = notaEncontrada.nota;
    } else {
        document.getElementById("nota").value = "";
    }
}
//presentamo el dia
presentaDia()
// Cargamos la nota correspondiente a la fecha seleccionada al cargar la página
cargarNota();
function guardarNota() {
    // Obtenemos la fecha y la nota del formulario
    var fecha = document.getElementById("fechaBit").value;
    var nota = document.getElementById("nota").value;
    // Convertimos la fecha al formato "dd-mm-yyyy"
    var fechaFormateada = fecha.split("-").reverse().join("-");
    // Obtenemos la lista de notas almacenadas en el Local Storage
    var bitacora = JSON.parse(localStorage.getItem("bitacora")) || [];
    // Creamos un nuevo objeto con la fecha y la nota ingresadas
    var nuevaNota = {
        fecha: fechaFormateada,
        nota: nota
    };
    // Buscamos la nota correspondiente a la fecha seleccionada
    var notaExistente = bitacora.find(function(nota) {
        return nota.fecha == fechaFormateada;
    });
    // Si encontramos una nota para la fecha seleccionada, la reemplazamos con la nueva nota
    if (notaExistente) {
        var indiceNotaExistente = bitacora.indexOf(notaExistente);
        bitacora[indiceNotaExistente] = nuevaNota;
    } else {
         // Si no encontramos una nota para la fecha seleccionada, agregamos la nueva nota a la lista
         bitacora.push(nuevaNota);
    }
        // Almacenamos la lista de notas en el Local Storage
        localStorage.setItem("bitacora", JSON.stringify(bitacora));
        mostrarFechaHora()
}
// Agregamos un evento al campo de fecha para que se cargue la nota correspondiente al seleccionar una fecha
document.getElementById("fechaBit").addEventListener("change", cargarNota);
//al grabar automatico cada 1 min
function grabarAutomaticoBit() {
    setInterval(function() {
        guardarNota();
    }, 60000);
}
setInterval(grabarAutomaticoBit(), 60000); // 1 min
// PARA GRABAR BITACORA EN ARCHVO JSON EN HD
var btnGuardar = document.getElementById('btnGuardar');
// Agregar un evento click al botón de guardar
btnGuardar.addEventListener('click', function() {
// Obtener la información de la bitácora
var bitacora = document.getElementById('txtBitacora').value;
// Crear un objeto Blob con la información de la bitácora
var archivo = new Blob([bitacora], {type: 'text/plain'});
// Crear un objeto URL para el archivo Blob
var urlArchivo = URL.createObjectURL(archivo);
// Crear un enlace para descargar el archivo
var enlaceDescarga = document.createElement('a');
enlaceDescarga.setAttribute('href', urlArchivo);
enlaceDescarga.setAttribute('download', 'bitacora.txt');
// Agregar el enlace al documento y simular un clic
document.body.appendChild(enlaceDescarga);
enlaceDescarga.click();
// Eliminar el enlace y liberar la URL del archivo Blob
document.body.removeChild(enlaceDescarga);
URL.revokeObjectURL(urlArchivo);
// Guardar la información de la bitácora en el Local Storage
localStorage.setItem('bitacora', bitacora);
});
//GRABA EN DISCO DURO EL ARCHIVO JSON
function guardarBitacora() {
    event.preventDefault();
    // leer los datos existentes de la bitácora del almacenamiento local
    var bitacora = localStorage.getItem("bitacora");
    if (bitacora === null) {
        bitacora = [];
    } else {
        bitacora = JSON.parse(bitacora);
    }
    // agregar los nuevos datos a la bitácora
    var fecha = new Date().toLocaleDateString();
    var nota = "Nueva nota";
    bitacora.push({fecha: fecha, nota: nota});
    // guardar los datos actualizados en el almacenamiento local
    localStorage.setItem("bitacora", JSON.stringify(bitacora));
    // crear un objeto de enlace para descargar el archivo JSON
    var enlace = document.createElement("a");
    enlace.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(bitacora));
    // FORMATO NOMBRE ARCHIVO
    let currentDate = new Date();
    let month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    let day = ('0' + currentDate.getDate()).slice(-2);
    let formattedDate = day+month;
    console.log(formattedDate); // "04/24" (si hoy es 24 de abril)
    let nombreArchivo = 'bitacora'+formattedDate+'.json';
    enlace.download = nombreArchivo;
    // hacer clic en el enlace para descargar el archivo
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}
//LEE EL ARCHIVO A LOCAL
function leerJSON() {
    var archivo = document.getElementById("archivoJSON").files[0];
    var lector = new FileReader();
    lector.onload = function(event) {
    var contenido = event.target.result;
    var bitacora = JSON.parse(contenido);
    localStorage.setItem("bitacora", JSON.stringify(bitacora));
    console.log("Bitácora subida a LocalStorage");
};

lector.readAsText(archivo);
}
//para f5
// Función para insertar la fecha y hora actual en el textarea
function insertarFechaHora() {
    const fechaHora = new Date().toLocaleString();
    textarea.value += fechaHora;
}
function presentaDia(){
     // Obtenemos la fecha actual
     let today = new Date();
     // Generamos una cadena de texto con el formato deseado
    //  let textoDelDia = `${today.toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;
     let textoDelDia = `${today.toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;
     // Insertamos el texto del día en la etiqueta "p" con id "textoDelDia"
     document.getElementById('textoDelDia').innerHTML = textoDelDia;
}
//     // Mostrar la cadena en el elemento con el id "fechaHora"
//     document.getElementById("fechaHora").innerHTML = fechaHoraOkStr;
// }
function mostrarFechaHora() {
    // Obtener la fecha y hora actual
    let fechaHoraActual = new Date();
    // Crear una cadena con la fecha y hora formateadas
    let fechaHoraActualStr = `Ultima grabacion: ${fechaHoraActual.toLocaleDateString()} a las ${fechaHoraActual.toLocaleTimeString()}`;
    // Mostrar la cadena en el elemento con el id "fechaHora"
    document.getElementById("horaGrabaBit").innerText = fechaHoraActualStr;
    // document.getElementById("fechaHora").innerHTML = fechaHoraActualStr;
}

//PRESENTA FECHA HORA
// Función para agregar un cero a la izquierda de un número si es necesario
function agregarCero(num) {
    return (num < 10 ? "0" : "") + num;
  }
function actualizarHora() {
  // Obtener la fecha y hora actual
  var fechaActual = new Date();
  // Obtener los componentes de la fecha y hora
  var dia = agregarCero(fechaActual.getDate());
  var mes = agregarCero(fechaActual.getMonth() + 1);
  var anio = fechaActual.getFullYear();
  var hora = agregarCero(fechaActual.getHours());
  var minutos = agregarCero(fechaActual.getMinutes());
  var segundos = agregarCero(fechaActual.getSeconds());
  // Mostrar la fecha y hora en el formato deseado
  let fechaString=dia + "/" + mes + "/" + anio + " " 
  document.getElementById("fechaBit").textContent = fechaString;
  var horaString = hora + ":" + minutos + ":" + segundos;
  document.getElementById("horaBit").textContent = horaString;
}
// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);
// TECLA F2
document.addEventListener('keydown', function(event) {
    if (event.key === 'F2') {
        guardarNota()
        mostrarFechaHora()
    }
});
// Capturar el evento de presionar la tecla F3
document.addEventListener("keydown", function(event) {
    if (event.key === "F3") {
        insertarFechaHora();
        event.preventDefault(); // Evita que se recargue la página
    }
});
// GUARDA BITACOARA AUTO
function grabarAutomaticoBit() {
    setInterval(function() {
      guardarNota();
    }, 60000);
}