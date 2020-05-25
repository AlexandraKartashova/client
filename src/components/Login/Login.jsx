import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		// marginBottom: '0px'
	},
	listStyle: {
		width: '30%',
		marginLeft: '35%',
		boxShadow: '0 0 45px 15px #ccc',
		borderRadius: '10px',
		marginBottom:' 40px'
	},
	textField: {
		marginBottom: '10px',
		width: '150%'
	},
	button: {
		textTransform: 'none',
		fontSize: '20px',
    marginRight: '5px',
		borderRadius: '5px',
	},
	lable: {
		display: 'inlineBlock',
		color: 'blue',
		fontSize: '30px',
		fontWeight: 'bold',
		float: 'left',
		marginBottom: '15px',
		marginLeft: '10px',
		marginTop: '4px'

	},
	top: {
		display: 'inline',
		width: '80%',
		marginTop: '15px',
		marginBottom: '20px',
	},
	btnSignUp: {
		float: 'right',
		fontWeight: 'bold',
		marginRight: '10px',
		marginTop: '4px'
	},
	btnSubmit: {
		marginBottom: '10px'
	},
});

const Login = () => {
	const classes = useStyles();

  return (
    <div>
			<List className={`${classes.listStyle} && ${classes.root}`}>
				<div className={classes.top}>
					<div className={classes.lable}>Sign in</div>
					<Button className={`${classes.button} && ${classes.btnSignUp}`} variant="contained" color="primary">
						<Link href="/register" style={{ 
							textDecoration: 'none', 
							color: 'white' 
						}}
						>Sign Up</Link>
					</Button>
				</div >
				<form className={classes.root} noValidate autoComplete="off">
					<TextField className={classes.textField} label="Email" variant="outlined" required />
					<TextField className={classes.textField} label="Password" variant="outlined" required />
				</form>
				<div className={classes.top}>
					<Link href="/restore-password" style={{ 
							textDecoration: 'none'
						}}
					>Forgot password?</Link>
				</div>
				<Button className={`${classes.button} && ${classes.btnSubmit}`} variant="contained" color="primary" disabled>Submit</Button>
			</List>
    </div>
  );
};

export default Login ;