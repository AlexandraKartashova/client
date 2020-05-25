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
	btnSignIn: {
		float: 'right',
		fontWeight: 'bold',
		marginRight: '10px',
		marginTop: '4px'
	},
	btnSubmit: {
		marginTop: '10px',
		marginBottom: '10px'
	},
});

const SignUp = () => {
	const classes = useStyles();

  return (
    <div>
			<List className={`${classes.listStyle} && ${classes.root}`}>
				<div className={classes.top}>
					<div className={classes.lable}>Sign up</div>
					<Button className={`${classes.button} && ${classes.btnSignIn}`} variant="contained" color="primary">
						<Link href="/login" style={{ 
							textDecoration: 'none', 
							color: 'white' 
						}}
						>Sign In</Link>
					</Button>
				</div >
				<form className={classes.root} noValidate autoComplete="off">
					<TextField className={classes.textField} label="First name" variant="outlined" required />
					<TextField className={classes.textField} label="Last name" variant="outlined" required />
					<TextField className={classes.textField} label="Email" variant="outlined" required />
					<TextField className={classes.textField} label="Password" variant="outlined" required />
					<TextField className={classes.textField} label="Confirm password" variant="outlined" required />
				</form>
				<Button className={`${classes.button} && ${classes.btnSubmit}`} variant="contained" color="primary" disabled>Submit</Button>
			</List>
    </div>
  );
};

export default SignUp ;