import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Senior Mobile Software Engineer | Personal Portfolio",
  description: "Personal branding website showcasing mobile development expertise, projects, and tech blog posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="antialiased">
        {siteConfig.googleAnalyticsId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = gtag;
                  gtag('js', new Date());
                  gtag('config', '${siteConfig.googleAnalyticsId}', {
                    page_path: window.location.pathname,
                    debug_mode: ${process.env.NODE_ENV === 'development' ? 'true' : 'false'}
                  });
                  
                  // Debug logging in development
                  if (${process.env.NODE_ENV === 'development'}) {
                    console.log('[GA] Google Analytics initialized with ID: ${siteConfig.googleAnalyticsId}');
                    console.log('[GA] You can test events in the browser console using: window.gtag("event", "test_event", {test: true})');
                  }
                `,
              }}
            />
          </>
        )}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              })();
            `,
          }}
        />
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

