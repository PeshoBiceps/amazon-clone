import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase'

function CartItem({ id, data }) {

    let options = []

    for (let i = 1; i < Math.max(data.quantity + 1, 20); i++) {
        options.push(<option value={i}> Qty: {i}</option>)
    }

    const changeQuantity = (newQuantity) => {
        db.collection('cartitems').doc(id).update({
            quantity: parseInt(newQuantity)
        })
    }

    const onDelete = (e) => {
        e.preventDefault()
        db.collection("cartitems").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return (
        <Container>
            <ImageContainer>
                <img src={data.image} alt='prod' />
            </ImageContainer>

            <CartItemInfo>

                <CartItemInfoTop>
                    <h2>{data.name}</h2>
                </CartItemInfoTop>

                <CartItemInfoBot>
                    <CartItemQantityContainer>
                        <select
                            value={data.quantity}
                            onChange={(e) => changeQuantity(e.target.value)}
                        >
                            {options}
                        </select>

                    </CartItemQantityContainer>
                    <CartItemDeleteContainer onClick={onDelete}>
                        Delete
                    </CartItemDeleteContainer>
                </CartItemInfoBot>

            </CartItemInfo>

            <CartItemPrice>${data.price}</CartItemPrice>

        </Container>
    )
}

export default CartItem

const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    border-bottom: 1px solid #DDD
`
const ImageContainer = styled.div`
    width: 180px;
    height: 180px;
    flex-shrink: 0;  //
    flex-grow: 0;    //
    margin-right: 16px;
    img{
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
`
const CartItemInfo = styled.div`
    flex-grow: 1;
`
const CartItemInfoTop = styled.div`
    color: #007185;
    h2{
        font-size: 18px;
    }
`
const CartItemInfoBot = styled.div`
    display: flex;
    margin-top: 4px;
    align-items: center;
`
const CartItemQantityContainer = styled.div`
    select {
        border-radius: 7px;
        background-color: #F0F2F2;
        padding: 8px;
        box-shadow: 0px 2px 5px rgba(15,15,15,.15);
    }

    select:focus{
        outline: none;
    }
`
const CartItemDeleteContainer = styled.div`
    color: #007185;
    margin-left: 16px;
    cursor: pointer;
`
const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
`