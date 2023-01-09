import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".basicui-dropdown {\r\n    background-color: #342278;\r\n}";
styleInject(css_248z);

/**
 * Primary UI component for user interaction
 */
var Dropdown = function (props) {
    return (React.createElement("div", { className: ["basicui-dropdown"].join(" ") }, props.type || '"dropdown'));
};

export { Dropdown };
//# sourceMappingURL=index.esm.js.map
