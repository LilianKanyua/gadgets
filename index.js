let productContainer= document.getElementById('sec_three')
const getProducts=()=>{
   return fetch ('https://dummyjson.com/products?limit=8')
    .then(response =>response.json())
    .then(response => response)
    .catch(error=> error.message)
}
getProducts()
const displayProducts=async()=>{
    const products=await getProducts();
    console.log(products.products)
    products.products.map(item=>{ 
       let div=document.createElement('div');
       div.className='products';
       
       let img=document.createElement('img');
       let title=document.createElement('h2');
       let description=document.createElement('p');
       let price= document.createElement('h3');

 
       img.src=item.images;
       title.innerHTML=item.title;
       description.innerHTML=item.description;
       price.innerHTML=item.price
       div.appendChild(img);
       div.appendChild(title);
       div.appendChild(description);
       productContainer.appendChild(div)
    })
}
displayProducts()