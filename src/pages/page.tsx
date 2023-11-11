import Image from 'next/image'
import styles from './page.module.css'
import { useTranslation } from 'react-i18next';

export default function Home() {

  const {t} = useTranslation()
  return (
    <>
          {t("helloWorld")}
    </>
  )
}
