const spawn = require('child_process').spawn;
const pythonProcess = spawn('python3', ['./python_telethon/main.py'])

pythonProcess.stdout.on('data', (data) => {
  console.log(data.toString())
})

