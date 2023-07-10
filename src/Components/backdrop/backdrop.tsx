import {useSidebarStore} from "../../Store/sidebar";
import {useEffect} from "react";


const Backdrop= () => {
  const {close,isOpen}=useSidebarStore()

  useEffect(()=>{
    if(isOpen)
      document.querySelector("body").style.overflowY="hidden"
    return ()=>{
      document.querySelector("body").style.overflowY="auto"
    }
  },[isOpen])

  return (
    <div
      className={isOpen ? "backdrop backdrop--open" : "backdrop"}
      onClick={close}
    />
  );
};

export default Backdrop;
