import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Login from '@pages/Login'

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="h-full w-full flex flex-column justify-content-center">
      <Login />
    </div>
  )
}
