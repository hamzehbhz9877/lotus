import create from "zustand"

type state={
    close:()=>void
    open:()=>void
    isOpen:number
}

export const useSidebarStore=create<state>(set=>({
    isOpen:false,
    open:()=>set(state=>({isOpen:true})),
    close:()=>set(state=>({isOpen:false})),
}))