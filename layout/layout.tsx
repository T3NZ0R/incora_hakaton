import React, {useEffect} from 'react';
import {Footer} from "../components/Footer";
import Header from "../components/Header";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";

const Layout = ({children}) => {
    const router = useRouter()
    const {i18n} = useTranslation('header')
    useEffect(()=>{
        const {pathname, asPath, query} = router;
        router.push({pathname, query}, asPath, {locale: i18n.language})
    }, [i18n.language])

    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default Layout;
