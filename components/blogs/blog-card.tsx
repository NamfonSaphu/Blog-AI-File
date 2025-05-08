import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import Link from 'next/link'

export default function BlogCard() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-start p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">AI File Analyzer</CardTitle>
            <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarIcon className="h-4 w-4" />
              <span>May 8, 2025</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Developed an AI File Analyzer by integrating API responses from Google AI Studio.
            </p>
            <p className="text-muted-foreground">
              Developed an AI-powered file analysis tool using API integration from Google AI Studio to extract and interpret file data. Enhanced the frontend with Shadcn UI for a modern, responsive design, and implemented theme mode switching for improved user experience.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/detail-file">Read Me</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>

  )
}
