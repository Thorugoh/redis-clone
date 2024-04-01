import net from "node:net"
import { SetCommand } from './setCommand.js';
import { GetCommand } from './getCommand.js';

const commands = {
  SET: new SetCommand(),
  GET: new GetCommand()
}

const server = net.createServer(socket => {
  console.log('Client connected');

  socket.on('data', rawData => {
    const [commandName, ...args] = rawData.toString().trim().split(' ');
    const command = commands[commandName];
    if(command) {
      command.execute(args, socket);
    }else{
      socket.write('Error: Invalid command');
    }
  })

  socket.on('end', () => {
    console.log('Client disconnected');
  })
});

server.listen(6379, () => {
  console.log(`Server Listening on port 6379`);
})
