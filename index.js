async function readData() {
  let response = await fetch("https://randomfox.ca/floof/");
  let data = await response.json();
  let images = document.getElementsByTagName("img");
  let photo = document.getElementsByClassName("image");
  let p = document.getElementsByTagName("p");
  p[0].style.display = "none";
  photo[0].style.display = "block";
  images[0].src = data.image;
}

document.getElementById("btn").addEventListener("click", readData);