/*\
title: $:/plugins/bj/tiddlyprism/highlight-tp.js
type: application/javascript
module-type: widget


\*/
(function() {

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var TYPE_MAPPINGS_BASE = "$:/config/tiddlyprism/TypeMappings/";

var CodeBlockWidget = require("$:/core/modules/widgets/codeblock.js").codeblock;
if($tw.browser) {
	var prism = require("$:/plugins/bj/tiddlyprism/prismjs.js");
	require("$:/plugins/bj/tiddlyprism/twparsering.js");
	require("$:/plugins/bj/tiddlyprism/prismautoloader.js");
	Prism.plugins.autoloader.languages_path = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/';
	CodeBlockWidget.prototype.postRender = function() {
		var domNode = this.domNodes[0],
			language = this.language;
		if (!language) return;
		console.log(language);
		if (domNode.isTiddlyWikiFakeDom) return;//??use const html = Prism.highlight(snippet, Prism.languages.py, 'py');
		const editopts=$tw.wiki.getTiddlerData("$:/plugins/bj/tiddlyprism/edoptions.json");
		language = this.wiki.getTiddlerText(TYPE_MAPPINGS_BASE + language,language);
		const text = domNode.textContent;
		//domNode.children[0].innerHTML = Prism.highlight(text, prism.languages[language], language)
		//prism.highlight(text, prism.languages[language], language);
		const code = domNode.querySelector('code');
		code.classList.add(`language-${language}`)
		prism.highlightElement( code);
	};

}
})();
