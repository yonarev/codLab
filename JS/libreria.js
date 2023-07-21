// RETORNA DIA 
function diaDeHoy() {
                console.log("diaDeHoy()");

            let fecha =  new Date(); //Thu Jun 30 2022 14:08:47 GMT-0400 (hora estándar de Chile)
            const hoy = fecha.getDate();
            const hoyIso = fecha.toISOString()
            let dias=['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
            // console.log(dias[fecha.getDay()]);
            let dia=dias[fecha.getDay()];

                console.log(dia);
                console.log(hoy);
                console.log(fecha);
                console.log(hoyIso);
            return dia;
}
function cargarPagina(pagina) {
    // Abrir la página en una nueva ventana o pestaña
    //let textPag="CodLab-"+pagina
    var nuevaVentana = window.open(pagina, "_blank"); 
    // Comprobar si la página ya está abierta
    if (nuevaVentana != null && !nuevaVentana.closed) {
      // Si la página ya está abierta, actualizarla
      nuevaVentana.location.reload();
    }
}
// PRESENTA EN PANTALLA FECHA COMPLETA
function tiempoPantalla(){
    console.log("tiempoPantalla()");
    let horNow;
    let fecNow;
    horNow=horaAhora();
    fecNow=fechaAhora()
    let diaH= diaDeHoy();
    console.log(diaH);
    // recupero obj //BJETO DIV es block de notas
    let ele = document.getElementById("fechaHora"); 
    // DESPLIEGUE DATS EN PANTALLA
    ele.style.background = "rgb(253, 253, 5)";
    ele.innerText=diaH+"/"+fecNow+"/"+horNow;
}
// RETORNA INDICE UNICO en base a fecha hora
function indiceAhora(){
            // console.log("indiceAhora()");
            // OBTENIENDO FECHA
            let date = new Date();
            let fecha=date.toLocaleDateString();
            let fechaIso=date.toISOString();
            console.log("Fecha iso: " + fechaIso);
            // convierte a string
            let anioHoy=fechaIso.substring(0,4);
            let mesHoy=fechaIso.substring(5,7);
            let diaHoy=fechaIso.substring(8,10);
            // entrega fechaHoy global
            let fechaHoy= diaHoy+mesHoy+anioHoy; 
            console.log("fecha hoy: " + fechaHoy);
            // OBTENIENDO HORA
            let currentTime = new Date();
            let hora=currentTime.getHours();
            let minutos=currentTime.getMinutes();   
            let segundos=currentTime.getSeconds();
            // validar horas minutos 01 pone 1
            //convierte a string
            let hori= hora.toString();  
            let mini= minutos.toString();  
            let segi= segundos.toString();  
            //hora actual
            let horaTrans=(hori + mini + segi);
            // calcula indice
            let indiceAhora=fechaHoy+horaTrans; // entrega indice global
            let indiceNum=parseInt(indiceAhora);
            return indiceNum
}
// RETORNA HORA COMPACTA y en var global horaIng
function horaAhora(){
    console.log("horaAhora()");
    // OBTENIENDO HORA
    let currentTime = new Date();
    let hora=currentTime.getHours();
    let minutos=currentTime.getMinutes();
    let segundos=currentTime.getSeconds();
    //convierte a string
    let hor= hora.toString();  
    let min= minutos.toString();  
    let seg= segundos.toString();  
    //hora actual
    let horaTrans=(hor + min + seg);
    var horaIng=(hor + ":" + min + ":" + seg); // entrega hora global horaIng
    console.log("horaTrans: "+horaTrans);
    console.log("hora Ingreso: " + horaIng); //*
    return horaIng;
}
// RETORNA FECHA COMPACTA y en var global fechaEgr
function fechaAhora() {
    console.log("fx fechaAhora()");
    // OBTENIENDO FECHA
    let date = new Date();
    let fecha=date.toLocaleDateString();
    // let fechaIso=date.toISOString();
    // convierte a string
    let anioHoy=fecha.substring(6,10);
    let mesHoy=fecha.substring(3,5);
    let diaDeHoy=fecha.substring(0,2);
    let fechaHoy= diaDeHoy+mesHoy+anioHoy; // entrega fechaHoy global
    let fechaIng=diaDeHoy + "/" + mesHoy + "/"+ anioHoy // en variable global fechaIng
    console.log("fecha hoy: " + fechaHoy);
    console.log("fecha ingreso : " + fechaIng); //*
    return fechaIng
}
function fechaAhora() {
    console.log("fx fechaAhora()");
    const date = new Date();
    const anioHoy = date.getFullYear();
    const mesHoy = ("0" + (date.getMonth() + 1)).slice(-2); // Agrega un 0 delante del mes si es menor que 10
    const diaDeHoy = ("0" + date.getDate()).slice(-2); // Agrega un 0 delante del día si es menor que 10
    const fechaHoy = anioHoy + mesHoy + diaDeHoy; // entrega fechaHoy global
    const fechaIng = `${diaDeHoy}/${mesHoy}/${anioHoy}` // en variable global fechaIng
    console.log("fecha hoy: " + fechaHoy);
    console.log("fecha ingreso : " + fechaIng);
    return fechaIng;
  }
//RESTORNA LA RESOLUCION DE PANTALLA ACTUAL                         //03 libreria.js     
function resolucionPantalla(){
    let datSis=document.getElementById("datSis")
    datSis.innerHTML=("祝福 La resolución de tu pantalla es: " + screen.width +"px" + " x " + screen.height +"px" )        
    // 515*746
}
//obtiene el primer y ultimo dia del mes actual
function diasMes(){
    var date = new Date();
    var primerDia = new Date(date.getFullYear(), date.getMonth(), 1);
    var ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    console.log("<br>El primer día es: "+primerDia.getDate());
    console.log("<br>El ultimo día es: "+ultimoDia.getDate());
}
function diasEnUnMes(mes,ano) {
	return new Date(ano, mes, 0).getDate();
}
function fechaCompleta(){
    let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    let diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    let f=new Date();
    let respuesta=diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
}
//da hora en pantalla
function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
       segundo = "0" + segundo
    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto
    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora
    horaImprimible = hora + " : " + minuto + " : " + segundo
    document.form_reloj.reloj.value = horaImprimible;
    // INCORPORAR EN BODY
    // <form name="form_reloj">
    //     <input type="text" name="reloj" size="10" style="background-color : Black; color : White; font-family : Verdana, Arial, Helvetica; font-size : 8pt; text-align : center;" onfocus="window.document.form_reloj.reloj.blur()">
    // </form>
    setTimeout("mueveReloj()",1000)
}
function jsonAxls(){
    / * Datos JSON para exportar * /
    var data = [
        {"name":"John", "city": "Seattle"},
        {"name":"Mike", "city": "Los Angeles"},
        {"name":"Zach", "city": "New York"}
    ];
    / * Si el componente xlsx no se importa, entonces importe * /
    if(typeof XLSX == 'undefined') XLSX = require('xlsx');
    // / * Crear hoja de trabajo * /
    var ws = XLSX.utils.json_to_sheet(data);
    // / * Cree un libro de trabajo vacío y luego agregue la hoja de trabajo * /
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "People");
    // / * Generar archivo xlsx * /
    XLSX.writeFile(wb, "archivo.xlsx");
}
// //PRESENTA GUION DE LA APP WEB
// function presentaGuion(presentar){
//     if(!presentar) {return};
//     let TXT_URL = './guion.txt';
//     $.ajax
//      (
//          {
//             data: new FormData(this),
//             url : TXT_URL,
//             dataType: "text",
//             success : function (data) {
//                     $("#guion").html("<pre>"+data+"</pre>");
//                 }
//             }
//      );
// }

// GUARDA EN ARCHIVO JSON PARA LEERLO DESPUES Y LLENAR LOCAL
// function recArchivo(){
//         //RESCATA TABLA DE TRANSACC
//         var leeLocal = localStorage.getItem("transaccion")
//         let file = new File([leeLocal],"archivo.json",{type:"text/plain;charset=utf-8"});
        
//         // actualizas los parámetros del enlace para descargar el fichero creado
//         let url  = window.URL.createObjectURL(file); // creas un enlace y lo añades al documento
//         let a = document.getElementById("rec");
//         a.href = url;
//         a.innerHTML = "Descargar Respaldo transaccion";
//         a.download = file.name;

//         // SOLO GRABA AL TOKE
//         // despues no lo hace
//         a.click();
//         setTimeout(function() {
//             // a.style.display="none"
//             window.URL.revokeObjectURL(url);  
//         }, 0); 
    
// }
