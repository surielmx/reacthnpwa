import React, { Component } from 'react';

const theme = {
	light: {
		background: '#ffffff',
		title: '#263238',
		paragraph: '#828286',
		link: '#828286',
		linkActive: '#3c4043',
	},
	dark: {
		background: '#3c4043',
		title: '#eeeeee',
		paragraph: '#eeeeee',
		link: '#eeeeee',
		linkActive: '#61dafb',
	},
};

const ThemeContext = React.createContext();
const ThemeConsumer = ThemeContext.Consumer;

class ThemeProvider extends Component {
	state = {
		theme: theme.light,
		chacked: false,
	};
	toggleTheme = ({ checked }) => {
		this.setState(prevState => {
			return {
				theme: checked ? theme.dark : theme.light,
				checked: !prevState.checked,
			};
		});
	};

	render() {
		const { theme, checked } = this.state;
		return (
			<ThemeContext.Provider value={{ theme, checked, onChange: this.toggleTheme }}>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}

export { ThemeProvider, ThemeConsumer };
