/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProtectedImport } from './routes/protected'
import { Route as DashboardRouteImport } from './routes/dashboard.route'
import { Route as AdminIndexImport } from './routes/admin/index'
import { Route as AuthSignupImport } from './routes/auth/signup'
import { Route as AuthLoginImport } from './routes/auth/login'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const DashboardIndexLazyImport = createFileRoute('/dashboard/')()
const DashboardBoardIndexLazyImport = createFileRoute('/dashboard/board/')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const ProtectedRoute = ProtectedImport.update({
  id: '/protected',
  path: '/protected',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRouteRoute = DashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const DashboardIndexLazyRoute = DashboardIndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardRouteRoute,
} as any).lazy(() =>
  import('./routes/dashboard/index.lazy').then((d) => d.Route),
)

const AdminIndexRoute = AdminIndexImport.update({
  id: '/admin/',
  path: '/admin/',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignupRoute = AuthSignupImport.update({
  id: '/auth/signup',
  path: '/auth/signup',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/auth/login',
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

const DashboardBoardIndexLazyRoute = DashboardBoardIndexLazyImport.update({
  id: '/board/',
  path: '/board/',
  getParentRoute: () => DashboardRouteRoute,
} as any).lazy(() =>
  import('./routes/dashboard/board/index.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRoute
    }
    '/protected': {
      id: '/protected'
      path: '/protected'
      fullPath: '/protected'
      preLoaderRoute: typeof ProtectedImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/auth/signup': {
      id: '/auth/signup'
      path: '/auth/signup'
      fullPath: '/auth/signup'
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof rootRoute
    }
    '/admin/': {
      id: '/admin/'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminIndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexLazyImport
      parentRoute: typeof DashboardRouteImport
    }
    '/dashboard/board/': {
      id: '/dashboard/board/'
      path: '/board'
      fullPath: '/dashboard/board'
      preLoaderRoute: typeof DashboardBoardIndexLazyImport
      parentRoute: typeof DashboardRouteImport
    }
  }
}

// Create and export the route tree

interface DashboardRouteRouteChildren {
  DashboardIndexLazyRoute: typeof DashboardIndexLazyRoute
  DashboardBoardIndexLazyRoute: typeof DashboardBoardIndexLazyRoute
}

const DashboardRouteRouteChildren: DashboardRouteRouteChildren = {
  DashboardIndexLazyRoute: DashboardIndexLazyRoute,
  DashboardBoardIndexLazyRoute: DashboardBoardIndexLazyRoute,
}

const DashboardRouteRouteWithChildren = DashboardRouteRoute._addFileChildren(
  DashboardRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '/protected': typeof ProtectedRoute
  '/about': typeof AboutLazyRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/signup': typeof AuthSignupRoute
  '/admin': typeof AdminIndexRoute
  '/dashboard/': typeof DashboardIndexLazyRoute
  '/dashboard/board': typeof DashboardBoardIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/protected': typeof ProtectedRoute
  '/about': typeof AboutLazyRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/signup': typeof AuthSignupRoute
  '/admin': typeof AdminIndexRoute
  '/dashboard': typeof DashboardIndexLazyRoute
  '/dashboard/board': typeof DashboardBoardIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '/protected': typeof ProtectedRoute
  '/about': typeof AboutLazyRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/signup': typeof AuthSignupRoute
  '/admin/': typeof AdminIndexRoute
  '/dashboard/': typeof DashboardIndexLazyRoute
  '/dashboard/board/': typeof DashboardBoardIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dashboard'
    | '/protected'
    | '/about'
    | '/auth/login'
    | '/auth/signup'
    | '/admin'
    | '/dashboard/'
    | '/dashboard/board'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/protected'
    | '/about'
    | '/auth/login'
    | '/auth/signup'
    | '/admin'
    | '/dashboard'
    | '/dashboard/board'
  id:
    | '__root__'
    | '/'
    | '/dashboard'
    | '/protected'
    | '/about'
    | '/auth/login'
    | '/auth/signup'
    | '/admin/'
    | '/dashboard/'
    | '/dashboard/board/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  DashboardRouteRoute: typeof DashboardRouteRouteWithChildren
  ProtectedRoute: typeof ProtectedRoute
  AboutLazyRoute: typeof AboutLazyRoute
  AuthLoginRoute: typeof AuthLoginRoute
  AuthSignupRoute: typeof AuthSignupRoute
  AdminIndexRoute: typeof AdminIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  DashboardRouteRoute: DashboardRouteRouteWithChildren,
  ProtectedRoute: ProtectedRoute,
  AboutLazyRoute: AboutLazyRoute,
  AuthLoginRoute: AuthLoginRoute,
  AuthSignupRoute: AuthSignupRoute,
  AdminIndexRoute: AdminIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/protected",
        "/about",
        "/auth/login",
        "/auth/signup",
        "/admin/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.route.tsx",
      "children": [
        "/dashboard/",
        "/dashboard/board/"
      ]
    },
    "/protected": {
      "filePath": "protected.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/auth/login": {
      "filePath": "auth/login.tsx"
    },
    "/auth/signup": {
      "filePath": "auth/signup.tsx"
    },
    "/admin/": {
      "filePath": "admin/index.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.lazy.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/board/": {
      "filePath": "dashboard/board/index.lazy.tsx",
      "parent": "/dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
