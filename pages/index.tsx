import {useRouter} from 'next/router'
import type {GetStaticProps, InferGetStaticPropsType} from 'next'

import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {useEffect} from "react";

type Props = {
    // Add custom props here
}

const Homepage = (
    _props: InferGetStaticPropsType<typeof getStaticProps>
) => {

    const router = useRouter()
    const {i18n} = useTranslation()
    useEffect(()=>{
        const {pathname, asPath, query} = router;
        router.push({pathname, query}, asPath, {locale: i18n.language})
    }, [i18n.language])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars


    return (
        <>
            <main>

            </main>
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
