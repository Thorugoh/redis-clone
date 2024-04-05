import { Command } from "./command.js";
import Data from "./data.js";

class RemoveCommand extends Command{
  execute(args, socket) {
    const [key, value] = args;
    Data.removeData(key);
    socket.write('DELETED')
  }
}


export { RemoveCommand }