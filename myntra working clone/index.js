let itemsContainerElement=document.querySelector('.items-container');

let bagItems=[];

function AddToBag(itemsId){
    bagItems.push(itemsId);
    displayBagItems();
}

let innerHtmls='';

function displayBagItems(){
   let bagItemsCount=document.querySelector('.bag-items-count');
   bagItemsCount.innerHTML=bagItems.length;
    
}

function displayitems_on_homePage(){
    items.forEach(items =>{
    innerHtmls +=`

<div class="item-container"> 

            <img src="${items.image}" alt="image of carlton London" class="item-image">

            <div class="rating">
                ${items.rating.stars}⭐ | ${items.rating.count}
            </div>
            <div class="company-name">${items.company}</div>
            <div class="item-name">${items.item_name}</div>


            <div class="price">
                <span class="current-price">${items.current_price}</span>
                <span class="original-price">${items.original_price}</span>
                <span class="discount">${items.discount_percentage}</span>
            </div>

            <button class="add-to-bag" onclick="AddToBag(${items.id})">Add to Bag</button>
            </div>`
});

}
displayitems_on_homePage();




itemsContainerElement.innerHTML=innerHtmls;
            
            