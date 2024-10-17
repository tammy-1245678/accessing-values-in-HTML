// Step 1: Create an array with objects
let myArray = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 28 }
  ];
  
  // Access the output div in the HTML
  let outputDiv = document.getElementById('output');
  
  // Step 2: Display individual object by index
  outputDiv.innerHTML += "<h3>Access by Index:</h3>";
  outputDiv.innerHTML += `<p>First Object: ${JSON.stringify(myArray[0])}</p>`; // Display the whole object
  outputDiv.innerHTML += `<p>Name of second object: ${myArray[1].name}</p>`;  // Access 'name' of second object
  
  // Step 3: Use join to display array elements
  let namesArray = myArray.map(obj => obj.name); // Extract 'name' properties
  let joinedNames = namesArray.join(", "); // Join the names into a string
  outputDiv.innerHTML += `<h3>Joined Names:</h3>`;
  outputDiv.innerHTML += `<p>${joinedNames}</p>`;
  
  // Step 4: Use pop to remove and display the last element in the array
  let lastElement = myArray.pop(); // Remove the last object
  outputDiv.innerHTML += `<h3>Popped Element:</h3>`;
  outputDiv.innerHTML += `<p>${JSON.stringify(lastElement)}</p>`;
  
  // Display the array after pop
  outputDiv.innerHTML += `<h3>Array After Pop:</h3>`;
  outputDiv.innerHTML += `<p>${JSON.stringify(myArray)}</p>`;