export const metadata = {
  title: 'Njangi Web Application',
  description: 'An application created where members to join, create and manage njangi groups with others all over the world.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

