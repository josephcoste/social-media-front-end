import {Routes , Route } from 'react-router-dom';

import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import { Home } from './_root/pages'
import AuthLayout from './_auth/forms/AuthLayout';
import RootLayout from './_root/pages/RootLayout';
import SignupForm from './_auth/forms/SignupForm';

const App = () => {
  return (
    <main className = "flex h-screen">
<Routes>
  { }  
  <Route element={<AuthLayout/>}>
<Route path="/sign-in" element={<SigninForm/>}/>
<Route path="/sign-up" element={<SignupForm/>}/>
</Route>
  { }
  <Route element={<RootLayout/>}>
  <Route index element={<Home/>} />
  </Route>
 </Routes>

</main>
  )
}

export default App