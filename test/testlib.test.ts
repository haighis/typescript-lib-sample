//import DummyClass from "../src/testlib"

import Logger, { LoggerMode } from "../src/testlib"

/**
 * Dummy test
 */
// describe("Dummy test", () => {
//   it("works if true is truthy", () => {
//     expect(true).toBeTruthy()
//   })

//   it("DummyClass is instantiable", () => {
//     expect(new DummyClass()).toBeInstanceOf(DummyClass)
//   })
// })

/**
 * Logger test
 */
describe("Logger test", () => {
  
  it("Logger is instantiable", () => {
    expect(new Logger()).toBeInstanceOf(Logger)
  })

  it("givenLoggerModeAlert_whenWrite_thenShouldBeCalled", () => {
    var logger = new Logger(LoggerMode.Alert);
    logger.write('test');
  })

  it("givenLoggerModeConsole_whenWrite_thenShouldBeCalled", () => {
    var logger = new Logger(LoggerMode.Console);
    logger.write('test');
  })
})