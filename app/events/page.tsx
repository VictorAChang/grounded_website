import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would typically come from a database
const events = {
  upcoming: [
    {
      id: 1,
      title: "Sunrise Yoga & Coffee Tasting",
      description:
        "Start your day with an energizing yoga flow followed by a guided tasting of our featured coffee of the month.",
      date: "June 15, 2025",
      time: "6:30 AM - 8:30 AM",
      price: "$25",
      image: "/placeholder.svg?height=400&width=600",
      category: "Yoga & Coffee",
    },
    {
      id: 2,
      title: "Local Artist Showcase: Emma Chen",
      description:
        "Join us for the opening reception of Emma Chen's exhibition featuring paintings inspired by Michigan landscapes.",
      date: "June 18, 2025",
      time: "7:00 PM - 9:00 PM",
      price: "Free",
      image: "/placeholder.svg?height=400&width=600",
      category: "Art",
    },
    {
      id: 3,
      title: "Mindful Meditation Workshop",
      description:
        "Learn practical meditation techniques to reduce stress and increase focus in this beginner-friendly workshop.",
      date: "June 22, 2025",
      time: "10:00 AM - 12:00 PM",
      price: "$20",
      image: "/placeholder.svg?height=400&width=600",
      category: "Wellness",
    },
    {
      id: 4,
      title: "Coffee Brewing Masterclass",
      description:
        "Our head barista will guide you through different brewing methods to help you perfect your at-home coffee game.",
      date: "June 25, 2025",
      time: "6:00 PM - 8:00 PM",
      price: "$30",
      image: "/placeholder.svg?height=400&width=600",
      category: "Coffee",
    },
  ],
  past: [
    {
      id: 5,
      title: "Poetry Open Mic Night",
      description: "Local poets shared their work in our cozy space, accompanied by specialty coffee and tea.",
      date: "May 28, 2025",
      time: "7:00 PM - 9:00 PM",
      price: "Free",
      image: "/placeholder.svg?height=400&width=600",
      category: "Community",
    },
    {
      id: 6,
      title: "Michigan Roasters Showcase",
      description: "A special event featuring coffee tastings from five Michigan-based roasters with Q&A sessions.",
      date: "May 20, 2025",
      time: "2:00 PM - 5:00 PM",
      price: "$15",
      image: "/placeholder.svg?height=400&width=600",
      category: "Coffee",
    },
    {
      id: 7,
      title: "Yoga for Stress Relief",
      description: "A gentle yoga session focused on releasing tension and finding calm, followed by herbal tea.",
      date: "May 15, 2025",
      time: "6:30 PM - 8:00 PM",
      price: "$18",
      image: "/placeholder.svg?height=400&width=600",
      category: "Yoga",
    },
    {
      id: 8,
      title: "Local Vendor Market",
      description: "We hosted Michigan-based artisans and food producers for a day of community shopping.",
      date: "May 8, 2025",
      time: "10:00 AM - 4:00 PM",
      price: "Free",
      image: "/placeholder.svg?height=400&width=600",
      category: "Community",
    },
  ],
}

// This would typically come from a database
const blogPosts = [
  {
    id: 1,
    title: "The Art of Mindful Coffee Drinking",
    excerpt:
      "Discover how turning your daily coffee ritual into a mindfulness practice can enhance your wellbeing and deepen your appreciation for your favorite brew.",
    date: "May 25, 2025",
    author: "Sarah Johnson",
    image: "/placeholder.svg?height=400&width=600",
    category: "Mindfulness",
  },
  {
    id: 2,
    title: "Meet the Roaster: Hyperion Coffee Co.",
    excerpt:
      "We sit down with the founders of Ypsilanti-based Hyperion Coffee to learn about their journey, sourcing practices, and commitment to sustainability.",
    date: "May 18, 2025",
    author: "Michael Chen",
    image: "/placeholder.svg?height=400&width=600",
    category: "Coffee",
  },
  {
    id: 3,
    title: "Yoga Poses to Complement Your Coffee Routine",
    excerpt:
      "Our yoga instructor Emma shares simple poses you can incorporate into your morning routine to energize your body while your coffee brews.",
    date: "May 10, 2025",
    author: "Emma Williams",
    image: "/placeholder.svg?height=400&width=600",
    category: "Yoga",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-800 to-olive-700 dark:from-amber-900 dark:to-olive-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Community</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join us for special events, workshops, and community gatherings that celebrate mindfulness, coffee culture,
            and local talent.
          </p>
          <Button asChild size="lg" className="bg-white text-amber-800 hover:bg-gray-100">
            <a href="#events">Upcoming Events</a>
          </Button>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Events at Grounded</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            From yoga workshops to coffee tastings, art exhibitions to community gatherings, there&apos;s always
            something happening at Grounded.
          </p>

          <Tabs defaultValue="upcoming" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            {Object.entries(events).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-amber-700">{event.category}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-teal-800 dark:text-teal-400">{event.title}</CardTitle>
                        <CardDescription>{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-2 text-teal-600 dark:text-teal-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-2 text-teal-600 dark:text-teal-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-2 text-teal-600 dark:text-teal-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>{event.price}</span>
                          </div>
                        </div>
                      </CardContent>
                      {category === "upcoming" && (
                        <CardFooter>
                          <Button className="w-full bg-amber-700 hover:bg-amber-800">Register</Button>
                        </CardFooter>
                      )}
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Host Your Event With Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Looking for a unique venue for your next gathering? Grounded offers a warm, welcoming space for
                community events, workshops, meetings, and more.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our flexible space can accommodate various setups, and we offer catering options featuring our coffee,
                tea, and locally sourced treats. Whether you&apos;re planning a book club meeting, a workshop, or a
                small celebration, we&apos;d love to host you.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Contact us to discuss your event needs and check availability.
              </p>
              <Button asChild className="bg-amber-700 hover:bg-amber-800 text-white">
                <Link href="/join-us#contact">Inquire About Hosting</Link>
              </Button>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Event space at The Mindful Mug"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">From Our Blog</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Explore articles about coffee, yoga, mindfulness, and our community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-olive-600">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-800 dark:text-blue-400">{post.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>By {post.author}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-amber-700 text-amber-700 hover:bg-amber-50 dark:border-amber-500 dark:text-amber-500 dark:hover:bg-amber-950"
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-olive-600 hover:bg-olive-700 text-white">
              <Link href="#">View All Blog Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Community Gallery</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Moments captured at our events and gatherings.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=Gallery+${index + 1}`}
                  alt={`Community gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              className="border-amber-700 text-amber-700 hover:bg-amber-50 dark:border-amber-500 dark:text-amber-500 dark:hover:bg-amber-950"
            >
              <Link href="#">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-amber-800 to-olive-700 dark:from-amber-900 dark:to-olive-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated on Events</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on upcoming events, workshops, and community gatherings.
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
