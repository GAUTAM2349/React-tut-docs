import React from 'react';
import ReactDOM from 'react-dom';
/* note :-- 'react' is not any path yet. It is actually present inside node modules. so
path would not be this above. But we are able to render, this is because bundlers (parcel in our case)
handles these path related things, they know where we are trying to point */

/* their were some changes in upgraded version of react-dom and they made package name to 'react-dom/client'. so 
this might be needed somewhere */


const h1 = React.createElement("h1", {}, "First Heading");
const h2 = React.createElement("h2", {}, "Second Heading");

const root = ReactDOM.createRoot(document.getElementById("root"));

const container = React.createElement(
  "div",
  {
    id: "container",
    hellow: "gautam", //valid bcz eventually it is an js object only
  },
  [h1, h2]
);

root.render(container);

// until this point we were doing everything wihtout NPM and parcel, but next we are going to use npm because
// we will be installing many packages in future and managing them manually is cumbersome. Also we are going to
// use parcel.
