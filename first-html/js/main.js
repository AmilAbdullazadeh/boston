// vribale with welector
const list = document.querySelector("#infinite-list");
var itemNumber = 0
// Add 20 items.
function loadItems() {
    for (let i = 1; i <= 10; i++) {
        itemNumber ++
        const element = document.createElement('li')
        element.innerText = `${itemNumber} - indexli li elementi`;
        list.appendChild(element)
    }
}

// Detect when scrolled to bottom.
// scrollTop; // scrollHeight; // clientHeight
list.addEventListener("scroll", () => {
    console.log(list.scrollTop, "scrollTop");
    console.log(list.scrollHeight, "scrollHeight");
    console.log(list.clientHeight, "clientHeight");
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        loadItems();
    }
});

// Initially load some items.
loadItems()