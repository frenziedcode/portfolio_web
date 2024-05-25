const images = [
    "../imgs/installation_views/no_outro_dia/viniciuslopes_no_outro_dia_installationview_1.jpg",
    "../imgs/installation_views/no_outro_dia/viniciuslopes_no_outro_dia_installationview_5.jpg",
    "../imgs/installation_views/no_outro_dia/viniciuslopes_no_outro_dia_installationview_6.jpg",
    "../imgs/installation_views/no_outro_dia/viniciuslopes_no_outro_dia_installationview_7.jpg"
    // "../imgs/installation_views/no_outro_dia/viniciuslopes_no_outro_dia_installationview_2.jpg",
    
    // Adicione os caminhos das suas imagens aqui
];

let currentImageIndex = 0;
const currentImgElement = document.getElementById("current-img");

// Função para exibir a imagem atual
function showCurrentImage() {
    currentImgElement.src = images[currentImageIndex];
}

// Event listener para avançar para a próxima imagem
currentImgElement.addEventListener("click", function(event) {
    const x = event.clientX;
    const imgWidth = currentImgElement.offsetWidth;
    if (x > imgWidth / 2) {
        nextImage();
    } else {
        prevImage();
    }
});

// Função para avançar para a próxima imagem
function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    showCurrentImage();
}

// Função para voltar para a imagem anterior
function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    showCurrentImage();
}

// Função para lidar com erros de carregamento da imagem
function handleImageError() {
    console.error("Erro ao carregar a imagem:", images[currentImageIndex]);
}

// Exibir a primeira imagem ao carregar a página
showCurrentImage();
