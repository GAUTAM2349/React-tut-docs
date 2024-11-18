import React from 'react';
import ReactDOM from 'react-dom';

const title = (
  <h1 id="title" key='h2'>
    Namaste react
  </h1>
)

const HeaderComponent = () => {

  return (
    <div>
      {title}
      <h2> Namaste React functional component</h2>
      <h2> This is a h2 tag</h2>
    </div>
  )
  
}

const root = ReactDOM.createRoot(document.getElementById("root"));

//async defer
root.render(<HeaderComponent />);