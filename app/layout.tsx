// app/layout.tsx
export const metadata = {
  title: 'Ebook Generator',
  description: 'Generate your own ebook easily',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
