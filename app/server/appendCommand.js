import { Command } from "./command.js";
import Data from "./data.js";

class AppendCommand extends Command{
  execute(args, socket) {
    const [key, value] = args;
    const data = Data.getData()
    if(data[key] === undefined){
      Data.setData({[key]: value});
      socket.write(`(integer) ${value.length}`)
      return;
    }
    Data.setData({[key]: `${data[key]}${value}`})
    socket.write(`(integer) ${data[key].length + value.length}`)
  }
}


export { AppendCommand }