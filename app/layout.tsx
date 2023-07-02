import "./globals.css";
import { Inter } from "next/font/google";
import HeaderLink from "@/_components/HeaderLink";
import ThemeSwitcher from "@/_components/ThemeSwitcher";
import AuthProvider from "./AuthProvider";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Home page for my website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${inter.className} bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white min-h-full max-w-[100vw] relative`}
        >
          <header className="bg-zinc-200 dark:bg-zinc-800 h-16 sticky top-0 bg-opacity-80 shadow-accent-b shadow-zinc-300 dark:shadow-zinc-700 flex flex-col justify-around items-center backdrop-blur-sm backdrop-saturate-150 px-6">
            <nav className="w-full flex flex-1 items-center relative">
              <div className="w-full flex items-center gap-6">
                <HeaderLink href="/">Home</HeaderLink>
                <HeaderLink href="/about-me">About Me</HeaderLink>
                <HeaderLink href="/projects">Projects</HeaderLink>
              </div>
            </nav>
          </header>
          <main className="py-3">{children}</main>
          <div className="bg-zinc-200 dark:bg-zinc-800 bottom-0 bg-opacity-80 shadow-accent-t shadow-zinc-300 dark:shadow-zinc-700 my-0 mx-auto px-6">
            <footer className="py-9">
              <div className="mt-12 mb-0 flex flex-row items-center justify-between p-0 flex-initial">
                <div className="flex flex-col flex-initial gap-4 p-0 justify-start items-stretch">
                  <p className="text-sm">© 2023</p>
                  <div className="flex flex-initial gap-3 p-0 flex-row items-center justify-start">
                    <Link href="https://github.com/powerlego">
                      <FaGithub className="w-[1.125rem] h-[1.125rem] fill-zinc-800 dark:fill-zinc-200" />
                    </Link>
                    <hr className="h-5 w-[1px] bg-zinc-800 dark:bg-zinc-200" />
                    <Link href="https://www.linkedin.com/in/nicholas-curl/">
                      <FaLinkedin className="w-[1.125rem] h-[1.125rem] fill-zinc-800 dark:fill-zinc-200" />
                    </Link>
                    <hr className="h-5 w-[1px] bg-zinc-800 dark:bg-zinc-200" />
                    <Link href="mailto:curl.nicholas@gmail.com">
                      <FaEnvelope className="w-[1.125rem] h-[1.125rem] fill-zinc-800 dark:fill-zinc-200" />
                    </Link>
                  </div>
                </div>
                <ThemeSwitcher />
              </div>
            </footer>
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
