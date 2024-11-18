- see why fb chose to render html using js

- jsx (javascript xml - usually ppl say) is not html inside javascript, it is html like syntax of javascript to write which is used to create html elements
  as we were doing normally using React.createElement() , just syntax has changed so as for user convenience.

  - JSX IS NOT PART OF REACT. React itself does not directly understand JSX. JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML and is commonly used in React to describe the UI structure. However, browsers cannot interpret JSX, and React relies on a transpilation step to convert JSX into plain JavaScript that React can understand. The code written in jsx is converted in React.createElement() by babel and next is same as in react.

  - When you write code, write for human, next who will read your code. So that they can understand it easily. Machines can understand binary
    also, doesn't mean we write binary. Purpose of writing code should be fulfilled.
    
- with jsx we just write code for createElements, like this,
      const heading =  <h1> this is heading </h1> 

 if the line is more than one then it needs parenthesis ()

      const mysec =  (
                        <div id="title" key="h2">
                            <p>
                         </div>   
      )


** FUNCTIONAL component is nothing but a function. It is often used when we use jsx in our
   project to return jsx. Origin of it's need is use of logic or sth like hooks to manage state, which plain jsx can't handel... functions encapsulate their state codes within respective jsx part and create a local scope for them. Also it looks more readable and comprehendable. MANy times data will come from api's and those data will be feeded into elements, these call will be made within functions and the elements using them will be inside them using jsx (ofcourse outside components can also embeded)

   like below code was perfectly fine without use of functional component

         const p1 = <p>This is paragraph 1.</p>;
         const p2 = <p>This is paragraph 2.</p>;

         const combined = (
         <div>
            {p1}
            {p2}
         </div>
         );

         // Render combined to the DOM (example with ReactDOM)
         ReactDOM.render(combined, document.getElementById('root'));



by making use of Functional components we will writ like this,

                        // Functional component for p1
                        const Paragraph1 = () => {
                        return <p>This is paragraph 1.</p>;
                        };

                        // Functional component for p2
                        const Paragraph2 = () => {
                        return <p>This is paragraph 2.</p>;
                        };

                        // Functional component to combine them
                        const Combined = () => {
                        return (
                           <div>
                              <Paragraph1 />
                              <Paragraph2 />
                           </div>
                        );
                        };

                        // Render Combined to the DOM
                        ReactDOM.render(<Combined />, document.getElementById('root'));



this specific part of above code can be written in more ways :-
  const Combined = () => {
                        return (
                           <div>
                              <Paragraph1 />
                              <Paragraph2 />
                           </div>
                        );
                        };


1>  const Combined = () => {
                        return (
                           <div>
                              {Paragraph1()}
                              {Paragraph2()}
                           </div>
                        );
                        };

here {} is jsx syntax to use javascript, inside that we are calling comoponents
function which eventually returns jsx.     <Paragraph1 /> is another way of writing this WHICH JSX PROVIDES US.


** you can write any piece of js code inside {} in jsx

** A Cross-Site Scripting (XSS) attack is a type of security vulnerability where an attacker injects malicious scripts (usually JavaScript) into trusted websites. These scripts are executed in the browser of a victim, potentially stealing data, impersonating users, or manipulating web content. someone can steal your ip, location, address..., cache and passwords saved in browser

** any js code written inside {}  in jsx is sanitised, so it is very rare to 
   inject malicious code their.
   
  ** an element created through jsx can be converted to functional component by simply adding an arrow fn befoure it.
  Also since functional component we have syntax <Component/> which looks similar to html, so usually we make all elements, components. Also if you normally write it without using component like {heading}, then thing is that you would write normal variables also like this , so it would be hard to identify which one  is normal variable and which one is for jsx element.

  * Advantage of using functional component way of writing jsx,

  1> Readability and Familiar structure
      JSX elements can be converted into functional components by wrapping them in an arrow function:
       <h1>Hello, World!</h1>;
               to
       const Heading = () => <h1>Hello, World!</h1>;
This makes the code more modular and easier to read, especially when components are reused across the application.

2> This resembles HTML, making it easier for developers to differentiate between components and other elements or variables.
   {heading} {para}..like in this it is hard to know wheter variable
   inside them contain some jsx  or simple variables to give value.

 3> SCALABILITY (future proof)
 As your application grows, relying on functional components helps manage complexity. You can easily add props, state, or hooks to a functional component, whereas a plain JSX element is static and not interactive.  

 4> Keep components small and single-purpose to maintain readability and testability.

 5> A functional component allows you to add logic, props, or hooks, making it more versatile than a plain JSX variable.

 6> Components encapsulate their behavior and can dynamically change based on props or state, while variables assignment to jsx
 
 React Lifecycle and Performance:

Functional components participate in React's lifecycle and can optimize rendering via techniques like React.memo.
A plain JSX variable gets re-created on every render. cannot: