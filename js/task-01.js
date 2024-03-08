const categories = document.querySelectorAll(".item")
console.log("Number of categories :", categories.length);

categories.forEach(element => {
  console.log("element:", element);  
  console.log("Categorie:", element.firstElementChild.textContent);
  
  console.log("Elements:", element.lastElementChild.children.length);
});






