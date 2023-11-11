
import { useTranslation } from 'next-i18next';

export default function Home() {

  const {t} = useTranslation()
  return (
    <div>
          {t("helloWorld")} 
    </div>
  )
}
