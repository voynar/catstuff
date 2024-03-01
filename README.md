## CatApp

A simple, cat-friendly web app using the React framework.

It fetches data from two API endpoints: [CatFact](https://catfact.ninja/fact) & [CatAss](https://cataas.com/cat?json=true)

The `react-query` library is imported to manage queries and their states globally, as well as manage data fetching:
  - The App component is wrapped with `QueryClientProvider`, passing the created client as a prop.
  - This makes the `QueryClient` instance available to all components within the provider.

To allow manual refreshing of the cat fact data, I added a button to trigger the `refetch` function, which is provided by the `useQuery` hook.

A couple of `if` statements in `Home.js` to handle errors and page loading:
```
  import Loading from '../assets/loading.gif';
    // rest of code
    // ...
  if (isError) {
    return <h2> Sorry, there was an Error! </h2>
  }
  if (isLoading) {
    return <p><img src={Loading} alt='loading gif' /></p>
  }
```

As in any project, the styling is wide open! I was playing aroung with `tailwindcss`, so I tried it in this project.

Basic setup: (Linux/Mac)
```
  $ npx create-react-app cat-app
  $ cd cat-app/
  $ npm install axios react-router-dom @tanstack/react-query
  $ npm install -D tailwindcss
  $ npx tailwindcss init
```
Configure your template path:
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
Add the Tailwind directive to `index.css`:
```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```
Check out the code for the different classes I used, for example:
```
  className="sticky top-0 z-50 border-gray-200 bg-gray-900"
```

Obviously once the `npm build` process is complete, you can do whatever. I experimented with Netlify:
```
  $ npm install -g netlify-cli
  $ cd /path/to/cat-app/
  $ npm run build
  $ netlify login
```
A browser window will pop up asking for authorization:
> :warning: An application named Netlify CLI is asking for permission to access Netlify on your behalf.
> 
> :information_source: You've granted access to an application named Netlify CLI.
In your terminal, you'll see:
```
Logging into your Netlify account...
Opening https://app.netlify.com/authorize?response_type=ticket&ticket=<ticket_#>

You are now logged into your Netlify account!
```
You can link a GitHub repository, or deploy it manually:
```
  $ netlify init
  $ netlify deploy
  $ netlify deploy --prod
```

### _Enjoy!_





