const listItem = document.querySelectorAll(".item");
console.log ("Number of categories: ", listItem.length);

listItem.forEach((item) => {
    console.log("category: ", item.children[0].textContent);
    console.log("elemet: ", item.children[1].children.length);
    });
