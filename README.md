# Namaste React

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++ ( Parcel uses this algorithm to do HMR)
- Caching - Faster Builds
- Image Optimization
- Minification of Files ( During Production Build )
- Bundle ( Bundles the files for us )
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - supports older browsers
- Diagnostics
- Error Handling
- HTTPs
- Tree Shaking - removes unused code

# Namaste Food

- Header
  - Logo
  - Nav Items
    -Body
  - Search
  - Card Container - Cards - Img - Name of Res, Star Rating, Cusines, delery tie
    -Footer
  - CopyRight
  - Links
  - Address
  - Contact

# React Create Element

// creating and Element and rendering it into root
//using createElement and createRoot method of React and ReactDOM lib resp

// nested html structure inside react application

// const parent = React.createElement(
// "div",
// { id: "parent" },
// React.createElement(
// "div",
// { id: "child" },
// React.createElement("h1", {}, "GOATdssssssssssssssssssssssss")
// )
// );

// // creates a react object for you
// const heading = React.createElement(
// "h1",
// {
// id: "heading",
// abc: "ppp",
// },
// "Kanishka"
// );

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);

// // this is used to convert this object toh1 tag and put it onto the DOM
// root.render(parent);

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build Our Store
- Connect our store to the app
- Slice (cartSlice)
- dispatch ( action )
- Selector

# Developer Testing ( Setting up testing in our app)

- Install React Testing Library
- Install Jest
- Install Babel Dependencies
- configure Babel ( babel.config.js )
- configure Parcel config file (.parecelrc) to disable default babel transpilation
- Jest Configuration
- Jest : npx jest --init ( This will create jest.config.js)
- Install Jsdom library
- Install - npm i -D @babel/preset-react - to make jsx work in test cases
- Include @babel/present-react inside my babel config
- Install - npm i -D @testing-library/jest-dom ( to fix toBeInTheDocument not a function ERROR)
