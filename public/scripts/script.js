document.onload = populateProducts();

function createElm(elmname , classname ,value){
    let elm  = document.createElement(elmname);
    if(classname ){
        elm.classList.add(classname);
    }
    if(value){
        elm.innerHTML = value;
    }
    return elm;
}
function populateProducts(){
    const productsGrid = document.querySelector(".grid-product");

    products.forEach((product)=>{
        let newCard  = createElm("div","card-product")
        
        let productImage = createElm("img","card-img")
        productImage.src = `./public/${product.image}`
        
        let productDescription = createElm("p","product-description" ,product.name)
        
        let cardBody= createElm("div","card-body")
        
        let ratingDiv= createElm("div","rating")
        ratingDiv.classList.add("rating")

        let ratingImg = createElm("img","rating-img")
        ratingImg.src = `./public/images/ratings/rating-${product.rating.stars}.png`

        let ratingTxt = createElm("span","rating-txt",product.rating.count)
        
        let prizeDiv  = createElm("div","prize")
        let span1 =  createElm("span","" ,"$")
        let span2 =  createElm("span","" ,product.priceCents)
        
        
        ratingDiv.append(ratingImg,ratingTxt)
        prizeDiv.append(span1,span2)
        cardBody.appendChild(ratingDiv)
        cardBody.appendChild(prizeDiv)
        newCard.append(productImage,productDescription ,cardBody)
        productsGrid.appendChild(newCard)
    })// console.log(newCard)
}
function toggleSideBar(){
    const sidebarWrapper = document.querySelector("#sidebar-wrapper")
    sidebarWrapper.classList.toggle("d-none")
}