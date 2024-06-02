function load() {
  const imgContainerElement = document.getElementById("imgContainer");
  imgContainerElement.innerHTML = "";
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    imgContainerElement.innerHTML += `
      <div onclick="openImage('${img}')" class="imgBox">
          <img src="${img}" alt="${i + 1}">
      </div>
    `;
  }
}


function closeImg() {
  const existingImgBigContainer = document.querySelector(".imgBig");
  existingImgBigContainer && existingImgBigContainer.remove();
}


function openImage(imgSrc) {
  const existingImgBigContainer = document.querySelector(".imgBig");
  existingImgBigContainer && existingImgBigContainer.remove();

  const imgBigContainer = document.createElement("div");
  imgBigContainer.classList.add("imgBig");

  const imgElement = document.createElement("img");
  imgElement.src = imgSrc;

  imgBigContainer.appendChild(imgElement);

  const imgContainerElement = document.getElementById("imgContainer");
  imgContainerElement.appendChild(imgBigContainer);
}


function imgContainer() {
  let imgContainerElement = document.getElementById("imgContainer");
  imgContainerElement.innerHTML = "";
  load();
}

function arrow() {
  const arrowLeftPath = "../public/img/arrow-left.png";
  const arrowRight = "../public/img/arrow-right.png";
  let bigPicture = document.getElementById('imgBig');
}


function render() {
  imgContainer();
}


document.addEventListener("DOMContentLoaded", (event) => {
  render();
});
