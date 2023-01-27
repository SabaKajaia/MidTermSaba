window.addEventListener("load", function () {
    document.querySelector("#recent-projects").addEventListener("click", function() {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((response) => response.json())
            .then((albums) => {
                let infoFromApi = "";
                for(let i=0;i<3;i++){
                    const album = albums[i];
                    infoFromApi += `
                    <div class="card-box card-box-hover">
                        <h3>${album.title}</h3>
                        <p>${album.userId}</p>
                        <a href="#">Learn more</a>
                    </div>
                    `;
                }
                document.querySelector("#cards-projects").innerHTML = infoFromApi;
            })
            .catch((error) => console.log(error));
    });
});
