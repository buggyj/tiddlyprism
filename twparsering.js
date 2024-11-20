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
        pattern:/\[(?:ext|img|)\[[^\]\n]*?\]\]/,
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
'macro':{
        pattern:/<<[^<\s`]+?[\s\S]*?>>/,
		lookbehind: false,
        greedy: true,
		inside: {
			'attr-value': {
				pattern: /(<<[^<\s`]+? )[\s\S]*?(>>)/,
				lookbehind: true,
                inside: {
                    'punctuation': /<<|>>/
                }
			},
			'punctuation': /<<|>>/
          }
},
'twdefs':/^\\\S*/gm,
   'tw_important1a': {
				// ! title 
				
				pattern: /^(^\s*)![^!].*\n/,
				lookbehind: true,
				inside: {
					punctuation: /^!+|!+$/,
                    content: /[\S]+/
				}
			},
   'tw_important1': {
				// ! title 
				
				pattern: /[\n](^\s*)![^!].*$/m,
				lookbehind: true,
				inside: {
					punctuation: /!+/,
                    content: /[\S]+/
				}
			},
   'tw_important2': {
				// ! title 
				
				pattern: /^(^\s*)!![^!].*$/m,
				lookbehind: true,
				inside: {
					punctuation: /^!+|!+$/,
     whitespace:/ /,
                    content: /[\S]+/
				}
			},
   'tw_important3': {
				// ! title 
				
				pattern: /^(^\s*)!!![^!].*$/m,
				lookbehind: true,
				inside: {
					punctuation: /^!+|!+$/,
                  content: /[\S]+/
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
                'punctuation': /\^\^/,
				'content': {
					pattern: /[\S]+/,
					lookbehind: true
				}				
            }
		},
		'subscript': {
        pattern: /,,.*?,,/,
			lookbehind: true,
			greedy: true,
	  		inside: {
                'punctuation': /,,/,
				'content': {
					pattern: /[\S]+/,
					lookbehind: true
				}                
            }
		}
});
Prism.languages.insertBefore('tw', 'tag', {
    'transclude': /\{\{\{.*?\}\}\}/
});
Prism.languages.tw.tag.inside['attr-value'].pattern=/=\s*(?:"""([\s\S]*?)"""|"[^"]*"|'[^']*'|`[^`]*`|\{\{\{(.*?)\}\}\}|\{\{([^{]*?)\}\}|<<.*?>>|[^\s'">=]+)/ 
Prism.languages.tw.tag.pattern =/<\/?(?![\d<])[^\s>`<>\/=%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"""([\s\S]*?)"""|"[^"]*"|'[^']*'|`[^`]*`|\{\{\{(.*?)\}\}\}|\{\{([^{]*?)\}\}|<<.*?>>|[^\s'"=]+(?:>>)?(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g
    