// function externalize (document)

// 1. Ищет все гиперссылки в документе (а, area)
// 2. Пропускает те у которых нет href
// 3. Если href начинается с http:// или https:// или :// то ставит rel=external и target=_blank (через регулярку)

'use strict'

function externalize(document) {
	var links = Array.from(document.querySelectorAll("a"))
	var areas = Array.from(document.querySelectorAll("area"))
	var arr = links.concat(areas)
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].hasAttribute("href")) {
			
			if (/^(https?)?\:\/\//igm.test(arr[i].getAttribute("href"))) {
				arr[i].setAttribute("target", "_blank")
				arr[i].setAttribute("rel", "external")
			}
		}
	}
	return 
}
