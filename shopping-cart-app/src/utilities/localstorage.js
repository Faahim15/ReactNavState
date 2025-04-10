const getStorageData=()=>{
    const getData = localStorage.getItem('cart');
    if(getData)
        return JSON.parse(getData);
    else 
        return [];
}
const saveDataToLs =(cart)=>{
    const cartStringified = JSON.stringify(cart); 
    localStorage.setItem('cart',cartStringified);
}
const addToLs = id =>{
    const cart = getStorageData();
    cart.push(id);
    //Save to Local Storage 
    saveDataToLs(cart);

} 

export {addToLs,getStorageData,saveDataToLs}