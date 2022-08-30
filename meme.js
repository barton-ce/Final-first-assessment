const form = document.querySelector("form");

const link = document.querySelector("#link");
// console.log("link", link);

const header = document.querySelector("#header");

const footer = document.querySelector("#subheader");

const container = document.getElementById("memeContainer");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let newDiv = document.createElement("div");
  newDiv.classList.add("box");
  let newMeme = document.createElement("img");
  // console.log("newMeme", newMeme);
  newDiv.innerHTML = newMeme.src;
  newMeme.classList.add("meme");
  newMeme.src = link.value;

  let topText = document.createElement("div");
  console.log("topText", topText);
  topText.classList.add("topBox");
  let topTextSrc = header.value;
  topText.innerHTML = topTextSrc;

  let bttmText = document.createElement("div");
  bttmText.classList.add("bottomBox");
  let bttmTextSrc = footer.value;
  bttmText.innerHTML = bttmTextSrc;

  form.reset();

  container.appendChild(newDiv);
  newDiv.appendChild(newMeme);
  newDiv.appendChild(topText);
  newDiv.appendChild(bttmText);
});

container.addEventListener("click", function (e) {
  e.target.parentElement.remove();
});
