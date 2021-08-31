import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'

function Login({ setUser }) {

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            let user = result.user;
            let newUser = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            localStorage.setItem('user', JSON.stringify(newUser))
            setUser(newUser)
        }).catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <Component>
            <Content>
                <AmazonLogo src={'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png'} />
                <h1>Sign into Amazon</h1>
                <LoginButton onClick={signIn}>
                    Sign in with gooogle
                </LoginButton>
            </Content>
        </Component>
    )
}

export default Login

const Component = styled.div`
    width: 100;
    height: 100vh;
    background-color: #f8f8f8;
    display: grid;
    place-items: center;
`
const Content = styled.div`
    background-color: white;
    padding: 100px;
    border-radius: 5px;
    box-shadow: 0 1px 3px gray;
    text-align: center;
`
const AmazonLogo = styled.img`
    height: 100px;
    margin-bottom: 40px;
`

const LoginButton = styled.button`
    margin-top: 50px;
    background-color: #f0c14b;
    border-radius: 4px;
    font-size: 16px;
    padding: 8px 6px;
    cursor: pointer;
`