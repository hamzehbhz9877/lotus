import {useSidebarStore} from "../../Store/sidebar";


const Backdrop= () => {
  const {close,isOpen}=useSidebarStore()

  return (
    <div
      className={isOpen ? "backdrop backdrop--open" : "backdrop"}
      onClick={close}
    />
  );
};

export default Backdrop;
