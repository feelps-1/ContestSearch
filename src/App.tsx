import { ContestDisplay } from "./pages/contestDisplay"
import { 
  createBrowserRouter,
  RouterProvider
 } from "react-router-dom"
import { ContestIndication } from "./pages/contestindication"

const router = createBrowserRouter([
  {
    path: '/',
    element: <ContestDisplay />
  },
  {
    path: '/indicar',
    element: <ContestIndication />
  }
])

export function App() {
  return <RouterProvider router={router} />
}

