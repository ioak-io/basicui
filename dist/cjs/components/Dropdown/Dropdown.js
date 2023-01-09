"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./button.css");
;
/**
 * Primary UI component for user interaction
 */
const Dropdown = (props) => {
    return (react_1.default.createElement("div", { className: ["basicui-dropdown"].join(" ") }, props.type || '"dropdown'));
};
exports.default = Dropdown;
//# sourceMappingURL=Dropdown.js.map