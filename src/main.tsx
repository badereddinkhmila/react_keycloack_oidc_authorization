import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store/redux/store.ts';
import { Provider } from 'react-redux';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { PrimeReactProvider } from 'primereact/api';

// Import the generated route tree
import { routeTree } from './routeTree.gen';
import { OidcProvider, useOidc } from '@providers/oidc.tsx';
import NotFound from '@pages/NotFound.tsx';

// Create a new router instance
const router = createRouter({ routeTree, context: {
  // auth will initially be undefined
  // We'll be passing down the auth state from within a React component
  oidcContext: undefined!,
},
defaultNotFoundComponent: () => {
  return (
    <NotFound />
  )
},

});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function InnerApp() {
  const oidcContext = useOidc()
  return <RouterProvider router={router} context={{ oidcContext }} />
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <OidcProvider>
      <PrimeReactProvider>
        <Provider store={store}>
          <InnerApp />
        </Provider>
      </PrimeReactProvider>
    </OidcProvider>
);
}
