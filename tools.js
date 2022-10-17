

let createHtmlElement = ( typeElement, objectAttribute = {}, classArray = [], texContent ='' ) =>{

    let element = document.createElement(typeElement)

    for ( const elementKey in objectAttribute ) {
        element.setAttribute(elementKey,objectAttribute[elementKey])
    }

    classArray.forEach( def =>{
        element.classList.add(def)
    })

    if( texContent !== '' ){
        element.textContent = texContent
    }

    return element

}


let objectAttribute = {
    'type':'text',
    'name':'unText',
    'value':'UneValeur'
}

let classArray = ['premiereClasse','secondeClasse']

let monElementHtml = createHtmlElement('input',objectAttribute,classArray)

console.log('test',test)

document.querySelector('#testContent').append(test)