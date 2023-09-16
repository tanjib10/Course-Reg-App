import Cart from "./Components/Cart/Cart"
import Home from "./Components/Home/Home"

function App() {


  return (
    <>
     <div className="max-w-[95%] mx-auto">
       <h1 className="text-4xl text-center my-5 font-bold">Course Registration</h1>
       <div>
        <div>
          <Home></Home>
        </div>
        <div>
            <Cart></Cart>         
        </div>
       </div>
     </div>
      
    </>
  )
}

export default App
