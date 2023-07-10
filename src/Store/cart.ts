import create from "zustand"

export type cartItem = { title: string, img: string, price: number, id: number, count: number,total:number }

type state = {
    addItems: (item: Omit<cartItem, 'total'|'count'>) => void
    removeItem: (id: number) => void
    count: number
    items: Array<cartItem>
    addCount: (id: number) => void
    subCount: (id: number) => void
}

export const useCartStore = create<state>(set => ({
    count: 0,
    items: [],
    addItems: (item: Omit<cartItem, 'total'|'count'>) => set(state => {
        let items
        const isFind = state.items.find(data => data.id === item.id)

        if (isFind) {
            const data = state.items
            const findIndex = state.items.findIndex(data => data.id === item.id)
            const count=isFind.count + 1
            data[findIndex] = {...isFind, count,total:isFind.price * count}
            items = data
        } else {
            return {items: [...state.items, {...item, count: 1,total:item.price}], count: state.count + 1}
        }

        return {items}
    }),
    addCount: (id) => set(state => {
        const items = state.items.map(data => {
            if (data.id === id) {
                const count= data.count + 1
                return {...data, count,total:data.price * count}
            }
            else {
                return data
            }
        })
        return {items}
    }),
    subCount: (id) => set(state => {
        const items = state.items.map(data => {
            if (data.id === id && data.count > 1) {
                const count= data.count - 1
                return {...data, count,total:data.price *count}
            }
            else {
                return data
            }
        })
        return {items}
    }),
    removeItem: (id) => set(state => {
        const items = state.items.filter(data => data.id !== id)
        return {items, count: state.count - 1}
    })
}))