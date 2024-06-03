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


function left() {
  const currentSrc = document.getElementById('bigImage').src;  
  const relativeSrc = currentSrc.replace(window.location.origin + '/public/', '');
  
  let position = images.indexOf(relativeSrc);
  
  if (position === 0) {
    position = images.length - 1;
  } else {
    position -= 1;
  }

  openImage(images[position]);
}

function right() {
  const currentSrc = document.getElementById('bigImage').src;
  const relativeSrc = currentSrc.replace(window.location.origin + '/public/', '');
  
  let position = images.indexOf(relativeSrc);

  if (position === images.length - 1) {
    position = 0;
  } else {
    position += 1;
  }

  openImage(images[position]);
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


function render() {
  imgContainer();
}


document.addEventListener("DOMContentLoaded", (event) => {
  render();
});
