import { useState } from "react";
import {Item} from "../type"

type FormProps = {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

export default function Form({items , setItems}:FormProps){
  const [text , setText]=useState<string>("")

  function submitHandler(e:any){
    e.preventDefault();

    // اگه خالی بود و متنی نبود چیزی اضافه نشه به لیستمون
    if (!text.trim()) return;
    
    setItems([...items , {text: text , checked: false}]); 
    setText("");
  }
  return(
    <form onSubmit={submitHandler}>
      <h3> کارهای روزانه خود را برنامه ریزی کنید😊</h3>
      <input type="text" placeholder="یک کار جدید اضافه کنید..." value={text} onChange={(e)=> setText(e.target.value)}/>
      <button className="submitBtn">اضافه کردن</button>
    </form>
  )
    
}