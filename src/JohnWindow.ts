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

    // start() {
    //     this.timerToken = setInterval(() => this.span.innerText = new Date().toUTCString(), 500);
    // }

    // stop() {
    //     clearTimeout(this.timerToken);
    // }

}

// export class JohnWindow extends kendo.ui.Window {
//     constructor(element: Element, options?: kendo.ui.WindowOptions) {
//         super(element, options);
//     }

//     content(): string;
//     content(content?: string): kendo.ui.Window;
//     content(content?: JQuery): kendo.ui.Window;

//     content(content?: string | JQuery) : kendo.ui.Window | string {
//         if (typeof content === 'undefined') {
//             console.log('implementation 1');
//             return super.content();

//         } if (typeof content === 'string') {
//             console.log('implementation 2');
//             return super.content(content);


//         } else { // ought to be jQuery
//             console.log('implementation 3');
//             return super.content(content);
//         }
//     }
// }

// export interface MyDatePickerOptions extends kendo.ui.DatePickerOptions {
// }

// export class MyDatePicker extends kendo.ui.DatePicker {
//     constructor(element: Element, options?: MyDatePickerOptions) {
//         super(element, options);
//     }
//     // (Optional) Override a widget method
//     open() {
//         // Log to the console (optional)
//         console.log("open");

//         // Invoke a base widget method

//         super.open();
//     }
// }
// Create an alias of the prototype (required by kendo.ui.plugin)
// MyDatePicker.fn = MyDatePicker.prototype;
// // Deep clone the widget default options
// MyDatePicker.fn.options = $.extend(true, {}, kendo.ui.DatePicker.fn.options);
// // Specify the name of your Kendo UI widget. Used to create the corresponding jQuery plugin.
// MyDatePicker.fn.options.name = "MyDatePicker";
// Create a jQuery plugin.
//kendo.ui.plugin(MyDatePicker);

