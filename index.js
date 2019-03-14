const MTProto = require('telegram-mtproto').MTProto
const { Storage } = require('mtproto-storage-fs')

const firstInstance = MTProto({
  app: {
    storage: new Storage('storage.json'),
  }
})

console.log(firstInstance)

