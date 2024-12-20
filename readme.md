** When we write inline css in html, it would be :_

      <h1 style="background-color:red font-size:20px">

 here to write multiple style properties and their values we are just giving space between them, and style is all inside a string.
 -> But as u remember in jsx we are not writing html, but javascript. And  javascript does not take multiple elements with properties and values like this, for that
 we need OBJECT. 

 it could be like this (although this is wrong)

      <h1 style={backgroundColor:"red", fontSize:"25px"}>

    BUT YOU CANNOT WRITE JS DIRECTLY INSIDE JSX, YOU need to encapsulate it insid {}. So their will be two {{}}  

    so correct one is,

      <h1 style= {{backgroundColor:"red", fontSize:"25px"}}>   //CORRECT (note camelCase)


React.Fragment is not rendered in dom , whereas if u use extra <div>   it would be rendered.

** Yes, you can nest <React.Fragment> (or its shorthand <>) inside another <React.Fragment>. This is often done to group multiple elements logically without adding extra DOM nodes.

** in react component u can or cannot use return statement, because when using arrow function and returning single thing we can ommit return and in jsx more than one line is encapsulated
into bracket ()  hence is one block in itself.

** Array.join()

** optional chaining 
   <h2>{ restaurantList[0].data?.name}</h2>

   The ? in your code is the optional chaining operator in JavaScript. It helps safely access nested properties of an object without risking errors if any part of the chain is undefined or null.
   Why use ? (Optional Chaining)?
If restaurantList[0] or restaurantList[0].data is undefined or null, attempting to access .name directly will throw an error. For example:

jsx
Copy code
TypeError: Cannot read properties of undefined (reading 'name')
The ?. operator prevents this error by short-circuiting. If data is undefined or null, the whole expression evaluates to undefined instead of throwing an error.

to achieve same functionality
Without ?.:
You would need to write:

jsx
Copy code
<h2>{restaurantList[0] && restaurantList[0].data && restaurantList[0].data.name}</h2>
This is more verbose and harder to read.


** whatever is passed in components argument is props


** <RestaurantCard restaurant={restaurantList[0]} />  can simply be written as,

   {RestaurantCard(restaurantList[0])}

   eventually component is fn and whatever is passed in component's argument is fn argument. The difference is that whatever arguments you give in component is wrapped into single object (prop) in the parameter, and hence you need to give each argument a name, 

   <RestaurantCard restaurant={restaurantList[0]} sec="any random" />

   -> no comma bw two arguments is jsx way not a logical reason
      In JSX, there’s no need for commas between attributes (or "arguments" as you call them), because JSX is not regular JavaScript—it is a syntax extension. JSX closely resembles HTML, where attributes are space-separated rather than comma-separated. aslo equal to sign same reason





**The md in README.md stands for Markdown, which is a lightweight markup language. Files with the .md extension are written in Markdown syntax, designed to be easily readable as plain text and render beautifully when displayed on platforms that support Markdown (e.g., GitHub, GitLab, Bitbucket).








