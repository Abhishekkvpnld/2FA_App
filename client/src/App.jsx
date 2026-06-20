import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import { SessionProvider } from "./context/sessionContext";

const App = () => {
  return (
    <div className="h-screen" >
      <div className="flex items-center justify-center h-screen">
        <SessionProvider>
          <RouterProvider router={router} />
        </SessionProvider>
      </div>
    </div>
  )
}

export default App;