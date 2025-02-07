import Link from "next/link"
import { ArrowRight, Linkedin, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-2xl font-bold">
            ExoNova
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/hiivarun"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://www.hiivarun.in" target="_blank" className="text-gray-600 hover:text-gray-900">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Website</span>
            </Link>
            <Link href="mailto:ceo@hiivarun.in" className="text-gray-600 hover:text-gray-900">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Button asChild variant="outline" size="sm">
              <Link href="/login">Sign in</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="pt-32 pb-16 md:pt-48 md:pb-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Ship Smarter</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
              ExoNova connects importers and exporters with freight forwarders for seamless global shipping
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/register">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                <p className="text-gray-600">Connect with verified freight forwarders worldwide</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
                <p className="text-gray-600">Monitor your shipments with live updates</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Smart Pricing</h3>
                <p className="text-gray-600">Get competitive rates from multiple providers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-gray-600">Forwarders</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-gray-600">Shipments</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">© 2024 ExoNova. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <Link
                href="https://www.linkedin.com/in/hiivarun"
                target="_blank"
                className="text-gray-600 hover:text-gray-900"
              >
                LinkedIn
              </Link>
              <Link href="https://www.hiivarun.in" target="_blank" className="text-gray-600 hover:text-gray-900">
                Website
              </Link>
              <Link href="mailto:ceo@hiivarun.in" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

