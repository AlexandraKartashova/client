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
		width: '100%',
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
		top: '160px',
	},
});

const emailSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email')
		.required('Required email'),
})

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const [errEmail, setErrEmail] = useState([]);

	const classes = useStyles();

	const changeInputEmail = (e) => {
		setEmail(e.target.value);
		emailSchema.validate({
			email: e.target.value,
		})
		.then(() => setErrEmail([]))
		.catch(e =>	setErrEmail(e.errors));
	};

  return (
    <div>
			<List className={`${classes.listStyle} && ${classes.root}`}>
				<div className={classes.top}>
					<div className={classes.lable}>Forgot password?</div>
					<div>Enter your email address below to reset your password</div>
				</div >
				<form className={classes.root} noValidate autoComplete="off" method='post'>
					<div className={classes.div}>
						<TextField 
							className={classes.textField} 
							label="Email" 
							variant="outlined" 
							value={email}
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
				</form>
				<Button 
					className={`${classes.button} && ${classes.btnCansel}`} 
					variant="contained" 
					color="primary">
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