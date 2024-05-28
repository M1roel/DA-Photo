let images = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
  "img/06.jpg",
  "img/07.jpg",
  "img/08.jpg",
  "img/09.jpg",
  "img/10.jpg",
  "img/11.jpg",
  "img/12.jpg",
  "img/13.jpg",
  "img/14.jpg",
  "img/15.jpg",
  "img/16.jpg",
  "img/17.jpg",
  "img/18.jpg",
  "img/19.jpg",
  "img/20.jpg",
  "img/21.jpg",
  "img/22.jpg",
  "img/23.jpg",
  "img/24.jpg",
  "img/25.jpg",
  "img/26.png",
  "img/27.png",
  "img/28.png",
  "img/29.jpg"
];

// ===========================================
// Abschnitt: Funktionen zur Datenverarbeitung
// ===========================================

function load() {
  const imgContainerElement = document.getElementById("imgContainer");
  imgContainerElement.innerHTML = "";
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    imgContainerElement.innerHTML += `
            <div class="imgBox">
                <img src="${img}" alt="${i + 1}">
            </div>
        `;
  }
}

// ===========================================
// Abschnitt: Funktionen zum Rendern der Seite
// ===========================================

// Funktion zum Erstellen des Headers
function header() {
  let headerElement = document.getElementById("header"); // Element mit der ID 'header' holen
  headerElement.innerHTML = ""; // Inhalt des Headers löschen
  headerElement.innerHTML += `<h1>MyPhotoBlog</h1>`; // Neues HTML-Element (H1) zum Header hinzufügen
}

function imgContainer() {
  let imgContainerElement = document.getElementById("imgContainer");
  imgContainerElement.innerHTML = "";
  load();
}

// Funktion zum Rendern der Seite
function render() {
  header(); // Header-Funktion aufrufen
  imgContainer(); // Img-Funktion aufrufen
}

// ===========================
// Abschnitt: Initiale Aufrufe
// ===========================

// Initiale Aufrufe
document.addEventListener("DOMContentLoaded", (event) => {
  render(); // render-Funktion aufrufen, wenn DOM vollständig geladen ist
});
