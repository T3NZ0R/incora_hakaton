import { Grid, Paper, Typography } from "@mui/material";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import { useState } from "react";

const LoginRegisterForm = () => {
	const [activeForm, setActiveForm] = useState<string>('login');

	const switchForm = (formType:string) => {
	  setActiveForm(formType);
	};

	return (
	  <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
		<Grid item xs={10} sm={8} md={6} lg={4}>
		  <Paper elevation={3} style={{ padding: '20px' }}>
			<Typography variant="h5" align="center" gutterBottom>
			  {activeForm === 'login' ? 'Login' : 'Register'}
			</Typography>
			{activeForm === 'login' ? <LoginForm switchForm={switchForm} /> : <RegisterForm switchForm={switchForm} />}
		  </Paper>
		</Grid>
	  </Grid>
	);
  };

  export default LoginRegisterForm;
