import { useRouter } from "next/router"

const DonateItem = () => {
	const router = useRouter()

	return (
		<div>
			{router.query.id}
		</div>
	)
}

export default DonateItem