import { ContestDisplay } from "./pages/contestDisplay"
import { 
  createBrowserRouter,
  RouterProvider
 } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <ContestDisplay />
  }
])

export function App() {

  return <RouterProvider router={router} />
}

