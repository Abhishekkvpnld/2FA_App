import { RouterProvider } from "react-router-dom";
import router from "./Routes";

const App = () => {
  return (
    <div className="bg-slate-800 h-screen" >
      <div className = "flex items-center justify-center h-screen">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App;