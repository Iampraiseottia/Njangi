export const metadata = {
  title: 'Njangi Web Application',
  description: 'An application created to join, create and manage njangi groups all over the world.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

