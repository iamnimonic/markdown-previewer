(this.webpackJsonpmarkdownpreviewer=this.webpackJsonpmarkdownpreviewer||[]).push([[0],{15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var i=t(1),r=t.n(i),a=t(9),s=t.n(a),o=(t(15),t(8),t(2)),c=t(3),d=t(6),h=t(5),l=t(4),u=t(0),b=function(e){Object(h.a)(t,e);var n=Object(l.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"editor-box",children:Object(u.jsxs)("div",{id:"editor-content",children:[Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("h2",{className:"header-heading",children:"Editor"})}),Object(u.jsx)("textarea",{id:"editor",onChange:this.props.handleChange,value:this.props.input,children:"something for now"})]})})}}]),t}(i.Component),j=function(e){Object(h.a)(t,e);var n=Object(l.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return console.log("input in preview "+this.props.input),Object(u.jsx)("div",{id:"preview-box",children:Object(u.jsxs)("div",{id:"preview-content",children:[Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("h2",{className:"header-heading",children:"Preview"})}),Object(u.jsx)("p",{dangerouslySetInnerHTML:{__html:this.props.input},id:"preview"})]})})}}]),t}(i.Component),p=t(10),f=t.n(p),g=function(e){Object(h.a)(t,e);var n=Object(l.a)(t);function t(e){var i;return Object(o.a)(this,t),(i=n.call(this,e)).state={input:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `&lt;div&gt;&lt;/div&gt;`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' &amp;&amp; lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n > Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\nfound a thrill '&lt;h1&gt;this&lt;/h1&gt;"},i.handleChange=i.handleChange.bind(Object(d.a)(i)),i}return Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"render",value:function(){var e=f()(this.state.input);return Object(u.jsxs)("div",{id:"body-box",children:[Object(u.jsx)(b,{handleChange:this.handleChange,input:this.state.input}),Object(u.jsx)(j,{input:e})]})}}]),t}(i.Component);var v=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(g,{})})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),i(e),r(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),O()},8:function(e,n,t){}},[[17,1,2]]]);
//# sourceMappingURL=main.868e506d.chunk.js.map