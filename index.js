const isLeapYear = (year) => {
	return (
		(year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
		(year % 100 === 0 && year % 400 === 0)
	);
};
const getFebDays = (year) => {
	return isLeapYear(year) ? 29 : 28;
};
let calendar = document.querySelector('.calendar');
const month_names = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
let month_picker = document.querySelector('#month-picker');
const dayTextFormate = document.querySelector('.day-text-formate');
const timeFormate = document.querySelector('.time-formate');
const dateFormate = document.querySelector('.date-formate');

month_picker.onclick = () => {
	month_list.classList.remove('hideonce');
	month_list.classList.remove('hide');
	month_list.classList.add('show');
	dayTextFormate.classList.remove('showtime');
	dayTextFormate.classList.add('hidetime');
	timeFormate.classList.remove('showtime');
	timeFormate.classList.add('hideTime');
	dateFormate.classList.remove('showtime');
	dateFormate.classList.add('hideTime');
};

const generateCalendar = (month, year) => {
	let calendar_days = document.querySelector('.calendar-days');
	calendar_days.innerHTML = '';
	let calendar_header_year = document.querySelector('#year');
	let days_of_month = [
		31,
		getFebDays(year),
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31,
	];

	let currentDate = new Date();

	month_picker.innerHTML = month_names[month];

	calendar_header_year.innerHTML = year;

	let first_day = new Date(year, month);


	for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {

		let day = document.createElement('div');

		if (i >= first_day.getDay()) {
			day.innerHTML = i - first_day.getDay() + 1;

			if (i - first_day.getDay() + 1 === currentDate.getDate() &&
				year === currentDate.getFullYear() &&
				month === currentDate.getMonth()
			) {
				day.classList.add('current-date');
			}
		}
		calendar_days.appendChild(day);
	}
};

let month_list = calendar.querySelector('.month-list');
month_names.forEach((e, index) => {
	let month = document.createElement('div');
	month.innerHTML = `<div>${e}</div>`;

	month_list.append(month);
	month.onclick = () => {
		currentMonth.value = index;
		generateCalendar(currentMonth.value, currentYear.value);
		month_list.classList.replace('show', 'hide');
		dayTextFormate.classList.remove('hideTime');
		dayTextFormate.classList.add('showtime');
		timeFormate.classList.remove('hideTime');
		timeFormate.classList.add('showtime');
		dateFormate.classList.remove('hideTime');
		dateFormate.classList.add('showtime');
	};
});

(function () {
	month_list.classList.add('hideonce');
})();
document.querySelector('#pre-year').onclick = () => {
	--currentYear.value;
	generateCalendar(currentMonth.value, currentYear.value);
};
document.querySelector('#next-year').onclick = () => {
	++currentYear.value;
	generateCalendar(currentMonth.value, currentYear.value);
};

let currentDate = new Date();
let currentMonth = { value: currentDate.getMonth() };
let currentYear = { value: currentDate.getFullYear() };
generateCalendar(currentMonth.value, currentYear.value);

const todayShowTime = document.querySelector('.time-formate');
const todayShowDate = document.querySelector('.date-formate');

const currshowDate = new Date();
const showCurrentDateOption = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	weekday: 'long',
	/*
	weekday: "narrow", "short", "medium", "long"
	year: "numeric", "2-digit"
	month: "numeric", "2-digit", "narrow", "short"
	day: "numeric", "2-digit"
	*/
};
const currentDateFormate = new Intl.DateTimeFormat(
	'ar',
	showCurrentDateOption
).format(currshowDate);
todayShowDate.textContent = currentDateFormate;
setInterval(() => {
	const timer = new Date();
	const option = {
		hour: '2-digit',
		minute: 'numeric',
		second: 'numeric',

	};
	const formateTimer = new Intl.DateTimeFormat('ar', option).format(timer);
	let time = `${`${timer.getHours()}`.padStart(
		2,
		'0'
	)}:${`${timer.getMinutes()}`.padStart(
		2,
		'0'
	)}: ${`${timer.getSeconds()}`.padStart(2, '0')}`;
	todayShowTime.textContent = formateTimer;
}, 1000);

/*
ISO Language Code Table
Code	Name
af	Afrikaans
af-ZA	Afrikaans (South Africa)
ar	Arabic
ar-AE	Arabic (U.A.E.)
ar-BH	Arabic (Bahrain)
ar-DZ	Arabic (Algeria)
ar-EG	Arabic (Egypt)
ar-IQ	Arabic (Iraq)
ar-JO	Arabic (Jordan)
ar-KW	Arabic (Kuwait)
ar-LB	Arabic (Lebanon)
ar-LY	Arabic (Libya)
ar-MA	Arabic (Morocco)
ar-OM	Arabic (Oman)
ar-QA	Arabic (Qatar)
ar-SA	Arabic (Saudi Arabia)
ar-SY	Arabic (Syria)
ar-TN	Arabic (Tunisia)
ar-YE	Arabic (Yemen)
az	Azeri (Latin)
az-AZ	Azeri (Latin) (Azerbaijan)
az-AZ	Azeri (Cyrillic) (Azerbaijan)
be	Belarusian
be-BY	Belarusian (Belarus)
bg	Bulgarian
bg-BG	Bulgarian (Bulgaria)
bs-BA	Bosnian (Bosnia and Herzegovina)
ca	Catalan
ca-ES	Catalan (Spain)
cs	Czech
cs-CZ	Czech (Czech Republic)
cy	Welsh
cy-GB	Welsh (United Kingdom)
da	Danish
da-DK	Danish (Denmark)
de	German
de-AT	German (Austria)
de-CH	German (Switzerland)
de-DE	German (Germany)
de-LI	German (Liechtenstein)
de-LU	German (Luxembourg)
dv	Divehi
dv-MV	Divehi (Maldives)
el	Greek
el-GR	Greek (Greece)
en	English
en-AU	English (Australia)
en-BZ	English (Belize)
en-CA	English (Canada)
en-CB	English (Caribbean)
en-GB	English (United Kingdom)
en-IE	English (Ireland)
en-JM	English (Jamaica)
en-NZ	English (New Zealand)
en-PH	English (Republic of the Philippines)
en-TT	English (Trinidad and Tobago)
en-US	English (United States)
en-ZA	English (South Africa)
en-ZW	English (Zimbabwe)
eo	Esperanto
es	Spanish
es-AR	Spanish (Argentina)
es-BO	Spanish (Bolivia)
es-CL	Spanish (Chile)
es-CO	Spanish (Colombia)
es-CR	Spanish (Costa Rica)
es-DO	Spanish (Dominican Republic)
es-EC	Spanish (Ecuador)
es-ES	Spanish (Castilian)
es-ES	Spanish (Spain)
es-GT	Spanish (Guatemala)
es-HN	Spanish (Honduras)
es-MX	Spanish (Mexico)
es-NI	Spanish (Nicaragua)
es-PA	Spanish (Panama)
es-PE	Spanish (Peru)
es-PR	Spanish (Puerto Rico)
es-PY	Spanish (Paraguay)
es-SV	Spanish (El Salvador)
es-UY	Spanish (Uruguay)
es-VE	Spanish (Venezuela)
et	Estonian
et-EE	Estonian (Estonia)
eu	Basque
eu-ES	Basque (Spain)
fa	Farsi
fa-IR	Farsi (Iran)
fi	Finnish
fi-FI	Finnish (Finland)
fo	Faroese
fo-FO	Faroese (Faroe Islands)
fr	French
fr-BE	French (Belgium)
fr-CA	French (Canada)
fr-CH	French (Switzerland)
fr-FR	French (France)
fr-LU	French (Luxembourg)
fr-MC	French (Principality of Monaco)
gl	Galician
gl-ES	Galician (Spain)
gu	Gujarati
gu-IN	Gujarati (India)
he	Hebrew
he-IL	Hebrew (Israel)
hi	Hindi
hi-IN	Hindi (India)
hr	Croatian
hr-BA	Croatian (Bosnia and Herzegovina)
hr-HR	Croatian (Croatia)
hu	Hungarian
hu-HU	Hungarian (Hungary)
hy	Armenian
hy-AM	Armenian (Armenia)
id	Indonesian
id-ID	Indonesian (Indonesia)
is	Icelandic
is-IS	Icelandic (Iceland)
it	Italian
it-CH	Italian (Switzerland)
it-IT	Italian (Italy)
ja	Japanese
ja-JP	Japanese (Japan)
ka	Georgian
ka-GE	Georgian (Georgia)
kk	Kazakh
kk-KZ	Kazakh (Kazakhstan)
kn	Kannada
kn-IN	Kannada (India)
ko	Korean
ko-KR	Korean (Korea)
kok	Konkani
kok-IN	Konkani (India)
ky	Kyrgyz
ky-KG	Kyrgyz (Kyrgyzstan)
lt	Lithuanian
lt-LT	Lithuanian (Lithuania)
lv	Latvian
lv-LV	Latvian (Latvia)
mi	Maori
mi-NZ	Maori (New Zealand)
mk	FYRO Macedonian
mk-MK	FYRO Macedonian (Former Yugoslav Republic of Macedonia)
mn	Mongolian
mn-MN	Mongolian (Mongolia)
mr	Marathi
mr-IN	Marathi (India)
ms	Malay
ms-BN	Malay (Brunei Darussalam)
ms-MY	Malay (Malaysia)
mt	Maltese
mt-MT	Maltese (Malta)
nb	Norwegian (Bokm?l)
nb-NO	Norwegian (Bokm?l) (Norway)
nl	Dutch
nl-BE	Dutch (Belgium)
nl-NL	Dutch (Netherlands)
nn-NO	Norwegian (Nynorsk) (Norway)
ns	Northern Sotho
ns-ZA	Northern Sotho (South Africa)
pa	Punjabi
pa-IN	Punjabi (India)
pl	Polish
pl-PL	Polish (Poland)
ps	Pashto
ps-AR	Pashto (Afghanistan)
pt	Portuguese
pt-BR	Portuguese (Brazil)
pt-PT	Portuguese (Portugal)
qu	Quechua
qu-BO	Quechua (Bolivia)
qu-EC	Quechua (Ecuador)
qu-PE	Quechua (Peru)
ro	Romanian
ro-RO	Romanian (Romania)
ru	Russian
ru-RU	Russian (Russia)
sa	Sanskrit
sa-IN	Sanskrit (India)
se	Sami (Northern)
se-FI	Sami (Northern) (Finland)
se-FI	Sami (Skolt) (Finland)
se-FI	Sami (Inari) (Finland)
se-NO	Sami (Northern) (Norway)
se-NO	Sami (Lule) (Norway)
se-NO	Sami (Southern) (Norway)
se-SE	Sami (Northern) (Sweden)
se-SE	Sami (Lule) (Sweden)
se-SE	Sami (Southern) (Sweden)
sk	Slovak
sk-SK	Slovak (Slovakia)
sl	Slovenian
sl-SI	Slovenian (Slovenia)
sq	Albanian
sq-AL	Albanian (Albania)
sr-BA	Serbian (Latin) (Bosnia and Herzegovina)
sr-BA	Serbian (Cyrillic) (Bosnia and Herzegovina)
sr-SP	Serbian (Latin) (Serbia and Montenegro)
sr-SP	Serbian (Cyrillic) (Serbia and Montenegro)
sv	Swedish
sv-FI	Swedish (Finland)
sv-SE	Swedish (Sweden)
sw	Swahili
sw-KE	Swahili (Kenya)
syr	Syriac
syr-SY	Syriac (Syria)
ta	Tamil
ta-IN	Tamil (India)
te	Telugu
te-IN	Telugu (India)
th	Thai
th-TH	Thai (Thailand)
tl	Tagalog
tl-PH	Tagalog (Philippines)
tn	Tswana
tn-ZA	Tswana (South Africa)
tr	Turkish
tr-TR	Turkish (Turkey)
tt	Tatar
tt-RU	Tatar (Russia)
ts	Tsonga
uk	Ukrainian
uk-UA	Ukrainian (Ukraine)
ur	Urdu
ur-PK	Urdu (Islamic Republic of Pakistan)
uz	Uzbek (Latin)
uz-UZ	Uzbek (Latin) (Uzbekistan)
uz-UZ	Uzbek (Cyrillic) (Uzbekistan)
vi	Vietnamese
vi-VN	Vietnamese (Viet Nam)
xh	Xhosa
xh-ZA	Xhosa (South Africa)
zh	Chinese
zh-CN	Chinese (S)
zh-HK	Chinese (Hong Kong)
zh-MO	Chinese (Macau)
zh-SG	Chinese (Singapore)
zh-TW	Chinese (T)
zu	Zulu
zu-ZA	Zulu (South Africa)*/