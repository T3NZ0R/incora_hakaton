import type {DocumentProps} from 'next/document'
import Document, {Head, Html, Main, NextScript} from 'next/document'
import i18nextConfig from '../next-i18next.config'

type Props = DocumentProps & {
    // add custom document props
}

class MyDocument extends Document<Props> {
    render() {
        const currentLocale =
            this.props.__NEXT_DATA__.locale ??
            i18nextConfig.i18n.defaultLocale
        return (
            <Html lang={currentLocale}>

                <body>
                <Head><title>qwqwqw</title></Head>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
