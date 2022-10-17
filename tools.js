
//DOC : création d'élément d'Html, avec attributs , class et contenu
let createHtmlElement = ( typeElement, objectAttribute = {}, classArray = [], texContent ='', innerHtml ='' ) =>{

    let element = document.createElement(typeElement)

    for ( const elementKey in objectAttribute ) {
        element.setAttribute(elementKey,objectAttribute[elementKey])
    }

    classArray.forEach( def =>{
        element.classList.add(def)
    })

    if( texContent !== '' ){
        element.textContent = texContent
    }else if( innerHtml !== '' ){
        element.innerHTML = innerHtml
    }

    return element

}

