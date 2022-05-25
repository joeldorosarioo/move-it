import type { AppProps } from 'next/app';

import '../stylesheets/globalStylesheets.css';

export default function MyApp ({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
