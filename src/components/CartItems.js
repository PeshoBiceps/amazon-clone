import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

function CartItems({ cartItems }) {
    return (
        <Container>
            <Title>Shoping Cart</Title>
            <hr />
            <ItemsContainer>
                {
                    cartItems.map(data=>(
                        <CartItem 
                            id={data.id}
                            data={data.product}
                        />
                    ))
                }
                
            </ItemsContainer>
        </Container>
    )
}

export default CartItems

const Container = styled.div`
    flex: 0.8; //makes 80% width
    padding: 20px;
    margin-right: 18px;
    background-color: white;
`
const Title = styled.h1`
    margin-bottom: 8px;
`
const ItemsContainer = styled.div`

`