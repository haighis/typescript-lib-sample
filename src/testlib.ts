// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
// export default class DummyClass {
  
// }
//export namespace App {
    export default class Logger implements ILogger {
    private writer: any;

    constructor (public mode: number = LoggerMode.Console) {
        switch (this.mode) {
            case LoggerMode.Console:
                this.writer = (msg: string) => console.log(msg);
                break;
            case LoggerMode.Alert:
                this.writer = (msg: string) => alert(msg);
                break;
            // case LoggerMode.Toastr:
            //     this.writer = (msg: string) => toastr.info(msg);
            //     break;
        }
    }
    write(msg: string) {
        this.writer(msg);
    };
    }

    export var LoggerMode = {
    Console: 1,
    Alert: 2,
    Toastr: 3
    }

    export interface ILogger {
    write: (msg: string) => void;
    }
//}

// namespace App {
//   export var LoggerMode = {
//       Console: 1,
//       Alert: 2,
//       Toastr: 3
//   }

//   export namespace Utils {
//       export interface ILogger {
//           write: (msg: string) => void;
//       }

//       export class Logger implements ILogger {
//           private writer: any;

//           constructor (public mode: number = LoggerMode.Console) {
//               switch (this.mode) {
//                   case LoggerMode.Console:
//                       this.writer = (msg: string) => console.log(msg);
//                       break;
//                   case LoggerMode.Alert:
//                       this.writer = (msg: string) => alert(msg);
//                       break;
//                   case LoggerMode.Toastr:
//                       this.writer = (msg: string) => toastr.info(msg);
//                       break;
//               }
//           }
//           write(msg) {
//               this.writer(msg);
//           };
//       }
//   }
// }