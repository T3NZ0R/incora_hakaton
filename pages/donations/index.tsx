import { Grid, InputAdornment, TextField } from "@mui/material"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Donate from "./components/Donate";
import SearchIcon from '@mui/icons-material/Search';
export interface ImockData{
	id: string,
	img: string,
	title: string,
	description: string,
	link: string,
}

const mockData:ImockData[] = [ 
	{	
		id: '1',
		link: 'sdjfsjfdj',
		title: 'sjhjfhfjs',
		description: 'fkjskjdfkjsdklsdkjfdjhdfj jfdji shfjsdkjsd jkhjsdh isfh hsfhsf',
		img: 'https://static.dw.com/image/51802658_605.jpg',
	},
	{	
		id: '2',
		link: 'sdjfsjfdj',
		title: 'sjhjfhfjs',
		description: 'fkjskjdfkjsdklsdkjfdjhdfj jfdji shfjsdkjsd jkhjsdh isfh hsfhsf',

		img: 'https://static.dw.com/image/51802658_605.jpg',
	},
	{	
		id: '3',
		link: 'sdjfsjfdj',
		title: 'sjhjfhfjs',
		description: 'fkjskjdfkjsdklsdkjfdjhdfj jfdji shfjsdkjsd jkhjsdh isfh hsfhsf',
		img: 'https://static.dw.com/image/51802658_605.jpg',
	}

]


const Donations = () => {

	const {t} = useTranslation();

	

	const [filterName, setFilterName] = useState('');

	const handleFilterName = (event: React.ChangeEvent<HTMLInputElement>) => {
		// setPage(0);
		setFilterName(event.target.value);
	  };

	return (
		<Grid container spacing={2} mb={2} sx={{
			border:'1px solid black',
			margin:'0 auto',
			width: '70%',
			display:"flex",
			flexDirection:"column"
		}}>
			<Grid item xs={6} md={4} sx={{
				width:'100%',
				margin: '0 auto',
				paddingBottom:'20px'
			}}>
				<TextField
					fullWidth
					size="small"
					value={filterName}
					onChange={handleFilterName}
					placeholder={'search'}
					InputProps={{
					startAdornment: (
						<InputAdornment position="start">
						<SearchIcon sx={{
							cursor:'pointer'
						}} fontSize="large" color="primary" />
						</InputAdornment>
					),
					}}
				/>

			</Grid>
			<Grid sx={{
				display:'flex',
				gap:'20px',
				flexDirection:'column'
			}}>
				{mockData?.length && mockData.map((item: ImockData) => (<Donate item={item}/>))}
			</Grid>
		</Grid>
	)
}

export default Donations