let images = [
  "img/fuchsfestival.png",
  "img/rheinklang.png",
  "img/rockstarter.png",
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
