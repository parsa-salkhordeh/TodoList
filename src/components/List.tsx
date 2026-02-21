import {Item} from "../type"

type ListProps = {
  items: Item[];
  deletBtn: (index: number) => void;
  toggleBtn: (index: number) => void;
  deleteAllitems: () => void;
  count: number;
};

export default function List({items , deletBtn , toggleBtn , deleteAllitems , count}: ListProps){

  return(
    <>
    <ul>
      
       {
      
       items.map((item , index)=> 
       <li key={index}>

        <input 
            type="checkbox"
            style={{transform: "scale(1)", cursor:"pointer"}}
            checked={item.checked}
            onChange={()=>toggleBtn(index)}
          />
        <span style={{textDecoration: item.checked ? "line-through" : "none"}}>
          {item.text}
        </span>

        <button style={{cursor:"pointer"}} onClick={()=>deletBtn(index)}>❌</button>

       </li> )
       }
    </ul>

    <div className="arrange">

       <h2 className="counter">شما <span style={{fontSize:"2rem" }}>{count}</span> تا کار برای انجام دارید</h2>
       <button className="deleteAllbtn" onClick={deleteAllitems}>حذف همه</button>

       
    </div>

    

    </>
  )
  
}