// function externalize (document)

// 1. Ищет все гиперссылки в документе (а, area)
// 2. Пропускает те у которых нет href
// 3. Если href начинается с http:// или https:// или :// то ставит rel=external и target=_blank (через регулярку)

'use strict'

function externalize(document) {
	var links = document.querySelectorAll("a")
	for (var i = 0; i < links.length; i++) {
		if (links[i].hasAttribute("href")) {
			if (/^(https?)?\:\/\//igm.test(links[i].getAttribute("href"))) {
				links[i].setAttribute("target", "_blank")
				links[i].setAttribute("rel", "external")
			}
		}
	}
	return 
}
