import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase'

function Product({ title, price, rating, image, id }) {

    const addToCart = () => {
        const cartItem = db.collection('cartitems').doc(id);
        cartItem.get()
            .then((doc) => {
                if (doc.exists) {
                    cartItem.update({
                        quantity: doc.data().quantity +1
                    })
                } else {
                    db.collection('cartitems').doc(id).set({
                        name: title,
                        image: image,
                        price: price,
                        quantity: 1
                    })
                }
            })
    }

    return (
        <Component>
            <Title>
                {title}
            </Title>

            <Price>
                ${price}
            </Price>

            <Rating>
                {
                    Array(rating)
                        .fill()
                        .map(rating => <p>⭐</p>)
                }
            </Rating>

            <Image src={image} alt='Product' />

            <ActionSection>

                <AddToCartButton onClick={addToCart}>
                    Add To Cart
                </AddToCartButton>

            </ActionSection>

        </Component>
    )
}

export default Product

const Component = styled.div`
    background-color:white;
    z-index: 100;
    flex:1;
    padding: 20px;
    margin: 10px;
    max-height:400px;
    display: flex;
    flex-direction: column;
`
const Title = styled.span`

`
const Price = styled.span`
    font-weight: 500;
    margin-top:3px;
`
const Rating = styled.div`
    display:flex;
`
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`
const ActionSection = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px; 
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;
`
