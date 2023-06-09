const API_KEY =  "live_kh18dOdNKwZuIHWZfccOAGOrvqhRCGlBdYdLVrTBKSJTy9u4eOXU5AMCxqYPWdvg"
const URL = 'https://api.thecatapi.com/v1'

function getCats() {
    return fetch(`${URL}/breeds?api_key=${API_KEY}`)
    .then(res=> res.json())
    .catch(manageErrors)
}

function getOneCat(id) {
 return fetch(`${URL}/images/search?api_key=${API_KEY}&breed_ids=${id}`)
 .then(res => res.json())
 .catch(manageErrors)
}


function manageErrors(response) { 
    if(!response.ok){ 
          const responseError = {
               statusText: response.statusText,
               status: response.status
          };
          throw(responseError);
    }
    return response;
}

export {
    getCats,
    getOneCat
}