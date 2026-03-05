export const metadata = {
  title: "HERO Systems",
  description: "Home Economics Resource Organiser"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{fontFamily:"Arial", margin:0, background:"#f4f6f8"}}>
        {children}
      </body>
    </html>
  );
}
