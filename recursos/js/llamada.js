function myFunction() {
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => response.json())
        .then((albums) => {
            let infoFromApi = "";
            albums.forEach((albumInfo) => {
                infoFromApi += `
                <div class="card-box card-box-hover">
                    <img src="https://github.com/dzc1/class-jan09/blob/main/midterm-boiler-plates/midterm-project-boiler/resources/images/projects-section/1.jpg?raw=true" alt="img">
                    <h3>${albumInfo.title}</h3>
                    <p>${albumInfo.userId}</p>
                    <a href="project.html">Learn more</a>
                </div>
                `;
            });
            document.querySelector("#cards-projects").innerHTML = infoFromApi;
        })
        .catch((error) => console.log(error));
}
document.querySelector("#recent-projects").addEventListener("click", myFunction);
