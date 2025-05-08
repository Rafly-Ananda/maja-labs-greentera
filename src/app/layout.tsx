import type { Metadata } from 'next';
import { Montserrat, Playfair_Display, Hanken_Grotesk } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin']
});

const hanken = Hanken_Grotesk({
  variable: '--font-hanken',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Greentera',
  description: 'Maja Labs Greenterra'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} ${hanken.variable} antialiased`}
      >
        <div className="flex flex-col items-center justify-between relative">
          {children}
        </div>
      </body>
    </html>
  );
}

// export default function RootLayout() {
//   return (
//     <html lang="en">
//       <body
//         className={`${montserrat.variable} ${playfair.variable} ${hanken.variable} antialiased`}
//       >
//         {/* <div className="flex flex-col items-center justify-between relative">
//           <Navbar />
//           {children}
//         </div> */}
//       </body>
//     </html>
//   );
// }
