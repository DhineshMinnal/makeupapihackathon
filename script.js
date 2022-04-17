
// **************DOM creation*****************

let navbar = document.createElement("nav")
navbar.setAttribute("class", "navbar")
document.body.appendChild(navbar)

let brand = document.createElement("a")
brand.href = "index.html"
brand.setAttribute("class", "brand")
brand.innerText = "MakeupAPI"
navbar.appendChild(brand)


let searchArea = document.createElement("div")
searchArea.setAttribute("class", "searchArea")
navbar.appendChild(searchArea)

let searchInput = document.createElement("input")
searchInput.setAttribute("class", "form-control me-2")
searchInput.setAttribute("type", "search")
searchInput.setAttribute("placeholder", "search products by types")
searchInput.setAttribute("aria-label", "search")

let searchBtn = document.createElement("button")
searchBtn.setAttribute("class", "btn btn-outline-success")
searchBtn.innerText = "search"

searchArea.appendChild(searchInput)
searchArea.appendChild(searchBtn)

let cards = document.createElement("div")
cards.setAttribute("class", "container mt-5")
document.body.appendChild(cards)

let row = document.createElement("div")
row.setAttribute("class", "row gy-5 justify-content-between")
row.setAttribute("id", "row")
cards.appendChild(row)


let pagination = document.createElement("div")
pagination.setAttribute("class", "pagination")
pagination.setAttribute("id", "pagination")
document.body.appendChild(pagination)

let buttons = document.createElement("ul")
buttons.setAttribute("id", "buttons")
pagination.appendChild(buttons)


// // advanced search

// // outer div of top canvas
// let topCanvas = document.createElement("div")
// topCanvas.setAttribute("class", "topOffCanvas")
// // navbar.appendChild(topCanvas)

// // outer advanced search button
// let button_adv_search = document.createElement("button")
// button_adv_search.setAttribute("class", "btn btn-primary")
// button_adv_search.setAttribute("type", "button")
// button_adv_search.setAttribute("data-bs-toggle", "offcanvas")
// button_adv_search.setAttribute("data-bs-target", "#offcanvasTop")
// button_adv_search.setAttribute("aria-controls", "offcanvasTop")
// button_adv_search.innerText = "Advanced Search"
// topCanvas.appendChild(button_adv_search)

// // inside content of top canvas
// let inside_canvas_div = document.createElement("div")
// inside_canvas_div.setAttribute("class", "offcanvas offcanvas-top")
// inside_canvas_div.setAttribute("tabindex", "-1")
// inside_canvas_div.setAttribute("id", "offcanvasTop")
// inside_canvas_div.setAttribute("aria-labelledby", "offcanvasTopLabel")
// topCanvas.appendChild(inside_canvas_div)

// // inside content header section
// let inside_canvas_header = document.createElement("div")
// inside_canvas_header.setAttribute("class", "offcanvas-header")
// inside_canvas_div.appendChild(inside_canvas_header)

// let inside_label = document.createElement("h5")
// inside_label.setAttribute("id", "offcanvasTopLabel")
// inside_label.innerText = "Advanced Search"
// inside_canvas_header.appendChild(inside_label)

// let inside_close_btn = document.createElement("button")
// inside_close_btn.setAttribute("type", "button")
// inside_close_btn.setAttribute("class", "btn-close text-reset")
// inside_close_btn.setAttribute("data-bs-dismiss", "offcanvas")
// inside_close_btn.setAttribute("aria-label", "Close")
// inside_canvas_div.appendChild(inside_close_btn)

// // inside canvas body

// let inside_canvas_body = document.createElement("div")
// inside_canvas_body.setAttribute("class", "offcanvas-body")
// inside_canvas_div.appendChild(inside_canvas_body)

// // canvas body inputs

// let type_input_canvas = document.createElement("input")
// type_input_canvas.setAttribute("id", "type")
// type_input_canvas.setAttribute("class", "form-control me-2")
// type_input_canvas.setAttribute("type", "text")
// type_input_canvas.setAttribute("placeholder", "Enter product type")
// type_input_canvas.setAttribute("aria-label", "Search")
// inside_canvas_body.appendChild(type_input_canvas)

// let category_input_canvas = document.createElement("input")
// category_input_canvas.setAttribute("id", "category")
// category_input_canvas.setAttribute("class", "form-control me-2")
// category_input_canvas.setAttribute("type", "text")
// category_input_canvas.setAttribute("placeholder", "Enter category")
// category_input_canvas.setAttribute("aria-label", "Search")
// inside_canvas_body.appendChild(category_input_canvas)

// let tags_input_canvas = document.createElement("input")
// tags_input_canvas.setAttribute("id", "tags")
// tags_input_canvas.setAttribute("class", "form-control me-2")
// tags_input_canvas.setAttribute("type", "text")
// tags_input_canvas.setAttribute("placeholder", "Enter tags")
// tags_input_canvas.setAttribute("aria-label", "Search")
// inside_canvas_body.appendChild(tags_input_canvas)

// let brand_input_canvas = document.createElement("input")
// brand_input_canvas.setAttribute("id", "brandName")
// brand_input_canvas.setAttribute("class", "form-control me-2")
// brand_input_canvas.setAttribute("type", "text")
// brand_input_canvas.setAttribute("placeholder", "Enter brand")
// brand_input_canvas.setAttribute("aria-label", "Search")
// inside_canvas_body.appendChild(brand_input_canvas)

// let price_above_input_canvas = document.createElement("input")
// price_above_input_canvas.setAttribute("id", "price-above")
// price_above_input_canvas.setAttribute("class", "form-control me-2")
// price_above_input_canvas.setAttribute("type", "number")
// price_above_input_canvas.setAttribute("placeholder", "price greater than in USD")
// price_above_input_canvas.setAttribute("aria-label", "Search")
// inside_canvas_body.appendChild(price_above_input_canvas)

// let price_below_input_canvas = document.createElement("input")
// price_below_input_canvas.setAttribute("id", "price-below")
// price_below_input_canvas.setAttribute("class", "form-control me-2")
// price_below_input_canvas.setAttribute("type", "number")
// price_below_input_canvas.setAttribute("placeholder", "price less than in USD")
// price_below_input_canvas.setAttribute("aria-label", "Search")
// inside_canvas_body.appendChild(price_below_input_canvas)

// let rating_above_input_canvas = document.createElement("input")
// rating_above_input_canvas.setAttribute("id", "rating-above")
// rating_above_input_canvas.setAttribute("class", "form-control me-2")
// rating_above_input_canvas.setAttribute("type", "number")
// rating_above_input_canvas.setAttribute("placeholder", "rating greater than out of 5")
// rating_above_input_canvas.setAttribute("aria-label", "Search")
// inside_canvas_body.appendChild(rating_above_input_canvas)

// let rating_below_input_canvas = document.createElement("input")
// rating_below_input_canvas.setAttribute("id", "price-below")
// rating_below_input_canvas.setAttribute("class", "form-control me-2")
// rating_below_input_canvas.setAttribute("type", "number")
// rating_below_input_canvas.setAttribute("placeholder", "rating less than out of 5")
// rating_below_input_canvas.setAttribute("aria-label", "Search")
// inside_canvas_body.appendChild(rating_below_input_canvas)

// // inside search button

// let inside_search_btn = document.createElement("button")
// inside_search_btn.setAttribute("id", "search-filter")
// inside_search_btn.setAttribute("class", "btn btn-primary")
// inside_search_btn.setAttribute("type", "button")
// inside_search_btn.setAttribute("data-bs-toggle", "offcanvas")
// inside_search_btn.setAttribute("data-bs-target", "#offcanvasTop")
// inside_search_btn.setAttribute("aria-controls", "offcanvasTop")
// inside_search_btn.innerText = "Search"
// inside_canvas_body.appendChild(inside_search_btn)


// *************API URL creation***************
const baseURL = "https://makeup-api.herokuapp.com/api/v1/products.json"

function makeParams() {
    let product_type = document.getElementById("type").value

    let product_category = document.getElementById("category").value

    let product_tags = document.getElementById("tags").value

    let brandName = document.getElementById("brandName").value

    let price_greater_than = document.getElementById("price-above").value

    let price_less_than = document.getElementById("price-below").value

    let rating_greater_than = document.getElementById("rating-above").value

    let rating_less_than = document.getElementById("rating-below").value

    let params = ``

    if (product_type) {

        params = params + `product_type=${product_type}`
    }
    if (product_category) {
        params = params + `product_category=${product_category}`
    }
    if (product_tags) {
        params = params + `product_tags=${product_tags}`
    }
    if (brandName) {
        params = params + `brand=${brandName}`
    }
    if (price_greater_than) {
        params = params + `price_greater_than=${price_greater_than}`
    }
    if (price_less_than) {
        params = params + `price_less_than=${price_less_than}`
    }
    if (rating_greater_than) {
        params = params + `rating_greater_than=${rating_greater_than}`
    }
    if (rating_less_than) {
        params = params + `rating_less_than=${rating_less_than}`
    }

    let URL = `${baseURL}?${params}`
    return URL
}





// create card item

function createCard(cardData) {
    let name = cardData.name
    let brand = cardData.brand
    let price = `${cardData.price_sign} ${cardData.price}`
    let imgSrc = cardData.image_link
    let link = cardData.product_link
    // let description = cardData.description

    let card = document.createElement("div")
    card.setAttribute("class", "card col-md-4 col-sm-6")
    card.setAttribute("style", "width: 18rem;")
    row.appendChild(card)

    let cardImg = document.createElement("img")
    cardImg.setAttribute("class", "card-img-top")
    cardImg.src = imgSrc
    cardImg.setAttribute("alt", "make API product image")
    card.appendChild(cardImg)

    let cardBody = document.createElement("div")
    cardBody.setAttribute("class", "card-body")
    card.appendChild(cardBody)

    let cardName = document.createElement("h5")
    cardName.setAttribute("class", "card-title")
    cardName.innerText = name
    cardBody.appendChild(cardName)

    let cardBrand = document.createElement("h5")
    cardBrand.setAttribute("class", "card-title")
    cardBrand.innerText = brand
    cardBody.appendChild(cardBrand)

    let cardPrice = document.createElement("p")
    cardPrice.setAttribute("class", "card-text")
    cardPrice.innerText = price
    cardBody.appendChild(cardPrice)

    // let cardText = document.createElement("p")
    // cardText.setAttribute("class", "card-text")
    // cardText.innerHTML = description
    // cardBody.appendChild(cardText)

    let cardLink = document.createElement("a")
    cardLink.href = link
    cardBody.appendChild(cardLink)


    let cardButton = document.createElement("button")
    cardButton.setAttribute("class", "btn btn-outline-success")
    cardButton.innerText = "Go to product"
    cardLink.appendChild(cardButton)

}

// to create pagination buttons

function createButton(className, idValue, innerText) {
    if (idValue === 1) {
        className = className + " " + "active"
    }
    let list = document.createElement("li")
    buttons.appendChild(list)
    let button = document.createElement("button")
    button.setAttribute("class", className)
    button.setAttribute("id", idValue)
    button.innerText = innerText
    list.appendChild(button)
    return list
}

function clearContent() {
    let content = document.getElementById("row")
    content.innerHTML = ""
    let buttons = document.getElementById("buttons")
    buttons.innerHTML = ""
}

function clearForm() {
    document.getElementById("type").value = ""

    document.getElementById("category").value = ""

    document.getElementById("tags").value = ""

    document.getElementById("brandName").value = ""

    document.getElementById("price-above").value = null

    document.getElementById("price-below").value = null

    document.getElementById("rating-above").value = null

    document.getElementById("rating-below").value = null
}

// to disable the pagination pages


function createPagination(totalData) {
    let dataLength = totalData.length
    // creating the page buttons
    createButton("pageName", "first", "first")
    createButton("pageName", "prev", "prev")
    for (let i = 1; i <= Math.floor(dataLength / 30) + 1; i += 1) {
        createButton("pageNum", i, i)
    }
    createButton("pageName", "next", "next")
    createButton("pageName", "last", "last")

    let activePage = document.getElementsByClassName("active")

    // creating the content while click on pages
    let namePages = document.getElementsByClassName("pageName")
    let numPages = document.getElementsByClassName("pageNum")

    let firstPageDisabled
    let prevPageDisabled
    let nextPageDisabled
    let lastPageDisabled

    for (let i = 0; i < namePages.length; i++) {
        let page = namePages[i]
        if (page.innerText === "first") {
            firstPageDisabled = page
        } else if (page.innerText === "prev") {
            prevPageDisabled = page
        } else if (page.innerText === "next") {
            nextPageDisabled = page
        } else if (page.innerText === "last") {
            lastPageDisabled = page
        }
    }

    if (activePage[0].innerText === "1") {
        firstPageDisabled.disabled = true
        prevPageDisabled.disabled = true
    }

    function getPagesDisabled() {
        if (activePage[0].innerText === "1") {
            firstPageDisabled.disabled = true
            prevPageDisabled.disabled = true
            nextPageDisabled.disabled = false
            lastPageDisabled.disabled = false
        } else if (activePage[0].innerText == numPages.length + 1) {
            firstPageDisabled.disabled = false
            prevPageDisabled.disabled = false
            nextPageDisabled.disabled = true
            lastPageDisabled.disabled = true
        } else {
            firstPageDisabled.disabled = false
            prevPageDisabled.disabled = false
            nextPageDisabled.disabled = false
            lastPageDisabled.disabled = false
        }
    }

    for (let i = 0; i < numPages.length; i++) {
        let page = numPages[i]
        page.addEventListener("click", () => {
            let classValue
            if (page.id !== activePage[0].id) {
                let existingActiveClass = activePage[0].className.split(" ")[0]
                activePage[0].setAttribute("class", existingActiveClass) // deleting the active class in prev element
                classValue = page.getAttribute("class") + " " + "active" // setting the new class value
            } else {
                classValue = page.getAttribute("class")
            }
            page.setAttribute("class", classValue)
            clearContent()
            const data = loadData(page.innerText, productsJson)
            getPagesDisabled()
            data.map((content) => {
                createCard(content)
            })

        })
    }

    for (let i = 0; i < namePages.length; i++) {
        let page = namePages[i]
        page.addEventListener("click", () => {
            clearContent()
            if (page.innerText === "first") {
                let firstPage = numPages[0]
                let classValue
                let existingActiveClass = activePage[0].className.split(" ")[0]
                activePage[0].setAttribute("class", existingActiveClass) // deleting the active class in current element
                classValue = firstPage.getAttribute("class") + " " + "active" // setting the new class value in first page
                firstPage.setAttribute("class", classValue)
                const data = loadData(1, productsJson)
                getPagesDisabled()
                data.map((content) => {
                    createCard(content)
                })
            } else if (page.innerText === "last") {
                let lastPage = numPages[numPages.length - 1]
                let classValue
                let existingActiveClass = activePage[0].className.split(" ")[0]
                activePage[0].setAttribute("class", existingActiveClass) // deleting the active class in current element
                classValue = lastPage.getAttribute("class") + " " + "active" // setting the new class value in last page
                lastPage.setAttribute("class", classValue)
                const data = loadData(numPages.length, productsJson)
                getPagesDisabled()
                data.map((content) => {
                    createCard(content)
                })

            } else if (page.innerText === "prev") {
                let toLoad = parseInt(activePage[0].innerText) - 1

                let prevPage
                for (let i = 0; i < numPages.length; i++) {
                    let page = numPages[i]
                    if (page.innerText === `${toLoad}`) {
                        prevPage = page
                        break
                    }
                }
                let classValue
                let existingActiveClass = activePage[0].className.split(" ")[0]
                activePage[0].setAttribute("class", existingActiveClass) // deleting the active class in current element
                classValue = prevPage.getAttribute("class") + " " + "active" // setting the new class value in prev page
                prevPage.setAttribute("class", classValue)

                const data = loadData(toLoad, productsJson)
                getPagesDisabled()
                data.map((content) => {
                    createCard(content)
                })




            } else if (page.innerText === "next") {
                let toLoad = parseInt(activePage[0].innerText) + 1
                let nextPage
                for (let i = 0; i < numPages.length; i++) {
                    let page = numPages[i]
                    if (page.innerText === `${toLoad}`) {
                        nextPage = page
                        break
                    }
                }
                let classValue
                let existingActiveClass = activePage[0].className.split(" ")[0]
                activePage[0].setAttribute("class", existingActiveClass) // deleting the active class in current element
                classValue = nextPage.getAttribute("class") + " " + "active" // setting the new class value in next page
                nextPage.setAttribute("class", classValue)

                const data = loadData(toLoad, productsJson)
                getPagesDisabled()
                data.map((content) => {
                    createCard(content)
                })

            }
        })
    }
}


function loadData(number, jsonData) {
    let loadedData = []
    let loadfrom
    if (number === 0) {
        loadfrom = 0
    } else {
        loadfrom = (parseInt(number) - 1) * 30
    }

    let loadUpto = loadfrom + 30
    for (let i = loadfrom; i < loadUpto; i++) {
        loadedData.push(jsonData[i])
    }
    return loadedData
}

let productsJson = []


async function getProducts() {
    try {
        let res = await fetch(baseURL)
        let products = await res.json()

        products.forEach((product) => {
            productsJson.push(product)
        })

        const dataLoadFirst = loadData(0, productsJson)

        dataLoadFirst.map((prod => {
            createCard(prod)
        }))

        createPagination(productsJson)

    } catch (error) {
        console.log(error)
    }

}

async function filterProducts(url) {
    productsJson = []
    try {
        let res = await fetch(url)
        let products = await res.json()
        params = ""
        products.forEach((product) => {
            productsJson.push(product)
        })
        clearContent()
        const dataLoadFirst = loadData(0, productsJson)

        dataLoadFirst.map((prod => {
            createCard(prod)
        }))

        createPagination(productsJson)

    } catch (error) {
        console.log(error)
    }
}

getProducts()

let filter = document.getElementById("search-filter")

filter.addEventListener("click", () => {
    clearContent()
    let finalURL = makeParams()
    filterProducts(finalURL)
    clearForm()
})




