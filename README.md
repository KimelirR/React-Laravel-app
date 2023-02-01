# Fullstack Application - Laravel(Backend) and Reactjs(FrontEnd) 
# >Laravel Api in conjunction with Frontend using Vite to create React App

## Installation
You will need PHP8.1, composer and Node.js.

* clone this project into your local machine
  ```
  git clone 
  ```

* Install project dependencies

  ```php
   composer install
  ```

* Create .env file through copy
  ```
    cp .env.example .env
  ```
 
* Provide database credentials below in .env file.
  ```
     DB_DATABASE="Your Database"
     DB_USERNAME="Your Database User Name"
     DB_PASSWORD="Database Password"
  ```

* Generate key for our laravel application.
    ```php
    php artisan key:generate --ansi
    ```

* Run migrations 
    ```php
    php artisan migrate:fresh --seed 
    ```
## Start Our application on local server
* __*On terminal split into two*__
    * First one || Start our laravel app
      ```php
       php artisan server
      ```

> Congratulations our laravel app is up and running!


# Lets switch to React app

*  React is inside laravel application
```
  cd react
```

* Make **env** and adjust the `VITE_API_BASE_URL` parameter

  ```
    cp .env.example .env
  ```
* Install Dependencies

  ```javascript
    npm install
  ```

* Second One || Start Vite Server

  ```
    npm run build
  ```
> On Your browser *localhost:3000*
Login and Enjoy
