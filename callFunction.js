
//DOC : création d'élément d'Html, avec attributs , class et contenu

let objectAttribute = {
    'name':'theSuperName',
    'type':'text',
    'value':'MaValue',
}

let classArray = ['maPremiereClass','maSecondeClass']

let monElement = createHtmlElement( 'input', objectAttribute , classArray , '', '' )

document.querySelector('#testContent').append(monElement)