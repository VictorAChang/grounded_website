import Link from "next/link"
import { Button } from "@/components/ui/button"
import ImageCarousel from "@/components/image-carousel"

export default function Home() {
  const carouselImages = [
    {
      src: "/images/cafe-interior.png",
      alt: "Grounded cafe interior",
    },
    {
      src: "/images/yoga-class.png",
      alt: "Yoga session at Grounded",
    },
    {
      src: "/images/coffee-brewing.png",
      alt: "Coffee brewing at Grounded",
    },
    {
      src: "/images/community-event.png",
      alt: "Community event at Grounded",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 serif-font">Grounded</h1>
          <p className="text-xl md:text-2xl mb-2 max-w-3xl mx-auto serif-font">Grounded Body, Brewed Soul</p>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Where mindfulness meets Michigan&apos;s finest coffee. A unique yoga and coffee experience featuring local
            vendors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-amber-700 hover:bg-amber-800 text-white" size="lg">
              <Link href="/yoga">Explore Yoga Classes</Link>
            </Button>
            <Button asChild className="bg-clay-600 hover:bg-clay-700 text-white" size="lg">
              <Link href="/coffee">View Coffee Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Our Space</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Step into our tranquil oasis where yoga and coffee culture blend seamlessly to create a unique community
            space.
          </p>
          <div className="max-w-4xl mx-auto">
            <ImageCarousel images={carouselImages} />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Grounded was born from a simple idea: create a space where mindfulness and community could thrive
                together. Founded by two Michigan natives with a passion for yoga and specialty coffee, our shop has
                become a sanctuary for those seeking balance in their busy lives.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We partner exclusively with Michigan-based coffee roasters and food vendors to bring you the best local
                flavors while supporting our community. Our yoga instructors are dedicated to creating an inclusive
                environment where everyone, from beginners to advanced practitioners, can find their center.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/events">Join Our Community</Link>
              </Button>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
              The founders of Grounded
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card p-6">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-700 dark:text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-900 dark:text-amber-600 serif-font">Yoga Classes</h3>
              <p className="text-gray-600 dark:text-gray-300">
                From gentle flow to power yoga, our classes cater to all levels and are taught by certified instructors
                passionate about helping you grow in your practice.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-clay-100 dark:bg-clay-900 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-clay-700 dark:text-clay-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-clay-700 dark:text-clay-500 serif-font">
                Michigan Coffee
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We proudly serve coffee from Michigan&apos;s finest roasters, carefully selected for their quality,
                sustainability practices, and exceptional flavor profiles.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-700 dark:text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-900 dark:text-amber-600 serif-font">
                Community Events
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join us for workshops, open mics, art exhibitions, and more. Our space is designed to foster connections
                and celebrate local talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-800 dark:bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 serif-font">Join Our Mindful Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sign up for our newsletter to stay updated on new classes, coffee offerings, and upcoming events.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
              />
              <Button className="bg-white text-amber-800 hover:bg-gray-100">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
