import create from "zustand"

type state={
    close:()=>void
    open:()=>void
    isOpen:boolean
}

export const useSidebarStore=create<state>(set=>({
    isOpen:false,
    open:()=>set(()=>({isOpen:true})),
    close:()=>set(()=>({isOpen:false})),
}))