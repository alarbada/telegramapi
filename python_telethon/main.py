from telethon import TelegramClient, sync, events
from telethon.tl.types import Channel
from telethon.tl.functions.messages import GetHistoryRequest
from telethon.events.newmessage import NewMessage

api_id = #
api_hash = #
phone = #
password = #

client = TelegramClient('session_cache', api_id, api_hash)

@client.on(events.NewMessage)
async def my_event_handler(event):
  print(event.raw_text)

myself = client.start(phone=phone, password=password)

client.add_event_handler(my_event_handler) 

client.run_until_disconnected()
