import axios from "axios";



export async function getProducts  (sortMethod = "" , searchValue = "")  {
    try{
        const data = await axios.get(`http://localhost:3000/api/products${sortMethod}${searchValue}`)
        return data.data
    }
    catch (e){
        console.log(e)
        throw e
    }
}

export async function getAddedProducts  (userId = 1,url)  {
    try{
        const data = await axios.get(`${url}/${userId}`)
        return data.data
    }
    catch (e){
        console.log(e)
        throw e
    }
}



export async function checkProductAdded (userId = 1,productName){
    try {

        const data = await getFavouritesProducts(userId)
        const arr = data.filter((el) => el.name == productName)
        return !!arr.length

    }
    catch (e){
        throw e
    }


}

export async function checkProductAddedCart (userId = 1,productId){
    try {
        const data = await getCartProducts(userId)
        const arr = data.filter((el) => el.productid == productId)
        console.log(data)
        return !!arr.length
    }
    catch (e){
        throw e
    }
}
