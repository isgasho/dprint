(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[2],{24:function(e,t,n){e.exports=n(60)},29:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var o,r=n(22),a=n(4),i=n(0),l=n.n(i),c=n(18),s=n.n(c),u=(n(29),n(15)),d=n(9),p=n(10),f=n(11),h=n(12),g=n(23),m=n(21),v=n(19);function y(e){var t=e.backgroundColor;return l.a.createElement("div",{className:"verticallyCenter horizontallyCenter fillHeight",style:{backgroundColor:t}},l.a.createElement(v.BeatLoader,{color:"#fff",loading:!0,size:25}))}!function(e){e.TypeScript="typescript",e.Json="json",e.Markdown="markdown"}(o||(o={}));var b=function(e){Object(g.a)(r,e);var t=Object(m.a)(r);function r(e){var a;Object(p.a)(this,r),(a=t.call(this,e)).editor=void 0,a.monacoEditor=void 0,a.outerContainerRef=l.a.createRef(),a.disposables=[],a.lastScrollTop=0,a.state={editorComponent:void 0},a.editorDidMount=a.editorDidMount.bind(Object(h.a)(a));var i=Promise.all([n.e(0),n.e(6)]).then(n.t.bind(null,377,7));return Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,378,7)).then((function(e){a.monacoEditor=e,a.props.language===o.TypeScript&&(e.languages.typescript.typescriptDefaults.setCompilerOptions({noLib:!0,target:e.languages.typescript.ScriptTarget.ESNext,allowNonTsExtensions:!0}),e.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSyntaxValidation:!0,noSemanticValidation:!0})),e.editor.defineTheme("dprint-theme",{base:"vs-dark",inherit:!0,rules:[],colors:{"editorRuler.foreground":"#283430"}}),i.then((function(e){a.setState({editorComponent:e.default})})).catch((function(e){console.error(e),a.setState({editorComponent:!1})}))})).catch((function(e){console.error(e),a.setState({editorComponent:!1})})),a}return Object(f.a)(r,[{key:"render",value:function(){return this.updateScrollTop(),this.updateJsonSchema(),l.a.createElement("div",{className:"codeEditor",ref:this.outerContainerRef},this.getEditor())}},{key:"componentWillUnmount",value:function(){var e,t=Object(d.a)(this.disposables);try{for(t.s();!(e=t.n()).done;){e.value.dispose()}}catch(n){t.e(n)}finally{t.f()}this.disposables.length=0}},{key:"getEditor",value:function(){var e=this;return null==this.state.editorComponent?l.a.createElement(y,{backgroundColor:"#1e1e1e"}):!1===this.state.editorComponent?l.a.createElement("div",{className:"errorMessage"},"Error loading code editor. Please refresh the page to try again."):l.a.createElement(this.state.editorComponent,{width:"100%",height:"100%",value:this.props.text,theme:"dprint-theme",language:this.props.language,onChange:function(t){return e.props.onChange&&e.props.onChange(t)},editorDidMount:this.editorDidMount,options:{automaticLayout:!1,renderWhitespace:"all",readOnly:this.props.readonly||!1,minimap:{enabled:!1},quickSuggestions:!1,rulers:null==this.props.lineWidth?[]:[this.props.lineWidth]}})}},{key:"editorDidMount",value:function(e){var t=this;this.editor=e,this.disposables.push(this.editor.onDidChangeModelContent((function(){t.props.readonly&&t.editor.setPosition({column:1,lineNumber:1})}))),this.disposables.push(this.editor.onDidScrollChange((function(e){e.scrollTopChanged&&t.props.onScrollTopChange&&t.props.onScrollTopChange(e.scrollTop)})));var n=0,o=0,r=setInterval((function(){var r=t.outerContainerRef.current;if(null!=r){var a=r.offsetWidth,i=r.offsetHeight;n===i&&o===a||(e.layout(),n=i,o=a)}}),500);this.disposables.push({dispose:function(){return clearInterval(r)}})}},{key:"updateScrollTop",value:function(){var e=this;null!=this.editor&&this.lastScrollTop!==this.props.scrollTop&&setTimeout((function(){null!=e.props.scrollTop&&(e.editor.setScrollTop(e.props.scrollTop),e.lastScrollTop=e.props.scrollTop)}),0)}},{key:"updateJsonSchema",value:function(){var e,t;null!=this.monacoEditor&&null!=this.props.jsonSchemaUrl&&((null===(e=this.monacoEditor.languages.json.jsonDefaults.diagnosticsOptions.schemas)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.uri)!==this.props.jsonSchemaUrl&&this.monacoEditor.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,allowComments:!0,enableSchemaRequest:!0,schemas:[{uri:this.props.jsonSchemaUrl,fileMatch:["*"]}]}))}}]),r}(l.a.Component);function E(e){return l.a.createElement("a",{id:e.id,href:e.url,rel:"noopener noreferrer"},e.text)}n(57),n(58);var j=new Worker("/playground/formatter.worker.js"),S=[],x=[];function w(e){var t=e.configText,n=e.onConfigTextChanged,r=e.text,c=e.onTextChanged,s=e.formattedText,d=e.fileExtensions,p=e.selectedPlugin,f=e.plugins,h=e.onSelectPlugin,g=e.isLoading,m=Object(i.useState)(0),v=Object(a.a)(m,2),S=v[0],x=v[1],w=Object(i.useState)(void 0),O=Object(a.a)(w,2),T=O[0],C=O[1];Object(i.useEffect)((function(){C(d[0])}),[d]),Object(i.useEffect)((function(){var e=setTimeout((function(){var e,t,n;t=null!==(e="file."+T)&&void 0!==e?e:"ts",n=r,j.postMessage({type:"Format",filePath:t,fileText:n})}),250);return function(){return clearTimeout(e)}}),[T,r]),Object(i.useEffect)((function(){var e=setTimeout((function(){var e;try{null==(e=JSON.parse(t)).lineWidth&&(e.lineWidth=80),function(e){j.postMessage({type:"SetConfig",config:e})}(e)}catch(n){}}),250);return function(){return clearTimeout(e)}}),[t]);var k=Object(i.useMemo)((function(){try{var e=parseInt(JSON.parse(t).lineWidth,10);if(!isNaN(e))return e}catch(n){}return 80}),[t]),N=Object(i.useCallback)((function(e){C(e.target.value)}),[C]);return l.a.createElement("div",{className:"App"},l.a.createElement(u.a,{split:"horizontal",defaultSize:50,allowResize:!1},l.a.createElement("header",{className:"appHeader"},l.a.createElement("h1",{id:"title"},"dprint - Playground"),l.a.createElement("div",{id:"headerRight"},l.a.createElement("a",{href:"/overview"},"Overview"),l.a.createElement("a",{href:"/playground"},"Playground"),l.a.createElement("a",{href:"/pricing"},"Pricing"),l.a.createElement(E,{url:"https://github.com/dprint/dprint",text:"View on GitHub"}))),l.a.createElement(u.a,{split:"vertical",minSize:50,defaultSize:"50%",allowResize:!0,pane1Style:{overflowX:"hidden",overflowY:"hidden"},pane2Style:{overflowX:"hidden",overflowY:"hidden"}},l.a.createElement(u.a,{split:"horizontal",allowResize:!0,defaultSize:"60%",pane1Style:{overflowX:"hidden",overflowY:"hidden"},pane2Style:{overflowX:"hidden",overflowY:"hidden"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"playgroundSubTitle"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},"Plugin:"),l.a.createElement("div",{className:"column",style:{flex:1,display:"flex"}},l.a.createElement("select",{onChange:function(e){return h(f[e.target.selectedIndex])},style:{flex:1},value:p.url},f.map((function(e,t){return l.a.createElement("option",{key:t,value:e.url},e.url)})))),l.a.createElement("div",{className:"column",style:{display:"flex"}},l.a.createElement("select",{value:T,onChange:N},d.map((function(e,t){return l.a.createElement("option",{key:t,value:e},".",e)})))))),l.a.createElement(b,{language:p.language,onChange:c,text:r,lineWidth:k,onScrollTopChange:x,scrollTop:S})),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"playgroundSubTitle"},"Configuration"),l.a.createElement(b,{language:o.Json,onChange:n,jsonSchemaUrl:p.configSchemaUrl,text:t}))),l.a.createElement("div",{className:"container"},g?l.a.createElement(y,null):l.a.createElement(b,{language:p.language,text:s,readonly:!0,lineWidth:k,onScrollTopChange:x,scrollTop:S})))))}j.addEventListener("message",(function(e){switch(e.data.type){case"Format":var t,n=Object(d.a)(S);try{for(n.s();!(t=n.n()).done;){(0,t.value)(e.data.text)}}catch(a){n.e(a)}finally{n.f()}break;case"Error":var o,r=Object(d.a)(x);try{for(r.s();!(o=r.n()).done;){(0,o.value)(e.data.message)}}catch(a){r.e(a)}finally{r.f()}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(7),T=n.n(O),C=n(13);function k(){return(k=Object(C.a)(T.a.mark((function e(t){var n,o,r,a,i,l,c,s,u,d;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.configSchemaUrl);case 2:return n=e.sent,e.next=5,n.json();case 5:o=e.sent,r="{",a=!1,i=0,l=Object.keys(o.properties);case 9:if(!(i<l.length)){e.next=20;break}if("$schema"!==(c=l[i])&&"deno"!==c&&"locked"!==c){e.next=13;break}return e.abrupt("continue",17);case 13:s=o.properties[c],u=void 0,null!=(u=s.$ref?null===(d=o.definitions[c])||void 0===d?void 0:d.default:s.default)&&(r+=a?",\n":"\n",r+='  "'.concat(c,'": '),r+="string"===typeof u?'"'.concat(u,'"'):"lineWidth"===c?"80":"".concat(u.toString()),a=!0);case 17:i++,e.next=9;break;case 20:return r+="\n}\n",e.abrupt("return",r);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(C.a)(T.a.mark((function e(){var t,n,r,a,i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://plugins.dprint.dev/info.json");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,1,1===n.schemaVersion){e.next=9;break}throw new Error("Expected schema version ".concat(1,", but found ").concat(n.schemaVersion,"."));case 9:return r=n.latest.find((function(e){return"typescript"===e.configKey})),a=n.latest.find((function(e){return"json"===e.configKey})),i=n.latest.find((function(e){return"markdown"===e.configKey})),e.abrupt("return",[{url:r.url,configSchemaUrl:"https://plugins.dprint.dev/schemas/typescript-v0.json",language:o.TypeScript,fileExtensions:r.fileExtensions},{url:a.url,configSchemaUrl:"https://plugins.dprint.dev/schemas/json-v0.json",language:o.Json,fileExtensions:a.fileExtensions},{url:i.url,configSchemaUrl:"https://plugins.dprint.dev/schemas/markdown-v0.json",language:o.Markdown,fileExtensions:i.fileExtensions}]);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=n(14);function M(e){return Object(U.decompressFromEncodedURIComponent)(e.trim())||""}var W=new(function(){function e(){Object(p.a)(this,e)}return Object(f.a)(e,[{key:"getUrlInfo",value:function(){var e=document.location.hash||"";return{text:function(){var t=/code\/([^/]+)/.exec(e);if(null==t||2!==t.length)return"";try{return M(t[1])}catch(n){return console.error(n),""}}(),configText:function(){var t=/config\/([^/]+)/.exec(e);if(null==t||2!==t.length)return;try{return M(t[1])}catch(n){return void console.error(n)}}(),language:function(){var t=/language\/([^/]+)/.exec(e);if(null==t||2!==t.length)return"typescript";try{switch(t[1]){case"json":return"json";case"markdown":return"markdown";case"typescript":default:return"typescript"}}catch(n){return console.error(n),"typescript"}}()}}},{key:"updateUrl",value:function(e){var t=e.text,n=e.configText,o=e.language;if(null==o)window.history.replaceState(void 0,"","");else{var r="#code/".concat(Object(U.compressToEncodedURIComponent)(t));null!=n&&(r+="/config/".concat(Object(U.compressToEncodedURIComponent)(n))),r+="/language/".concat(o),window.history.replaceState(void 0,"",r)}}}]),e}()),D=W.getUrlInfo(),P=!0;function R(){var e,t=Object(i.useState)([]),n=Object(a.a)(t,2),o=n[0],c=n[1],s=Object(i.useState)(),u=Object(a.a)(s,2),d=u[0],p=u[1],f=Object(i.useState)([]),h=Object(a.a)(f,2),g=h[0],m=h[1],v=Object(i.useState)(D.text),b=Object(a.a)(v,2),E=b[0],O=b[1],T=Object(i.useState)(null!==(e=D.configText)&&void 0!==e?e:""),C=Object(a.a)(T,2),U=C[0],M=C[1],R=Object(i.useState)(""),z=Object(a.a)(R,2),I=z[0],J=z[1],L=Object(i.useState)(""),V=Object(a.a)(L,2),H=V[0],X=V[1],Y=Object(i.useState)(!0),B=Object(a.a)(Y,2),F=B[0],K=B[1];return Object(i.useEffect)((function(){(function(){return N.apply(this,arguments)})().then((function(e){c(e),p(e.find((function(e){var t;return null!==(t=e.language===D.language)&&void 0!==t?t:"typescript"})))})).catch((function(e){console.error(e),alert("There was an error getting the plugins. Try refreshing the page or check the browser console.")}))}),[]),Object(i.useEffect)((function(){var e;e=function(e){X(e)},S.push(e),function(e){x.push(e)}((function(e){console.error(e),alert("There was an error with the formatter worker. Try refreshing the page or check the browser console.")}))}),[]),Object(i.useEffect)((function(){null!=d&&W.updateUrl({text:E,configText:U===I?void 0:U,language:d.language})}),[E,U,d,I]),Object(i.useEffect)((function(){if(K(!0),null!=d){var e,t=function(e){return k.apply(this,arguments)}(d);e=d.url,j.postMessage({type:"LoadUrl",url:e}),t.then((function(e){m(Object(r.a)(d.fileExtensions)),P&&null!=D.configText?(M(D.configText),P=!1):M(e),J(e),K(!1)})).catch((function(e){console.error(e),alert("There was an error loading the plugin. Check the console or try refreshing the page.")}))}}),[d]),null==d?l.a.createElement(y,null):l.a.createElement(w,{text:E,onTextChanged:O,configText:U,onConfigTextChanged:M,formattedText:H,fileExtensions:g,plugins:o,selectedPlugin:d,onSelectPlugin:p,isLoading:F})}s.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,3,4]]]);
//# sourceMappingURL=main.03e10085.chunk.js.map