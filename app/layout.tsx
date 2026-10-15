import type { Metadata } from "next";
import { Urbanist, Figtree, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from '@/components/navbar';  
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner"
import NextTopLoader from 'nextjs-toploader';


const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "AxelDev E-commerce",
  description: "Welcome to my e-commerce from AxelDev",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={cn("h-full", "antialiased", urbanist.variable, urbanist.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

            <NextTopLoader
              color="#2299DD"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
              
            />

        <Navbar/>

        {children}
        <Toaster 
          toastOptions={{
            classNames: {
              error: '!bg-red-600 !text-white !border-red-700',
              success: '!bg-green-600 !text-white !border-green-700',
              
            },
          }}
        />
      
        <Footer/>

        </ThemeProvider>

      </body>
    </html>
  );
}
