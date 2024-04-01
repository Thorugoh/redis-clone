import { Command } from "./command.js";
import Data from "./data.js";

class GetCommand extends Command {
  execute(args, socket){
    const data = Data.getData();
    socket.write(data[args[0]] || 'null');
  }
}

export { GetCommand }