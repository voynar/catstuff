## CatApp

### This is a simple React application that fetches data from two API endpoints:
  :octocat: [CatAss](https://cataas.com/cat?json=true) & [CatFact](https://catfact.ninja/fact) :heart_eyes_cat:

CatApp utilizes the `@tanstack/react-query` and `axios` libraries to efficiently manage asynchronous data fetching.
  - The `QueryClient` and `QueryClientProvider` from this library are key in handling queries and caching data.
  - The `axios` library is used for making HTTP requests to fetch cat facts and images.

For smooth navigation within the app, I incorporated the `react-router-dom` library.
  - The `BrowserRouter, Routes, Route` components facilitate a structured navigation.

I used `tailwindcss` for the styling :v:NOT a requirement!

_Setup your project_:
```
  $ npx create-react-app app_name
  $ cd app_name && npm install react axios react-router-dom
  $ npm install -D tailwindcss
  $ npx tailwindcss init
```
_Update tailwind.config.js_:
```
  /** @type {import('tailwindcss').Config} */
  module.exports = {
      content: ["./src/**/*.{html,js}"],
      theme: {
          extend: {},
      },
      plugins: [],
  }
```

The `useEffect` hook is employed to ensure that the `getRandomImage()` function is called when the component mounts.
```
  useEffect(() => {
      getRandomImage();
  }, []);
```

I modularized the code by creating a separate `NavBar.js` component, that is also `sticky`!

When you're ready for production, run:
```
  $ cd project_root/
  $ npm run build
```

From here you can do whatever. I wanted to try out Netlify, especially the CLI interface.
```
  $ npm install netlify-cli -g
```
Authenticate:
```
  $ netlify login
```
Sample output:

> Logging into your Netlify account...
> 
> Opening <ticket_auth>

> ⠦ Waiting for authorization...

... and in your browser, Authorize. You'll see:
> :warning: An application named Netlify CLI is asking for permission to access Netlify on your behalf.

If successfull, you'll see:
> You are now logged into your Netlify account!

Deploy the `build/` directory:
```
  $ netlify deploy --dir=build
```
> This folder isn't linked to a site yet

> ? What would you like to do? (Use arrow keys)

> ❯ Link this directory to an existing site

>   +  Create & configure a new site 

Create & configure a new site! Enter your `Team` and `Site` names. This will create a website draft. Now deploy live:
```
  $ netlify deploy --prod --dir=build
```
















### I :green_heart::orange_heart: :cat:'s!
