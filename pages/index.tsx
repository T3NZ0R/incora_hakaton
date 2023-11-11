import {useRouter} from 'next/router'
import type {GetStaticProps, InferGetStaticPropsType} from 'next'

import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {useEffect} from "react";
import SwiperSlice from '../components/SwiperSlice'
import { Grid } from '@mui/material'


type Props = {
    // Add custom props here
}

const Homepage = (
    _props: InferGetStaticPropsType<typeof getStaticProps>
) => {





    return (
        <>
            <main>
              {/*<Grid sx={{*/}
              {/*  padding:"20vh 0",*/}
              {/*  border:'1px solid black',*/}
              {/*  display:'flex',*/}
              {/*}}>*/}
              {/*  <SwiperSlice/>*/}
              {/*</Grid>*/}
            </main>
        </>
    )
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({
                                                                locale,
                                                            }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'uk', [
            'header',
            'footer',
        ])),
    },
})

export default Homepage
