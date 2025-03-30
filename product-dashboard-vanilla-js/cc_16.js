//Fetch products with .then()
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