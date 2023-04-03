import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { readFunc, errorFunc } from './config/action'
import axios from 'axios';
import Panel from './components/admin/Panel';
import Form from './components/admin/Form';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/includes/Header';
import Blog from './components/user/Blog';
import Oneblog from './components/user/Oneblog';

function App() {
  const dispatch = useDispatch()
  // TODO:get data from api call and send it to reducer
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(promise => promise.data)
      .then(data => { dispatch(readFunc(data)) })
      .catch(error => { dispatch(errorFunc(error)) })
  }, [dispatch])


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to={'/blog'} />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<Oneblog />} />
          <Route path='/panel' element={<Panel />} />
          <Route path='/panel/addblog' element={<Form />} />
          <Route path='/panel/update/:updateId' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
