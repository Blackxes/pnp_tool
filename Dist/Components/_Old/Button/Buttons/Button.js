/**
 * @File base button component - can be used a regular button
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import styled from 'styled-components';
var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 5px 10px;\n    background: #ccc;\n    border-radius: 2px;\n\n    width: ", ";\n"], ["\n    padding: 5px 10px;\n    background: #ccc;\n    border-radius: 2px;\n\n    width: ", ";\n"])), function (props) { return (props.fullWidth ? '100%' : 'fit-content'); });
/**
 * button component
 */
export var Button = function (_a) {
    var fullWidth = _a.fullWidth, small = _a.small, rest = __rest(_a, ["fullWidth", "small"]);
    return React.createElement(StyledButton, __assign({ type: "button", fullWidth: true, small: true }, rest));
};
var templateObject_1;
