import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems'
import CartTotal from './CartTotal'

function Cart({ cartItems }) {

    const getPrice = () => {
        let price = 0
        cartItems.forEach((item) => {
            price += item.product.price * item.product.quantity
        })
        return price
    }

    const getCount = () => {
        let count = 0
        // Loop through all cart items
        cartItems.forEach((item) =>{
            //add the quantity of the cart item to total
            count += item.product.quantity;
        })
        return count;
    }

    return (
        <Container>
            <CartItems cartItems={cartItems} />
            <CartTotal getCount={getCount} getPrice={getPrice} />
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
    //TRouBLe
    padding: 14px 18px 0px 18px;
    align-items: flex-start;
`
