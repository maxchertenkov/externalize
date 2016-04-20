// function externalize (document)

// 1. Ищет все гиперссылки в документе (а, area)
// 2. Пропускает те у которых нет href
// 3. Если href начинается с http:// или https:// или :// то ставит rel=external и target=_blank (через регулярку)

"use strict"

function externalize(document) {
	var links = document.querySelectorAll("a, area")
	for (var i = 0; i < links.length; i++) {
		var link = links[i]
		if (link.hasAttribute("href")) {
			
			if (/^(https?)?:\/\//i.test(link.href)) {
				link.target = "_blank"
				link.rel = "external"
			}
		}
	}
}
