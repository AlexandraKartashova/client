import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import * as Yup from 'yup';

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
	btnSignUp: {
		fontWeight: 'bold',
		marginRight: '10px',
		marginBottom: '10px'
	},
	btnSubmit: {
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
	pErrEmail:{
		top: '145px',
	},
	pErrPassword:{
		top: '250px',
	}
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
		'Password must contain: 1 lowercaseletter, 1 capital letter, 1 digit password, length 6-10 characters'),
})

const Login = () => {
	const [email, setEmail] = useState('');
	const [errEmail, setErrEmail] = useState([]);
	const [password, setPassword] = useState('');
	const [errPassword, setErrPassword] = useState([]);

	const classes = useStyles();

	const changeInputEmail = (e) => {
		setEmail(e.target.value);
		emailSchema.validate({
			email: e.target.value,
			password: password
		})
		.then(() => setErrEmail([]))
		.catch(e =>	setErrEmail(e.errors));
	};

	const changeInputPassword = (e) => {
		setPassword(e.target.value);
		passwordSchema.validate({
			email: email,
			password: e.target.value
		})
		.then(() => setErrPassword([]))
		.catch(e => setErrPassword(e.errors));
	};

	const onSubmitHandler =
	!((emailSchema.isValidSync({email})
		&& passwordSchema.isValidSync({password})
		));
		
  return (
    <div>
			<List className={`${classes.listStyle} && ${classes.root}`}>
				<div className={classes.top}>
					<div className={classes.lable}>Sign in</div>
				</div >
				<form className={classes.root} noValidate autoComplete="off" method='post'>
					<div className={classes.div}>
						<TextField 
							className={classes.textField} 
							value={email}
							label="Email" 
							variant="outlined" 
							required
							onInput={changeInputEmail}
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
					<div className={classes.div} >
						<TextField 
							className={classes.textField} 
							value={password}
							label="Password" 
							variant="outlined"
							required
							onInput={changeInputPassword}
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
				</form>
				<div className={classes.top}>
					<Link href="/restore-password" style={{ 
							textDecoration: 'none',
							fontSize: '18px',
							fontWeight: '600',
					}}
					>Forgot password?</Link>
				</div>
				<div>
					<Button 
						className={`${classes.button} && ${classes.btnSubmit}`} 
						variant="contained" 
						color="primary"
						// onClick={onSubmitHandler}
						disabled={onSubmitHandler}
					>Submit</Button>
					<Button 
						className={`${classes.button} && ${classes.btnSignUp}`} 
						variant="contained" 
						color="primary">
							<Link href="/register" style={{ 
								textDecoration: 'none', 
								color: 'white' 
							}}
						>Sign Up</Link>
					</Button>
				</div>
			</List>
    </div>
  );
};

export default Login ;