# Namaste-React-Course


/* 
Header
 - Logo
 - Nav Items
Body
 - search
 - RestaurantContainer
    -RestaurantCard
        - Img
        - Restaurant Name, Cuisine, Star Rating, delivery time , cost 
Footer
 - Copyright
 - Address
 - Contact Details
*/


# Redux
- Install @reduxjs/toolkit , react-redux
- Build our store
- Connect store to the app
- create Slice  (cartSlice)
- dispatch(action)
- Selector
  

# Types of Testing
- Unit Testing
- Integration Testing
- End to End Testing (e2e Testing)


# Setting Up Testing 
- install @testing-library/react (React Testing Library)
- install jest
- install Babel dependencies (which are required for using jest with Babel)
- Configure Babel (babel.config.js)
- Parcel's default Babel config is in conflict with above babel.config.js - to resolve this add a .parcelrc file with configuration to parcel 

{
    While Parcel includes transpilation by default, you may still need to use Babel with other tools such as test runners like Jest, and linters like ESLint. If this is the case, you may not be able to completely remove your Babel config. You can make Parcel ignore your Babel config instead, which will have performance benefits and prevent the other issues described above.

    To disable Babel transpilation in Parcel, override the default Parcel config for JavaScript to exclude @parcel/transformer-babel.

    .parcelrc config - will allow other tools to continue using your Babel config, but disable Babel transpilation in Parcel.
}

- Jest Configuration (npx jest --init)
- Install Jsdom library (npm i -D jest-environment-jsdom)
- install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react in babel config
- Install @testing-library/jest-dom

- Every Test case written follows -  
  - to render something
  - to query from render
  - assert the query result (either to be in the document or with expected value) 