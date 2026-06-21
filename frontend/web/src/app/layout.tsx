import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ThemeWrapper } from "@/shared/components/ThemeWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Learning Platform",
  description: "Modern E-Learning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = "light";
                  var stored = localStorage.getItem("theme-storage");
                  if (stored) {
                    var parsed = JSON.parse(stored);
                    if (parsed.state && parsed.state.theme === "dark") {
                      theme = "dark";
                    }
                  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                    theme = "dark";
                    localStorage.setItem("theme-storage", JSON.stringify({ state: { theme: "dark" }, version: 0 }));
                  }
                  if (theme === "dark") {
                    document.documentElement.classList.add("dark");
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: "class",
                theme: {
                  extend: {
                    colors: {
                      background: "hsl(var(--background))",
                      foreground: "hsl(var(--foreground))",
                      card: {
                        DEFAULT: "hsl(var(--card))",
                        foreground: "hsl(var(--card-foreground))",
                      },
                      border: "hsl(var(--border))",
                      muted: {
                        foreground: "hsl(var(--muted-foreground))",
                        secondary: "hsl(var(--muted-secondary))",
                      },
                      primary: {
                        DEFAULT: "hsl(var(--primary))",
                        foreground: "hsl(var(--primary-foreground))",
                      },
                      accent: {
                        DEFAULT: "hsl(var(--accent))",
                        foreground: "hsl(var(--accent-foreground))",
                      },
                    },
                  },
                },
              };
            `,
          }}
        />
        <Script
          src="https://cdn.tailwindcss.com"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
