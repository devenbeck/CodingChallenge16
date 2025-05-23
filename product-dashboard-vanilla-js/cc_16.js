//Task 2: Fetch products with .then()
////Create function fetchProductsThen that uses fetch() and .then() to get product data from url
const BASE_URL = "https://www.course-api.com/javascript-store-products";
function fetchProductsThen() {
    return fetch(BASE_URL) //gets the data from the url
    .then(response => { 
        if (!response.ok) { //check response
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json(); //return response in JSON format
    })
    .then(products => {
        products.forEach(product => { //go through the products
            console.log(product.fields.name); //logs each product's name to console
        });
    })
    .catch(error => { 
        console.error('Fetch failed:', error.message); //logs error message to console
        throw error;
    });
};
//Task 3: Fetch products with async/await
async function fetchProductsAsync() {    //to try to fetch product data
    try { 
        const response = await fetch(BASE_URL); 
        if (!response.ok) { //check response
            throw new Error(`Failed to fetch data: ${response.status}`); //Logs error message to console
        }
        const products = await response.json(); //Return response in JSON format
        displayProducts(products); //Calls helper function to render products to the page
    } catch (error) {
        handleError(error); //if error occurs, passes the errors to handleError function
    }
};
//Task 4: Display the Products
function displayProducts(products) {
    const container= document.getElementById("product-container"); //Selects #product-container
    products.slice(0, 5).forEach(product => {     //Loops through first 5 products
        const div= document.createElement("div");
        div.classList.add("product-card"); 
//Creates HTML elements to show each product’s name, price, and image:
        div.innerHTML= `
            <h2>${product.fields.name}</h2>
            <p>$${(product.fields.price/100).toFixed(2)}</p>
            <img src="${product.fields.image[0].url}" alt="${product.fields.name}"/> `;
        container.appendChild(div); //Appends them to the container
    });
}
//Task 5: Reusable Error Handler - create such function that logs an error has occured followed by the error message
function handleError(error) {
    console.error("An error occured: ", error.message); 
};
//Task 6: Call your fetch functions
fetchProductsThen();
fetchProductsAsync();