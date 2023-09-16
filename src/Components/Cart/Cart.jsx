/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Cart = ({select,totalCredit,remainingCredit}) => {
   // const  {title } = select;
    return (
   <div className="bg-slate-50 w-64 p-2">
      <h4 className="bg-white py-4 text-sky-600 text-base text-center font-semibold">Credit hour remaining: <span className="font-bold text-lg">{remainingCredit}</span> hr</h4>
      <h4 className="bg-white mt-2 border-t-2 border-gray-200 text-xl text-left p-3 font-semibold">Course Name</h4>
          {
        select.map((card,index) => (
           <div  key={card.id} className="p-2">  
            {index+1}. {card.title}
           </div>
         ))
       }
       <h3 className=" bg-white p-2 my-2 text-left text-xl font-semibold border-t-2 border-gray text-sky-600" >Total Credit Hour : {totalCredit} </h3>
       
      </div>
   );
};

export default Cart;