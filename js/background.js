const images = ["0.jpg", "1.jpg", "2.jpg"];
const todaysImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("p");
const bgImage = document.querySelector("body");
// const bgImage = document.createElement("img");
// bgImage.src = `img/${todaysImage}`;
bgImage.style.backgroundImage = `url(img/${todaysImage})`;
// bgImage.id = "bgImage";
// document.body.appendChild(bgImage);
console.log();
