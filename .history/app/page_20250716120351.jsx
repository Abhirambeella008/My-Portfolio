"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Calendar,
  Camera,
  Code,
  Database,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Gamepad2,
  Github,
  Globe,
  GraduationCap,
  Heart,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Moon,
  Music,
  Palette,
  Phone,
  Plus,
  Rocket,
  Send,
  Server,
  Smartphone,
  Sun,
  ThumbsUp,
  Trash2,
  Trophy,
  Unlock,
  User,
  Zap,
} from "lucide-react"
import { useEffect, useState } from "react"

// Enhanced Configuration
const PORTFOLIO_CONFIG = {
  personal: {
    name: "BEELLA OM ABHIRAM",
    title: "Full Stack Developer & AI Enthusiast",
    subtitle: "I build things for the web & mobile.",
    email: "arram6651@gmail.com",
    phone: "+91 7815858575",
    location: "Penugonda, India",
    linkedin: "https://linkedin.com/in/beella-om-abhiram",
    github: "https://github.com/beella-om-abhiram",
    website: "https://beella-om.dev",
    profileImage: "/profile.jpg",
    bio: "I'm a passionate Full Stack Developer and AI Enthusiast, dedicated to building innovative and human-centered digital experiences. My expertise spans modern web technologies.",
    tagline: "Passionate about creating innovative solutions that bridge technology and user experience.",
    detailedBio:
    "As a passionate computer science student, I'm on an exciting journey to become a skilled software developer. While I may not have professional experience yet, I’ve built several full-stack and AI-integrated projects that reflect my strong interest in creating impactful digital solutions. I enjoy turning ideas into intuitive, user-friendly applications using modern web technologies, with a focus on clean code, scalability, and great user experience.",
    interests: ["Web Development", "Machine Learning", "Building Projects", "Open Source Contributions", "Gaming", "Photography", "Tech Exploration"],
    languages: ["English","Telugu"],
  },
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false) // Default to light mode
  const [currentPage, setCurrentPage] = useState("home")
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isAdmin, setIsAdmin] = useState(false)
  const [adminPassword, setAdminPassword] = useState("")
  const [projects, setProjects] = useState([
{
  id: "1",
  title: "Online Student Voting System Portal",
  description:
    "A secure and user-friendly full-stack web application that enables students to vote online for campus elections. Features include user registration/login, admin panel to manage candidates, live voting status, result visualization, and fraud prevention mechanisms.",
  technologies: ["Html", "Css", "PHP","JavaScript", "Xampp"],
  link: "https://your-live-demo-link.com",
  github: "https://github.com/your-username/student-voting-system",
  image: "/images/student-voting-preview.svg",
  category: "Web",
  status: "Completed"
}
,
{
  id: "2",
  title: "Alarimfy",
  description:
    "Alarimfy is an intelligent alarm and daily planning assistant that leverages AI to enhance productivity. It allows users to set context-aware alarms, receive smart reminders, and interact through natural language. Powered by OpenAI, it supports voice commands, personalized wake-up routines, and real-time scheduling with seamless UI.",
  technologies: ["React Native","Expo","OpenAI","Date&Time Modules"],
  link: "https://your-alarimfy-demo-link.com",
  github: "https://github.com/your-username/alarimfy",
  image: "/images/alarimfy-preview.svg",
  category: "Web",
  status: "Completed"
}
,
  ])
  const [certifications, setCertifications] = useState([
  {
  id: "1",
  title: "NPTEL: Cloud Computing",
  issuer: "NPTEL (IIT Kharagpur)",
  date: "2024",
  credentialId: "NPTEL-CC-2024-04567",
  icon:  <Server className="w-8 h-8" />,
  logo: "/nptel-logo.png",
  skills: ["Data Analysis Using Python"],
}
,
  {
  id: "2",
  title: "Java Programming",
  issuer: "Codetech IT Solutions",
  date: "2023",
  credentialId: "CODETECH-JAVA-2023-014",
  icon: <Server className="w-8 h-8" />, // Symbolic of Java
  logo: "/codetech-logo.png", // Replace with your actual logo path
  skills: ["Core Java", "OOPs Concepts", "Collections", "Exception Handling", "File I/O"],
}
,
  ])
  const [internships, setInternships] = useState([
    {
  id: "1",
  title: "Java Programming",
  company: "Codetech IT Solutions",
  duration: "5th MAR 2023 - 5th APR 2023",
  description:
    "Completed a hands-on Java development internship focused on core Java concepts, object-oriented programming, file handling, and basic data structures. Built small-scale console applications and gained practical experience in writing clean, modular Java code.",
  technologies: ["Java", "OOP", "Intellj", "Git"],
  logo: "/codetech-logo.png"
    },
    {
  id: "2",
  title: "Java FullStack",
  company: "Learn Square",
  duration: "5th June 2025 - 5th July 2025",
  description:
    "Completed a hands-on Java Full Stack training program covering both frontend and backend development. Built a mini project using Java, Spring Boot, MongoDB, and Tailwind CSS and presented it at the college auditorium. Gained practical experience in REST APIs, MVC architecture, and full-stack application deployment.",
  technologies: ["Java", "Spring Boot", "Postman", "MongoDB", "Ecllipse", "Git"],
  logo: "/learn-square-logo.png"
},
  ])

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const navigateToPage = (page) => {
    setCurrentPage(page)
    setIsVisible(false)
    setTimeout(() => setIsVisible(true), 300)
  }

  const handleAdminLogin = () => {
    if (adminPassword === "admin123") {
      setIsAdmin(true)
      setAdminPassword("")
    } else {
      alert("Invalid password!")
    }
  }

  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now().toString() }])
  }

  const addCertification = (newCert) => {
    setCertifications([...certifications, { ...newCert, id: Date.now().toString() }])
  }

  const addInternship = (newInternship) => {
    setInternships([...internships, { ...newInternship, id: Date.now().toString() }])
  }

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id))
  }

  const deleteCertification = (id) => {
    setCertifications(certifications.filter((c) => c.id !== c))
  }

  const deleteInternship = (id) => {
    setInternships(internships.filter((i) => i.id !== id))
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "about":
        return <AboutPage />
      case "skills":
        return <SkillsPage />
      case "projects":
        return <ProjectsPage />
      case "achievements":
        return <AchievementsPage />
      case "certifications":
        return <CertificationsPage />
      case "internships":
        return <InternshipsPage />
      case "contact":
        return <ContactPage />
      case "resume":
        return <ResumePage />
      default:
        return <HomePage />
    }
  }

  // Enhanced Home Page Component
  function HomePage() {
    const navigationItems = [
      { id: "about", label: "About Me", icon: <User className="w-6 h-6" />, color: "from-emerald-400 to-teal-400" },
      { id: "skills", label: "Skills", icon: <Code className="w-6 h-6" />, color: "from-sky-400 to-blue-400" },
      { id: "projects", label: "Projects", icon: <Rocket className="w-6 h-6" />, color: "from-orange-400 to-red-400" },
      {
        id: "achievements",
        label: "Achievements",
        icon: <Trophy className="w-6 h-6" />,
        color: "from-yellow-400 to-amber-400",
      },
      {
        id: "certifications",
        label: "Certifications",
        icon: <Award className="w-6 h-6" />,
        color: "from-rose-400 to-pink-400",
      },
      {
        id: "internships",
        label: "Internships",
        icon: <Briefcase className="w-6 h-6" />,
        color: "from-cyan-400 to-blue-400",
      },
      { id: "contact", label: "Contact", icon: <Mail className="w-6 h-6" />, color: "from-green-400 to-emerald-400" },
    ]

    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-br from-gray-950 via-blue-950 to-cyan-950"
              : "bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50"
          }`}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

          {/* Enhanced Floating Particles */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-30 animate-float ${darkMode ? "bg-blue-400" : "bg-pink-400"}`}
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}

          {/* Geometric Shapes */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className={`absolute opacity-10 animate-spin-slow ${darkMode ? "border-cyan-400" : "border-orange-400"}`}
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                border: "2px solid",
                borderRadius: i % 2 === 0 ? "50%" : "0%",
                animationDuration: `${10 + Math.random() * 20}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced Mouse Follower */}
        <div
          className={`fixed w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out z-0 ${
            darkMode
              ? "bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
              : "bg-gradient-to-r from-pink-500/10 to-orange-500/10"
          }`}
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        <div
          className={`relative z-10 min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-6xl mx-auto text-center">
            {/* Enhanced Profile Section */}
            <div className="mb-24 pt-20">
              <div className="relative w-80 h-80 mx-auto mb-16">
                {/* Multiple Animated Rings */}
                <div
                  className={`absolute inset-0 rounded-full border-2 animate-spin-slow ${
                    darkMode ? "border-blue-500/30" : "border-pink-500/30"
                  }`}
                ></div>
                <div
                  className={`absolute inset-4 rounded-full border-2 animate-spin-reverse ${
                    darkMode ? "border-cyan-500/30" : "border-orange-500/30"
                  }`}
                ></div>
                <div
                  className={`absolute inset-8 rounded-full border-2 animate-pulse ${
                    darkMode ? "border-emerald-500/30" : "border-yellow-500/30"
                  }`}
                ></div>
                <div
                  className={`absolute inset-12 rounded-full border-2 animate-spin-slow ${
                    darkMode ? "border-red-500/30" : "border-green-500/30"
                  }`}
                  style={{ animationDuration: "25s" }}
                ></div>

                {/* Enhanced Profile Image */}
                <div
                  className={`absolute inset-16 rounded-full overflow-hidden border-4 shadow-2xl backdrop-blur-sm ${
                    darkMode ? "border-white/20" : "border-gray-800/20"
                  }`}
                >
                  <img
                    src={PORTFOLIO_CONFIG.personal.profileImage || "/placeholder.svg"}
                    alt={PORTFOLIO_CONFIG.personal.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10"></div>
                </div>
              </div>

              {/* Enhanced Typing Animation */}
              <div className="mb-8">
                <div className={`text-sm mb-4 font-mono animate-pulse ${darkMode ? "text-blue-400" : "text-pink-600"}`}>
                  {"<>"} Hi, my name is
                </div>
                <h1
                  className={`text-5xl md:text-7xl font-bold mb-6 animate-gradient-x ${
                    darkMode
                      ? "bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-pink-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent"
                  }`}
                >
                  {PORTFOLIO_CONFIG.personal.name}
                </h1>
                <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {PORTFOLIO_CONFIG.personal.subtitle}
                </h2>
                <p
                  className={`text-xl max-w-3xl mx-auto leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {PORTFOLIO_CONFIG.personal.bio}
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button
                  onClick={() => navigateToPage("projects")}
                  className={`px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border ${
                    darkMode
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-blue-500/50"
                      : "bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white border-pink-500/50"
                  }`}
                >
                  <Eye className="w-5 h-5 mr-2" />
                  View My Work
                </Button>
                <Button
                  onClick={() => navigateToPage("contact")}
                  variant="outline"
                  className={`px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 border-2 ${
                    darkMode
                      ? "border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                      : "border-pink-500/50 text-pink-600 hover:bg-pink-500/10"
                  }`}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Enhanced Navigation Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {navigationItems.map((item, index) => (
                <Card
                  key={item.id}
                  className={`group cursor-pointer backdrop-blur-sm border transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 ${
                    darkMode
                      ? "bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 hover:shadow-blue-500/25"
                      : "bg-white/70 border-gray-200/50 hover:border-pink-500/50 hover:shadow-pink-500/25"
                  }`}
                  onClick={() => navigateToPage(item.id)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mb-6 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                    >
                      {item.icon}
                    </div>

                    {/* Text */}
                    <h3
                      className={`text-xl font-bold transition-all duration-500 ${
                        darkMode
                          ? "text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text"
                          : "text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-orange-600 group-hover:bg-clip-text"
                      }`}
                    >
                      {item.label}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Enhanced Stats with More Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { number: "15+", label: "Projects", icon: <Rocket className="w-6 h-6" /> },
                { number: "8+", label: "Certifications", icon: <Award className="w-6 h-6" /> },
                { number: "25+", label: "Technologies", icon: <Code className="w-6 h-6" /> },
                { number: "3+", label: "Years Experience", icon: <Calendar className="w-6 h-6" /> },
                { number: "50+", label: "Happy Clients", icon: <ThumbsUp className="w-6 h-6" /> },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`group p-6 backdrop-blur-sm rounded-2xl border transition-all duration-500 hover:scale-105 ${
                    darkMode
                      ? "bg-gray-800/30 border-gray-700/50 hover:border-blue-500/50"
                      : "bg-white/50 border-gray-200/50 hover:border-pink-500/50"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 ${
                      darkMode ? "text-blue-400" : "text-pink-600"
                    }`}
                  >
                    {stat.icon}
                  </div>
                  <div
                    className={`text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300 ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {stat.number}
                  </div>
                  <div className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Enhanced About Page Component
  function AboutPage() {
    return (
      <PageWrapper title="About Me" icon={<User className="w-8 h-8" />}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card
              className={`p-8 backdrop-blur-sm border transition-all duration-500 group ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50"
                  : "bg-white/70 border-gray-200/50 hover:border-pink-500/50"
              }`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 ${
                    darkMode
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                      : "bg-gradient-to-r from-pink-500 to-orange-500"
                  }`}
                >
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>My Journey</h3>
              </div>
              <p className={`leading-relaxed mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {PORTFOLIO_CONFIG.personal.detailedBio}
              </p>
              <p className={`leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                When I'm not coding, you'll find me exploring the latest in AI technology, contributing to open-source
                projects, or mentoring aspiring developers. I believe in continuous learning and staying ahead of the
                technology curve.
              </p>
            </Card>

            {/* Interests & Hobbies */}
            <Card
              className={`p-8 backdrop-blur-sm border transition-all duration-500 group ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50"
                  : "bg-white/70 border-gray-200/50 hover:border-pink-500/50"
              }`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 ${
                    darkMode
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                      : "bg-gradient-to-r from-green-500 to-emerald-500"
                  }`}
                >
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                  Interests & Hobbies
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {PORTFOLIO_CONFIG.personal.interests.map((interest, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                      darkMode ? "bg-gray-700/30" : "bg-gray-100/50"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        darkMode
                          ? "bg-gradient-to-r from-pink-400 to-red-400"
                          : "bg-gradient-to-r from-orange-400 to-yellow-400"
                      }`}
                    >
                      {interest === "Photography" && <Camera className="w-4 h-4 text-white" />}
                      {interest === "Music Production" && <Music className="w-4 h-4 text-white" />}
                      {interest === "Gaming" && <Gamepad2 className="w-4 h-4 text-white" />}
                      {interest === "AI/ML" && <Brain className="w-4 h-4 text-white" />}
                      {interest === "Open Source" && <Github className="w-4 h-4 text-white" />}
                      {interest === "Tech Blogging" && <BookOpen className="w-4 h-4 text-white" />}
                    </div>
                    <span className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{interest}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Languages */}
            <Card
              className={`p-8 backdrop-blur-sm border transition-all duration-500 group ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50"
                  : "bg-white/70 border-gray-200/50 hover:border-pink-500/50"
              }`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 ${
                    darkMode
                      ? "bg-gradient-to-r from-orange-500 to-red-500"
                      : "bg-gradient-to-r from-orange-500 to-red-500"
                  }`}
                >
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {PORTFOLIO_CONFIG.personal.languages.map((language, index) => (
                  <Badge
                    key={language}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      darkMode
                        ? "bg-gray-700/50 text-gray-300 border-gray-600/50 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/50"
                        : "bg-gray-100/50 text-gray-700 border-gray-300/50 hover:bg-pink-500/20 hover:text-pink-700 hover:border-pink-500/50"
                    }`}
                  >
                    {language}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="relative group">
              <div
                className={`absolute inset-0 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 ${
                  darkMode
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                    : "bg-gradient-to-r from-pink-500 to-orange-500"
                }`}
              />
              <img
                src={PORTFOLIO_CONFIG.personal.profileImage || "/placeholder.svg"}
                alt="About Me"
                className={`relative w-full h-96 object-cover rounded-2xl shadow-2xl border group-hover:scale-105 transition-transform duration-500 ${
                  darkMode ? "border-gray-700/50" : "border-gray-200/50"
                }`}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  label: "Location",
                  value: PORTFOLIO_CONFIG.personal.location,
                  icon: <MapPin className="w-5 h-5" />,
                  color: "from-red-500 to-pink-500",
                },
                {
                  label: "Experience",
                  value: "3+ Years",
                  icon: <Briefcase className="w-5 h-5" />,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  label: "Projects",
                  value: "15+ Completed",
                  icon: <Code className="w-5 h-5" />,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  label: "Availability",
                  value: "Open to Work",
                  icon: <Calendar className="w-5 h-5" />,
                  color: "from-yellow-500 to-orange-500",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`p-6 backdrop-blur-sm border transition-all duration-500 group hover:scale-105 ${
                    darkMode
                      ? "bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50"
                      : "bg-white/70 border-gray-200/50 hover:border-pink-500/50"
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3 group-hover:scale-110 transition-transform duration-300">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}
                    >
                      {item.icon}
                    </div>
                    <span className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {item.label}
                    </span>
                  </div>
                  <div className={`font-bold text-lg ${darkMode ? "text-white" : "text-gray-800"}`}>{item.value}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </PageWrapper>
    )
  }

  // Enhanced Skills Page Component
  function SkillsPage() {
    const skillCategories = {
      "Frontend Development": {
        skills: [
          { name: "React",level: 92},
          { name: "Next.js",level: 85},
          // { name: "Vue.js" },
          // { name: "TypeScript", level: 88 },
          { name: "Tailwind CSS",level: 96},
          // { name: "SASS/SCSS"},
        ],
        icon: <Palette className="w-6 h-6" />,
        color: "from-blue-400 to-cyan-400",
      },
      "Backend Development": {
        skills: [
          { name: "Node.js",level: 91},
          { name: "Python",level: 95},
          // { name: "Express.js", level: 85 },
          { name: "Django",level: 90},
          // { name: "GraphQL", level: 75 },
          { name: "REST APIs",level: 88},
        ],
        icon: <Server className="w-6 h-6" />,
        color: "from-green-400 to-emerald-400",
      },
      "Database Technologies": {
        skills: [
          { name: "MongoDB",level: 94},
          // { name: "PostgreSQL", level: 85 },
          { name: "MySQL", level: 82 },
          // { name: "Firebase", level: 88 },
          // { name: "Redis", level: 75 },
          // { name: "Supabase", level: 80 },
        ],
        icon: <Database className="w-6 h-6" />,
        color: "from-pink-400 to-rose-400",
      },
      "Mobile Development": {
        skills: [
          { name: "React Native",level: 90},
          // { name: "Flutter", level: 80 },
          { name: "Expo", level: 88 },
          // { name: "iOS Development", level:  },
          { name: "Android Development",level: 86},
        ],
        icon: <Smartphone className="w-6 h-6" />,
        color: "from-orange-400 to-red-400",
      },
      "AI & Machine Learning": {
        skills: [
          { name: "TensorFlow",level: 75 },
          // { name: "PyTorch", level: 75 },
          // { name: "OpenAI API", level: 90 },
          { name: "Scikit-learn", level: 78 },
          { name: "Computer Vision", level: 70 },
          // { name: "NLP", level: 82 },
        ],
        icon: <Brain className="w-6 h-6" />,
        color: "from-yellow-400 to-amber-400",
      },
      // "DevOps & Cloud": {
      //   skills: [ 
      //     { name: "AWS", level: 85 },
      //     { name: "Docker", level: 88 },
      //     { name: "Kubernetes", level: 75 },
      //     { name: "Vercel", level: 92 },
      //     { name: "GitHub Actions", level: 85 },
      //     { name: "Terraform", level: 70 },
      //   ],
      //   icon: <Globe className="w-6 h-6" />,
      //   color: "from-sky-400 to-emerald-400",
      // },
    }

    return (
      <PageWrapper title="Skills & Expertise" icon={<Code className="w-8 h-8" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, data], categoryIndex) => (
            <Card
              key={category}
              className={`group backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 hover:shadow-blue-500/25"
                  : "bg-white/70 border-gray-200/50 hover:border-pink-500/50 hover:shadow-pink-500/25"
              }`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <CardHeader className="relative">
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${data.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    {data.icon}
                  </div>
                  <CardTitle
                    className={`text-lg transition-all duration-500 ${
                      darkMode
                        ? "text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text"
                        : "text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-orange-600 group-hover:bg-clip-text"
                    }`}
                  >
                    {category}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="relative space-y-4">
                {data.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm font-bold ${darkMode ? "text-blue-400" : "text-pink-600"}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${data.color}`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </PageWrapper>
    )
  }

  // Enhanced Projects Page Component with Admin Controls
  function ProjectsPage() {
    const [showAddProject, setShowAddProject] = useState(false)
    const [newProject, setNewProject] = useState({
      title: "",
      description: "",
      technologies: "",
      link: "",
      github: "",
      category: "",
      status: "Completed",
    })

    const handleAddProject = () => {
      if (newProject.title && newProject.description) {
        addProject({
          ...newProject,
          technologies: newProject.technologies.split(",").map((t) => t.trim()),
          image: "/placeholder.svg?height=300&width=400",
        })
        setNewProject({
          title: "",
          description: "",
          technologies: "",
          link: "",
          github: "",
          category: "",
          status: "Completed",
        })
        // The dialog remains open after submission, as requested.
      }
    }

    return (
      <PageWrapper title="Featured Projects" icon={<Rocket className="w-8 h-8" />}>
        <div className="mb-8 flex justify-between items-center">
          <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Here are some of my recent projects that showcase my skills and experience.
          </p>
          {isAdmin && (
            <Dialog open={showAddProject} onOpenChange={setShowAddProject}>
              <DialogTrigger asChild>
                <Button
                  className={`${
                    darkMode
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                      : "bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700"
                  } text-white`}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </Button>
              </DialogTrigger>
              <DialogContent className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
                <DialogHeader>
                  <DialogTitle className={darkMode ? "text-white" : "text-gray-800"}>Add New Project</DialogTitle>
                  <DialogDescription className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    Fill in the details for your new project.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Input
                    placeholder="Project Title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    className="input-field"
                  />
                  <Textarea
                    placeholder="Project Description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    className="input-field"
                  />
                  <Input
                    placeholder="Technologies (comma separated)"
                    value={newProject.technologies}
                    onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
                    className="input-field"
                  />
                  <Input
                    placeholder="Live Demo URL"
                    value={newProject.link}
                    onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
                    className="input-field"
                  />
                  <Input
                    placeholder="GitHub URL"
                    value={newProject.github}
                    onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                    className="input-field"
                  />
                  <Input
                    placeholder="Category"
                    value={newProject.category}
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                    className="input-field"
                  />
                  <Button onClick={handleAddProject} className="w-full button-gradient">
                    Add Project
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 hover:shadow-blue-500/25"
                  : "bg-white/70 border-gray-200/50 hover:border-pink-500/50 hover:shadow-pink-500/25"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 ${
                    darkMode
                      ? "bg-gradient-to-t from-gray-900/80 to-transparent"
                      : "bg-gradient-to-t from-white/80 to-transparent"
                  }`}
                />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-300 border-green-500/50"
                        : "bg-yellow-500/20 text-yellow-300 border-yellow-500/50"
                    } border`}
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.link && (
                    <Button
                      size="icon"
                      className={`backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${
                        darkMode
                          ? "bg-gray-800/80 border-gray-600/50 hover:bg-blue-500/80 hover:border-blue-500/50"
                          : "bg-white/80 border-gray-300/50 hover:bg-pink-500/80 hover:border-pink-500/50 hover:text-white"
                      }`}
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      size="icon"
                      className={`backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${
                        darkMode
                          ? "bg-gray-800/80 border-gray-600/50 hover:bg-blue-500/80 hover:border-blue-500/50"
                          : "bg-white/80 border-gray-300/50 hover:bg-pink-500/80 hover:border-pink-500/50 hover:text-white"
                      }`}
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                  {isAdmin && (
                    <Button
                      size="icon"
                      variant="destructive"
                      className="backdrop-blur-sm hover:scale-110 transition-all duration-300"
                      onClick={() => deleteProject(project.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <Badge
                    className={`border ${
                      darkMode
                        ? "bg-blue-500/20 text-blue-300 border-blue-500/50"
                        : "bg-pink-500/20 text-pink-700 border-pink-500/50"
                    }`}
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle
                  className={`text-xl transition-all duration-500 ${
                    darkMode
                      ? "text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text"
                      : "text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-orange-600 group-hover:bg-clip-text"
                  }`}
                >
                  {project.title}
                </CardTitle>
                <CardDescription className={`leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`transition-all duration-300 hover:scale-105 cursor-pointer ${
                        darkMode
                          ? "bg-gray-700/50 text-gray-300 border-gray-600/50 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/50"
                          : "bg-gray-100/50 text-gray-700 border-gray-300/50 hover:bg-pink-500/20 hover:text-pink-700 hover:border-pink-500/50"
                      }`}
                      style={{ animationDelay: `${techIndex * 0.05}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageWrapper>
    )
  }

  // Enhanced Certifications Page with Admin Controls
  function CertificationsPage() {
    const [showAddCert, setShowAddCert] = useState(false)
    const [newCert, setNewCert] = useState({
      title: "",
      issuer: "",
      date: "",
      credentialId: "",
      skills: "",
      logo: "",
    })

    const handleAddCertification = () => {
      if (newCert.title && newCert.issuer) {
        addCertification({
          ...newCert,
          skills: newCert.skills.split(",").map((s) => s.trim()),
          icon: <Award className="w-8 h-8" />,
          logo: newCert.logo || "/placeholder.svg", // Use provided logo or default
        })
        setNewCert({
          title: "",
          issuer: "",
          date: "",
          credentialId: "",
          skills: "",
          logo: "",
        })
        // The dialog remains open after submission, as requested.
      }
    }

    return (
      <PageWrapper title="Certifications" icon={<Award className="w-8 h-8" />}>
        <div className="mb-8 flex justify-between items-center">
          <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
          {isAdmin && (
            <Dialog open={showAddCert} onOpenChange={setShowAddCert}>
              <DialogTrigger asChild>
                <Button
                  className={`${
                    darkMode
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                      : "bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700"
                  } text-white`}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Certification
                </Button>
              </DialogTrigger>
              <DialogContent className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
                <DialogHeader>
                  <DialogTitle className={darkMode ? "text-white" : "text-gray-800"}>Add New Certification</DialogTitle>
                  <DialogDescription className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    Fill in the details for your new certification.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Input
                    placeholder="Certification Title"
                    value={newCert.title}
                    onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
                    className="input-field"
                  />
                  <Input
                    placeholder="Issuing Organization"
                    value={newCert.issuer}
                    onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
                    className="input-field"
                  />
                  <Input
                    placeholder="Date Obtained"
                    value={newCert.date}
                    onChange={(e) => setNewCert({ ...newCert, date: e.target.value })}
                    className="input-field"
                  />
                  <Input
                    placeholder="Credential ID"
                    value={newCert.credentialId}
                    onChange={(e) => setNewCert({ ...newCert, credentialId: e.target.value })}
                    className="input-field"
                  />
                  <Input
                    placeholder="Skills (comma separated)"
                    value={newCert.skills}
                    onChange={(e) => setNewCert({ ...newCert, skills: e.target.value })}
                    className="input-field"
                  />
                  <Input
                    placeholder="Logo URL (e.g., /aws-logo.png)"
                    value={newCert.logo}
                    onChange={(e) => setNewCert({ ...newCert, logo: e.target.value })}
                    className="input-field"
                  />
                  <Button onClick={handleAddCertification} className="w-full button-gradient">
                    Add Certification
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={cert.id}
              className={`group backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 hover:shadow-blue-500/25"
                  : "bg-white/70 border-gray-200/50 hover:border-pink-500/50 hover:shadow-pink-500/25"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-6 flex-1">
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0 ${
                        darkMode
                          ? "bg-gradient-to-r from-pink-400 to-red-400"
                          : "bg-gradient-to-r from-orange-400 to-yellow-400"
                      }`}
                    >
                      {cert.logo ? (
                        <img
                          src={cert.logo || "/placeholder.svg"}
                          alt={cert.issuer}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        cert.icon
                      )}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-bold mb-2 transition-all duration-500 ${
                          darkMode
                            ? "text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text"
                            : "text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-orange-600 group-hover:bg-clip-text"
                        }`}
                      >
                        {cert.title}
                      </h3>
                      <p className={`font-medium mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge
                      className={`border ${
                        darkMode
                          ? "bg-blue-500/20 text-blue-300 border-blue-500/50"
                          : "bg-pink-500/20 text-pink-700 border-pink-500/50"
                      }`}
                    >
                      {cert.date}
                    </Badge>
                    {isAdmin && (
                      <Button
                        size="icon"
                        variant="destructive"
                        className="w-8 h-8 hover:scale-110 transition-all duration-300"
                        onClick={() => deleteCertification(cert.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <p className={`text-sm mb-1 ${darkMode ? "text-gray-500" : "text-gray-500"}`}>Credential ID:</p>
                  <p className={`font-mono text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {cert.credentialId}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      className={`transition-all duration-300 hover:scale-105 ${
                        darkMode
                          ? "bg-gray-700/50 text-gray-300 border-gray-600/50 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/50"
                          : "bg-gray-100/50 text-gray-700 border-gray-300/50 hover:bg-pink-500/20 hover:text-pink-700 hover:border-pink-500/50"
                      }`}
                      style={{ animationDelay: `${skillIndex * 0.05}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageWrapper>
    )
  }

  // New Internships Page Component with Admin Controls
  function InternshipsPage() {
    const [showAddInternship, setShowAddInternship] = useState(false)
    const [newInternship, setNewInternship] = useState({
      title: "",
      company: "",
      duration: "",
      description: "",
      technologies: "",
      logo: "",
    })

    const handleAddInternship = () => {
      if (newInternship.title && newInternship.company) {
        addInternship({
          ...newInternship,
          technologies: newInternship.technologies.split(",").map((t) => t.trim()),
          logo: newInternship.logo || "/placeholder.svg", // Use provided logo or default
        })
        setNewInternship({
          title: "",
          company: "",
          duration: "",
          description: "",
          technologies: "",
          logo: "",
        })
        // The dialog remains open after submission, as requested.
      }
    }

    return (
      <PageWrapper title="Internships" icon={<GraduationCap className="w-8 h-8" />}>
        <div className="mb-8 flex justify-between items-center">
          <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            My practical experience gained through internships, contributing to real-world projects.
          </p>
          {isAdmin && (
            <Dialog open={showAddInternship} onOpenChange={setShowAddInternship}>
              <DialogTrigger asChild>
                <Button
                  className={`${
                    darkMode
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                      : "bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700"
                  } text-white`}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Internship
                </Button>
              </DialogTrigger>
              <DialogContent className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
                <DialogHeader>
                  <DialogTitle className={darkMode ? "text-white" : "text-gray-800"}>Add New Internship</DialogTitle>
                  <DialogDescription className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    Fill in the details for your new internship.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Input
                    placeholder="Internship Title"
                    value={newInternship.title}
                    onChange={(e) => setNewInternship({ ...newInternship, title: e.target.value })}
                    className="input-field"
                  />
                  <Input
                    placeholder="Company"
                    value={newInternship.company}
                    onChange={(e) => setNewInternship({ ...newInternship, company: e.target.value })}
                    className="input-field"
                  />
                  <Input
                    placeholder="Duration (e.g., May 2022 - Aug 2022)"
                    value={newInternship.duration}
                    onChange={(e) => setNewInternship({ ...newInternship, duration: e.target.value })}
                    className="input-field"
                  />
                  <Textarea
                    placeholder="Description"
                    value={newInternship.description}
                    onChange={(e) => setNewInternship({ ...newInternship, description: e.target.value })}
                    className="input-field"
                  />
                  <Input
                    placeholder="Technologies (comma separated)"
                    value={newInternship.technologies}
                    onChange={(e) => setNewInternship({ ...newInternship, technologies: e.target.value })}
                    className="input-field"
                  />
                  <Input
                    placeholder="Logo URL (e.g., /innovate-solutions-logo.png)"
                    value={newInternship.logo}
                    onChange={(e) => setNewInternship({ ...newInternship, logo: e.target.value })}
                    className="input-field"
                  />
                  <Button onClick={handleAddInternship} className="w-full button-gradient">
                    Add Internship
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <Card
              key={internship.id}
              className={`group backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 hover:shadow-blue-500/25"
                  : "bg-white/70 border-gray-200/50 hover:border-pink-500/50 hover:shadow-pink-500/25"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-6 flex-1">
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0 ${
                        darkMode
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                          : "bg-gradient-to-r from-blue-500 to-cyan-500"
                      }`}
                    >
                      {internship.logo ? (
                        <img
                          src={internship.logo || "/placeholder.svg"}
                          alt={internship.company}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        <Briefcase className="w-8 h-8" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-bold mb-2 transition-all duration-500 ${
                          darkMode
                            ? "text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text"
                            : "text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-orange-600 group-hover:bg-clip-text"
                        }`}
                      >
                        {internship.title}
                      </h3>
                      <p className={`font-medium mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {internship.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge
                      className={`border ${
                        darkMode
                          ? "bg-blue-500/20 text-blue-300 border-blue-500/50"
                          : "bg-pink-500/20 text-pink-700 border-pink-500/50"
                      }`}
                    >
                      {internship.duration}
                    </Badge>
                    {isAdmin && (
                      <Button
                        size="icon"
                        variant="destructive"
                        className="w-8 h-8 hover:scale-110 transition-all duration-300"
                        onClick={() => deleteInternship(internship.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>

                <p className={`mb-4 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {internship.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {internship.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      className={`transition-all duration-300 hover:scale-105 ${
                        darkMode
                          ? "bg-gray-700/50 text-gray-300 border-gray-600/50 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/50"
                          : "bg-gray-100/50 text-gray-700 border-gray-300/50 hover:bg-pink-500/20 hover:text-pink-700 hover:border-pink-500/50"
                      }`}
                      style={{ animationDelay: `${techIndex * 0.05}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageWrapper>
    )
  }

  // Enhanced Achievements Page Component
  function AchievementsPage() {
    const achievements = [
      {
        title: "Best Project Award 2024",
        description:
          "Received best project award for innovative AI-powered web application at the National Tech Conference",
        date: "2024",
        icon: <Trophy className="w-8 h-8" />,
        color: "from-yellow-400 to-amber-400",
        category: "Award",
      },
      {
        title: "Open Source Contributor",
        description:
          "Active contributor to major open source projects with 150+ contributions and 5 maintained repositories",
        date: "2023-2024",
        icon: <Github className="w-8 h-8" />,
        color: "from-sky-400 to-blue-400",
        category: "Community",
      },
      {
        title: "Hackathon Winner",
        description:
          "First place in National Level Hackathon for innovative mobile app solution addressing climate change",
        date: "2023",
        icon: <Zap className="w-8 h-8" />,
        color: "from-blue-400 to-cyan-400",
        category: "Competition",
      },
      {
        title: "Tech Conference Speaker",
        description: "Delivered keynote talks on modern web development and AI integration at 3 major tech conferences",
        date: "2023-2024",
        icon: <Rocket className="w-8 h-8" />,
        color: "from-green-400 to-emerald-400",
        category: "Speaking",
      },
      {
        title: "Mentor of the Year",
        description: "Recognized for mentoring 20+ junior developers and contributing to their career growth",
        date: "2024",
        icon: <User className="w-8 h-8" />,
        color: "from-rose-400 to-pink-400",
        category: "Mentorship",
      },
      {
        title: "Innovation Award",
        description: "Awarded for developing breakthrough AI solutions that improved business efficiency by 60%",
        date: "2023",
        icon: <Brain className="w-8 h-8" />,
        color: "from-yellow-400 to-orange-400",
        category: "Innovation",
      },
    ]

    return (
      <PageWrapper title="Achievements & Recognition" icon={<Trophy className="w-8 h-8" />}>
        <div className="mb-12 text-center">
          <p className={`text-lg max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Recognition and achievements that reflect my commitment to excellence, innovation, and community
            contribution in the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`group backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 hover:shadow-blue-500/25"
                  : "bg-white/70 border-gray-200/50 hover:border-pink-500/50 hover:shadow-pink-500/25"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <CardContent className="p-8 relative">
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0`}
                  >
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3
                          className={`text-xl font-bold mb-2 transition-all duration-500 ${
                            darkMode
                              ? "text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text"
                              : "text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-orange-600 group-hover:bg-clip-text"
                          }`}
                        >
                          {achievement.title}
                        </h3>
                        <Badge
                          className={`mb-3 ${
                            darkMode
                              ? "bg-blue-500/20 text-blue-300 border-blue-500/50"
                              : "bg-pink-500/20 text-pink-700 border-pink-500/50"
                          } border`}
                        >
                          {achievement.category}
                        </Badge>
                      </div>
                      <Badge
                        className={`${
                          darkMode
                            ? "bg-gray-700/50 text-gray-300 border-gray-600/50"
                            : "bg-gray-100/50 text-gray-700 border-gray-300/50"
                        } border`}
                      >
                        {achievement.date}
                      </Badge>
                    </div>
                    <p className={`leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageWrapper>
    )
  }

  // Enhanced Contact Page Component
  function ContactPage() {
    return (
      <PageWrapper title="Let's Connect" icon={<Mail className="w-8 h-8" />}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
              I'm always excited to work on innovative projects and collaborate with talented teams.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card
              className={`backdrop-blur-sm border transition-all duration-500 group ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50"
                  : "bg-white/70 border-gray-200/50 hover:border-pink-500/50"
              }`}
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                      darkMode
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                        : "bg-gradient-to-r from-pink-500 to-orange-500"
                    }`}
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                      Get In Touch
                    </CardTitle>
                    <CardDescription className={darkMode ? "text-gray-400" : "text-gray-600"}>
                      Choose your preferred way to connect
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6" />,
                    label: "Email",
                    value: PORTFOLIO_CONFIG.personal.email,
                    action: () => window.open(`mailto:${PORTFOLIO_CONFIG.personal.email}`),
                    color: "from-red-400 to-pink-400",
                  },
                  {
                    icon: <Phone className="w-6 h-6" />,
                    label: "Phone",
                    value: PORTFOLIO_CONFIG.personal.phone,
                    action: () => window.open(`tel:${PORTFOLIO_CONFIG.personal.phone}`),
                    color: "from-green-400 to-emerald-400",
                  },
                  {
                    icon: <Linkedin className="w-6 h-6" />,
                    label: "LinkedIn",
                    value: "Connect with me",
                    action: () => window.open(PORTFOLIO_CONFIG.personal.linkedin, "_blank"),
                    color: "from-blue-400 to-cyan-400",
                  },
                  {
                    icon: <Github className="w-6 h-6" />,
                    label: "GitHub",
                    value: "Check out my code",
                    action: () => window.open(PORTFOLIO_CONFIG.personal.github, "_blank"),
                    color: "from-sky-400 to-emerald-400",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className={`group/item flex items-center space-x-4 p-6 rounded-2xl border transition-all duration-300 cursor-pointer hover:scale-105 ${
                      darkMode
                        ? "bg-gray-700/30 hover:bg-gray-700/50 border-gray-600/50 hover:border-blue-500/50"
                        : "bg-gray-50/50 hover:bg-gray-100/50 border-gray-200/50 hover:border-pink-500/50"
                    }`}
                    onClick={contact.action}
                  >
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center text-white group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-bold text-lg transition-colors duration-300 ${
                          darkMode
                            ? "text-white group-hover/item:text-blue-400"
                            : "text-gray-800 group-hover/item:text-pink-600"
                        }`}
                      >
                        {contact.label}
                      </p>
                      <p
                        className={`transition-colors duration-300 ${
                          darkMode
                            ? "text-gray-400 group-hover/item:text-gray-300"
                            : "text-gray-600 group-hover/item:text-gray-700"
                        }`}
                      >
                        {contact.value}
                      </p>
                    </div>
                    <ExternalLink
                      className={`w-5 h-5 opacity-0 group-hover/item:opacity-100 transition-all duration-300 ${
                        darkMode
                          ? "text-gray-500 group-hover/item:text-blue-400"
                          : "text-gray-400 group-hover/item:text-pink-600"
                      }`}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card
              className={`backdrop-blur-sm border transition-all duration-500 group ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50"
                  : "bg-white/70 border-gray-200/50 hover:border-pink-500/50"
              }`}
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                      darkMode
                        ? "bg-gradient-to-r from-green-500 to-emerald-500"
                        : "bg-gradient-to-r from-emerald-500 to-teal-500"
                    }`}
                  >
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                      Send a Message
                    </CardTitle>
                    <CardDescription className={darkMode ? "text-gray-400" : "text-gray-600"}>
                      I'll get back to you within 24 hours
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </PageWrapper>
    )
  }

  // Enhanced Resume Page Component
  function ResumePage() {
    return (
      <PageWrapper title="Resume" icon={<FileText className="w-8 h-8" />}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Download my resume to learn more about my experience, qualifications, and technical expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className={`font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                    : "bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700"
                } text-white`}
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 bg-transparent border-2 ${
                  darkMode
                    ? "border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                    : "border-pink-500/50 text-pink-600 hover:bg-pink-500/10"
                }`}
                onClick={() => navigateToPage("contact")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>

          <Card
            className={`backdrop-blur-sm border shadow-2xl ${
              darkMode ? "bg-gray-800/50 border-gray-700/50" : "bg-white/70 border-gray-200/50"
            }`}
          >
            <CardContent className="p-12">
              <div className="space-y-12">
                {/* Header */}
                <div className={`text-center border-b pb-8 ${darkMode ? "border-gray-700/50" : "border-gray-200/50"}`}>
                  <h1 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
                    {PORTFOLIO_CONFIG.personal.name}
                  </h1>
                  <p className={`text-2xl mb-6 ${darkMode ? "text-blue-400" : "text-pink-600"}`}>
                    {PORTFOLIO_CONFIG.personal.title}
                  </p>
                  <div
                    className={`flex flex-wrap justify-center gap-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{PORTFOLIO_CONFIG.personal.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{PORTFOLIO_CONFIG.personal.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{PORTFOLIO_CONFIG.personal.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        darkMode
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                          : "bg-gradient-to-r from-pink-500 to-orange-500"
                      }`}
                    >
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                      Professional Summary
                    </h2>
                  </div>
                  <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {PORTFOLIO_CONFIG.personal.detailedBio}
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        darkMode
                          ? "bg-gradient-to-r from-green-500 to-emerald-500"
                          : "bg-gradient-to-r from-emerald-500 to-teal-500"
                      }`}
                    >
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Experience</h2>
                  </div>
                  <div className="space-y-8">
                    <div className={`border-l-4 pl-8 relative ${darkMode ? "border-blue-500" : "border-pink-500"}`}>
                      <div
                        className={`absolute w-4 h-4 rounded-full -left-2 top-0 ${
                          darkMode ? "bg-blue-500" : "bg-pink-500"
                        }`}
                      ></div>
                      <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
                    Web & Full Stack Developer
                      </h3>
                      <p className={`font-medium mb-3 ${darkMode ? "text-blue-400" : "text-pink-600"}`}>
                        Innovate Solutions • 2023 - Present in Sri Vasavi Engineering College
                      </p>
                      <ul className={`space-y-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        <li className="flex items-start space-x-2">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              darkMode ? "bg-blue-400" : "bg-pink-400"
                            }`}
                          ></div>
                          <span>Developed and maintained 4 web applications using React, Node.js, and MongoDB</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              darkMode ? "bg-blue-400" : "bg-pink-400"
                            }`}
                          ></div>
                          <span>Implemented Web Portals in College</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              darkMode ? "bg-blue-400" : "bg-pink-400"
                            }`}
                          ></div>
                          <span>Led a mini project to develop an Online Student Voting System using Java, implementing object-oriented principles, file handling, and basic user authentication.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              darkMode ? "bg-blue-400" : "bg-pink-400"
                            }`}
                          ></div>
                          <span>"Developed a full-stack Java project as part of the internship training and delivered a live presentation in the college auditorium, demonstrating project features, technical stack, and implementation process."</span>
                        </li>
                      </ul>
                    </div>

                    <div className={`border-l-4 pl-8 relative ${darkMode ? "border-cyan-500" : "border-orange-500"}`}>
                      <div
                        className={`absolute w-4 h-4 rounded-full -left-2 top-0 ${
                          darkMode ? "bg-cyan-500" : "bg-orange-500"
                        }`}
                      ></div>
                      <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
                        Frontend Developer
                      </h3>
                      {/* <p className={`font-medium mb-3 ${darkMode ? "text-cyan-400" : "text-orange-600"}`}>
                        StartupXYZ • 2022 - 2023
                      </p> */}
                      <ul className={`space-y-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        <li className="flex items-start space-x-2">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              darkMode ? "bg-cyan-400" : "bg-orange-400"
                            }`}
                          ></div>
                          <span>Built responsive web interfaces using React and Tailwind CSS</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              darkMode ? "bg-cyan-400" : "bg-orange-400"
                            }`}
                          ></div>
                          <span>Optimized application performance resulting in 35% faster load times</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              darkMode ? "bg-cyan-400" : "bg-orange-400"
                            }`}
                          ></div>
                          <span>Collaborated with design team to implement pixel-perfect UI components</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Internships */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        darkMode
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                          : "bg-gradient-to-r from-blue-500 to-cyan-500"
                      }`}
                    >
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Internships</h2>
                  </div>
                  <div className="space-y-8">
                    {internships.map((internship, index) => (
                      <div
                        key={index}
                        className={`border-l-4 pl-8 relative ${darkMode ? "border-cyan-500" : "border-blue-500"}`}
                      >
                        <div
                          className={`absolute w-4 h-4 rounded-full -left-2 top-0 ${
                            darkMode ? "bg-cyan-500" : "bg-blue-500"
                          }`}
                        ></div>
                        <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
                          {internship.title}
                        </h3>
                        <p className={`font-medium mb-3 ${darkMode ? "text-cyan-400" : "text-blue-600"}`}>
                          {internship.company} • {internship.duration}
                        </p>
                        <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                          {internship.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {internship.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              className={`${
                                darkMode
                                  ? "bg-gray-600/50 text-gray-300 border-gray-500/50"
                                  : "bg-white/50 text-gray-700 border-gray-300/50"
                              }`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        darkMode
                          ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                          : "bg-gradient-to-r from-amber-500 to-orange-500"
                      }`}
                    >
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Education</h2>
                  </div>
                  <div className={`border-l-4 pl-8 relative ${darkMode ? "border-yellow-500" : "border-amber-500"}`}>
                    <div
                      className={`absolute w-4 h-4 rounded-full -left-2 top-0 ${
                        darkMode ? "bg-yellow-500" : "bg-amber-500"
                      }`}
                    ></div>
                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
                      Bachelor of Technology
                    </h3>
                    <p className={`font-medium mb-3 ${darkMode ? "text-yellow-400" : "text-amber-600"}`}>
                      Computer Science Engineering • 2023 - 2026
                    </p>
                    <p className={`font-medium mb-3 ${darkMode ? "text-yellow-400" : "text-amber-600"}`}>
                      Sri Vasavi Engineering College
                    </p>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                      CGPA: 8.0/10 • Relevant Coursework: Data Structures, Algorithms, Web Development, Machine
                      Learning, Database Systems, Software Engineering
                    </p>
                  </div>
                </div>

                {/* Skills Summary */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        darkMode
                          ? "bg-gradient-to-r from-pink-500 to-rose-500"
                          : "bg-gradient-to-r from-rose-500 to-pink-500"
                      }`}
                    >
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                      Technical Skills
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { category: "Frontend", skills: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
                      { category: "Backend", skills: ["Node.js", "Python", "Express", "Django"] },
                      { category: "Database", skills: ["MongoDB","MySQL"] },
                      { category: "Mobile", skills: ["React Native", "Expo", "Android"] },
                      { category: "AI/ML", skills: ["TensorFlow", "Computer Vision", "Scikit-learn"] },
                      // { category: "DevOps", skills: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD"] },
                    ].map((skillGroup, index) => (
                      <div key={index} className={`rounded-lg p-4 ${darkMode ? "bg-gray-700/30" : "bg-gray-100/50"}`}>
                        <h4 className={`font-bold mb-3 ${darkMode ? "text-blue-400" : "text-pink-600"}`}>
                          {skillGroup.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.skills.map((skill) => (
                            <Badge
                              key={skill}
                              className={`${
                                darkMode
                                  ? "bg-gray-600/50 text-gray-300 border-gray-500/50"
                                  : "bg-white/50 text-gray-700 border-gray-300/50"
                              }`}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interests & Hobbies */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        darkMode
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                          : "bg-gradient-to-r from-green-500 to-emerald-500"
                      }`}
                    >
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                      Interests & Hobbies
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {PORTFOLIO_CONFIG.personal.interests.map((interest, index) => (
                      <Badge
                        key={index}
                        className={`px-4 py-2 text-sm font-medium ${
                          darkMode
                            ? "bg-gray-700/50 text-gray-300 border-gray-600/50"
                            : "bg-gray-100/50 text-gray-700 border-gray-300/50"
                        }`}
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        darkMode
                          ? "bg-gradient-to-r from-orange-500 to-red-500"
                          : "bg-gradient-to-r from-orange-500 to-red-500"
                      }`}
                    >
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Languages</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {PORTFOLIO_CONFIG.personal.languages.map((language, index) => (
                      <Badge
                        key={index}
                        className={`px-4 py-2 text-sm font-medium ${
                          darkMode
                            ? "bg-gray-700/50 text-gray-300 border-gray-600/50"
                            : "bg-gray-100/50 text-gray-700 border-gray-300/50"
                        }`}
                      >
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </PageWrapper>
    )
  }

  // Enhanced Page Wrapper Component
  function PageWrapper({ title, icon, children }) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Enhanced Animated Background */}
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-br from-gray-950 via-blue-950 to-cyan-950"
              : "bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50"
          }`}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        </div>

        <div
          className={`relative z-10 py-24 px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <div className="mb-12">
              <Button
                variant="outline"
                onClick={() => navigateToPage("home")}
                className={`group flex items-center gap-3 backdrop-blur-sm border px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  darkMode
                    ? "bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 text-gray-300 hover:text-white hover:shadow-blue-500/25"
                    : "bg-white/50 border-gray-200/50 hover:border-pink-500/50 text-gray-700 hover:text-gray-900 hover:shadow-pink-500/25"
                }`}
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Portfolio
              </Button>
            </div>

            {/* Enhanced Page Header */}
            <div className="text-center mb-20">
              <div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 text-white shadow-2xl hover:scale-110 transition-transform duration-500 ${
                  darkMode
                    ? "bg-gradient-to-r from-blue-400 to-cyan-400"
                    : "bg-gradient-to-r from-pink-400 to-orange-400"
                }`}
              >
                {icon}
              </div>
              <h1
                className={`text-5xl md:text-6xl font-bold mb-6 animate-gradient-x ${
                  darkMode
                    ? "bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-pink-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent"
                }`}
              >
                {title}
              </h1>
              <div
                className={`w-32 h-1 mx-auto rounded-full ${
                  darkMode
                    ? "bg-gradient-to-r from-blue-400 to-cyan-400"
                    : "bg-gradient-to-r from-pink-400 to-orange-400"
                }`}
              ></div>
            </div>

            {/* Page Content */}
            {children}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Enhanced Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-md border-b shadow-lg transition-all duration-300 ${
          darkMode ? "bg-gray-900/80 border-gray-800/50" : "bg-white/80 border-gray-200/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div
              className={`text-2xl font-bold cursor-pointer hover:scale-105 transition-transform duration-300 ${
                darkMode
                  ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent"
              }`}
              onClick={() => navigateToPage("home")}
            >
              Abhiram
            </div>

            <div className="flex items-center space-x-6">
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                {["about", "skills", "projects", "achievements", "certifications", "internships", "contact"].map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => navigateToPage(page)}
                      className={`relative transition-colors duration-300 capitalize font-medium group ${
                        darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {page}
                      <span
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300 ${
                          darkMode
                            ? "bg-gradient-to-r from-blue-400 to-cyan-400"
                            : "bg-gradient-to-r from-pink-400 to-orange-400"
                        }`}
                      ></span>
                    </button>
                  ),
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                {/* Admin Toggle */}
                <div className="flex items-center space-x-2">
                  {!isAdmin ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className={`hover:scale-110 transition-all duration-300 ${
                            darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                          }`}
                        >
                          <Lock className="w-5 h-5" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent
                        className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
                      >
                        <DialogHeader>
                          <DialogTitle className={darkMode ? "text-white" : "text-gray-800"}>Admin Login</DialogTitle>
                          <DialogDescription className={darkMode ? "text-gray-300" : "text-gray-600"}>
                            Enter the admin password to manage projects and certifications.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <Input
                            type="password"
                            placeholder="Admin Password"
                            value={adminPassword}
                            onChange={(e) => setAdminPassword(e.target.value)}
                            className="input-field"
                            onKeyPress={(e) => e.key === "Enter" && handleAdminLogin()}
                          />
                          <Button onClick={handleAdminLogin} className="w-full button-gradient">
                            Login
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsAdmin(false)}
                      className={`hover:scale-110 transition-all duration-300 ${
                        darkMode ? "text-green-400 hover:text-green-300" : "text-green-600 hover:text-green-700"
                      }`}
                    >
                      <Unlock className="w-5 h-5" />
                    </Button>
                  )}
                </div>

                <Button
                  onClick={() => navigateToPage("resume")}
                  className={`hidden sm:flex px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 button-gradient`}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View Resume
                </Button>

                {/* Enhanced Theme Toggle */}
                <div className="flex items-center space-x-2">
                  <Sun className={`w-4 h-4 ${!darkMode ? "text-yellow-500" : "text-gray-400"}`} />
                  <Switch
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                    className="data-[state=checked]:bg-blue-600"
                  />
                  <Moon className={`w-4 h-4 ${darkMode ? "text-blue-400" : "text-gray-400"}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {renderCurrentPage()}

      {/* Enhanced Footer */}
      {currentPage === "home" && (
        <footer
          className={`relative py-16 px-4 border-t backdrop-blur-sm ${
            darkMode ? "border-gray-800/50 bg-gray-900/50" : "border-gray-200/50 bg-white/50"
          }`}
        >
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h3
                className={`text-3xl font-bold mb-4 ${
                  darkMode
                    ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent"
                }`}
              >
                {PORTFOLIO_CONFIG.personal.name}
              </h3>
              <p className={`mb-8 max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                © 2024 {PORTFOLIO_CONFIG.personal.name}. Crafted with ❤️ and lots of ☕ using Next.js & Tailwind CSS
              </p>
            </div>

            <div className="flex justify-center space-x-6 mb-8">
              {[
                {
                  icon: <Github className="w-6 h-6" />,
                  url: PORTFOLIO_CONFIG.personal.github,
                  color: darkMode ? "hover:text-blue-400" : "hover:text-pink-600",
                },
                {
                  icon: <Linkedin className="w-6 h-6" />,
                  url: PORTFOLIO_CONFIG.personal.linkedin,
                  color: darkMode ? "hover:text-cyan-400" : "hover:text-orange-600",
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  url: `mailto:${PORTFOLIO_CONFIG.personal.email}`,
                  color: darkMode ? "hover:text-green-400" : "hover:text-yellow-600",
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  url: `tel:${PORTFOLIO_CONFIG.personal.phone}`,
                  color: darkMode ? "hover:text-red-400" : "hover:text-emerald-600",
                },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    window.open(
                      social.url,
                      social.url.includes("mailto") || social.url.includes("tel") ? "_self" : "_blank",
                    )
                  }
                  className={`w-12 h-12 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                    darkMode
                      ? "bg-gray-800/50 border-gray-700/50 hover:border-blue-500/50 text-gray-400 hover:shadow-blue-500/25"
                      : "bg-white/50 border-gray-200/50 hover:border-pink-500/50 text-gray-600 hover:shadow-pink-500/25"
                  } ${social.color}`}
                >
                  {social.icon}
                </Button>
              ))}
            </div>

            <div className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
              Made with modern web technologies • Always learning, always growing
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}

// Enhanced Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Contact form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-semibold">
            Full Name *
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="input-field"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-semibold">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            className="input-field"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-sm font-semibold">
          Subject *
        </Label>
        <Input
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="Let's discuss a project"
          className="input-field"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-semibold">
          Message *
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell me about your project ideas, requirements, or just say hello..."
          rows={6}
          className="input-field resize-none"
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full button-gradient text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
            Sending Message...
          </>
        ) : isSuccess ? (
          <>
            <Heart className="w-5 h-5 mr-3 text-green-400" />
            Message Sent Successfully!
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-3" />
            Send Message
          </>
        )}
      </Button>

      {isSuccess && (
        <div className="text-center p-4 bg-green-500/10 border border-green-500/50 rounded-lg animate-pulse">
          <p className="text-green-400 font-medium">Thank you for your message! I'll get back to you soon.</p>
        </div>
      )}
    </form>
  )
}
