document.querySelector("form").addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let message = document.querySelector("#textarea").value;

  
    fetch("https://jsonplaceholder.typicode.com/comments", {
        method: "POST",
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            message: message
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        console.log(name, email, phone, message);
    })
    .catch((error) => console.log(error))
}
