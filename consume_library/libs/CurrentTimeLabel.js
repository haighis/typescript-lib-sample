"use strict";
//import { kendo } from "../node_modules/@types/kendo-ui/index";
/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../node_modules/@types/kendo-ui/index.d.ts" />
//Object.defineProperty(exports, "__esModule", { value: true });
var CurrentTimeLabel = /** @class */ (function () {
    function CurrentTimeLabel(element, title) {
        this.element = element;
        this.element.innerText += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.timeLabel = new Date().toUTCString();
        this.span.innerText = this.timeLabel;
    }
    Object.defineProperty(CurrentTimeLabel.prototype, "TimeLabel", {
        get: function () {
            return this.timeLabel;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentTimeLabel;
}());
//exports.CurrentTimeLabel = CurrentTimeLabel;
//# sourceMappingURL=CurrentTimeLabel.js.map