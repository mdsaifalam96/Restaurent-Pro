# Resturent-Pro


<p align="center"><img src="https://angular.io/assets/images/logos/angular/logo-nav@2x.png"></p>

## About the project

Restaurants Pro created in Angular 6, for this project we simulated a backend using express, initializing a json 
file containing the fictitious data of the project.

#### Note: 
This project is under development.

### To initialize the project, clone the repository:
`git clone https://github.com/mdsaifalam96/Resturent-Pro`


### Booting the backend server

##### To upload the api server, at the root of the project run

```sh 
    cd Resturent-pro
    
    nodemon --watch backend --exec "ts-node" backend/dist/server.js
    
    Note: nodemon must be globally installed
```

##### If you need to change the db.json file (as long as your development IDE does not run tsconfig, json automatically), go to the backend directory and do the following:
`tsc -w`



##### if ports 4200 or 3001 are busy
```sh 
    sudo netstat -anp | grep ":4200"  || sudo kill -9 `sudo lsof -t -i:4200`
    kill -9 port
    ps -xa | grep node 
```

### Initializing the frontEnd server

```sh 
    cd Resturent_pro
    
    ng serve
```

### Application build
```sh
- To generate with the development settings (does the buld with .map files):
    ng build
```
```sh
- To generate build for production (DO NOT build with .map files) :
    ng build --prod
```
```sh
- To generate build for production on shared server (the slash in the end is important)
    ng build --prod --bh=/nome_pasta/
```

### Simulate an application server (hSimpleHTTPServer must be installed)
```sh
- cd dist
    python -m SimpleHTTPServer 8000 
```

### Access data example
```sh
   email: mdsaifalam96@gmail.com
   password: 123456
   
   email: backupsaif01@gmail.com
   password: 123456 
   
    email: backupsaif02@gmail.com
    password: 123456 
```
##### Credits
`Template link used for the project http://www.templatemonster.com/`
"# Resturent_Project" 
