import React from 'react';
import ReactDOM from 'react-dom';


const h1 = React.createElement("h1",
   {
     id: "first-heading",
     className: "first-heading"
   }, 
   "This is the First Heading"
  );

const h2 = React.createElement("h2",
   {
     id: "second-heading",
     className: "second-heading"
   }, 
   "This is the Second Heading"
  );

  const h3 = React.createElement("h3",
    {
      id: "third-heading",
      className: "third-heading"
    }, 
    "This is the third Heading"
   );


const root = ReactDOM.createRoot(document.getElementById("root"));



const heading = React.createElement(
  "div",
  {
    id: "container",
    hellow: "gautam", 
  },
  [h1, h2,h3]
);

root.render(heading);

 