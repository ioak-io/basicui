"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autocomplete = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const Dropdown_1 = __importDefault(require("./Dropdown"));
exports.default = {
    title: "Components/Dropdown",
    component: Dropdown_1.default,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
// Create a master template for mapping args to render the Button component
const Template = (args) => react_1.default.createElement(Dropdown_1.default, Object.assign({}, args));
// Reuse that template for creating different stories
exports.Default = Template.bind({});
exports.Default.args = { type: "default" };
exports.Autocomplete = Template.bind({});
exports.Autocomplete.args = { type: "autocomplete" };
//# sourceMappingURL=Dropdown.stories.js.map