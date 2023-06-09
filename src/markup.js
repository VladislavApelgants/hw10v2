import refs from './refs'
const { catInfo } = refs

function generateMarkupSelect(arrData) {
    return arrData.map(e => ({text: e.name, value: e.id}))
}




function generateMarkupInfoCat(arrData) {
    const catData = arrData[0].breeds[0]
    
    const catImage = arrData[0].url

     const marcup = `
        <img src="${catImage}" alt="${catData.name}" width="500"/>
        <h2 class="title-cat">${catData.name}</h2>
        <p class="description-cat">${catData.description}</p>
        <p class="temperament">${catData.temperament}</p>
        `
    catInfo.insertAdjacentHTML("beforeend", marcup)
}

export {
    generateMarkupInfoCat,
    generateMarkupSelect
}