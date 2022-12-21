import { useShoppingCart } from "../hooks/ShoppingCartContext"
import storeItems from "../data/items.json";
import { Stack } from "react-bootstrap";

type CartItemProps = {
    id:number,
    quantity:number
}

export function CartItem({id, quantity}:CartItemProps){
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find(i => i.id === id);
    if(item == null) return null;
    return (
        <Stack direction="horizontal" gap={2}>
            <img
                src={item.imgUrl}
                style={{ width:"125px", height:"75px", objectFit:"cover" }}>
            </img>
        </Stack>
    )
}