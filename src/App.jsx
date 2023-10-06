import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/about'
import PageNotFound from './pages/pageNotFound'
import Signup from './pages/signup'
import Login from './pages/login'
import CourseList from './Course/CourseList'
import Contact from './pages/Contact'
import Denied from './pages/Denied'
import CourseDescription from './Course/CourseDescription'
import RequireAuth from './components/Auth/RequireAuth'
import CheckoutFailure from './pages/Payment/CheckoutFailure'
import CheckoutSuccess from './pages/Payment/CheckoutSuccess'
import Profile from './pages/User/Profile'
import EditProfile from './pages/User/EditProfile'
import Checkout from './pages/Payment/Checkout'
import Displaylectures from './pages/Dashboard/Displaylectures'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses" element={<CourseDescription />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/denied' element={<Denied />} />
        <Route path='*' element={<PageNotFound />} />

        <Route element={<RequireAuth allowedRoles={['ADMIN',]} />}>
          <Route path="/course/create" element={<CreateCourse />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/user/editprofile' element={<EditProfile />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout/success' element={<CheckoutSuccess />} />
          <Route path='/checkout/fail' element={<CheckoutFailure />} />
          <Route path='/course/displaylectures' element={<Displaylectures />}/>
        </Route>
        <Route path="*" element={<NotFound />}></Route>

      </Routes>
    </>
  )
}

export default App
