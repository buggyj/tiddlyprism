/*\
title: $:/plugins/bj/tiddlyprism/twparsering.js
type: application/javascript
module-type: library


\*/
Prism.languages['tw'] = Prism.languages.extend('html', {
'blk3':/<<</m,
'twhanging':/;.*?\n:/m,
'transcludeA':/{{[^}{}]*?}}/,
'twlink':{
        pattern:/\[(?:ext|img|)\[[^\]]*?\]\]/,
		lookbehind: true,
        greedy: true
      },
'urlstring':/\bhttps?:\/\/[^\s/$.?#].[^\s]*\b/,
'code_section':{
				pattern: /```[^\r\n]*[\s\S]+?```(?![`])/,
				lookbehind: true,
                 greedy: true,
                 inside: {
                 'content': {
					pattern: /(^...[^\r\n]*)[\s\S]+(?=...$)/,
					lookbehind: true
				},
					punctuation: /```/
				}
        },
'twcode':{
        pattern:/`[^`]+`(?![`])/,
		lookbehind: true,
        greedy: true
      },
      //=\s*(?:"""([\s\S]*?)"""|"[^"]*"|'[^']*'|\{\{\{(.*?)\}\}\}|\{\{([^{]*?)\}\}|<<.*?>>|[^\s'">=]+)
      //pattern:/<<[^<\s`]+?[\s\S]*?>>/m,
'macro':{
        pattern:/<<[^<\s`]+?\s*(?:"""([\s\S]*?)"""|"[^"]*"|'[^']*'|\{\{\{(.*?)\}\}\}|\{\{([^{]*?)\}\}|<<.*?>>|[^\s'">=]+)>>/,
		lookbehind: false,
        greedy: true,
		inside: {
			'content': {
				pattern: /(^..)[\s\S]+(?=..$)/,
				lookbehind: true
			},
			'punctuation': /<<|>>/
          }
},
'twdefs':/^\\\S*/gm,
        'tw_important1': {
				// ! title 
				
				pattern: /(^\s*)![^!].*/m,
				lookbehind: true,
				inside: {
					punctuation: /^!+|!+$/
				}
			},
       'tw_important2': {
				// ! title 
				
				pattern: /(^\s*)!![^!].*/m,
				lookbehind: true,
				inside: {
					punctuation: /^!+|!+$/
				}
			},
       'tw_important3': {
				// ! title 
				
				pattern: /(^\s*)!!![^!].*/m,
				lookbehind: true,
				inside: {
					punctuation: /^!+|!+$/
				}
			},
      'tw_important': {
				// ! title 
				
				pattern: /(^\s*)!{4,6}.+/m,
				lookbehind: true,
				inside: {
					punctuation: /^!+|!+$/
				}
			},
		'inline_style': {
			pattern: /@@.*?@@/,
			lookbehind: true,
			greedy: true,
			inside: {
				'content': {
					pattern: /(^..)[\s\S]+(?=..$)/,
					lookbehind: true
				},
				'punctuation': /@@/
            }
		},
		'twbold': {
			pattern: /''.*?''/,
			lookbehind: true,
			greedy: true,
			inside: {
				'content': {
					pattern: /(^..)[\s\S]+(?=..$)/,
					lookbehind: true
				},
				'punctuation': /''/
            }
		},
		'italic': {
			pattern: /\/\/.*?\/\//,
			lookbehind: true,
			greedy: true,
			inside: {
				'content': {
					pattern: /(^..)[\s\S]+(?=..$)/,
					lookbehind: true
				},
				'punctuation': /\/\//
            }
		},
		'strike': {
            pattern: /~~.*?~~/,
			lookbehind: true,
			greedy: true,
			inside: {
				'content': {
					pattern: /(^..)[\s\S]+(?=..$)/,
					lookbehind: true
				},
				'punctuation': /~~/
            }
       },
		'underline': {
			pattern: /__.*?__/,
			lookbehind: true,
			greedy: true,
			inside: {
				'content': {
					pattern: /(^..)[\s\S]+(?=..$)/,
					lookbehind: true
				},
				'punctuation': /__/
            }
		},
		'superscript': {
			pattern: /\^\^.*?\^\^/,
			lookbehind: true,
			greedy: true,
			inside: {
				'content': {
					pattern: /(^..)[\s\S]+(?=..$)/,
					lookbehind: true
				},
				'punctuation': /\^\^/
            }
		},
		'subscript': {
            pattern: /\,,.*?,,/,
			lookbehind: true,
			greedy: true,
			inside: {
				'content': {
					pattern: /(^..)[\s\S]+(?=..$)/,
					lookbehind: true
				},
				'punctuation': /,,/
            }
		}
});
Prism.languages.insertBefore('tw', 'tag', {
    'transclude': /\{\{\{.*?\}\}\}/
});
//'transclude': /[^=]\{\{\{.*?\}\}\}/
//Prism.languages.tw.tag.pattern = new RegExp(Prism.languages.tw.tag.pattern.source.replace(/\$[^\/]/,""))

                                 Prism.languages.tw.tag.inside['attr-value'].pattern=/=\s*(?:"""([\s\S]*?)"""|"[^"]*"|'[^']*'|\{\{\{(.*?)\}\}\}|\{\{([^{]*?)\}\}|<<.*?>>|[^\s'">=]+)/ 
Prism.languages.tw.tag.pattern =/([^<])<\/?(?![\d<])[^\s>`<>\/=%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"""([\s\S]*?)"""|"[^"]*"|'[^']*'|\{\{\{(.*?)\}\}\}|\{\{([^{]*?)\}\}|<<.*?>>|[^\s'"=]+(?:>>)?(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g
Prism.languages.tw.tag.lookbehind=true