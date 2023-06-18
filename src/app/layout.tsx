import "./globals.css";
import { Inter } from "next/font/google";
import HeaderLink from "@/_components/HeaderLink";
import Stack from "@/_components/Stack";
import ThemeSwitcher from "@/_components/ThemeSwitcher";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Home page for my website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : ""}`} lang="en">
      <body
        className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-full max-w-[100vw] relative`}
      >
        <header className="bg-gray-200 dark:bg-gray-800 h-16 sticky top-0 bg-opacity-80 shadow-accent-b shadow-gray-300 dark:shadow-gray-700 flex flex-col justify-around items-center backdrop-blur-sm backdrop-saturate-150">
          <nav className="w-full flex flex-1 items-center relative">
            <div className="w-full flex items-center gap-6 ">
              <HeaderLink className="[&:nth-child(2)]:ml-5" href="/">
                Home
              </HeaderLink>
              <HeaderLink className="[&:nth-child(2)]:ml-5" href="/about-me">
                About Me
              </HeaderLink>
            </div>
          </nav>
        </header>
        <main className="py-3">{children}</main>
        <div className="bg-gray-200 dark:bg-gray-800 bottom-0 bg-opacity-80 shadow-accent-t shadow-gray-300 dark:shadow-gray-700 my-0 mx-auto px-6">
          <footer className="py-9 min-h-[20rem]">
            <Stack
              align="center"
              className="mt-12 mb-0"
              direction="row"
              flex="initial"
              gap="0"
              justify="between"
              padding="0"
            >
              <Stack align="stretch" direction="col" flex="initial" gap="4" justify="start" padding="0">
                <p className="text-sm">© 2023</p>
                <Stack align="center" direction="row" flex="initial" gap="3" justify="start">
                  <Link href="https://github.com/powerlego">GitHub</Link>
                </Stack>
              </Stack>
              <ThemeSwitcher />
            </Stack>
          </footer>
        </div>
      </body>
    </html>
  );
}
