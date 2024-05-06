import React from 'react'
import {Route, Routes} from 'react-router-dom'
import OrderHome from './pages/OrderHome';
import CreateItem from './pages/CreateItem';
import ShowItem from './pages/ShowItem';
import EditItem from './pages/EditItem';
import DeleteItem from './pages/DeleteItem';
import OrderSingleCard from './components/Orderhome/OrderSingleCard';
import UserView from './pages/UserView';

import Cart from './pages/Cart';



const App = () => {
  return (
    <Routes>

      <Route path='/order' element={ <OrderHome/>} />
      <Route path='/order/create' element={<CreateItem/>} />
      <Route path='/order/edit/:_id' element={<EditItem/>} />
      <Route path='/order/delete/:_id' element={<DeleteItem/>} />
      <Route path='/order/details/:_id' element={<ShowItem/>} />
      <Route path='/home/userview' element={<UserView/>}/>
      <Route path='/Cart/:id' element={<Cart/>} />
   
      
    </Routes>
  )
}

export default App