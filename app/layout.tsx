import Header from '@/components/Header'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
	title: 'NextCommerce',
	description: 'Next.js E-Commerce Starter',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}