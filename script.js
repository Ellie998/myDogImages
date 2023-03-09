const imgNumber = 70;

const imgElement = document.getElementById("dog");
const btnElement = document.querySelector("button");

const imgArray = [];
for (let i = 1; i <= imgNumber; i++) {
  imgArray.push(`img/${i}.jpg`);
}

let num = Math.floor(Math.random() * imgArray.length);
imgElement.attributes.src.value = imgArray[num];

btnElement.addEventListener("click", () => {
  let num = Math.floor(Math.random() * imgArray.length);
  imgElement.attributes.src.value = imgArray[num];
});
