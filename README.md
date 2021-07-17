## Beano Web Design
## _Webpack 🌟🌟🌟🌟🌟 5 starter for your next frontend project._

[![N|Solid](https://res.cloudinary.com/beano/image/upload/c_scale,r_21,w_535/v1626532876/beanologo.png)](https://beanowebdesign.com/)


## Features

- Webpack 5
- Server - HR enabled
- JS
- ES6
- Babel
- ESLint
- EJS Templating Engine
- Prettier
- Image optimisation
- Responsive images with automatic srcSet
- Partials
- Autoprefixer
- Critical CSS
- Sass
- Tailwind Css




## Setup

 1. Clone the repo
 2. Install all dependencies using  `npm`  



```sh
npm i
```
 3. Launch the server and have a play around  `npm run start`  
```sh
npm run start
```
 4. Want to check the production build? the server and have a play around  `npm run build`  
```sh
npm run build
```


## Plugins

Not an extensive list at all.....

| Plugin | Link |
| ------ | ------ |
| @babel/core | [https://babel.dev/docs/en/babel-core]
| Autoprefixer | [https://github.com/postcss/autoprefixer#readme]
| ESLint | [https://eslint.org/]
| Postcss | [https://postcss.org/]
| Responsive loader | [https://github.com/dazuaz/responsive-loader]







## Configuration


-   Edit the  [`configuration/environment.js`](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/blob/master/configuration/environment.js)  if you want to specify:
    -   **`server`**: configure development server, specify  `host`,  `port`. Refer to the full development server configuration options for  [`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/).
    -   **`limits`**: configure file size thresholds for assets optimizations.
        -   Image/Font files size in bytes. Below this value the image file will be served as Data URL (_inline base64_).
    -   **`paths`**:  `src`  or  `dist`  directories names and file system location.

## Additional  `webpack`  configuration

You can additionally configure  `webpack`  for specific environment:

-   `development`  -  [`configuration/webpack.dev.config.js`](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/blob/master/configuration/webpack.dev.config.js)
-   `production`  -  [`configuration/webpack.prod.config.js`](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/blob/master/configuration/webpack.prod.config.js)
    -   Note that if you prefer to build and deploy  [`sourcemap`](https://webpack.js.org/configuration/devtool/#production)  files:

> You should configure your server to disallow access to the Source Map file for normal users!

## License

MIT

**Free Software, Hell Yeah! 🤯**




## Development

Want to contribute? Great!


Get in touch  here on Github.

## Acknowledgment


-   Huge thanks to https://github.com/WeAreAthlon for inspiring this work.
- Please if you like and find my efforts useful please do star this repo. It means a lot to me.