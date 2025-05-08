import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import LightMode from '@/assets/light.png'
import DarkMode from '@/assets/dark.png'

export default function DetailBlog() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-start">
                <div className="flex gap-4">
                    <Card className="w-full max-w-md">
                        <CardContent>
                            <Image
                                src={LightMode}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            />
                        </CardContent>
                        <CardTitle className="p-4">LightMode</CardTitle>
                    </Card>
                    <Card className="w-full max-w-md">
                        <CardContent>
                            <Image
                                src={DarkMode}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            />
                        </CardContent>
                        <CardTitle className="p-4" >DarkMode</CardTitle>
                    </Card>
                </div>
                <Card className="">
                    <CardContent>
                        <CardTitle>Technology Stack</CardTitle>
                    </CardContent>
                </Card>
            </main>
        </div>

    )
}
