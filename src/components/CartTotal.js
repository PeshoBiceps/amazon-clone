import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

function CartTotal({ getPrice, getCount }) {

    return (
        <Container>
            <Subtotal>Subtotal ({getCount()} items): 
            <NumberFormat value={getPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </Subtotal>
            <CheckoutButton>
                Proceed to Checkout
            </CheckoutButton>
        </Container>

    )
}

export default CartTotal

const Container = styled.div`
    flex: 0.3; // width 20%
    padding: 20px;
    background-color: white;
`
const Subtotal = styled.h2`
    margin-bottom: 16px;

`

const CheckoutButton = styled.button`
    background-color: #f0c15b;
    width: 100%;
    padding: 4px 8px;
    border: 2px solid #a88734;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    :hover{
        background-color: #ddb347;
    }
`
