import create from "zustand"

export type cartItem={title:string,img:string,price:number,id:number}

type state={
    addItems:(item)=>void
    removeItem:(id:number)=>void
    count:number
    items:Array<cartItem>
}

export const useCartStore=create<state>(set=>({
    count:0,
    items:[],
    addItems:(item)=>set(state=>{
        const isFind=state.items.find(data=>data.id===item.id)
        if(!isFind) return {items:[...state.items,item],count:state.count+1}
        else return state
    }),
    removeItem:(id)=>set(state=>{
        const items=state.items.filter(data=>data.id!==id)
         return {items,count:state.count-1}
    })
}))