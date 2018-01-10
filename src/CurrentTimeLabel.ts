//import { kendo } from "../node_modules/@types/kendo-ui/index";
/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../node_modules/@types/kendo-ui/index.d.ts" />


export class CurrentTimeLabel {
    element: HTMLElement;
    span: HTMLElement;
    private timeLabel: string;

    constructor (element: HTMLElement, title: string) { 
        this.element = element;
        this.element.innerText += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.timeLabel = new Date().toUTCString();
        this.span.innerText = this.timeLabel;
    }

    public get TimeLabel():string
    {
        return this.timeLabel;
    }
}
