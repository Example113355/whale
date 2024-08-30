import {
  BrowserRouter as Router,
  Routes, Route, useLocation
} from 'react-router-dom'
import './assets/style.css'

import HomePage from './pages/home'
import HomeBlogController from './components/home_blog_controller'
import VipHome from './pages/vip_home'
import VipPackage from './pages/vip_package'
import Header from './components/header'
import Footer from './components/footer'
import VipHeader from './components/vip_header'
import VipFooter from './components/vip_footer'
import CartPage from './pages/cart'

const App = () => {
  const location = useLocation()

  const renderHeader = () => {
    if (location.pathname.startsWith('/vip') || location.pathname.startsWith('/cart')) {
      return <VipHeader />
    }
    return <Header />
  }

  const renderFooter = () => {
    if (location.pathname.startsWith('/vip') || location.pathname.startsWith('/cart')) {
      return <VipFooter />
    }
    return <Footer />
  }

  return (
    <>
      {renderHeader()}

      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/vip" element={<VipHome />} />
        <Route path="/vip/:type" element={<VipPackage />} />
        <Route path="/" element={<HomePage />} />
        <Route path='/:id' element={<HomeBlogController />} />
      </Routes>

      {renderFooter()}
    </>
  )
}

export default App
