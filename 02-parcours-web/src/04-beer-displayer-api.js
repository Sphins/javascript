let b1 = document.querySelector(".beer-button");

async function getData() {
    try {
        let id = document.querySelector(".beer_id").value;
        let response = await fetch(
            "https://api.punkapi.com/v2/beers/" + id
        );

        const data = await response.json();

        let name = data[0].name;
        let tagline = data[0].tagline;
        let first = data[0].first_brewed;
        let link = data[0].image_url;

        document.querySelector(".beer_name").innerHTML = name;
        document.querySelector(".tagline").innerHTML = tagline;
        document.querySelector(".first_brewed").innerHTML = first;
        document.querySelector(".image_url").src = link;
    } catch (error) {
        console.log("Erreur : " + error);
    }
}

b1.addEventListener("click", function () {
    getData()

    // document.querySelector(".beer_name") = 
});


