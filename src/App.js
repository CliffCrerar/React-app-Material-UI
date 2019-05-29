/**
 * APP COMPONENT
 * @author Cliff Crerar
 * Created at     : 2019-02-07 00:36:28
 * Last modified  : 2019-02-07 00:58:29
 */

import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
// Root component
import Root from './components/Root';

// Import themes
import themePallete from './theme';
themePallete.typography.useNextVariants = true; // use this while topography variants are old in theme
// Create theme
const theme = createMuiTheme(themePallete);

class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={ theme }>
				<Root />
			</MuiThemeProvider>
		);
	}
}

export default App;
