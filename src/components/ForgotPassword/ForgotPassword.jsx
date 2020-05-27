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
		color: 'black',
		fontSize: '28px',
		fontWeight: 'bold',
		float: 'center',
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
	btnCansel: {
		marginTop: '10px',
		marginBottom: '10px'
	},
});

const ForgotPassword = () => {
	const classes = useStyles();

  return (
    <div>
			<List className={`${classes.listStyle} && ${classes.root}`}>
				<div className={classes.top}>
					<div className={classes.lable}>Forgot password?</div>
					<div>Enter your email address below to reset your password</div>
				</div >
				<form className={classes.root} noValidate autoComplete="off">
					<TextField className={classes.textField} label="Email" variant="outlined" required />
				</form>
				<Button className={`${classes.button} && ${classes.btnCansel}`} variant="contained" color="primary">
					<Link href="/login" style={{ 
							textDecoration: 'none', 
							color: 'white' 
						}}
						>Cansel</Link>
				</Button>
			</List>
    </div>
  );
};

export default ForgotPassword ;