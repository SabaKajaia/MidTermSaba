let getData = () => {
    console.log("saba es cool");
    // fetch code 
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((informacionDeRecursoSinLimpiar) => informacionDeRecursoSinLimpiar.json())
    .then((informacionLimpia) => {
        // verificacion que dsps de que todo funcione comentamos o borramos esta linea de abajo :)
        //console.log(informacionLimpia)
        for(let album = 0; album < 3; album++) {
            console.log(informacionLimpia[album]);
           
           document.querySelector("#cards-projects").innerHTML += `
           
        
           <div class="card-box card-box-hover">
               <img src="https://github.com/dzc1/class-jan09/blob/main/midterm-boiler-plates/midterm-project-boiler/resources/images/projects-section/1.jpg?raw=true"
                alt="img">
               <h3>${informacionLimpia[album].title.substring(0, 10)}...</h3>
               <p>${informacionLimpia[album].body.substring(0, 40)}...</p>
               <a href="project.html">Learn more</a>
           </div>
       


           `
        }
    
    })
    .catch((error) => console.log(error))

}
window.addEventListener("load", getData)




// //fetch("https://jsonplaceholder.typicode.com/albums")
//         .then((response) => response.json())
//         .then((albums) => {
   
//             albums = albums.slice(0,3);
//             let infoFromApi = "";
//             albums.forEach((album) => {
//                 infoFromApi += `
//                 <div class="card-box card-box-hover">
//                     <h3>${album.title}</h3>
//                     <p>${album.userId}</p>
//                     <a href="#">Learn more</a>
//                 </div>
//                 `;
           
//             document.querySelector("#cards-projects").innerHTML = infoFromApi;
//         })
//         .catch((error) => console.log(error));