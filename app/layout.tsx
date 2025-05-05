export const metadata = {
  title: 'Ebook Generator',
  description: 'Aplikacja do generowania ebooków',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        {children}
      </body>
    </html>
  );
}
