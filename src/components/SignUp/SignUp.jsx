import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import * as Yup from 'yup';
import * as AXIOS from 'axios';
// import classes from './SignUp.module.css';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%'
	},
	listStyle: {
		width: '40%',
		marginLeft: '35%',
		boxShadow: '0 0 45px 15px #ccc',
		borderRadius: '10px',
		marginBottom:' 40px'
	},
	textField: {
		position: 'relative',
		marginBottom: '10px',
		width: '100%',
		paddingBottom: '30px'
	},
	textFieldErr: {
		borderWidth: '1px',
		borderColor: 'red !important'
	},
	textFieldOk: {
		borderWidth: '1px',
		borderColor: 'green !important'
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
	div: {
		display: 'flex',
		flexDirection: 'column',
		width: '70%',
		marginBottom: '12px',
	},
	pErrore: {
		color: 'red',
		position: 'absolute',
		float: 'left',
		marginRight: '60px',
	},
	pErrFirstName:{
		top: '145px',
	},
	pErrLastName:{
		top: '250px',
	},
	pErrEmail:{
		top: '360px',
	},
	pErrPassword:{
		top: '465px',
	},
	pErrConfirmPassword:{
		top: '575px',
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
			.required('Requered First name')
	})

	const lastNameSchema = Yup.object().shape({
		lastName: Yup.string() 
			.min(4, 'Too short Last Name!')
			.required('Requered Last namef')
	})

	const confirmPasswordSchema = Yup.object().shape({
		confirmPassword: Yup.string()
			.required('Requered password')
			.oneOf([Yup.ref('password'),null], 'Passwords must match')
		})

const SignUp = () => {
	const [email, setEmail] = useState('');
	const [errEmail, setErrEmail] = useState([]);
	const [password, setPassword] = useState('');
	const [errPassword, setErrPassword] = useState([]);
	const [firstName, setFirstName] = useState('');
	const [errFirstName, setErrFirstName] = useState([]);
	const [lastName, setLastName] = useState('');
	const [errLastName, setErrLastName] = useState([]);
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errConfirmPassword, setErrConfirmPassword] = useState([]);

	const classes = useStyles();

	const changeInputFirstName = (e) => {
		setFirstName(e.target.value);
		firstNameSchema.validate({
			firstName: e.target.value,
			lastName: lastName,
			email: email,
			password: password,
			confirmPassword: confirmPassword
		})
		.then(() => errFirstName([]))
		.catch(e =>	setErrFirstName(e.errors));
	};

	const changeInputLastName = (e) => {
		setLastName(e.target.value);
		lastNameSchema.validate({
			firstName: firstName,
			lastName: e.target.value,
			email: email,
			password: password,
			confirmPassword: confirmPassword
		})
		.then(() => errLastName([]))
		.catch(e =>	setErrLastName(e.errors));
	};

	const changeInputEmail = (e) => {
		setEmail(e.target.value);
		emailSchema.validate({
			firstName: firstName,
			lastName: lastName,
			email: e.target.value,
			password: password,
			confirmPassword: confirmPassword
		})
		.then(() => setErrEmail([]))
		.catch(e =>	setErrEmail(e.errors));
	};

	const changeInputPassword = (e) => {
		setPassword(e.target.value);
		passwordSchema.validate({
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: e.target.value,
			confirmPassword: confirmPassword
		})
		.then(() => setErrPassword([]))
		.catch(e => setErrPassword(e.errors));
	};

	const changeInputConfirmPassword = (e) => {
		setConfirmPassword(e.target.value);
		confirmPasswordSchema.validate({
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
			confirmPassword: e.target.value
		})
		.then(() => errConfirmPassword([]))
		.catch(e =>	setErrConfirmPassword(e.errors));
	};

	const loginHandler =  
	!((firstNameSchema.isValidSync({firstName})
		&& lastNameSchema.isValidSync({lastName})
		&& emailSchema.isValidSync({email})
		&& passwordSchema.isValidSync({password})
		&& (confirmPassword === password)
		));

	const onSubmitHandler = async() => {
			const result = await AXIOS.post('http://localhost:8080/register', {email, password, firstName, lastName});
		console.log('result', result)
	}

  return (
    <div>
			<List className={`${classes.listStyle} && ${classes.root}`}>
				<div className={classes.top}>
					<div className={classes.lable}>Sign up</div>
				</div >
				<form className={classes.root} autoComplete="off" method='post'>
					<div className={classes.div}>
						<TextField 
							className={classes.textField} 
							value={firstName}
							label="First name" 
							variant="outlined" 
							onInput={changeInputFirstName}
							required 
							InputProps={{
								classes: {
									notchedOutline: (errFirstName?.length > 0) ? classes.textFieldErr : classes.textFieldOk,
								}
							}}
						/>
						{(errFirstName?.length > 0) 
								&& <p className={`${classes.pErrore} 
								&& ${classes.pErrFirstName}`}>{errFirstName[0]}</p>}
					</div>
					<div className={classes.div}>
						<TextField 
							className={classes.textField} 
							value={lastName}
							label="Last name" 
							variant="outlined" 
							onInput={changeInputLastName}
							required
							InputProps={{
								classes: {
									notchedOutline: (errLastName?.length > 0) ? classes.textFieldErr : classes.textFieldOk,
								}
							}}
						/>
						{(errLastName?.length > 0) 
								&& <p className={`${classes.pErrore} 
								&& ${classes.pErrLastName}`}>{errLastName[0]}</p>}
					</div>
					<div className={classes.div}>
						<TextField 
							className={classes.textField} 
							value={email}
							label="Email" 
							variant="outlined" 
							onInput={changeInputEmail}
							required 
							InputProps={{
								classes: {
									notchedOutline: (errEmail?.length > 0) ? classes.textFieldErr : classes.textFieldOk,
								}
							}}
						/>
						{(errEmail?.length > 0) 
						&& <p className={`${classes.pErrore} 
						&& ${classes.pErrEmail}`}>{errEmail[0]}</p>}
					</div>
					<div className={classes.div}>
						<TextField 
							className={classes.textField} 
							value={password}
							// type='password'
							label="Password" 
							variant="outlined" 
							onInput={changeInputPassword}
							required 
							InputProps={{
								classes: {
									notchedOutline: (errPassword?.length > 0) ? classes.textFieldErr : classes.textFieldOk,
								}
							}}
						/>
							{(errPassword?.length > 0) 
								&& <p className={`${classes.pErrore} 
								&& ${classes.pErrPassword}`}>{errPassword[0]}</p>}
					</div>
					<div className={classes.div}>
						<TextField 
							className={classes.textField}
							value={confirmPassword}
							label="Confirm password" 
							variant="outlined"
							onInput={changeInputConfirmPassword}
							required
							InputProps={{
								classes: {
									notchedOutline: (errConfirmPassword?.length > 0) ? classes.textFieldErr : classes.textFieldOk,
								}
							}}
						/>
						{(errConfirmPassword?.length > 0) 
							&& <p className={`${classes.pErrore} 
							&& ${classes.pErrConfirmPassword}`}>{errConfirmPassword[0]}</p>}
					</div>
				</form>
				<div>
					<Button 
						className={`${classes.button} && ${classes.btnSubmit}`} 
						id='btnSubmit'
						variant="contained" 
						color="primary" 
						disabled={loginHandler}
						onClick={onSubmitHandler}
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