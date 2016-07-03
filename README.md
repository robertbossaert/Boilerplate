# Boilerplate

A Front-end boilerplate containing ES6, Gulp, BrowserSync, Pug (Jade), JShint and a few other optimization tools.
The project is split into two parts, there is a Jekyll folder for static Jekyll websites and a default folder for all the other projects.
Other than a few folder differences and a Jekyll deploy task for Github pages, they are much the same.

## Getting started

1. Clone the repo https://github.com/robertbossaert/Boilerplate.git
2. Pick your flavor default or jekyll (you could also rename the folder to your website's name)
2. Install [Node.js](http://nodejs.org/) on your machine
3. Run this command to install the global dependencies:
    
    ```
    npm install -g gulp
    ```
4. Go inside the folder you picked, and run this command to install all other project dependencies:
    
    ```
    npm install
    ```
5. All set! you can start your server by running:
    
    ```
    gulp watch
    ```

## Building the distribution folder

1. You can create the ./dist folder by running:
    
    ```
    gulp build
    ```

## Tasks

### Default
1. Clean - deletes the dist folder > ```gulp clean```
2. Watch - watch for file changes and then builds the files > ```gulp watch```
3. Build - builds the files > ```gulp build```

### Jekyll
1. Clean - deletes the dist folder > ```gulp clean```
2. Watch - starts Jekyll, watch for file changes and then builds the files > ```gulp watch```
3. Build - publish a post > ```gulp build```
4. Deploy - deploys your website to Github pages(1) > ```gulp deploy```

(1) Assumes the current working directory is a git repository and uses its remote url. If this is not the case you could set up a remoteUrl.

## Future changes

1. Webpack
2. Additional tasks

## Troubleshooting

* SyntaxError: Use of const in strict mode.
    
    > Make sure you are on node >=4 (run node -v)

## License
The code is available under the [MIT License](/LICENSE).
