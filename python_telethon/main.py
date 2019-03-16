from telethon import TelegramClient, sync
from telethon.tl.types import Channel
from telethon.tl.functions.messages import GetHistoryRequest

api_id = int('your api id')
api_hash = 'your api hash'
phone = 'your phone code'
password = 'your Telegram password (if account does require it)'

client = TelegramClient('session_cache', api_id, api_hash)

with client:
  myself = client.start(phone=phone, password=password)

  posts = [] 

  for dialog in client.get_dialogs():
    if dialog.is_channel:
      posts.append(client(GetHistoryRequest(
        peer=client.get_entity(dialog.name),
        limit=100,
        offset_date=None,
        offset_id=0,
        max_id=0,
        min_id=0,
        add_offset=0,
        hash=0
      )))
    
  for post in posts:
    for msg in post.messages:
      print(msg.message)

