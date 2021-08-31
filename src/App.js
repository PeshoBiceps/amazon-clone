import './App.css';
import { useState, useEffect } from 'react'
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import { db, auth } from './firebase'

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [cartItems, setCartItems] = useState([])


  const getCartItems = () => {
    db.collection('cartitems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems)
    })
  }

  const signOut = () => {
    auth.signOut().then(()=>{
      localStorage.removeItem('user')
      setUser(null)
    })
  }

  useEffect(() => {
    getCartItems()
  }, [])

  console.log('User', user)

  return (
    <Router>
      {
        !user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header signOut={signOut} user={user} cartItems={cartItems} />

            <Switch>

              <Route path='/' exact>
                <Home />
              </Route>

              {/* <Route path='/login'>
            <Login setUser={setUser} />
          </Route> */}

              <Route path='/cart'>
                <Cart cartItems={cartItems} />
              </Route>

            </Switch>

          </Container>
        )
      }
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
  height:100vh;
`
