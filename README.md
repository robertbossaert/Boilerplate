# Boilerplate

This is a personal boilerplate I am working on. It utilizes ES6 and Gulp.
Keep in mind that this is a work in progress.

## Getting started

1. Clone the repo https://github.com/robertbossaert/Boilerplate.git
2. Install [Node.js](http://nodejs.org/) on your machine
3. Run this command to install the global dependencies:
    
    ```
    npm install -g gulp
    ```
4. Run this command to install all other project dependencies:
    
    ```
    npm install
    ```
5. All set! you can start your server by running:
    
    ```
    gulp dev
    ```

## Building the distribution folder

1. You can create the ./dist folder by running:
    
    ```
    gulp dist
    ```

## Tasks

There are a number of tasks you can import into your boilerplate.
Tasks are placed inside the ./tasks folders and are imported in gulpfile.babel.js

## Todo

1. Implement CriticalCSS
2. JS linter
3. Create additional tasks

## Troubleshooting

1. SyntaxError: Use of const in strict mode.
    
    > Make sure you are on node >=4 (run node -v)

## License
The code is available under the [MIT License](/LICENSE).
