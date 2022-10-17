
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Order from './components/Order';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <PrivateRoute><Home></Home></PrivateRoute>
        },
        {
          path: '/orders',
          element: <PrivateRoute><Order></Order></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
