import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
	root: {
		textTransform: 'none',
		fontSize: '20px',
		border: '1px solid #ccc',
    marginRight: '5px',
    borderRadius: '4px'
	},
	menuButton: {
		marginRight: '10px',
	},
	title: {
		flexGrow: 1,
	},
});

const Header = () => {
	const classes = useStyles();
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						News
					</Typography>
					<Button className={classes.root} color="inherit">SignIn</Button>
					<Button className={classes.root} color="inherit">SignUp</Button>
				</Toolbar>
		</AppBar>
		</div>
	);
};

export default Header ;