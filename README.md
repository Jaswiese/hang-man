# Hang-man - HyperionDev course work
## Description: 
This  project is a browser based hang-man game, currently allowing a user to play a game of hang-man. It was built in React, and uses redux toolkit as state management. Currently there is no data persistence or user profile/ retention. However, this is planned for in future releases.
## Installation - cloning from git.
#### Steps

  **Navigate to the directory of your choice using CLI.** 
  
  ```
  cd chosen-directory
  
  ```
  **Using git commands in your CLI initialise the directory as a git repository.**
  
  ```
  git init
  
  ```
  
  **Clone the repository using the repository URL*** 
  
  ```
  git clone []
  
  ```
  
  You will now have the files in your chosen directory if you have followed the steps above/ and have access to the repository.

  ## Running the application

  This application is a create-react-app bootstrap.

  ### Prerequisites

  you will need to have **npm** installed on your machine - please ensure that npm is also updated, to avoid any unexpected issues.

  **First install all of the dependencies, run the follow command (in the project directory)**

  ```
  npm install

  ```

  **To start the app, ensure that you are in the projects directly, and then run the following command in your terminal**
  ```
  npm start

  ```
This Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
## Usage

The hang-man game has a standard set of rules, that normally apply to two players, however in this game the user will only be playing the role of the player who guesses the word, whilst the application will generate random words for the user to guess.\

### General rules & flow of the game

* The user has eleven guesses to guess the letters that are contained within the word the application is displaying.

* Guesses are made using the letter panel in the application self\

* correct guesses will reveal the letter on the word line, as well as turn the letter on the letter panel green\

* incorrect guess will initiate a graphically change for the hangman graphic, and turn the letter on the letter panel red\

* When the user has either won or lost, a message will be shown to the user with the word they were guessing and the result.\

* the user can then reset the game and try a different word.\

## Roadmap

This game was developed for my HyperionDev course work, however there are some changes that I have planned to make in the future,

### Planned updates & changes

These updates or changes are in no particular order
1. User creation & authentication 
2. User play data persistence
3. Global leader board 
4. Additional animations on game results (correct choice/ incorrect choice, win/ lose)
5. General UI clean up/ mobile responsiveness

## Contributing

Currently no contribution is accepted to the repositiory, but will change in the future - this section will be updated if so.

## License

Copyright 2022 Jasper Wiese

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

  [APACHE2.0](http://www.apache.org/licenses/LICENSE-2.0)

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
