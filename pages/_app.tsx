import { AppProps } from 'next/app'
import Layout from '@components/Layout/Layout.tsx'
import 'semantic-ui-css/semantic.min.css'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (    
    <Layout>
      <Component {...pageProps} />    
    </Layout>      
  )
}

export default MyApp