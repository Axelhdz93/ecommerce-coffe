import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductType } from "@/types/product";
import { toast } from "sonner"


interface useLovedProductsTypes {
    lovedItems: ProductType[],
    addLovedItem: (data: ProductType) => void
    removeLovedItem: (id: number) => void
}

export const useLovedProducts = create(persist<useLovedProductsTypes>((set, get) => ({
    lovedItems: [],
    addLovedItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find((item) => item.id === data.id)

        if (existingItem) {
            return toast.error("El producto ya existe en la lista")
        }

        set({
            lovedItems: [...get().lovedItems, data]
        })
        toast.success("Producto añadido a la lista")
    },

    removeLovedItem: (id: number) => {
        set({ lovedItems: [...get().lovedItems.filter((item) => item.id !== id) ] })
        toast.success("Producto eliminado de la lista")
    },

    

}), {
    name:"loved-products-storage",
    storage: createJSONStorage(() => localStorage)
}))
