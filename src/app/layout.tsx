import type { Metadata } from "next";
import { Heebo, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { WhatsAppSticky } from "@/components/ui/WhatsAppSticky";
import { Navbar } from "@/components/ui/Navbar";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "תקווה ורודה | ריטריט העצמה נשית",
  description: "ריטריט בנושא העצמה נשית, שמשלב עומק, רוגע והנאה. 4 לילות של נשים בלבד, מרחב בטוח, מחבק ומעצים. אבו דאבי, פברואר 2026.",
  keywords: ["ריטריט", "העצמה נשית", "נשים", "אבו דאבי", "סדנאות", "חזון", "ביטחון עצמי"],
  openGraph: {
    title: "תקווה ורודה | ריטריט העצמה נשית",
    description: "4 לילות של חיבור לעצמך - סדנאות העצמה, זמן לבריכה ומנוחה, אוכל טוב וחברות אמיתית",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${cormorant.variable}`}>
      <body className="antialiased overflow-x-hidden" style={{ fontFamily: 'var(--font-heebo), system-ui, sans-serif', backgroundColor: 'var(--nude-50)', color: 'var(--text)' }}>
        <SmoothScroll>
          <Navbar />
          {children}
          <WhatsAppSticky />
        </SmoothScroll>
      </body>
    </html>
  );
}
