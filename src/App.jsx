import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/css/modal-video.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';
import 'swiper/css/bundle';
import 'wowjs/css/libs/animate.css';
import '../src/assets/css/elegant-icons.css';
import '../src/assets/css/flaticon-set.css';
import 'react-circular-progressbar/dist/styles.css';

import '../src/assets/css/validnavs.css';
import '../src/assets/css/unit-test.css';
import '../src/assets/css/spacing.css'
import '../src/assets/css/style.css'

import React from 'react';
import Routers from './Routers';
import ScrollUpBtn from './components/others/ScrollUpBtn';
import Preloader from './components/others/Preloader';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { useEffect } from 'react';
import { LocaleProvider } from './components/services/LocaleContext';

function App() {

  //  Preloader 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)
  }, [])

  return (
    <>
      {isLoading ? <Preloader /> :
        <LocaleProvider>
          <div>
            <Helmet>
              <title>Durable & Stylish Paints for Interiors | High-Quality Wall Paints</title>
              <link rel="shortcut icon" href="/img/others/l3.ico"></link>
            </Helmet>
            <Routers />
            <ScrollUpBtn />
            <ToastContainer />
          </div>
        </LocaleProvider>
      }
    </>
  )
}

export default App
