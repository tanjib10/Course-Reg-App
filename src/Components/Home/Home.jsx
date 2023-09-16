import { useState } from "react";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Home = () => {

const [cards, setAllCards] = useState([])
const [select, setSelect] = useState([])
const [totalCredit,setTotalCredit] = useState(0)
const [remainingCredit,setRemainingCredit] = useState(20)

useEffect(() => {
   fetch('./data.json')
   .then((res) => res.json())
   .then((data) => setAllCards(data))
},[])
 
const handleButton = (card) => {
  const isExist = select.find(item => item.id === card.id)
  let total = card.credit;
  if(isExist){
   return toast('You have already selected this course.')
 }else{
   select.forEach(item => {
      total = total + item.credit;
   })
   const remainingCredit = 20 - total;
   if (total > 20){
     return toast('You do not have enough credit')
   }
  else{
    setTotalCredit(total);
   setRemainingCredit(remainingCredit);
setSelect([...select,card])
  }
 }
}
// console.log(cards)
   return (
      <div className="flex justify-between space-x-8">
             <ToastContainer />
      <div className=" grid items-center grid-cols-3 gap-6 my-4" >
         {
            cards.map((card) => (
                   <div className="bg-slate-100 border-2 border-gray-100 w-[300px] border-white rounded-lg " key={card.title}>
               <img className="w-full p-2" src={card.coverImage} alt="" />
            <div>
                  <h3 className="p-2 text-xl font-bold my-3"> {card.title} </h3>
               </div>
               <p className="p-2">  {card.description}
               </p>
               <div className="flex justify-between">
                  <p className="p-2 text-lg">Price : {card.price}</p>
                  <p className="p-2 text-lg"> Credit hour: {card.credit}</p>
               </div>
               <button onClick={()=>handleButton(card)} className="hover:bg-sky-600 active:bg-sky-700 transition duration-300 ease-in-out transform hover:scale-105 rounded-lg focus:outline-none text-white p-2 text-center bg-sky-500 w-full">Select</button>

               </div> 
            ))
         }
       </div>
       <div className="my-4">
       <Cart remainingCredit={remainingCredit} totalCredit={totalCredit} select={select}></Cart>
       </div>
       </div>
   );
};
 
export default Home;