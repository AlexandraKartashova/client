import React, { useState } from 'react';
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
	btnSignIn: {
		fontWeight: 'bold',
		marginRight: '10px',
	},
	btnSubmit: {
		marginTop: '10px',
		marginBottom: '10px'
	},
});

const emailSchema = Yup.object().shape({
		email: Yup.string()
			.email('Invalid email')
			.required('Required email'),
	})
	
	const passwordSchema = Yup.object().shape({
		password: Yup.string()
			.min(6, 'Too short password!')
			.max(10, 'Too long password!')
			.required('Requered password')
			.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z])(?=.*[0-9])).{5,10}$/, 
			'Password must contain: 1 lowercaseletter 1 capital letter 1 digit password length 6-10 characters')
	})

	const firstNameSchema = Yup.object().shape({
		firstName: Yup.string() 
			.min(4, 'Too short Name!')
			.required('Requered password')
	})

	const lastNameSchema = Yup.object().shape({
		lastName: Yup.string() 
			.min(4, 'Too short Name!')
			.required('Requered password')
	})

	const confirmPasswordSchema = Yup.object().shape({
		confirmPassword: Yup.string()
			.min(6, 'Too short password!')
			.max(10, 'Too long password!')
			.required('Requered password')
			.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z])(?=.*[0-9])).{5,10}$/, 
			'Password must contain: 1 lowercaseletter, 1 capital letter, 1 digit password length, 6-10 characters')
			.oneOf([Yup.href('password'), null], 'Passwords must match')
		})

const SignUp = () => {
	const classes = useStyles();

	const loginHandler = () => {

	}

  return (
    <div>
			<List className={`${classes.listStyle} && ${classes.root}`}>
				<div className={classes.top}>
					<div className={classes.lable}>Sign up</div>
					
				</div >
				<form className={classes.root} noValidate autoComplete="off" method='post'>
					<TextField 
						className={classes.textField} 
						value=''
						label="First name" 
						variant="outlined" 
						required 
					/>
					<TextField 
						className={classes.textField} 
						value=''
						label="Last name" 
						variant="outlined" 
						required 
					/>
					<TextField 
						className={classes.textField} 
						value=''
						label="Email" 
						variant="outlined" 
						required 
					/>
					<TextField 
						className={classes.textField} 
						value=''
						label="Password" 
						variant="outlined" 
						required 
					/>
					<TextField 
						className={classes.textField}
						value=''
						label="Confirm password" 
						variant="outlined" 
						required 
					/>
				</form>
				<div>
					<Button 
						className={`${classes.button} && ${classes.btnSubmit}`} 
						variant="contained" 
						color="primary" 
						disabled
					>Submit</Button>
					<Button 
						className={`${classes.button} && ${classes.btnSignIn}`} 
						// onClick={this.loginHandler}
						variant="contained" 
						color="primary">
							<Link href="/login" style={{ 
								textDecoration: 'none', 
								color: 'white' 
							}}
					>Sign In</Link>
					</Button>
				</div>
			</List>
    </div>
  );
};

export default SignUp ;