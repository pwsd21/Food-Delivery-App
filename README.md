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
