import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
			<meta
				name="keywords"
				content="учебный центр предтеча, предтеча, обучение предтеча"
			></meta>
			<title>Учебно-оздоровительный Огулов Центр</title>
			<meta
				name="description"
				content="Огулов Центр – это учебно-оздоровительный центр, который был создан 19 октября 1995 года Огуловым Александром Тимофеевичем. До 2019 года Центр носил название Учебно-оздоровительный центр “Предтеча”. Основное направление деятельности Центра - висцеральный массаж. В работе Центра используются не имеющие аналогов в мире авторские методики А.Т. Огулова, которые успешно применяются более 20 лет. Также более 20 лет существует «Профессиональная ассоциация специалистов висцеральных практик», состоящая из выпускников нашего Учебного Центра. Все выпускники программ нашего Учебного Центра имеют возможность вступить в это сообщество близких по духу и мышлению специалистов, получить доступ к закрытым чатам и материалам, специальным предложениям и скидкам."
			></meta>
			<meta name="image" content="/og.png"></meta>
			<meta itemprop="image" content="/og.png"></meta>
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:image" content="/og.png" />
			<meta name="og:image" content="/og.png"></meta>
			<meta name="og:type" content="website"></meta>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
