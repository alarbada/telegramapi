## Simple Telegram API CLI program for getting channel messages

### Software requirements:

- python3 installed, preferably a python version compatible with Telethon. I used python3.6
- telethon, preferably the last version.
- nodejs.

### How to install dependencies:

Run the following commands:

`$ pip3 install telethon`

### Setting up the authentication:

Modify the file `python_telethon/main.py` with the credentials of your API, which you can get [here](https://my.telegram.org/auth)

### Running the program: 

Just run the following command:

`$ npm start`

If the project is run the first time, the telethon package will ask for authentication details. Once those provided, telethon will automatically save the credentials into a file called session_cache, so the next time the project is run one will not have to provide again any SMS code and password.

Note that any auth errors will be swallowed up and won't show up on the console. 
