import { useOidc } from '@/providers/oidc'
import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox'
import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'

const LoginForm = () => {
  const [checked, setChecked] = useState(true)
  const { login } = useOidc();

  return (
<div className="flex align-items-center justify-content-center">
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
            <img src="https://blocks.primereact.org/demo/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" />
            <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
            <span className="text-600 font-medium line-height-3">Don't have an account?</span>
            <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
        </div>

        <div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText id="password" type="password" placeholder="Password" className="w-full mb-3" />

            <div className="flex align-items-center justify-content-between mb-6">
                <div className="flex align-items-center">
                    <Checkbox id="rememberme" onChange={e => e.checked != undefined && setChecked(e.checked)} checked={checked} className="mr-2" />
                    <label htmlFor="rememberme">Remember me</label>
                </div>
                <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
            </div>

            <Button label="Sign In" icon="pi pi-user" className="w-full" onClick={() => login && login({
                /**
                 * If you are calling login() in the callback of a button click
                 * (like here) set this to false.
                 */
                doesCurrentHrefRequiresAuth: false
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
                // redirectUrl: "/dashboard"
                /**
                 * Keycloak: You can also send the user direcly to the register page
                 * See: https://github.com/keycloakify/oidc-spa/blob/14a3777601c50fa69d1221495d77668e97443119/examples/tanstack-router-file-based/src/components/Header.tsx#L54-L66
                 */
            })}/>
        </div>
    </div>
</div>

  )
}

export default LoginForm
