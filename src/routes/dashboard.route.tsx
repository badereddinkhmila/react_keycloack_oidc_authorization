import * as React from 'react'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  beforeLoad: async ({ context }) => {
    const { oidcContext } = context
    if (!oidcContext.isUserLoggedIn) {
      await oidcContext.login({
        /**
         * If you are calling login() in the callback of a button click
         * (like here) set this to false.
         */
        doesCurrentHrefRequiresAuth: true,
        /**
         * Optionally, you can add some extra parameter
         * to be added on the login url.
         * (Can also be a parameter of createReactOidc `extraQueryParams: ()=> ({ ui_locales: "fr" })`)
         */
        //extraQueryParams: { kc_idp_hint: "google", ui_locales: "fr" }
        /**
         * You can allso set where to redirect the user after
         * successful login
         */
        redirectUrl: "/dashboard"
    })
      // throw redirect({
      //   to: '/auth/login',
      //   search: {
      //     redirect: location.href,
      //   },
      // })
    }

    return <Outlet />
  },
})
