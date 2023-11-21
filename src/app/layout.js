import './stylesheet.css'

export const metadata = {
  title: 'Langmap',
  description: 'A COS 597A Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
