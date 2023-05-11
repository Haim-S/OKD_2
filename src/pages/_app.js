import '@/styles/globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Accessibility from '@/components/accessibility/Accessibility';
import { Provider } from 'react-redux'
import { store } from '@/store/store'


export default function App({ Component, pageProps }) {



  return(
    <>
    <Provider store={store}>
    <Navbar/>
    {/* <Accessibility/> */}
     <Component {...pageProps} />
    <Footer/>
   </Provider>
    </>
     )
}
