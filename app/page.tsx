import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Palette,
  Rocket,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
              Creative Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Crafting beautiful digital experiences with modern web
              technologies
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Button size="lg" className="hover-lift" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover-lift"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="animate-float">
            <ArrowDown
              className="mx-auto text-muted-foreground animate-pulse-glow"
              size={32}
            />
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            I'm a passionate developer specializing in building exceptional
            digital experiences. With expertise in modern web technologies, I
            bring ideas to life through clean code and stunning design.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-lift gradient-bg border-2">
              <CardHeader>
                <Code2 className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Frontend Development</CardTitle>
                <CardDescription>
                  Building responsive and performant web applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift gradient-bg border-2">
              <CardHeader>
                <Palette className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>UI/UX Design</CardTitle>
                <CardDescription>
                  Creating beautiful and intuitive user interfaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Figma</Badge>
                  <Badge>Design Systems</Badge>
                  <Badge>Prototyping</Badge>
                  <Badge>Animation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift gradient-bg border-2">
              <CardHeader>
                <Rocket className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Performance</CardTitle>
                <CardDescription>
                  Optimizing for speed and user experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Web Vitals</Badge>
                  <Badge>SEO</Badge>
                  <Badge>Accessibility</Badge>
                  <Badge>PWA</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - Dashboard */}
            <Card className="hover-lift overflow-hidden border-2">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                  Analytics Dashboard
                </div>
              </div>
              <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Modern web dashboard with real-time data visualization and
                  interactive charts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Chart.js</Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </CardFooter>
            </Card>

            {/* Project 2 - Mobile App */}
            <Card className="hover-lift overflow-hidden border-2">
              <div className="aspect-video bg-gradient-to-br from-pink-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                  Task Manager
                </div>
              </div>
              <CardHeader>
                <CardTitle>Task Management App</CardTitle>
                <CardDescription>
                  Sleek productivity app with drag-and-drop functionality and
                  team collaboration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">DnD Kit</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </CardFooter>
            </Card>

            {/* Project 3 - E-commerce */}
            <Card className="hover-lift overflow-hidden border-2">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                  E-Commerce
                </div>
              </div>
              <CardHeader>
                <CardTitle>E-Commerce Platform</CardTitle>
                <CardDescription>
                  Full-featured online store with payment integration and admin
                  dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                  <Badge variant="secondary">Prisma</Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="hover-lift" asChild>
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="hover-lift" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="hover-lift" asChild>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Creative Developer. Built with Next.js 15 & shadcn/ui</p>
        </div>
      </footer>
    </main>
  );
}
