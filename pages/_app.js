import 'tailwindcss/tailwind.css'
import { DetailProvider } from '../components/context/DetailContext';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return(
    <DetailProvider>
      <Component {...pageProps} />
    </DetailProvider>
  )
}

export default MyApp
