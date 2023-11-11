import {useRouter} from 'next/router'
import type {GetStaticProps, InferGetStaticPropsType} from 'next'

import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import Header from '../components/Header'
import {Footer} from '../components/Footer'

type Props = {
    // Add custom props here
}

const Homepage = (
    _props: InferGetStaticPropsType<typeof getStaticProps>
) => {

    const router = useRouter()
    const {i18n} = useTranslation('header')

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const clientSideLanguageChange = (newLocale: string) => {
        i18n.changeLanguage(newLocale);
        const {pathname, asPath, query} = router;
        router.push({pathname, query}, asPath, {locale: newLocale})
    }

    return (
        <>
            <Header clientSideLanguageChange={clientSideLanguageChange}/>
            <main>

            </main>
            <Footer/>
        </>
    )
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({
                                                                locale,
                                                            }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', [
            'common',
            'header',
            'footer',
        ])),
    },
})

export default Homepage
