// Get the div element
const myDiv = document.getElementById("myDiv");

// 1. Create h1
const heading = document.createElement("h1");
heading.textContent = "Welcome to DOM homework";
heading.classList.add("highlight"); 
myDiv.appendChild(heading);

// 2. Create paragraph
const paragraph = document.createElement("p");
paragraph.textContent = "This is your first DOM homework assignment";
myDiv.appendChild(paragraph);

// 3. Create unordered list
const ul = document.createElement("ul");

// Add three li items
for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = "List Item" + i;
    ul.appendChild(li);
}

myDiv.appendChild(ul);

// 4. Button element already in HTML - add behavior
const button = document.getElementById("addItemBtn");
let newItemCount = 1;

// Function to return a random color
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Add event listener to button
button.addEventListener("click", function() {
    const li = document.createElement("li");
    li.textContent = "New List Item" + newItemCount++;
    li.style.color = getRandomColor();
    ul.appendChild(li);
});

// 5. Change myDiv background when clicked
myDiv.addEventListener("click", function () {
    myDiv.style.backgroundColor = getRandomColor();
});