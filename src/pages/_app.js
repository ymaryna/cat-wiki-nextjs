import '@/styles/globals.css'
import '@/styles/home.css'
import "@/styles/footer.css"
import '@/styles/specificCat.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/topTen.css'
import Layout from './Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
