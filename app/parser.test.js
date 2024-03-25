const Parser = require("./parser")

it("should parser bulk string to 'echo'", () => {
  const parser = new Parser("$4\r\necho\r\n");
  
  const result = parser.parseBulkString("$4\r\necho\r\n");
  console.log(result);
  expect(result).toEqual("echo")
})