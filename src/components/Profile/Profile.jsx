import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
// import axios from 'axios';
import * as AXIOS from 'axios';
import Footer from '../Footer/Footer';
// import Header from '../Header/Header';

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
	btnCancel: {
		fontWeight: 'bold',
		marginRight: '10px',
	},
	btnChange: {
		marginTop: '10px',
		marginBottom: '10px'
	},
	div: {
		display: 'flex',
		flexDirection: 'column',
		width: '70%',
		marginBottom: '12px',
	},
});

const Profile = () =>{
	const classes = useStyles();
	const [id,setId] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	// const [confirmPassword, setConfirmPassword] = useState('');

	const onSubmitHandler = async() => {
		const result = await AXIOS.get(`http://localhost:8080/user/:${id}`);
		console.log('result', result)
	}

	const	chengeDataUser = async() => {
		const result = await AXIOS.patch('http://localhost:8080/user/:id', {email, password, firstName, lastName});
		console.log('result', result)
	}
	// const onDesabled = true;
	// console.log(onDesabled)
	// const unLockTextField = () => {
	// 	const onDesabled = true;
	// 	console.log(onDesabled)
	// }

	return(
		<div>
			{/* <Header />/ */}
			{/* <List className={`${classes.listStyle} && ${classes.root}`}> */}
				<div className={classes.top}>
					<div className={classes.lable}>Profile</div>
				</div >
				<form className={classes.root} autoComplete="off" method='post'>
					<div className={classes.div}>
						<TextField 
							className={classes.textField} 
							// disabled
							// value={firstName}
							variant="outlined" 
							// onInput={changeInputFirstName}
							required 
						/>
					</div>
					<div className={classes.div}>
						<TextField 
							className={classes.textField}
							// disabled 
							// value={lastName}
							variant="outlined" 
							// onInput={changeInputLastName}
							required
						/>
					</div>
					<div className={classes.div}>
						<TextField 
							className={classes.textField} 
							// disabled
							// value={password}
							// type='password'
							variant="outlined" 
							// onInput={changeInputPassword}
							required 
						/>
					</div>
					<div className={classes.div}>
						<TextField 
							className={classes.textField}
							// value={confirmPassword}
							variant="outlined"
							// disabled={onDesabled}
							// onInput={changeInputConfirmPassword}
							required
						/>
					</div>
				</form>
				<div>
					<Button 
						className={`${classes.button} && ${classes.btnChange}`} 
						id='btnChange'
						variant="contained" 
						color="primary" 
						onClick={chengeDataUser}
						// disabled={loginHandler}
					>Change</Button>
					<Button 
						className={`${classes.button} && ${classes.btnCancel}`} 
						// onClick={this.loginHandler}
						variant="contained" 
						color="primary">
						Cancel	
					</Button>
				</div>
				<Footer />
			{/* </List> */}
		</div>
	)
}

export default Profile;