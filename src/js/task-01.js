const parentUlEl = document.querySelectorAll(".item").length;
console.log("Number of categories:", parentUlEl, "\n\n");

const h2El = document
  .querySelectorAll(".item")
  .forEach((item) =>
    console.log(
      "Category:",
      item.firstElementChild.textContent,
      "\n",
      "Elements:",
      item.querySelectorAll("li").length,
      "\n\n"
    )
  );
