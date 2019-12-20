import React, { Component } from 'react';

const theme = {
	light: {
		background: '#ffffff',
		title: '#263238',
		paginationNumber: '#3c4043',
		link: '#828286',
		linkActive: '#3c4043',
		skeleton: '#efefef',
	},
	dark: {
		background: '#0d1219',
		title: '#afafaf',
		paginationNumber: '#eeeeee',
		link: '#828286',
		linkActive: '#61dafb',
		skeleton: '#313131',
	},
};

const ThemeContext = React.createContext();
const ThemeConsumer = ThemeContext.Consumer;

class ThemeProvider extends Component {
	state = {
		theme: theme.light,
		chacked: false,
	};
	componentDidMount = () => {
		this.getThemeSelected();
	};
	setThemeSelected = checked => {
		const theme = checked ? 'dark' : 'light';
		localStorage.setItem('theme', theme);
	};
	getThemeSelected = () => {
		const hasTheme = localStorage.getItem('theme');
		if (hasTheme !== null) {
			const checked = hasTheme === 'dark';
			this.toggleTheme({ checked });
		}
	};
	toggleTheme = ({ checked }) => {
		const thisTheme = checked ? 'dark' : 'light';
		this.setThemeSelected(checked);
		this.setState({
			theme: theme[thisTheme],
			checked,
		});
		document.body.style.backgroundColor = theme[thisTheme].background;
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
