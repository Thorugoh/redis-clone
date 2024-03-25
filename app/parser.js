class Parser {
  constructor(data){
    this.data = data;
    this.cursor = 0;
  }

  // "*2\r\n$4\r\necho\r\n$3\r\nhey\r\n"
  parse() {
    // Array type
    // if(data[0] === "*") {
    //   for()
    // }
  }

  parseBulkString(str){
    const stringStartPos = 4;
    const length = Number(str[1]);
    const string = str.substring(stringStartPos, stringStartPos + length);

    return string;
  }

  parseArray(str){
    const identifiers = ["+", "-", ":", "$", "*", "-", "#", ",", "(", "!", "=", "%", "~", ">"];
    let size = str[1];
    let counter = size;
    while(size > 0) {
      let cursor = 2;
      // if(str[2] !== )
    }
    // const values = 
  }

}


module.exports = Parser