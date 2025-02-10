// import ThemeSwitcher from '@components/ThemeSwitcher'
import Ads from '../components/home/Ads'
import Navbar from '../components/Navbar'
import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { createRootRouteWithContext } from '@tanstack/react-router'
import { useOidc } from '@/providers/oidc'
import { OidcReact } from 'oidc-spa/react/react'

interface RouterContext {
  // The ReturnType of your useAuth hook or the value of your AuthContext
  oidcContext: ReturnType <typeof useOidc> |  OidcReact<{
        sub: string;
        preferred_username: string;
    }> | OidcReact.LoggedIn<{sub: string;
    preferred_username: string;
}>;
}


export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <div className='w-full h-full'>
      <Ads />
      <div className="flex">
        <Navbar />
      </div>
      <hr />
      <div className='h-full w-full overflow-y-auto'>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
})
