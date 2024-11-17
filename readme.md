* polyfill is the replacement for newer es6 features because not all browser supports es6 feature or maybe
some specific features, so  instead to that part of your code it puts older version or some alternative that
do same thing. Bable does this for us. Eventuall bable is nothing but a node package ie. javascript code.

** Tree Shaking ::- In frontend We import so many code, also write so many codes. But frontend is at the end is static file with javascript simulating dynamics. All the codes required run your frontend can be kept solely into html, css and js file and it won't require anything(from backend) to be displayed other than this, until you deliberately want something ( i am not talking about data only frontend..ofcourse data will come from backend), so in production build frontend is equipped with all the codes required to run it within these three files, hence no dependency on backend (except for data). This is exactly what production build for frontend gives us.. these three files with all codes of packages they are using (by removing unwanted or not used code in them..which is really very huge)    but don't use all of them tree shaking removes
them.

** Yes, node_modules is typically required on production servers for backend applications unless you're using an alternative like bundling or serverless architecture.

** Why Doesn't node_modules Go to Production for Frontend?
Bundling:

The frontend build process bundles your code along with only the parts of dependencies you use (thanks to tree shaking and code splitting).
The bundler outputs optimized static assets that can be served directly by a web server (e.g., Nginx, Apache).
Performance:

Including node_modules in production would result in slower load times because browsers would have to download, parse, and execute a lot of unnecessary code.
Security:

Deploying node_modules exposes development-related code or unused libraries, which could lead to security vulnerabilities.


** "scripts": {
   "start": parcel index.html"
}

now u can replace npx parcel index.html .... with... npm run start
   note _.   npx = npm run


**  npm instal babel-plugin-transform-remove-console --save-dev   

 to make use of this file first u need to give configuration in .babelrc file. Copy that configuration from it's website. These are not meant to be remembered.

 * Inside dist folder their is .map file for js and css file, they are for their use don't be so much concerned abt them.

 * props - he said the second obj argument in 
 React.createElement() is also prop. Relate with that 
 we pass in components argument. Bcz it is containing
 id, className, so i am confused...


 ** import { createElement as ce } from 'react'; -------------------------------------------