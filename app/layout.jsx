import './globals.css'
import { Inter } from 'next/font/google'
import SideBar from '../components/SideBar'
import {QuioscoProvider} from '../context/QuioscoProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Pasos from '../components/Pasos'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <QuioscoProvider>
            <div className='md:flex'>
              <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5 h-screen'>
                <SideBar />
              </aside>
              <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
                <div className='p-10 mt-2'>
                  <Pasos />
                  {children}
                </div>
              </main>
            </div>
           <ToastContainer />
          </QuioscoProvider>
        </body>
      </html>
  )
}
