import './App.css'
import Card from './components/Card/Card'
import Layout from './components/Layout/Layout'

import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LoginForm from './components/LoginForm/LolginForm';
import UserForm from './components/UserForm/UserForm';

function App() {
  return <>
    <Layout>
      <div className='flex w-100 h-full items-center justify-center md:justify-end pr-1'>
        <Card>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginForm/>}/>
              <Route path="/user" element={<UserForm/>}/>
              <Route
                path="*"
                  element={<Navigate to="/login" replace />}
              />
              </Routes>
            </BrowserRouter>
        </Card>
      </div>
    </Layout>
  </>

}

export default App
