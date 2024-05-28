let images = [
  "img/fuchsfestival.png",
  "img/rheinklang.png",
  "img/rockstarter.png",
];

function load() {
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    document.getElementById().innerHTML += `
            <div onclick="openImage(${i})" class="imgBox"></img>
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

// Funktion zum Rendern der Seite
function render() {
  header(); // Header-Funktion aufrufen
}

// ===========================
// Abschnitt: Initiale Aufrufe
// ===========================

// Initiale Aufrufe
document.addEventListener("DOMContentLoaded", (event) => {
  render(); // render-Funktion aufrufen, wenn DOM vollständig geladen ist
});
