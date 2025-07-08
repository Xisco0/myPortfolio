import "./components/site/styles/icons-1.10.2/font/bootstrap-icons.css";
import "./globals.css";
import "./components/site/styles/animate.css";


export const metadata = {
  title: "Xisco - Portfolio",
  description: "A showcase of my projects and skills",
  keywords: ["portfolio", "developer", "web development","Next.js", "developer", "Fullstack engineer", "Francis Bamirin"],
  icons: {
    icon: "/all-images/logo.ico", // Standard favicon
    shortcut: "/all-images/logo.ico", // Shortcut icon for browsers
  },
   openGraph: {
    title: "Xisco - Portfolio",
    description: "A showcase of my projects and skills",
    type: "website",
    url: "xiscoportfolio.com",
    image: "/all-images/my-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

