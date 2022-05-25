import { Head, Html, Main, NextScript } from "next/document";

export default function Document () {
	return (
		<Html lang="en">
			<Head>
				<meta name="description" content="Move.it is a project that combines the pomodoro technique with some challenges for the well-being of those who spend many hours using the computer." />

				<link rel="shortcut icon" href="favicon.png" type="image/png" />

				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" />
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
