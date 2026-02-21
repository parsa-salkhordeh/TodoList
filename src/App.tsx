import { useState , useEffect  } from "react";
// وارد کردن کامپوننت ها

import Logo from "./components/Logo";
import Form from "./components/Form";
import List from "./components/List";


//Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//type
import {Item} from "./type"

export default function App() {

  // (Lazy Initial State) اینطوری بعد از رفرش آیتم ها هم حذف نمیشن
    const [items, setItems] = useState<Item[]>(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleDelet(index:number):void {
    const ok = window.confirm("مطمئنی میخوای این آیتم رو حذف بکنی");
    if(ok){
      setItems(items.filter((_, i) => i !== index));
    }
  }

  function handleToggleitems(index: number){
    setItems(items.map((item, i) => 
      i === index ? {...item, checked: !item.checked} : item
    ));
  }

  
  
  function deleteAllitems():void{
    if(items.length===0){
         toast.warning("آیتمی برای حذف کردن وجود ندارد😒");
        return;
      }

      const sure=window.confirm("آیا میخواهید کل آیتم ها را حذف کنید؟");

      if(sure){
        setItems([])
      }
      
  }
  return (
    <>
      <Logo/>
      <Form items={items} setItems={setItems}/>
      <List items={items} deletBtn={handleDelet} toggleBtn={handleToggleitems} deleteAllitems={deleteAllitems} count={items.filter((item)=> !item.checked).length}/>
      
        
      {/* نمایش نوتیفیکیشن‌های Toastify در برنامه */}
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

