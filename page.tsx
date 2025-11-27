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
  Briefcase,
  GraduationCap,
  Phone,
  MapPin,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden pt-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 gradient-text leading-tight">
              Natthapong Thaboran
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
              Front-End Developer & UX/UI Designer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4 sm:px-0">
              <Button size="lg" className="hover-lift w-full sm:w-auto bg-[#ff5722] hover:bg-[#f4511e] text-white border-none" asChild>
                <a href="https://fastwork.co/user/your-profile" target="_blank" rel="noopener noreferrer">
                  <Star className="mr-2 h-4 w-4" /> Hire me on Fastwork (Special Discount)
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover-lift w-full sm:w-auto"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="animate-float hidden md:block">
            <ArrowDown
              className="mx-auto text-muted-foreground animate-pulse-glow"
              size={32}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 gradient-text">
            About Me
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Front-end developer with a CS background and experience in web/mobile app development.
            Familiar with UX/UI design with Figma. Proficient in English.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-20 px-4 md:px-6 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-lift border-2">
              <CardHeader>
                <Code2 className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm"><span className="font-medium">HTML/CSS/JS</span> <span className="text-muted-foreground">Intermediate</span></div>
                  <div className="flex justify-between text-sm"><span className="font-medium">React.js</span> <span className="text-muted-foreground">Intermediate</span></div>
                  <div className="flex justify-between text-sm"><span className="font-medium">Next.js</span> <span className="text-muted-foreground">Beginner</span></div>
                  <div className="flex justify-between text-sm"><span className="font-medium">TypeScript</span> <span className="text-muted-foreground">Beginner</span></div>
                  <div className="flex justify-between text-sm"><span className="font-medium">Figma</span> <span className="text-muted-foreground">Proficient</span></div>
                  <div className="flex justify-between text-sm"><span className="font-medium">Photoshop</span> <span className="text-muted-foreground">Intermediate</span></div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2">
              <CardHeader>
                <Palette className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>Soft Skills & Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Responsible</Badge>
                  <Badge variant="secondary">Patience</Badge>
                  <Badge variant="secondary">Teamwork</Badge>
                  <Badge variant="secondary">Fast Learner</Badge>
                </div>
                <div className="space-y-2 border-t pt-4">
                  <div className="flex justify-between text-sm"><span className="font-medium">English</span> <span className="text-muted-foreground">Proficient</span></div>
                  <div className="flex justify-between text-sm"><span className="font-medium">Thai</span> <span className="text-muted-foreground">Native</span></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="relative border-l-2 border-primary/20 pl-8 ml-4 md:ml-0 space-y-8">

              {/* Job 1 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-4 ring-background">
                  <Briefcase className="h-3 w-3 text-primary-foreground" />
                </span>
                <h3 className="text-xl font-bold">Front-End Developer</h3>
                <p className="text-primary font-medium">iCARE Insurance Public | Sep 2024 - Present</p>
                <p className="text-muted-foreground mt-2">
                  Designed UI and developed websites for the organization.
                </p>
              </div>

              {/* Job 2 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-muted ring-4 ring-background">
                  <Briefcase className="h-3 w-3 text-muted-foreground" />
                </span>
                <h3 className="text-xl font-bold">UX/UI Designer (Co-Op)</h3>
                <p className="text-primary font-medium">NaYoo Corporation | Nov 2023 - Mar 2024</p>
                <p className="text-muted-foreground mt-2">
                  Designed web UIs based on user requirements using Figma and other tools. Collaborated with developers, project managers, and business analysts.
                </p>
              </div>

              {/* Job 3 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-muted ring-4 ring-background">
                  <Briefcase className="h-3 w-3 text-muted-foreground" />
                </span>
                <h3 className="text-xl font-bold">UX/UI Designer Intern</h3>
                <p className="text-primary font-medium">NaYoo Corporation | Apr - Jun 2023</p>
                <p className="text-muted-foreground mt-2">
                  Designed web UIs in Figma and presented to product owner.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 md:py-20 px-4 md:px-6 gradient-bg">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover-lift border-2">
              <CardHeader>
                <GraduationCap className="w-8 h-8 mb-2 text-primary" />
                <CardTitle className="text-lg">Khon Kaen University</CardTitle>
                <CardDescription>2020 - 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium">College of Computing, Computer Science</p>
                <p className="text-sm text-muted-foreground mt-1">GPAX: 3.18</p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2">
              <CardHeader>
                <GraduationCap className="w-8 h-8 mb-2 text-primary" />
                <CardTitle className="text-lg">Boonwattana School</CardTitle>
                <CardDescription>2014 - 2020</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Intensive Science Mathematic English Program</p>
                <p className="text-sm text-muted-foreground mt-1">GPAX: 3.26</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Contact Me
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or opportunities.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Card className="w-full md:w-auto min-w-[250px] hover-lift">
              <CardContent className="pt-6 flex flex-col items-center gap-3">
                <Mail className="w-8 h-8 text-primary" />
                <div className="text-sm text-muted-foreground">Email</div>
                <a href="mailto:natthapong.nth@gmail.com" className="font-medium hover:text-primary transition-colors">
                  natthapong.nth@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="w-full md:w-auto min-w-[250px] hover-lift">
              <CardContent className="pt-6 flex flex-col items-center gap-3">
                <Phone className="w-8 h-8 text-primary" />
                <div className="text-sm text-muted-foreground">Phone</div>
                <a href="tel:0633977863" className="font-medium hover:text-primary transition-colors">
                  063-397-7863
                </a>
              </CardContent>
            </Card>

            <Card className="w-full md:w-auto min-w-[250px] hover-lift">
              <CardContent className="pt-6 flex flex-col items-center gap-3">
                <MapPin className="w-8 h-8 text-primary" />
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-medium">
                  Bangkok, Thailand
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Natthapong Thaboran. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
