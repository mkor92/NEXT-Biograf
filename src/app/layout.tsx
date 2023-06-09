import './globals.scss';
import { Poppins } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import AuthProvider from '@/app/context/AuthContext';
import Nav from '@/app/components/Nav';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const poppins = Poppins({
	weight: ['500', '600', '700', '900'],
	style: ['normal', 'italic'],
	subsets: ['devanagari'],
	display: 'swap',
});

export const metadata = {
	title: 'Luleå Biograf',
	description: 'Generated by create next app',
};

interface RootProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootProps) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<AuthProvider>
					<NextTopLoader color="#dedcdc" height={2} showSpinner={false} />
					<Header />
					<Nav />

					<main className="main-container sec">{children}</main>

					<Footer />
				</AuthProvider>
			</body>
		</html>
	);
}
