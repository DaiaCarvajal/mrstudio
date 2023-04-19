function nombreCompleto(){
    const email = $('#input_email').val();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    alert('Por favor, introduce una dirección de correo electrónico válida.');
    return false;
  }
    $('#email').hide();
    $('#nombre_completo').show();
}

function suscribirse(){
    const telefono = $('#telefono').val();
    const nombre= $('#nombre').val();
    const apellido= $('#apellido').val();
if(!nombre){
    alert('Debes completar el campo nombre')
    return;
}
if(!apellido){
    alert('Debes completar el campo Apellido')
    return;
}
if(!telefono){
    alert('Debes completar el campo Telefono')
    return;
}
    const doc = new jsPDF();
  doc.text(`telefono: ${telefono}`, 10, 10);
  doc.text(`Nombre: ${nombre}`, 10, 20);
  doc.text(`Apellido: ${apellido}`, 10, 30);
  doc.save('formulario.pdf');
}

//buscar imagens
const colorBox = document.getElementById('color-box');
const generateBtn = document.getElementById('generate-btn');

function api() {
    $.ajax({
      url: 'https://reqres.in/api/users',
      method: 'GET',
      success: function(response) {
        // Si la petición es exitosa, agrega las filas correspondientes a los datos de la respuesta
        var users = response.data;
        for (var i = 0; i < users.length; i++) {
          var user = users[i];
          $('tbody').append('<tr><td>' + user.first_name + ' ' + user.last_name + '</td><td><img src="' + user.avatar + '"></td></tr>');
        }
      },
      error: function(error) {
        // Si ocurre un error, muestra un mensaje en la consola
        console.log('Error al realizar la petición.');
      }
    });
  }
  
function productos(){
    $('#productos').show();
    $('#home').hide();
    $('#contacto_enlace').hide();
    console.log('cambio')
}
window.onload = api;

