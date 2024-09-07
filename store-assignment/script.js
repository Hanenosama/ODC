const container = document.querySelector('.container')
let getData = async ()=>{
    let error;
    let result = await fetch('https://dummyjson.com/products')
    .then((res)=>res.json())
    // ana b catch el error f variable 3shan a2dr astkhdmo b3den brahti
    .catch((er)=>{error=er})
    let products = [...result?.products]
    console.log(error)
    console.log(products)
    products.map((product)=>{
        container.innerHTML += `
        <div class="card">
          <img src="${product.thumbnail}" alt="${product.title}"/>
          <h3>${product.title}</h3>
          <p>${product.price} EGP</p>
          <a href='./singleproduct.html?id=${product.id}'>Show More<a/>
        </div>
        
        
        
        `

    }
    
    )
}
getData()