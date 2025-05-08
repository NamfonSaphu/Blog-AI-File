import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import LightMode from '@/assets/light.png'
import DarkMode from '@/assets/dark.png'
import Footer from "@/components/blogs/footer";

export default function DetailBlog() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-start p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
                    <Card className="w-full">
                        <CardContent>
                            <Image
                                src={LightMode}
                                alt="Light Mode"
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </CardContent>
                        <CardTitle className="p-4 text-center">Light Mode</CardTitle>
                    </Card>
                    <Card className="w-full">
                        <CardContent>
                            <Image
                                src={DarkMode}
                                alt="Dark Mode"
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </CardContent>
                        <CardTitle className="p-4 text-center">Dark Mode</CardTitle>
                    </Card>
                </div>

                <div className="mt-10 p-5 max-w-3xl text-center">
                    <h1 className="text-2xl font-bold mb-4">Develop AI File Analyzer</h1>
                    <p>
                        A modern AI-powered file analyzer built with Next.js and styled using Shadcn UI. This project leverages the Vercel AI SDK and integrates with AI v0 to deliver smart, efficient, and visually appealing user experiences. Users can upload files, interact with AI for insights, and enjoy a seamless interface optimized for performance and clarity.
                    </p>
                </div>
                <Footer />
            </main>
        </div>
    )
}
