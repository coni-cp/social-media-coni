
    document.getElementById('agregar-comentario').addEventListener('click', function(){
   let burbuja = document.getElementById('formulario')
   burbuja.style.display="block";

})
let megusta=document.getElementById('like').addEventListener('click', function(){
    megusta.style.fill="#8f00ff"
 
 })


document.getElementById('agregar').addEventListener('click', function() {

    const filas = document.getElementById('lista');
    // Obtener el valor de los inputs
    const nombre = document.getElementById('nombre').value;
    const texto = document.getElementById('texto').value;

    filas.innerHTML+=`
    <div class = "comentarios">
        <div class="row">
            <p class="usuario-nuevo"><strong>${nombre}</strong></p>
            <p class="comentarioDeUsuario">${texto}</p>
        </div>
     </div>
     <hr>` 
      document.getElementById('nombre').value="";
      document.getElementById('texto').value="";
     
})
 document.getElementById('agregar').addEventListener('click', function(){
   let ocultarFormulario = document.getElementById('formulario')
   ocultarFormulario.style.display="none";

})

/* document.getElementById('borrar').addEventListener('click', function(){
    let eliminar = document.getElementById('lista')
    eliminar.style.display="none";
 })  logre que se eliminara solo el comentario que esta escrito en el html, no agrega los nuevos y tampoco los elimina*/

      
     

     
    

