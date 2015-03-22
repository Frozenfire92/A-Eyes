# A-Eyes

An Accessible Text Based Adventure Game

Made for the IBM Bluemix Hackathon at Saint Mary's University March 21-22 2015

<a href="https://bluemix.net/deploy?repository=https://github.com/Frozenfire92/A-Eyes" target="_blank"><img src="http://bluemix.net/deploy/button.png" alt="Bluemix button" /></a>

### The Challenge
To create a new genre of games that are more accessible to people who may be visually or physically impaired

### The Solution
By using IBM Bluemix and its Watson Services “Text to Speech” and “Speech to Text” we created a web interface that allows users to explore a text based world using only their voice and speakers.

### The Hurdles
- Speech Recognition
  - Seeding the commands
  - http(s) remembering microphone settings
  - Callback not being returned
- Not opening a million sockets
- The looseness of client side js
  - Creating a game in vanilla js

