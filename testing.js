const readline = require('readline')

function getLine(prefix) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(prefix, (answer) => {
      rl.close();
      resolve(answer)
    }) 
  })
}

const MTProto = require ('telegram-mtproto').MTProto


const phone = {
  num : 'your phone number',
}

const api = {
  api_id: 'api id' 
}

const server = {
  dev: true //We will connect to the test server.
}           //Any empty configurations fields can just not be specified

const client = MTProto({ server, api })

async function connect(){
  
  console.log('trying to send code')
  const { phone_code_hash } = await client('auth.sendCode', {
    phone_number  : phone.num,
    current_number: true,
    api_id        : "your api id",
    api_hash      : 'your api hash'
  }).catch(err => console.log(err))

  const phone_code = await getLine('Phone code: ')

  const { user } = await client('auth.signIn', {
    phone_number   : phone.num,
    phone_code_hash: phone_code_hash,
    phone_code     : phone_code
  })
  console.log(user) 
}

connect()
