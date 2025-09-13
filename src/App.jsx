import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Lightbulb } from "lucide-react"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50 fade-in-up">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">Portfolio</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-left slide-in-left">
              <h1 className="float-animation text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-balance">
                <span className="gradient-text ">Frontend Developer</span> &<br />
                <span className="text-purple-400 font-bold">UI/UX Enthusiast</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl fade-in-up stagger-1">
                Passionate about creating <span className="text-blue-400 font-semibold">beautiful</span>,
                <span className="text-green-700 font-semibold">functional</span> web experiences. Currently learning and
                growing in frontend development with a keen interest in
                <span className="text-purple-400 font-semibold">UI/UX design</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-2">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </Button>
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  View Projects
                </Button> */}
              </div>
            </div>

            <div className="flex-shrink-0 slide-in-right">
              <div className="float-animation pulse-glow rounded-full">
                {/* gradient-border float-animation pulse-glow */}
                <img
                  src="/profilepic.png"
                  alt="Profile"
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full  "
                />
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* About Section */}
      < section id="about" className="py-16 px-4 bg-muted/30" >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text fade-in-up">About My Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center fade-in-up stagger-1 hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-400">
              <CardHeader>
                <Code className="w-12 h-12 text-blue-500 mx-auto mb-4 float-animation" />
                <CardTitle className="text-blue-400">Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building responsive, interactive web applications using modern technologies like React, JavaScript,
                  and CSS.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center fade-in-up stagger-2 hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-400">
              <CardHeader>
                <Palette className="w-12 h-12 text-purple-500 mx-auto mb-4 float-animation" />
                <CardTitle className="text-purple-400">UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Passionate about user-centered design, creating intuitive interfaces that provide excellent user
                  experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center fade-in-up stagger-3 hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300 border-2 hover:border-green-400">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-green-500 mx-auto mb-4 float-animation" />
                <CardTitle className="text-green-400">Continuous Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Always exploring new technologies, design trends, and best practices to improve my skills and deliver
                  better solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* Projects Section */}
      < section id="projects" className="py-16 px-4" >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text fade-in-up">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 hover:border-blue-400 fade-in-up stagger-1">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 rounded-t-lg overflow-hidden">
                <img
                  src="/gym.png"
                  alt="Gym Website"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 "
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg text-blue-400">Gym Website</CardTitle>
                  {/* <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 hover:bg-blue-400 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button> */}
                </div>
                <CardDescription>
                  A modern fitness website with membership plans, class schedules, and trainer profiles.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HTML5</Badge>
                  <Badge variant="secondary">CSS3</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Responsive Design</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 hover:border-purple-400 fade-in-up stagger-2">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-600 rounded-t-lg overflow-hidden">
                <img
                  src="/dice.png"
                  alt="Dice Game"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 "
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg text-purple-400">Dice Game</CardTitle>
                  {/* <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-400 hover:bg-purple-400 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button> */}
                </div>
                <CardDescription>
                  Interactive dice rolling game with score tracking and multiplayer functionality.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">CSS3</Badge>
                  <Badge variant="secondary">DOM Manipulation</Badge>
                  <Badge variant="secondary">Game Logic</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 hover:border-green-400 fade-in-up stagger-3">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-600 rounded-t-lg overflow-hidden">
                <img
                  src="/portfolio-website-design-mockup.jpg"
                  alt="Portfolio Redesign"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 "
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg text-green-400">Portfolio Redesign</CardTitle>

                </div>
                <CardDescription>UI/UX design project focusing on clean, modern portfolio layouts.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">UI Design</Badge>
                  <Badge variant="secondary">Material UI</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* Skills Section */}
      < section id="skills" className="py-16 px-4 bg-muted/30" >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text fade-in-up">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="fade-in-up stagger-1 hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-400">
              <CardHeader>
                <CardTitle className="text-blue-400">Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-500 hover:bg-orange-600">HTML5</Badge>
                  <Badge className="bg-blue-500 hover:bg-blue-600">CSS3</Badge>
                  <Badge className="bg-yellow-500 hover:bg-yellow-600">JavaScript</Badge>
                  <Badge className="bg-cyan-500 hover:bg-cyan-600">React</Badge>
                  <Badge className="bg-teal-500 hover:bg-teal-600">Tailwind CSS</Badge>
                  <Badge className="bg-green-500 hover:bg-green-600">Responsive Design</Badge>
                  <Badge className="bg-red-500 hover:bg-red-600">Git</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="fade-in-up stagger-2 hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-400">
              <CardHeader>
                <CardTitle className="text-purple-400">Design & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                  >
                    Figma
                  </Badge>
                  <Badge variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white">
                    UI/UX Design
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white"
                  >
                    Material UI
                  </Badge>
                  {/* <Badge variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                    Wireframing
                  </Badge> */}
                  <Badge
                    variant="outline"
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
                  >
                    User Research
                  </Badge>
                  <Badge variant="outline" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white">
                    Adobe XD
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section id="contact" className="py-16 px-4" >
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-8 gradient-text fade-in-up">Let's Connect</h2>
          <p className="text-muted-foreground mb-8 text-pretty fade-in-up stagger-1">
            I'm always open to discussing new opportunities, collaborations, or just chatting about
            <span className="text-blue-400 font-semibold">frontend development</span> and
            <span className="text-purple-400 font-semibold">design</span>!
          </p>
          <div className="flex justify-center gap-4 fade-in-up stagger-2">
            <a href="mailto:iamnatahir@gmail.com">
              <Button

                variant="outline"
                size="lg"
                className="gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <a href="https://github.com/amnatahir5">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white border-0 hover:from-gray-800 hover:to-black transform hover:scale-105 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="border-t py-8 px-4 bg-card/50 fade-in-up" >
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Frontend Developer Portfolio. Built with passion and continuous learning.</p>
        </div>
      </footer >
    </div >
  )
}

export default App
