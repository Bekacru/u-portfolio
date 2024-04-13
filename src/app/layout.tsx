import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Footer from "../components/footer";
import { NextTheme } from "../components/providers";
import Header from "../components/header";
import Loglib from "@loglib/tracker/react";
import { cx } from "src/lib/utils";
import { config } from "@/lib/config";

const baseUrl = config.baseUrl;
const { ogImage, favicon } = config.metadata;

function getUrl(str?: string) {
  const urlString = str
    ? str.startsWith("/")
      ? `${baseUrl}${str}`
      : str
    : undefined;
  if (!urlString) {
    return undefined;
  }
  return new URL(urlString);
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: config.metadata.title,
    template: `%s | ${config.metadata.title}`,
  },
  icons: {
    shortcut: getUrl(favicon),
  },
  description: config.metadata.description,
  openGraph: {
    title: config.metadata.title,
    description: config.metadata.description,
    url: baseUrl,
    siteName: config.metadata.title,
    locale: "en_US",
    type: "website",
    images: getUrl(ogImage),
  },
  twitter: {
    card: "summary_large_image",
    title: config.metadata.title,
    description: config.metadata.description,
    images: getUrl(ogImage),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextTheme forcedTheme="dark">
        <body
          className={cx(
            "text-stone-300 bg-gradient-to-tr from-neutral-950 to-neutral-900 antialiased max-w-xl lg:mx-auto min-h-screen px-6 md:px-0",
            GeistSans.variable,
            GeistMono.variable
          )}
        >
          <main className="flex flex-col px-2 md:px-0 gap-4 py-6 min-h-screen justify-between">
            <main className="flex flex-col gap-4">
              <Header />
              {children}
            </main>
            <Footer />
            {config.analytics && (
              <Loglib
                config={{
                  id: config.analytics,
                }}
              />
            )}
          </main>
        </body>
      </NextTheme>
    </html>
  );
}
