(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(2),i=t.n(r),m=(t(9),{phone:function(e){return c.test(e)},email:function(e){return o.test(e)},minLength:function(e){return function(a){return a.length>=e}},maxLength:function(e){return function(a){return a.length<=e}},required:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"number"===typeof e||null!==e&&void 0!==e&&0!==e.length&&0!==Object.keys(e).length&&""!==e}}),o=/^$|(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,c=/^$|^(\+\d{1,3})?\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,u=function(e){return Array.isArray(e)?e:[e]},s=function(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e},p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d=function(){return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,a){var t=[],n=!0,l=!1,r=void 0;try{for(var i,m=e[Symbol.iterator]();!(n=(i=m.next()).done)&&(t.push(i.value),!a||t.length!==a);n=!0);}catch(o){l=!0,r=o}finally{try{!n&&m.return&&m.return()}finally{if(l)throw r}}return t}(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(e){var a=e.children,t=e.watches,n=e.state,r=e.mergeState,i=e.validatesWith,m=e.value,o=!!i.apply(null,m),c=u(t).reduce(function(e,a){var t,l=n[a]||{},i={},m=e.groupDirty||l.dirty,c=o&&void 0===l.isvalid,u=!o&&!1!==l.isvalid;return l.validated||(i.validated=!0),(u||c)&&(i.isvalid=o),l.updating&&(i.updating=!1),0!==Object.entries(i).length&&r(a,i),p({},e,(s(t={},a,i),s(t,"groupDirty",m),t))},{});return c.groupDirty&&u(t).forEach(function(e){n[e]&&!n[e].dirty&&r(e,{dirty:!0})}),!o&&!0===c.groupDirty&&l.a.createElement("span",{className:"validation-error"},a)},x={checkbox:!1,"select-multiple":[],"file-multiple":[]},b=function(e){var a=e.children,t=e.className,r=e.id,i=e.name,m=e.onSubmit,o=e.formVals,c=void 0===o?{}:o,b=Object(n.useState)({}),f=d(b,2),v=f[0],E=f[1],y=Object(n.useState)(c),F=d(y,2),g=F[0],k=F[1],w=Object(n.useRef)(null);return Object(n.useEffect)(function(){N("isvalid",void 0)},[g]),l.a.createElement("form",p({className:t,id:r,name:i,ref:w},{onSubmit:function(e){e.preventDefault(),0===Object.values(v).filter(function(e){return e.validated&&!e.isvalid}).length?m(e,g,B):N("dirty",!0)}}),function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return l.a.Children.map(a,function(a,t){if(!a||!a.props)return a;var l=a.props.children,r=a.type,i=e(l),m=["input","select","textarea"].includes(r),o=r===h;return m?function(e,a){var t=e.props.name,l=function(e){var a=e.props.multiple,t="select"===e.type,n="file"===e.type;return t&&a?"select-multiple":n&&a?"file-multiple":e.props.type||e.type}(e),r=function(e,a,t){var n=g[a]||e.props.value||x[t]||"";return"radio"===t?e.props.value:"file"===t.substr(0,4)?void 0:n}(e,t,l),i=v[t]&&!1===v[t].isvalid&&W(t)&&!v[t].updating?e.props.className+" input-invalid":e.props.className;return["submit","image","reset"].includes(l)?e:Object(n.cloneElement)(e,{key:a,className:i,value:r,onChange:function(a){return S(a,e.props.onChange)}})}(a,t):o?function(e,a){var t=u(e.props.watches).map(function(e){return g[e]||""});return Object(n.cloneElement)(e,{state:v,key:a,mergeState:G,value:t})}(a,t):i.length>0?Object(n.cloneElement)(a,{},i):a})}(a));function S(e){var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(){},t=e.target,n=t.name,l=t.value,r=t.checked,i=t.options,m=t.files,o=t.type;if(o==="checkbox"){l=r}else if(o==="select"||o==="select-multiple"){l=Array.from(i).filter(function(e){return e.selected}).map(function(e){return e.value})}else if(o==="file"||o==="file-multiple"){l=m}if(!W(n)){G(n,{dirty:true,updating:true})}V(n,l),a(e)}function B(){w.current.reset(),E({}),k({})}function G(e,a){E(p({},v,s({},e,p({},v[e],a))))}function V(e,a){k(p({},g,s({},e,a)))}function N(e,a){E(Object.entries(v).reduce(function(t,n){var l=d(n,2),r=l[0],i=l[1];return p({},t,s({},r,p({},i,s({},e,a))))},{}))}function W(e){return v[e]&&v[e].dirty}},f=function(){return l.a.createElement(b,{onSubmit:function(e,a){return console.log(a)}},l.a.createElement("label",{htmlFor:"example1-name"},"Name:"),l.a.createElement("input",{type:"text",name:"name",id:"example1-name"}),l.a.createElement("label",{htmlFor:"example1-email"},"Email:"),l.a.createElement(h,{watches:"email",validatesWith:m.required},"Email is required"),l.a.createElement(h,{watches:"email",validatesWith:m.email},"Please enter a valid email address"),l.a.createElement("input",{type:"email",name:"email",id:"example1-email"}),l.a.createElement("label",{htmlFor:"example1-phone"},"Telephone:"),l.a.createElement(h,{watches:"phone",validatesWith:m.phone},"Please enter a valid phone number"),l.a.createElement("input",{type:"tel",name:"phone",id:"example1-phone"}),l.a.createElement("label",{htmlFor:"example1-comments"},"Comments:"),l.a.createElement(h,{watches:"comments",validatesWith:m.maxLength(80)},"Maximum length (80 characters) exceeded"),l.a.createElement("textarea",{name:"comments",id:"example1-comments"}),l.a.createElement(h,{watches:"radioButtons",validatesWith:m.required},"Pick One!"),l.a.createElement("input",{type:"radio",name:"radioButtons",value:"Radio 1",id:"example1-radioButtons1"}),l.a.createElement("label",{htmlFor:"example1-radioButtons1"},"Radio 1"),l.a.createElement("input",{type:"radio",name:"radioButtons",value:"Radio 2",id:"example1-radioButtons2"}),l.a.createElement("label",{htmlFor:"example1-radioButtons2"},"Radio 2"),l.a.createElement("input",{type:"radio",name:"radioButtons",value:"Radio 3",id:"example1-radioButtons3"}),l.a.createElement("label",{htmlFor:"example1-radioButtons3"},"Radio 3"),l.a.createElement("br",null),l.a.createElement(h,{watches:["checkBox1","checkBox2","checkBox3"],validatesWith:function(e,a,t){return e||a||t}},"Pick One!"),l.a.createElement("input",{type:"checkbox",name:"checkBox1",id:"example1-checkbox1"}),l.a.createElement("label",{htmlFor:"example1-checkbox1"},"Check 1"),l.a.createElement("input",{type:"checkbox",name:"checkBox2",id:"example1-checkbox2"}),l.a.createElement("label",{htmlFor:"example1-checkbox2"},"Check 2"),l.a.createElement("input",{type:"checkbox",name:"checkBox3",id:"example1-checkbox3"}),l.a.createElement("label",{htmlFor:"example1-checkbox3"},"Check 3"),l.a.createElement("input",{type:"submit",value:"Check the console for onSubmit"}))},v=function(){return l.a.createElement(b,{onSubmit:function(e,a){return console.log(a)}},l.a.createElement("label",{htmlFor:"example2-fzappa"},"Must be Frank Zappa:"),l.a.createElement(h,{watches:"fzappa",validatesWith:function(e){return"Frank Zappa"===e}},'Value must be "Frank Zappa"'),l.a.createElement("input",{type:"text",name:"fzappa",id:"example2-fzappa"}),l.a.createElement("input",{type:"submit",value:"Check the console for onSubmit"}))},E=function(){return l.a.createElement(b,{onSubmit:function(e,a){return console.log(a)}},l.a.createElement("label",{htmlFor:"example3-input1"},"Input 1:"),l.a.createElement("input",{type:"text",name:"input1",id:"example3-input1"}),l.a.createElement(h,{watches:["input1","input2"],validatesWith:function(e,a){return e&&e.length>0||a&&a.length>0}},"Either input 1 OR input 2 is required."),l.a.createElement("label",{htmlFor:"example3-input2"},"Input 2:"),l.a.createElement("input",{type:"text",name:"input2",id:"example3-input2"}),l.a.createElement("input",{type:"submit",value:"Check the console for onSubmit"}))},y=function(){return l.a.createElement(b,{id:"example-style",onSubmit:function(e,a){return console.log(a)}},l.a.createElement("label",{htmlFor:"example1-email"},"Email:"),l.a.createElement(h,{watches:"email",validatesWith:m.required},"Email is required"),l.a.createElement(h,{watches:"email",validatesWith:m.email},"Please enter a valid email address"),l.a.createElement("input",{type:"email",name:"email",id:"example1-email"}),l.a.createElement("input",{type:"submit",value:"Check the console for onSubmit"}))},F=function(){return l.a.createElement(b,{formVals:{name:"Emmett Brown",email:"doc@example.org",phone:"555 555 5555",comments:"Great Scott!!"},onSubmit:function(e,a){return console.log(a)}},l.a.createElement("label",{htmlFor:"example1-name"},"Name:"),l.a.createElement("input",{type:"text",name:"name",id:"example1-name"}),l.a.createElement("label",{htmlFor:"example1-email"},"Email:"),l.a.createElement(h,{watches:"email",validatesWith:m.required},"Email is required"),l.a.createElement(h,{watches:"email",validatesWith:m.email},"Please enter a valid email address"),l.a.createElement("input",{type:"email",name:"email",id:"example1-email"}),l.a.createElement("label",{htmlFor:"example1-phone"},"Telephone:"),l.a.createElement(h,{watches:"phone",validatesWith:m.phone},"Please enter a valid phone number"),l.a.createElement("input",{type:"tel",name:"phone",id:"example1-phone"}),l.a.createElement("label",{htmlFor:"example1-comments"},"Comments:"),l.a.createElement(h,{watches:"comments",validatesWith:m.maxLength(80)},"Maximum length (80 characters) exceeded"),l.a.createElement("textarea",{name:"comments",id:"example1-comments"}),l.a.createElement("input",{type:"submit",value:"Check the console for onSubmit"}))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",null,l.a.createElement("h1",null,"react-formguards"),l.a.createElement("h3",null,"A simple, declarative approach to client side validation."),l.a.createElement("span",null,l.a.createElement("a",{href:"https://www.npmjs.com/package/react-formguards"},"npm")," | ",l.a.createElement("a",{href:"https://github.com/NuclearHorseStudios/react-formguards"},"github")),l.a.createElement("div",{className:"example"},l.a.createElement("div",{className:"example-code"},l.a.createElement("h2",null,"Basic Validation"),l.a.createElement("a",{href:"https://github.com/NuclearHorseStudios/react-formguards/blob/master/example/src/examples/example-basic.jsx"},"Source"),l.a.createElement("ol",null,l.a.createElement("li",null,"Just write your form like normal, replacing your <form> tag with a <ValidatedForm> tag.  Pass it an onSubmit function."),l.a.createElement("li",null,"Then add <FormGuard> tags anywhere you'd like a validation error to show up. ",l.a.createElement("br",null)," Each <FormGuard> tag:",l.a.createElement("ul",null,l.a.createElement("li",null,"Watches specified input(s) and validates as needed"),l.a.createElement("li",null,"Becomes a <span> in the DOM when the error shows"),l.a.createElement("li",null,"onSubmit won't be called until all the FormGuard's are satisfied")),l.a.createElement("p",null,"Some basic validators are included -- required, email, phone, maxLength, and minLength"))),l.a.createElement("pre",null,"\n  <ValidatedForm onSubmit={(e, formVals) => console.log(formVals)}>\n    <label htmlFor='example1-name'>Name:</label>\n    <input type='text' name='name' id='example1-name' />\n\n    <label htmlFor='example1-email'>Email:</label>\n    <FormGuard watches='email' validatesWith={validators.required} >\n              Email is required\n    </FormGuard>\n    <FormGuard watches='email' validatesWith={validators.email} >\n              Please enter a valid email address\n    </FormGuard>\n    <input type='email' name='email' id='example1-email' />\n\n    <label htmlFor='example1-phone'>Telephone:</label>\n    <FormGuard watches='phone' validatesWith={validators.phone} >\n              Please enter a valid phone number\n    </FormGuard>\n    <input type='tel' name='phone' id='example1-phone' />\n\n    <label htmlFor='example1-comments'>Comments:</label>\n    <FormGuard watches='comments' validatesWith={validators.maxLength(80)} >\n              Maximum length (80 characters) exceeded\n    </FormGuard>\n    <textarea name='comments' id='example1-comments' />\n\n    <FormGuard watches='radioButtons' validatesWith={validators.required} >\n              Pick One!\n    </FormGuard>\n    <input type='radio' name='radioButtons' value='Radio 1' id='example1-radioButtons1' />\n    <label htmlFor='example1-radioButtons1'>Radio 1</label>\n    <input type='radio' name='radioButtons' value='Radio 2' id='example1-radioButtons2' />\n    <label htmlFor='example1-radioButtons2'>Radio 2</label>\n    <input type='radio' name='radioButtons' value='Radio 3' id='example1-radioButtons3' />\n    <label htmlFor='example1-radioButtons3'>Radio 3</label>\n\n    <br />\n    <FormGuard\n      watches={['checkBox1', 'checkBox2', 'checkBox3']}\n      validatesWith={(cb1, cb2, cb3) => { return cb1 || cb2 || cb3}} >\n              Pick One!\n    </FormGuard>\n    <input type='checkbox' name='checkBox1' id='example1-checkbox1' />\n    <label htmlFor='example1-checkbox1'>Check 1</label>\n    <input type='checkbox' name='checkBox2' id='example1-checkbox2' />\n    <label htmlFor='example1-checkbox2'>Check 2</label>\n    <input type='checkbox' name='checkBox3' id='example1-checkbox3' />\n    <label htmlFor='example1-checkbox3'>Check 3</label>\n\n    <input type='submit' value='Check the console for onSubmit' />\n  </ValidatedForm>\n          ")),l.a.createElement("div",{className:"example-implementation"},l.a.createElement(f,null))),l.a.createElement("div",{className:"example"},l.a.createElement("div",{className:"example-code"},l.a.createElement("h2",null,"Custom Validation Functions"),l.a.createElement("a",{href:"https://github.com/NuclearHorseStudios/react-formguards/blob/master/example/src/examples/example-function.jsx"},"Source"),l.a.createElement("p",null,"Just pass a function to validatesWith to use your own validation functions."),l.a.createElement("pre",null,"\n    <ValidatedForm onSubmit={(e, formVals) => console.log(formVals)}>\n\n      <label htmlFor='example2-fzappa'>Must be Frank Zappa:</label>\n      <FormGuard watches='fzappa' validatesWith={ val => val === 'Frank Zappa' } >\n          Value must be \"Frank Zappa\"\n      </FormGuard> \n      <input type='text' name='fzappa' id='example2-fzappa' />  \n      \n      <input type='submit' value='Check the console for onSubmit' />\n    </ValidatedForm>\n            ")),l.a.createElement("div",{className:"example-implementation"},l.a.createElement(v,null))),l.a.createElement("div",{className:"example"},l.a.createElement("div",{className:"example-code"},l.a.createElement("h2",null,"Guarding Multiple Form Elements with one FormGuard"),l.a.createElement("a",{href:"https://github.com/NuclearHorseStudios/react-formguards/blob/master/example/src/examples/example-multiple-watches.jsx"},"Source"),l.a.createElement("p",null,"A FormGuard can watch multiple elements by passing an array to the ",l.a.createElement("i",null,"watches")," prop"),l.a.createElement("p",null,"In this example the ",l.a.createElement("i",null,"validateTwoInputs")," function requires that either ",l.a.createElement("i",null,"input1")," OR ",l.a.createElement("i",null,"input2")," is filled in."),l.a.createElement("pre",null,"\n    function validateTwoInputs (input1, input2) {\n      return (input1 && input1.length > 0) || \n             (input2 && input2.length > 0);\n    }\n\n    [...]\n\n    <ValidatedForm onSubmit={(e, formVals) => console.log(formVals)}>\n\n      <label htmlFor='example3-input1'>Input 1:</label>\n      <input type='text' name='input1' id='example3-input1' />  \n\n      <FormGuard \n          watches={['input1', 'input2']} \n          validatesWith={validateTwoInputs} >\n          \n          Either input 1 OR input 2 is required.\n      </FormGuard> \n\n      <label htmlFor='example3-input2'>Input 2:</label>\n      <input type='text' name='input2' id='example3-input2' />  \n\n      <input type='submit' value='Check the console for onSubmit' />\n    </ValidatedForm>\n            ")),l.a.createElement("div",{className:"example-implementation"},l.a.createElement(E,null))),l.a.createElement("div",{className:"example"},l.a.createElement("div",{className:"example-code"},l.a.createElement("h2",null,"Styling / CSS"),l.a.createElement("a",{href:"https://github.com/NuclearHorseStudios/react-formguards/blob/master/example/src/examples/example-style.jsx"},"Source"),l.a.createElement("p",null,"react-formguards will add the css class 'input-invalid' to form controls that are invalid."),l.a.createElement("p",null,"The span that displays a FormGuard error text will have the css class 'validation-error'"),l.a.createElement("pre",null,"\n    \n    .input-invalid {\n      outline: 3px solid #0000ff;\n    }\n\n    span.validation-error {\n      float: right;\n      font-weight: bold;\n      color: #00ff00;\n    }\n\n    <ValidatedForm onSubmit={(e, formVals) => console.log(formVals)}>\n\n      <label htmlFor='example4-email'>Email:</label>\n      <FormGuard watches='email' validatesWith={validators.required} >\n          Email is required  \n      </FormGuard> \n      <FormGuard watches='email' validatesWith={validators.email} >\n          Please enter a valid email address  \n      </FormGuard> \n      <input type='email' name='email' id='example4-email' />  \n      \n      <input type='submit' value='Check the console for onSubmit' />\n    </ValidatedForm>\n            ")),l.a.createElement("div",{className:"example-implementation"},l.a.createElement(y,null))),l.a.createElement("div",{className:"example"},l.a.createElement("div",{className:"example-code"},l.a.createElement("h2",null,"Passing Preset Values"),l.a.createElement("a",{href:"https://github.com/NuclearHorseStudios/react-formguards/blob/master/example/src/examples/example-values.jsx"},"Source"),l.a.createElement("p",null,"Just pass an object as the formVals prop to preset values in the form."),l.a.createElement("pre",null,"\n    const formVals = {\n      name: 'Emmett Brown',\n      email: 'doc@example.org',\n      phone: '555 555 5555',\n      comments: 'Great Scott!!'\n    };\n\n    [...]\n\n    <ValidatedForm formVals={formVals} onSubmit={(e, formVals) => console.log(formVals)}>\n      <label htmlFor='example1-name'>Name:</label>\n      <input type='text' name='name' id='example1-name' />\n\n      <label htmlFor='example1-email'>Email:</label>\n      <FormGuard watches='email' validatesWith={validators.required} >\n          Email is required  \n      </FormGuard> \n      <FormGuard watches='email' validatesWith={validators.email} >\n          Please enter a valid email address  \n      </FormGuard> \n      <input type='email' name='email' id='example1-email' />  \n      \n      <label htmlFor='example1-phone'>Telephone:</label>\n      <FormGuard watches='phone' validatesWith={validators.phone} >\n          Please enter a valid phone number  \n      </FormGuard> \n      <input type='tel' name='phone' id='example1-phone' />  \n\n      <label htmlFor='example1-comments'>Comments:</label>\n      <FormGuard watches='comments' validatesWith={validators.maxLength(80)} >\n          Maximum length (80 characters) exceeded\n      </FormGuard> \n      <textarea name='comments' id='example1-comments' />  \n      \n      <input type='submit' value='Check the console for onSubmit' />\n    </ValidatedForm>\n            ")),l.a.createElement("div",{className:"example-implementation"},l.a.createElement(F,null)))))};i.a.render(l.a.createElement(g,null),document.getElementById("root"))},3:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[3,1,2]]]);
//# sourceMappingURL=main.d0298fd5.chunk.js.map