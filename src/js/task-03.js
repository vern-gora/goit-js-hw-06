const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listEl = document.querySelector(".gallery");
listEl.style.listStyle = "none";
listEl.style.display = "flex";
listEl.style.gap = "30px";
listEl.style.alignItems = "center";

images.forEach((images) => {
  const itemEl = document.createElement("li");
  listEl.append(itemEl);
  const imageEl = document.createElement("img");
  itemEl.append(imageEl);
  imageEl.setAttribute("src", images.url);
  imageEl.setAttribute("alt", images.alt);
  imageEl.setAttribute("width", 200);

  // const imgEl = images.map((image) => image.url).join("");

  // const imgElement = itemEl.setAttribute("url", imgEl);
});

itemEl.insertAdjacentHTML("beforeend", imgEl);
