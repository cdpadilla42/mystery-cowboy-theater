# Mystery Cowboy Theater

## React App for ordering tickets and performing CRUD

Mystery Cowboy Theater is a fictional single screen theater that loves showing exclusively [Mystery Science Theater 3000](https://en.wikipedia.org/wiki/Mystery_Science_Theater_3000) films and episodes! This application displays a movie selector, current ticket order, and a movie editor.

This project in React fulfills all CRUD functionality in two areas: ticket orders and films being screened. The two larger states are contained in the app component and data is shared down to the other supporting components to allow instant updating app-wide. State is maintained through two means: local storage for ticket orders and firebase for movie showings.

Tech used:

- React
- Firebase
- Re-Base
- Bootstrap
- Deployed to Netlify

My aim with this project was to refamiliarize myself with React and elevate my use of the framework. Since my last React app, I planned to add complexity with multiple components needing the same state data, making the project more modular, and hooking the app up with a database. Challenge with this complexity came when the order component loaded user ticket data immediately from local storage, but crashed the application when looking for movie information. Movie data was being loaded from firebase and, thus, was not readily available. A quick addition of returning null in the event of no movie data solved the issue.

## Demo Link

<!-- [View app in browser](https://cryptic-oasis-68949.herokuapp.com/) -->
