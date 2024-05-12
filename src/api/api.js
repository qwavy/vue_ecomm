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

export async function getFavouritesProducts  (id = 1)  {
    try{
        const data = await axios.get(`http://localhost:3000/favourites/userFavourites1`)
        return data.data
    }
    catch (e){
        console.log(e)
        throw e
    }
}

export async function getCartProducts (id = 1){
    try{
        const data = await axios.get(`http://localhost:3000/carts/userCart/1`)
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
