import './globals.css'
import { Roboto } from 'next/font/google'
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AppProvider } from '@/components/AppContext';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Food Ordering App',
  description: 'App for ordering food online.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
          <AppProvider>
            <Header />
            {children}
            <Footer />
          </AppProvider>
        </main>
      </body>
    </html>
  )
}
