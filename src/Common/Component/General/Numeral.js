// import statement
import numbro from 'numbro';

// define a language
numbro.registerLanguage({
	languageTag: 'en-ZA',
	delimiters: {
		thousands: ',',
		decimal: '.'
	},
	abbreviations: {
		thousand: 'k',
		million: 'm',
		billion: 'b',
		trillion: 't'
	},
	ordinal: (number) => {
		let b = number % 10;
		return (~~(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
	},
	currency: {
		symbol: 'R ',
		position: 'prefix',
		code: 'ZAR'
	},
	currencyFormat: {
		thousandSeparated: true,
		totalLength: 3,
		spaceSeparated: true,
		average: true
	},
	formats: {
		fourDigits: {
			totalLength: 3,
			spaceSeparated: true,
			average: true
		},
		fullWithTwoDecimals: {
			thousandSeparated: true,
			mantissa: 2
		},
		fullWithTwoDecimalsNoCurrency: {
			mantissa: 2,
			thousandSeparated: true
		},
		fullWithNoDecimals: {
			output: 'currency',
			thousandSeparated: true,
			mantissa: 0
		}
	}
});

// switch between languages
numbro.setLanguage('en-ZA');

// export
export default numbro;