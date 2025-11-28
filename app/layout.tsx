import { Metadata } from "next";
import ClientLayout from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Energy of Now - Bespoke AI Applications",
  description: "Transform your knowledge into intelligent AI agents that understand your business.",
  icons: {
    icon: "/energy-of-now-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}


