import * as falso from '../theme/ReactLiveScope/falso.min';

window.onload = function () {
	if (typeof window !== 'undefined') {
		const titleStyles = 'color:#8a76d9; font-size: 22px; font-weight:bold;';
		const copyStyles = 'color:white; font-size: 14px';
		const exampleStyles = 'color:#8a76d9; font-size: 14px;';
		console.log('%cFalso\n\n' + '%cYou can use _ to access Falso functions here in the console. \n\n%c' + 'For example: _.randFullName()', titleStyles, copyStyles, exampleStyles)

		window._ = falso;
	}
};
