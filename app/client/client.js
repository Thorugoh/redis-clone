import net from "node:net";
import readline from "readline";

const client = new net.Socket();
const PORT = 6379;
const HOST = '127.0.0.1';

const rl = readline.createInterface({
  input: process.stdin,
  otput: process.stdout
})

client.connect(PORT, HOST, () => {
  rl.setPrompt('> ');
  rl.prompt(true);

  rl.on('line', input => {
    client.write(input);
  })
});

client.on('data', data => {
  console.log('Server response:', data.toString());
  rl.prompt();
});

client.on('close', () => {
  rl.close();
  console.log('Connection closed');
});