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