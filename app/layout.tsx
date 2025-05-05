import './globals.css';
export const metadata = { title: 'eBook Generator', description: 'Create beautiful eBooks easily' };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
