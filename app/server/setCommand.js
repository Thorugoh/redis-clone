import { Command } from "./command.js";
import Data from "./data.js";

class SetCommand extends Command{
  execute(args, socket) {
    const [key, value] = args;
    Data.setData({[key]: value});
    socket.write('OK')
  }
}


export { SetCommand }