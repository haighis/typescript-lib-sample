/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../node_modules/@types/kendo-ui/index.d.ts" />
/// <reference path="../node_modules/@types/jest/index.d.ts" />

import { Logger, LoggerMode } from "../src/testlib";

/**
 * Logger test
 */
describe("Logger test", () => {
  
  it("Logger is instantiable", () => {
    expect(new Logger()).toBeInstanceOf(Logger)
  })

  // it("givenLoggerModeAlert_whenWrite_thenShouldBeCalled", () => {
  //   var logger = new Logger(LoggerMode.Alert);
  //   logger.write('test');
  // })

  it("givenLoggerModeConsole_whenWrite_thenShouldBeCalled", () => {
    var logger = new Logger(LoggerMode.Console);
    logger.write('test');
  })
})
