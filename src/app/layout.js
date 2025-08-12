import "./globals.css";
import "antd/dist/reset.css";

export const metadata = {
  title: "Assignment 5 - Button Variations",
  description: "Practice using Ant Design Buttons in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
