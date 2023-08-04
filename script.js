const generateButton = document.getElementById("generateButton");
const animeImage = document.getElementById("animeImage");
const downloadLink = document.getElementById("downloadLink");
const girlTab = document.getElementById("girlTab");
const boyTab = document.getElementById("boyTab");

girlTab.addEventListener("click", () => {
    girlTab.classList.add("active");
    boyTab.classList.remove("active");
});

boyTab.addEventListener("click", () => {
    boyTab.classList.add("active");
    girlTab.classList.remove("active");
});

generateButton.addEventListener("click", () => {
    const tab = girlTab.classList.contains("active") ? "waifu" : "husbando";
    
    fetch(`https://api.waifu.pics/sfw/${tab}`)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.url;
            animeImage.src = imageUrl;
            animeImage.style.display = "block";
            downloadLink.href = imageUrl;
            downloadLink.style.display = "block";
        })
        .catch(error => console.error("Erro ao carregar a imagem:", error));
});
