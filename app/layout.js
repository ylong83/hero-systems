export const metadata = {
  title: "HERO Systems",
  description: "Home Economics Resource Organiser"
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{fontFamily: "Arial", padding: "40px"}}>
        {children}
      </body>
    </html>
  )
}
