* The base idea for react was to not have different files for html,css,js...they want to 
  achive writing html through javascript only.

* even only a smaller section of your webpage can also be a react app.

* React is nothing just pre-written code for frontend devlopment by facebook developers for better performance and reduce mundane tasks.

* we need to import two cdn's because , react have many extensions for web dev (react dom), mobile (react native), 3d (react 3D), and react serves 
  base for all of them.

* default export of react library is 'React' object
* default export of react-dom is 'ReactDOM' object

q> Can we have multiple roots in a react project?

-> YES. usually in most of the projects we have only one roots. But, it's use case is specific.
  -> If application is very large, and two sections are not on same frontend and do not share states and common components at all, then
     for better modularity, separation of concern and working flexibility we can do this. But this is rare..

     -> In legacy website which uses vanilla js, html , css migration can happen in section wise manner. Like they might first want to 
     change the important part into react, and slowly slowly to other components. In that case they would use multiple roots, so as not 
     not take risk on already migrated codes.

     
     











 GUESS OUTPUTS :_
 /* the basis of answer is that, if react is able to give output without a specific argument, but if we
    miss sth without rendering is not possible, it would not be rendered. Like if tag name is not their, react can't 
    move ahead to create an element.
    * if we miss second argument, then we are missing attributes of an element, which if fine, a html, element can be created, wihtout attributes.
    *

 1> const heading = React.createElement('h1','hello',fadf);   
   -> if fadf is not a variable then it won't work, react will not be rendered so, text defined in element containing root id will be displayed (not rendered);

 2> const heading = React.createElement('h1','hello'); 
   -> react will be rendered, but nothing will be displayed inside root (react app);
   
3> const heading = React.createElement('','hello');
   -> not rendered   

4> const heading = React.createElement('h1',{},'gautam ','guddu ','baabu ');
  -> in this first two argument will pass to first two parameters, and all later will be considered as an array of contents.      In React, the React.createElement function allows you to pass multiple children as subsequent arguments after the props object. These children will be rendered in order.If you pass multiple children as separate arguments, React will automatically treat them as an array of children.   










  EXTRAS :--

  use div>div>h1 to create ...