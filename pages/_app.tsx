import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config.js'
import '../styles/global.css'
import Layout from "../layout/layout";

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
)

// https://github.com/i18next/next-i18next#unserializable-configs
export default appWithTranslation(MyApp , nextI18NextConfig )
