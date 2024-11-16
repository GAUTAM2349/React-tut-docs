const h1 = React.createElement("h1", {}, "First Heading");
const h2 = React.createElement("h2", {}, "Second Heading");

const root = ReactDOM.createRoot(document.getElementById("root"));

// at this stage we need to render both h1 and h2 components but, thing is we can't give more than one 
// components in root.render(). React requires a single root element to be rendered, so when you want to render multiple components at once, you need to wrap them.

const container = React.createElement(
    'div',
    {
        id:'container'
    },
    [h1,h2]
);

root.render(container);
//root.render() does not append to existing childs inside it in html, rather overwrite it.

// now we get intution writing each time React.createElement() for each element ..and passing those elements into
// inside array of container is much hectic,mundane and lenghty.. so we will be moving towards sth which takes
// less line and feels programatic....
