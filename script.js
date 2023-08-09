const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}

// Sample product data for demonstration
const products = [
    {
        id: 1,
        image: '/images/products/n6.jpg',
        brand: 'adidas',
        name: 'Cartoon Astronaut T-Shirts',
        rating: 5,
        price: 78,
        // Add more properties as needed
    },
    {
        id: 2,
        image: '/images/products/n6.jpg',
        brand: 'Nike',
        name: 'Cartoon Astronaut T-Shirts',
        rating: 2,
        price: 18,
        // Add more properties as needed
    },
];

// Function to generate a product item HTML
function generateProductHTML(product) {
    return `
    <div class="single-pro-details">
    <h6>Home / T-Shirt</h6>
    <h4>${brand}</h4>
    <h2>$139.00</h2>
    <select>
        <option>Select Size</option>
        <option>XXL</option>
        <option>Xl</option>
        <option>Large</option>
        <option>Medium</option>
        <option>Small</option>
    </select>
    <input type="number" value="1">
    <button class="normal">Add To Cart</button>
    <h4>Product Details</h4>
    <span>The Gildon Ultra Cotton T-Shirt is made from asubstantial 6.0 oz. per sq. yd. fabri constructed from 100% coton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.</span>
</div>
    `;
}

// Function to handle product item click and redirect to detailed view
function handleProductClick(productId) {
    // Redirect to detailed view page with the product ID
    window.location.href = `product-details.html?productId=${productId}`;
}

// Function to generate and display product items
function displayProductItems() {
    const productContainer = document.querySelector('.product-container');
    
    products.forEach(product => {
        const productHTML = generateProductHTML(product);
        productContainer.innerHTML += productHTML;
        
        // Attach click event to each product item
        const productItem = document.getElementById(`product-${product.id}`);
        productItem.addEventListener('click', () => handleProductClick(product.id));
    });
}

// Call the function to display product items
displayProductItems();
