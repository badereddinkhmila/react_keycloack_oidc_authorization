import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from 'primereact/button'
import { useOidc } from '@/providers/oidc'
import axios from 'axios'

export const Route = createLazyFileRoute('/dashboard/board/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { oidcTokens } = useOidc()
  async function getData() {
    const url = "http://localhost:4444/auth";
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: 'Bearer '+ oidcTokens?.accessToken
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Button title='Submit' icon='pi pi-home' onClick={()=> getData()} />
  )
}
