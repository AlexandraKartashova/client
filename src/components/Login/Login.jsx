import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: '30px'
	},
	listStyle: {
		width: '30%',
		marginLeft: '35%',
		boxShadow: '0 0 45px 15px #ccc'
	},
	textField: {
		marginBottom: '15px',
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
		marginBottom: '15px',
		float: 'left'
	},
	top: {
		display: 'inline',
		width: '75%',
		marginBottom: '20px'
	},
	btnSignUp: {
		float: 'right',
		fontWeight: 'bold',
	},
	btnSubmit: {
		marginTop: '10px'
	}
});

const Login = () => {
	const classes = useStyles();

  return (
    <div>
			<List className={`${classes.listStyle} && ${classes.root}`}>
				<div className={classes.top}>
					<div className={classes.lable}>Sign in</div>
					<Button className={`${classes.button} && ${classes.btnSignUp}`} variant="contained" color="primary">Sign up</Button>
				</div >
				<form className={classes.root} noValidate autoComplete="off">
					<TextField className={classes.textField} label="Email" variant="outlined" required />
					<TextField className={classes.textField} label="Password" variant="outlined" required />
					<Button className={`${classes.button} && ${classes.btnSubmit}`} variant="contained" color="primary" disabled>Submit</Button>
				</form>
			</List>
    </div>
  );
};

export default Login ;