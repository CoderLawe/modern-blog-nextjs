import 'tailwindcss/tailwind.css'
import { DetailProvider } from '../components/context/DetailContext';
import '../styles/globals.css';
import { SessionProvider } from "next-auth/react";
import { SectionProvider } from '../components/context/SectionsContext';
function MyApp({ Component, pageProps:{session, pageProps} }) {
  return(
    <SessionProvider session={session}>
      <SectionProvider>
        <DetailProvider>
          <Component {...pageProps} />
        </DetailProvider>
      </SectionProvider>
    </SessionProvider>

  )
}

export default MyApp
