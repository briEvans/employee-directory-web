# React Employee Directory
This was a fun to create Full Stack Web app with EXPRESS on the backend serving up a simple JSON API and REACT/REACT-ROUTER on the client-side enabling some pretty sweet interface interactions. 
![](readme-img/ed-colage.png)

## SET UP

1. Install Node v8.70 and yarn
 * https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
```sh
node install
```

1. Install Client Dependencies via npm in the '/client' directory
```sh
cd client/
npm install
```

1. Install Dependencies via npm in root of project 
```sh
cd ..
npm install
```

1. Install yarn https://www.npmjs.com/package/yarn

## RUN APPLICATION
1. `yarn dev` (This runs the server on port 5000 and the client on port 3000)


## INTERFACE / VIEWS
1. "Home" view with persistant search feature
![](readme-img/fd-home-search.gif)


------
1. "Employees" view CREATE

![](readme-img/ed-create.gif)

-------
1. "Employees" view EDIT
![](readme-img/ed-edit.gif)

-----
1. "Employees" view DELETE
![](readme-img/ed-delete.gif)

------
1. "Employees" view SEARCH
![](readme-img/fe-search.gif)

1. Locations view
![](readme-img/ed-locations-view.png)



## BACK END / HIGHLIGHTS
1. Simple JSON API
- Unique Identifier(id) generation

1. Test Suite

## Improvements to make
* Pagination
* Photo Upload for edit (photos are randomly sourced from randomuser.me
* 
* Run app in localStorageMode when there is no access to the DB
* Accesibility
* Stylistically differentiate between Buy and Sell View
```
