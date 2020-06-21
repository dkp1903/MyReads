> ## My-Reads
> A Book management application made in React that allows user to select and categorize books as you have read, are currently reading, 
> or want to read. 

> ## Requirements
> * npm

> ## How to Run:
> 
> 1. [Clone](https://github.com/dkp1903/MyReads.git) the Repository.
> 2. Run `npm i` to install the project dependencies.
> 3. Run the app using `npm start`.
> 4. App can be seen at: `localhost:3000`. 

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/Utils/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

> @dkp1903
