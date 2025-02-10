import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { useOidc } from '@/providers/oidc'

export const Route = createLazyFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {isUserLoggedIn} = useOidc()
  console.log('Is user logged in: ', isUserLoggedIn)
  return 'Hello /dashboard/index/!'
}
