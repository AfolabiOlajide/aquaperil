import type { Metadata } from "next";
import { Geist, Geist_Mono, Bitcount_Grid_Double } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const bitcountGridDouble = Bitcount_Grid_Double({
    variable: "--font-bitcount-grid-double",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Aquaa Peril: The Last Bridge",
    description: "Interactive game to....",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${bitcountGridDouble.variable} antialiased`}
            >
                <Toaster richColors />
                {children}
            </body>
        </html>
    );
}
