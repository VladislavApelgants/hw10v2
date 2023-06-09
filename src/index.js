import { getCats, getOneCat} from "./js/api";
import {generateMarkupInfoCat, generateMarkupSelect} from './js/markup'
import SlimSelect from 'slim-select'
import { Report } from 'notiflix/build/notiflix-report-aio';
import refs from './js/refs'

const { select, catInfo, loader } = refs

const sel = new SlimSelect({
    select: '#breed-select'
})

select.addEventListener('change', onChooseCat)

getCats()
    .then(elem => sel.setData(generateMarkupSelect(elem)))
    .catch(showError);


function onChooseCat(e) {
    const id = e.target.value
    catInfo.innerHTML = ''
    loader.classList.remove('hide')
    getOneCat(id)
        .then(generateMarkupInfoCat)
        .catch(showError)
        .finally(() => loader.classList.add('hide'))
}

function showError(err) {
    return Report.failure(
        `hi! ${err}`,
        'Oops! Something went wrong! Try reloading the page!'
    )
}