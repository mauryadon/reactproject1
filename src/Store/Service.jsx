// maincategory services
export async function createMaincategoryAPI(data) {
    var response = await fetch("http://localhost:4000/maincategory", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getMaincategoryAPI() {
    var response = await fetch("http://localhost:4000/maincategory", {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}
export async function updateMaincategoryAPI(data) {
    var response = await fetch("http://localhost:4000/maincategory/" + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteMaincategoryAPI(data) {
    var response = await fetch("http://localhost:4000/maincategory/" + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}


// subcategory services
export async function createSubcategoryAPI(data) {
    var response = await fetch("http://localhost:4000/subcategory", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getSubcategoryAPI() {
    var response = await fetch("http://localhost:4000/subcategory", {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}
export async function updateSubcategoryAPI(data) {
    var response = await fetch("http://localhost:4000/subcategory/" + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteSubcategoryAPI(data) {
    var response = await fetch("http://localhost:4000/subcategory/" + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}


// brand services
export async function createBrandAPI(data) {
    var response = await fetch("http://localhost:4000/brand", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getBrandAPI() {
    var response = await fetch("http://localhost:4000/brand", {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}
export async function updateBrandAPI(data) {
    var response = await fetch("http://localhost:4000/brand/" + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteBrandAPI(data) {
    var response = await fetch("http://localhost:4000/brand/" + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}


// product services
export async function createProductAPI(data) {
    var response = await fetch("http://localhost:4000/product", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getProductAPI() {
    var response = await fetch("http://localhost:4000/product", {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}
export async function updateProductAPI(data) {
    var response = await fetch("http://localhost:4000/product/" + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteProductAPI(data) {
    var response = await fetch("http://localhost:4000/product/" + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}

// user services
export async function createUserAPI(data) {
    var response = await fetch("http://localhost:4000/user", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getUserAPI() {
    var response = await fetch("http://localhost:4000/user", {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}
export async function updateUserAPI(data) {
    var response = await fetch("http://localhost:4000/user/" + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteUserAPI(data) {
    var response = await fetch("http://localhost:4000/user/" + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}


// cart services
export async function createCartAPI(data) {
    var response = await fetch("http://localhost:4000/cart", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getCartAPI() {
    var response = await fetch("http://localhost:4000/cart", {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}
export async function updateCartAPI(data) {
    var response = await fetch("http://localhost:4000/cart/" + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteCartAPI(data) {
    var response = await fetch("http://localhost:4000/cart/" + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}


// wishlist services
export async function createWishlistAPI(data) {
    var response = await fetch("http://localhost:4000/wishlist", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getWishlistAPI() {
    var response = await fetch("http://localhost:4000/wishlist", {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}
export async function updateWishlistAPI(data) {
    var response = await fetch("http://localhost:4000/wishlist/" + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteWishlistAPI(data) {
    var response = await fetch("http://localhost:4000/wishlist/" + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}