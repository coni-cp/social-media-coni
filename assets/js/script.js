
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
        <div class="col">
            <p class="usuario-nuevo"><strong>${nombre}</strong></p>
        </div>
        <div class="col">
            <p class="comentarioDeUsuario">${texto}</p>
        </div>
        <div class="basurero">
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF5E5B" class="bi bi-trash3" viewBox="0 0 16 16" id="borrar">
                 <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
            </a>
        </div>
     </div>
     <hr>` 
      document.getElementById('nombre').value="";
      document.getElementById('texto').value="";
     
})

/* document.getElementById('borrar').addEventListener('click', function(){
    let eliminar = document.getElementById('lista')
    eliminar.style.display="none";
 })  logre que se eliminara solo el comentario que esta escrito en el html, no agrega los nuevos y tampoco los elimina*/

      
     

     
    

