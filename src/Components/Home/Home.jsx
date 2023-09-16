import { useState } from "react";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
const Home = () => {

const [cards, setAllCards] = useState([])
const [select, setSelect] = useState([])

useEffect(() => {
   fetch('./data.json')
   .then((res) => res.json())
   .then((data) => setAllCards(data))
},[])
 
const handleButton = (card) => {
  setSelect([...select,card])
}
// console.log(cards)
   return (
      <div className="flex justify-between">
      <div className="grid items-center grid-cols-3 gap-6 my-4" >
         {
            cards.map((card) => (
                   <div className="border-2 border-gray-100 w-[300px] border-white rounded-lg " key={card.title}>
               <img className="w-full p-2" src={card.coverImage} alt="" />
            <div>
                  <h3 className="p-2 text-xl font-bold my-3"> {card.title} </h3>
               </div>
               <p className="p-2">  {"New Course starting soon!! Enroll now and guide your future."}
               </p>
               <div className="flex justify-between">
                  <p className="p-2 text-lg">Price : {card.price}</p>
                  <p className="p-2 text-lg"> Credit hour: {card.credit}</p>
               </div>
               <button onClick={()=>handleButton(card)} className="text-white p-2 text-center bg-sky-500 w-full">Select</button>

               </div> 
            ))
         }

       </div>
       <Cart></Cart>
       </div>
   );
};
 
export default Home;