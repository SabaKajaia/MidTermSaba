console.log("Saba vamos con toda amigo!");


// Ejelo 003 - llamando una external PUBLIC API - jsonplaceholder - REFERENCIA 
// Se encarga de recibir  data de api + plasmar esa data dentro del HTML mediante los templateLiterlas `` lo que tu ves desde la linea 14.
// let getExternalApi = () => {
//     fetch("https://jsonplaceholder.typicode.com/albums")
//       .then((response) => response.json())
//       .then((respuestas) => {
//         console.table(respuestas);
//         let infoFromApi = "";
//         respuestas.forEach((albumInfo) => {
//           infoFromApi += `
//                 <ul>
//           <li>${albumInfo.id}</li>
//           <li>${albumInfo.userId}</li>
//           <li>${albumInfo.title}</li>
//       </ul>
//                 `;
//         });
//         return (document.querySelector("#output").innerHTML = infoFromApi);
//       })
//       .catch((error) => console.log(error));
//   };

// USAR EJEMPLO DE CLASE PARA CREAR TU LOGICA DE CONEXION AL DOM
// Ejemplo 003 - Definir logica para conectar mediante DOM a elementos de bottones que usamos en clase:
// document
//   .querySelector("#getExternalApi")
//   .addEventListener("click", getExternalApi);


  // Ejelo 003 - llamando una external PUBLIC API - jsonplaceholder
let getExternalApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_end=3")
      .then((response) => response.json())
      .then((respuestas) => {
        let fetchedInfo = "";
       
        // el codigo dentro de el log de abajo con el metodo slice hace exactamente lo mismo que la ruta que inyectamos dentro del fetch que la ruta contiene un slice method paramterizado dentro de la ruta, y para ver un caso distinto usamos la ruta :)
        
       console.log( respuestas.slice(0,3));
       // sin slice metod
       console.log(respuestas);
       respuestas.forEach((articulo) => {
        console.log(articulo);
        fetchedInfo += articulo
       })
       return fetchedInfo
      })
      .catch((error) => console.log(error));
  };
  getExternalApi()


  // -------------
  // -------------
  // -------------
  // -------------
  // -------------
  // -------------
  // -------------

  //Contact Form Logic



  // Ejemplo 004 - Metodo : "POST" - empujando info a  una external PUBLIC API - jsonplaceholder
let addPost = (e) => {

    // Verificacion y "refrescar" conceptos de semana pasada
    e.preventDefault();
    // ESTE "E" de da accesso a los eventos de el boton! 
    console.log(e);
    console.log("CTA Connected");

    // Vamos a traernos el valor de los inputs del html
    let titleOfUserInput = document.querySelector("#title").value;
    let bodyOfUserInput = document.querySelector("#body").value;                                  

    //fullname
    //phone
    //message
    //email
    // Uso de fetch para empujar valores del title y el body del formulario al api PUBLICO externo
    fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "POST",
      body: JSON.stringify({
        // SYNTAX DE REFERENCIA de pagina web
        // https://jsonplaceholder.typicode.com/guide/
        //   title: "me gusta comprar mucho los bocatas del mercadona",
        //   body: "guilty pleasures",
        //   userId: 1,
  
        // ------
        // ------
        // ------
        // ------
        // NUESTRO SYNTAX para conectar los inputs de texto + textArea con esta llamada API
        //nombreDeClave CON la variable que guarda el input.value del dom selection
        title: titleOfUserInput,
        body: bodyOfUserInput,
        name: fillUPONCEVARIABLEISREADY,
        body: fillUPONCEVARIABLEISREADY,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error))
  };
  
  // Ejemplo 003 - Definir logica para conectar mediante DOM a elementos de bottones que usamos en clase:
  document.querySelector("#addPost").addEventListener("click", addPost);
