(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),i=a.n(r),o=(a(11),a(1)),u=a.n(o),m=a(4);var c=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e){!function(){var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var l=arguments[n];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l)&&l.length){var i=a.apply(null,l);i&&e.push(i)}else if("object"===r)for(var o in l)t.call(l,o)&&l[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):window.classNames=a}()}),p=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(u){l=!0,r=u}finally{try{!n&&o.return&&o.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)},f=["input","select","textarea"],v={checkbox:!1,"select-multiple":[],"file-multiple":[]},x=function(e){var t=e.children,a=e.watches,n=e.state,l=void 0===n?{}:n,r=e.mergeState,i=e.validatesWith,o=e.value,m=!!i.apply(null,o),c=!1;return Array.isArray(a)||(a=[a]),a.forEach(function(e){var t=l[e],a=m&&t&&void 0===t.isvalid;(!m&&t&&!1!==t.isvalid||a)&&r(e,{isvalid:m}),c=c||t&&t.dirty}),!m&&!0===c&&u.a.createElement("span",{className:"validation-error"},t)},b={phone:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return y.test(e)},email:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return E.test(e)},minLength:function(e){return function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").length>=e}},maxLength:function(e){return function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").length<=e}},required:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(m.isNumber)(e)||null!==e&&void 0!==e&&0!==e.length&&0!==Object.keys(e).length&&""!==e}},E=/^$|(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,y=/^$|^(\+\d{1,3})?\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,g=function(e){var t=e.children,a=e.onSubmit,n=e.formVals,l=void 0===n?{}:n,r=Object(o.useState)({}),i=d(r,2),m=i[0],b=i[1],E=Object(o.useState)(l),y=d(E,2),g=y[0],F=y[1];function w(){b({}),F({})}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=e.target,n=a.name,l=a.value,r=a.options,i=a.files,o=a.checked,u=a.type;"checkbox"===u?"true"===l?l=!1:"false"===l?l=!0:o||(l=void 0):"select"===u||"select-multiple"===u?l=Array.from(r).reduce(function(e,t){return t.selected?[].concat(h(e),[t.value]):e},[]):"file"===u&&(l=i),B(n,{dirty:!0}),function(e,t){if(void 0===t){var a=Object.entries(g).reduce(function(t,a){var n=d(a,2),l=n[0],r=n[1];return l===e?t:s({},t,p({},""+l,r))});F(a)}else F(s({},g,p({},""+e,t)))}(n,l),t(e)}function B(e,t){b(s({},m,p({},""+e,s({},m[e],t))))}return Object(o.useEffect)(function(){b(Object.entries(m).reduce(function(e,t){var a=d(t,2),n=a[0],l=a[1];return s({},e,p({},""+n,s({},l,{isvalid:void 0})))},{}))},[g]),u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){var e=Object.values(m);return 0===e.length||!e.reduce(function(e,t){return e||t.validated&&!t.isvalid},!1)}()?a(e,g,w):b(Object.entries(m).reduce(function(e,t){var a=d(t,2),n=a[0],l=a[1];return s({},e,p({},""+n,s({},l,{dirty:!0})))},{}))}},function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return u.a.Children.map(t,function(t,a){if(!t||!t.props)return t;var n=t.props,l=t.type,r=n.children,i=r?e(r):r,o=f.includes(l),p=l===x;return o?function(e,t){var a=e.props,n=a.name,l=a.onChange,r=m[n]||{},i=r.isvalid,o=r.dirty,p=function(e){return"select"===e.type&&e.props.multiple?"select-multiple":"file"===e.props.type&&e.props.multiple?"file-multiple":e.props.type||e.type}(e),s=function(e,t,a){switch(e){case"radio":return t;case"file-multiple":case"file":return;default:return g[a]||t||function(e){return void 0===v[e]?"":v[e]}(e)}}(p,a.value,n),d=void 0!==i&&!i&&o,h="radio"===p&&s===g[n],f="submit"===p||"image"===p||"reset"===p,x=c(a.className,{"input-invalid":d});return f?e:u.a.cloneElement(e,{value:s,checked:h,className:x,key:t,onChange:function(e){return k(e,l)}})}(t,a):p?function(e,t){var a=Array.isArray(e.props.watches)?e.props.watches:[e.props.watches],n=a.map(function(e){return g[e]||""});return a.forEach(function(e){m[e]&&m[e].validated||B(e,{validated:!0})}),u.a.cloneElement(e,{state:m,key:t,mergeState:B,value:n})}(t,a):u.a.cloneElement(t,{},i)})}(t))},F=function(){return l.a.createElement(g,{onSubmit:function(e,t){return console.log(t)}},l.a.createElement("label",{htmlFor:"example1-name"},"Name:"),l.a.createElement("input",{type:"text",name:"name",id:"example1-name"}),l.a.createElement("label",{htmlFor:"example1-email"},"Email:"),l.a.createElement(x,{watches:"email",validatesWith:b.required},"Email is required"),l.a.createElement(x,{watches:"email",validatesWith:b.email},"Please enter a valid email address"),l.a.createElement("input",{type:"email",name:"email",id:"example1-email"}),l.a.createElement("label",{htmlFor:"example1-phone"},"Telephone:"),l.a.createElement(x,{watches:"phone",validatesWith:b.phone},"Please enter a valid phone number"),l.a.createElement("input",{type:"tel",name:"phone",id:"example1-phone"}),l.a.createElement("label",{htmlFor:"example1-comments"},"Comments:"),l.a.createElement(x,{watches:"comments",validatesWith:b.maxLength(80)},"Maximum length (80 characters) exceeded"),l.a.createElement("textarea",{name:"comments",id:"example1-comments"}),l.a.createElement(x,{watches:"radioButtons",validatesWith:b.required},"Pick One!"),l.a.createElement("input",{type:"radio",name:"radioButtons",value:"Radio 1",id:"example1-radioButtons1"}),l.a.createElement("label",{htmlFor:"example1-radioButtons1"},"Radio 1"),l.a.createElement("input",{type:"radio",name:"radioButtons",value:"Radio 2",id:"example1-radioButtons2"}),l.a.createElement("label",{htmlFor:"example1-radioButtons2"},"Radio 2"),l.a.createElement("input",{type:"radio",name:"radioButtons",value:"Radio 3",id:"example1-radioButtons3"}),l.a.createElement("label",{htmlFor:"example1-radioButtons3"},"Radio 3"),l.a.createElement("input",{type:"submit",value:"Check the console for onSubmit"}))},w=function(){return l.a.createElement(g,{onSubmit:function(e,t){return console.log(t)}},l.a.createElement("label",{htmlFor:"example2-fzappa"},"Must be Frank Zappa:"),l.a.createElement(x,{watches:"fzappa",validatesWith:function(e){return"Frank Zappa"===e}},'Value must be "Frank Zappa"'),l.a.createElement("input",{type:"text",name:"fzappa",id:"example2-fzappa"}),l.a.createElement("input",{type:"submit",value:"Check the console for onSubmit"}))},k=function(){return l.a.createElement(g,{onSubmit:function(e,t){return console.log(t)}},l.a.createElement("label",{htmlFor:"example3-input1"},"Input 1:"),l.a.createElement("input",{type:"text",name:"input1",id:"example3-input1"}),l.a.createElement(x,{watches:["input1","input2"],validatesWith:function(e,t){return e&&e.length>0||t&&t.length>0}},"Either input 1 OR input 2 is required."),l.a.createElement("label",{htmlFor:"example3-input2"},"Input 2:"),l.a.createElement("input",{type:"text",name:"input2",id:"example3-input2"}),l.a.createElement("input",{type:"submit",value:"Check the console for onSubmit"}))},B=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",null,l.a.createElement("h1",null,"react-formguards"),l.a.createElement("h3",null,"A simple, declarative approach to client side validation."),l.a.createElement("div",{className:"example"},l.a.createElement("div",{className:"example-code"},l.a.createElement("h2",null,"Basic Validation"),l.a.createElement("ol",null,l.a.createElement("li",null,"Just write your form like normal, replacing your <form> tag with a <ValidatedForm> tag.  Pass it an onSubmit function."),l.a.createElement("li",null,"Then add <FormGuard> tags anywhere you'd like a validation error to show up. ",l.a.createElement("br",null)," Each <FormGuard> tag:",l.a.createElement("ul",null,l.a.createElement("li",null,"Watches specified input(s) and validates as needed"),l.a.createElement("li",null,"Becomes a <span> in the DOM when the error shows"),l.a.createElement("li",null,"onSubmit won't be called until all the FormGuard's are satisfied")),l.a.createElement("p",null,"Some basic validators are included -- required, email, phone, maxLength, and minLength"))),l.a.createElement("pre",null,"\n    <ValidatedForm onSubmit={(e, formVals) => console.log(formVals)}>\n      <label htmlFor='example1-name'>Name:</label>\n      <input type='text' name='name' id='example1-name' />\n\n      <label htmlFor='example1-email'>Email:</label>\n      <FormGuard watches='email' validatesWith={validators.required} >\n          Email is required  \n      </FormGuard> \n      <FormGuard watches='email' validatesWith={validators.email} >\n          Please enter a valid email address  \n      </FormGuard> \n      <input type='email' name='email' id='example1-email' />  \n      \n      <label htmlFor='example1-phone'>Telephone:</label>\n      <FormGuard watches='phone' validatesWith={validators.phone} >\n          Please enter a valid phone number  \n      </FormGuard> \n      <input type='tel' name='phone' id='example1-phone' />  \n\n      <label htmlFor='example1-comments'>Comments:</label>\n      <FormGuard watches='comments' validatesWith={validators.maxLength(80)} >\n          Maximum length (80 characters) exceeded\n      </FormGuard> \n      <textarea name='comments' id='example1-comments' />  \n\n      <FormGuard watches='radioButtons' validatesWith={validators.required} >\n          Pick One!  \n      </FormGuard> \n      <input type='radio' name='radioButtons' value='Radio 1' id='example1-radioButtons1' />  \n      <label htmlFor='example1-radioButtons1'>Radio 1</label>\n      <input type='radio' name='radioButtons' value='Radio 2' id='example1-radioButtons2' />  \n      <label htmlFor='example1-radioButtons2'>Radio 2</label>\n      <input type='radio' name='radioButtons' value='Radio 3' id='example1-radioButtons3' />  \n      <label htmlFor='example1-radioButtons3'>Radio 3</label>\n      \n      <input type='submit' value='Check the console for onSubmit' />\n    </ValidatedForm>\n          ")),l.a.createElement("div",{className:"example-implementation"},l.a.createElement(F,null))),l.a.createElement("div",{className:"example"},l.a.createElement("div",{className:"example-code"},l.a.createElement("h2",null,"Custom Validation Functions"),l.a.createElement("p",null,"Just pass a function to validatesWith to use your own validation functions."),l.a.createElement("pre",null,"\n    <ValidatedForm onSubmit={(e, formVals) => console.log(formVals)}>\n\n      <label htmlFor='example2-fzappa'>Must be Frank Zappa:</label>\n      <FormGuard watches='fzappa' validatesWith={ val => val === 'Frank Zappa' } >\n          Value must be \"Frank Zappa\"\n      </FormGuard> \n      <input type='text' name='fzappa' id='example2-fzappa' />  \n      \n      <input type='submit' value='Check the console for onSubmit' />\n    </ValidatedForm>\n            ")),l.a.createElement("div",{className:"example-implementation"},l.a.createElement(w,null))),l.a.createElement("div",{className:"example"},l.a.createElement("div",{className:"example-code"},l.a.createElement("h2",null,"Guarding Multiple Form Elements with one FormGuard"),l.a.createElement("p",null,"A FormGuard can watch multiple elements by passing an array to the ",l.a.createElement("i",null,"watches")," prop"),l.a.createElement("p",null,"In this example the ",l.a.createElement("i",null,"validateTwoInputs")," function requires that either ",l.a.createElement("i",null,"input1")," OR ",l.a.createElement("i",null,"input2")," is filled in."),l.a.createElement("pre",null,"\n    function validateTwoInputs (input1, input2) {\n      return (input1 && input1.length > 0) || \n             (input2 && input2.length > 0);\n    }\n\n    [...]\n\n    <ValidatedForm onSubmit={(e, formVals) => console.log(formVals)}>\n\n      <label htmlFor='example3-input1'>Input 1:</label>\n      <input type='text' name='input1' id='example3-input1' />  \n\n      <FormGuard \n          watches={['input1', 'input2']} \n          validatesWith={validateTwoInputs} >\n          \n          Either input 1 OR input 2 is required.\n      </FormGuard> \n\n      <label htmlFor='example3-input2'>Input 2:</label>\n      <input type='text' name='input2' id='example3-input2' />  \n\n      <input type='submit' value='Check the console for onSubmit' />\n    </ValidatedForm>\n            ")),l.a.createElement("div",{className:"example-implementation"},l.a.createElement(k,null)))))};i.a.render(l.a.createElement(B,null),document.getElementById("root"))},5:function(e,t,a){e.exports=a(17)}},[[5,1,2]]]);
//# sourceMappingURL=main.998a00ad.chunk.js.map