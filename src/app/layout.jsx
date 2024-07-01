import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "IPO - Initial Public Offerings",
  description: "Details of Open, Closed & Upcoming IPO's",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
