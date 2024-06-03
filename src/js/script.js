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


function closeImg(event) {
  const clickedOnBigImage = event.target.id === 'bigImage';

  if (clickedOnBigImage) {
    const imgBigContainer = document.getElementById("imgBig");
    imgBigContainer.classList.add("d-none");
  }
}


function openImage(imgSrc) {
  const imgBigContainer = document.getElementById("imgBig");
  const imgElement = document.getElementById("bigImage");

  imgElement.src = imgSrc;
  imgBigContainer.classList.remove("d-none");
}


function imgContainer() {
  let imgContainerElement = document.getElementById("imgContainer");
  imgContainerElement.innerHTML = "";
  load();
}


function left() {
  console.log('Click left');
}


function right() {
  console.log('Click right');  
}



function render() {
  imgContainer();
}


document.addEventListener("DOMContentLoaded", (event) => {
  render();
});
