import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from 'primereact/button'
import { useOidc } from '@/providers/oidc'
import axios from 'axios'

export const Route = createFileRoute('/admin/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { oidcTokens } = useOidc()
  console.log('Token', oidcTokens)

  async function getUser() {
    const url = 'http://localhost:3002/api/user'
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: 'Bearer ' + oidcTokens?.accessToken,
        },
      })
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  async function getAdmin() {
    const url = 'http://localhost:3002/api/admin'
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: 'Bearer ' + oidcTokens?.accessToken,
        },
      })
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  async function getAuth() {
    const url = 'http://localhost:3002/api/auth'
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: 'Bearer ' + oidcTokens?.accessToken,
        },
      })
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return( 
    <div className='flex gap-4'>
      <Button label="Auth" onClick={() => getAuth()} />
      <Button label="User" onClick={() => getUser()} />
      <Button label="Admin" onClick={() => getAdmin()} />
    </div>
  )
}
