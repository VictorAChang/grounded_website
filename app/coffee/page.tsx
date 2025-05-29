import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would typically come from a database
const coffeeItems = {
  espresso: [
    {
      id: 1,
      name: "Espresso",
      description: "Pure, intense coffee served as a shot",
      origin: "Blend of Ethiopian and Colombian beans",
      roaster: "Great Lakes Coffee Roasting Co.",
      price: 3.5,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      name: "Americano",
      description: "Espresso diluted with hot water",
      origin: "Blend of Ethiopian and Colombian beans",
      roaster: "Great Lakes Coffee Roasting Co.",
      price: 4.0,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      name: "Cappuccino",
      description: "Equal parts espresso, steamed milk, and milk foam",
      origin: "Blend of Ethiopian and Colombian beans",
      roaster: "Great Lakes Coffee Roasting Co.",
      price: 4.5,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      name: "Latte",
      description: "Espresso with steamed milk and a light layer of foam",
      origin: "Blend of Ethiopian and Colombian beans",
      roaster: "Great Lakes Coffee Roasting Co.",
      price: 4.75,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk",
      origin: "Blend of Ethiopian and Colombian beans",
      roaster: "Great Lakes Coffee Roasting Co.",
      price: 5.25,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      name: "Macchiato",
      description: "Espresso with a small amount of foamed milk",
      origin: "Blend of Ethiopian and Colombian beans",
      roaster: "Great Lakes Coffee Roasting Co.",
      price: 4.25,
      image: "/placeholder.svg?height=400&width=600",
    },
  ],
  brewed: [
    {
      id: 7,
      name: "Pour Over",
      description: "Hand-poured coffee highlighting the bean's unique characteristics",
      origin: "Single-origin Ethiopian Yirgacheffe",
      roaster: "Hyperion Coffee Co.",
      price: 4.5,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 8,
      name: "French Press",
      description: "Full-bodied, rich coffee with more oils and sediment",
      origin: "Single-origin Sumatra Mandheling",
      roaster: "Populace Coffee",
      price: 4.25,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 9,
      name: "Cold Brew",
      description: "Smooth, low-acid coffee brewed with cold water for 12+ hours",
      origin: "Blend of Brazilian and Guatemalan beans",
      roaster: "Madcap Coffee Company",
      price: 5.0,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 10,
      name: "Drip Coffee",
      description: "Our house blend, brewed fresh throughout the day",
      origin: "Blend of Central and South American beans",
      roaster: "Stovetop Roasters",
      price: 3.25,
      image: "/placeholder.svg?height=400&width=600",
    },
  ],
  specialty: [
    {
      id: 11,
      name: "Mindful Mug Signature",
      description: "Our signature drink with espresso, maple syrup, and oat milk",
      origin: "Blend of Ethiopian and Colombian beans",
      roaster: "Great Lakes Coffee Roasting Co.",
      price: 5.75,
      image: "/placeholder.svg?height=400&width=600",
      special: true,
    },
    {
      id: 12,
      name: "Lavender Latte",
      description: "Espresso with house-made lavender syrup and steamed milk",
      origin: "Blend of Ethiopian and Colombian beans",
      roaster: "Great Lakes Coffee Roasting Co.",
      price: 5.5,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 13,
      name: "Michigan Maple",
      description: "Espresso with local maple syrup and cinnamon",
      origin: "Blend of Ethiopian and Colombian beans",
      roaster: "Great Lakes Coffee Roasting Co.",
      price: 5.5,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 14,
      name: "Chai Latte",
      description: "House-made chai blend with steamed milk",
      origin: "N/A",
      roaster: "N/A",
      price: 4.75,
      image: "/placeholder.svg?height=400&width=600",
    },
  ],
}

// This would typically come from a database
const roasters = [
  {
    id: 1,
    name: "Great Lakes Coffee Roasting Co.",
    location: "Detroit, MI",
    description: "A Detroit-based roaster committed to sustainable sourcing and artisanal roasting techniques.",
    image: "/placeholder.svg?height=400&width=600",
    website: "https://greatlakescoffee.com",
  },
  {
    id: 2,
    name: "Hyperion Coffee Co.",
    location: "Ypsilanti, MI",
    description: "Small-batch roaster focusing on single-origin coffees and direct trade relationships with farmers.",
    image: "/placeholder.svg?height=400&width=600",
    website: "https://hyperioncoffee.com",
  },
  {
    id: 3,
    name: "Madcap Coffee Company",
    location: "Grand Rapids, MI",
    description: "Award-winning roaster known for their meticulous sourcing and precision roasting.",
    image: "/placeholder.svg?height=400&width=600",
    website: "https://madcapcoffee.com",
  },
  {
    id: 4,
    name: "Populace Coffee",
    location: "Bay City, MI",
    description: "Focused on making specialty coffee approachable while maintaining exceptional quality.",
    image: "/placeholder.svg?height=400&width=600",
    website: "https://populacecoffee.com",
  },
]

export default function CoffeePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-olive-700 dark:bg-olive-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Coffee Menu</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover our selection of ethically sourced, locally roasted coffees from Michigan&apos;s finest roasters.
          </p>
          <Button asChild size="lg" className="bg-white text-olive-700 hover:bg-gray-100">
            <a href="#menu">View Menu</a>
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Our Coffee Philosophy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                At Grounded, we believe that great coffee starts with great relationships. We partner exclusively with
                Michigan-based roasters who share our commitment to quality, sustainability, and ethical sourcing.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Each cup we serve tells a story - from the farmers who cultivate the beans, to the roasters who develop
                their unique flavors, to our baristas who craft your perfect drink. We&apos;re proud to showcase the
                incredible coffee talent that Michigan has to offer.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Whether you&apos;re a coffee connoisseur or just looking for a delicious cup to enjoy with your yoga
                practice, we&apos;re here to provide a mindful coffee experience that connects you to the local
                community.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Coffee being prepared at The Mindful Mug"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Menu */}
      <section id="menu" className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Coffee Menu</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Explore our selection of carefully crafted coffee beverages, featuring beans from Michigan&apos;s finest
            roasters.
          </p>

          <Tabs defaultValue="espresso" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="espresso">Espresso Drinks</TabsTrigger>
              <TabsTrigger value="brewed">Brewed Coffee</TabsTrigger>
              <TabsTrigger value="specialty">Specialty Drinks</TabsTrigger>
            </TabsList>

            {Object.entries(coffeeItems).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        {item.special && (
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-olive-600">Staff Pick</Badge>
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-amber-800 dark:text-amber-500">{item.name}</CardTitle>
                          <span className="font-semibold">${item.price.toFixed(2)}</span>
                        </div>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="font-medium">Origin:</span>
                            <span>{item.origin}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Roaster:</span>
                            <span>{item.roaster}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              All drinks available with your choice of whole, skim, oat, almond, or soy milk.
            </p>
            <p className="text-gray-600 dark:text-gray-300">Add an extra shot of espresso to any drink for $1.00.</p>
          </div>
        </div>
      </section>

      {/* Featured Roasters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Our Michigan Roasters</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            We proudly partner with these exceptional Michigan-based coffee roasters who share our values of quality,
            sustainability, and community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roasters.map((roaster) => (
              <Card key={roaster.id} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-full min-h-[200px]">
                    <Image src={roaster.image || "/placeholder.svg"} alt={roaster.name} fill className="object-cover" />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-400 mb-2">{roaster.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">{roaster.location}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{roaster.description}</p>
                    <a
                      href={roaster.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Visit Website →
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bean-to-Cup Process */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">From Bean to Cup</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Our commitment to quality is reflected in every step of our coffee journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-2">Ethical Sourcing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We partner with roasters who maintain direct relationships with farmers and pay fair prices for their
                crops.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-2">Local Roasting</h3>
              <p className="text-gray-600 dark:text-gray-300">
                All our beans are roasted in Michigan by skilled artisans who bring out each coffee&apos;s unique
                characteristics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-2">Precision Brewing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our baristas are trained in the art and science of coffee preparation, ensuring consistent quality in
                every cup.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-2">Mindful Service</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We serve each cup with intention, creating a moment of connection between you and your coffee
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Coffee beans and retail products at The Mindful Mug"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="section-heading">Take Home the Experience</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Love our coffee? Take some home with you! We offer a rotating selection of whole bean coffees from our
                partner roasters, along with brewing equipment and Grounded merchandise.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our knowledgeable staff can help you select the perfect beans for your taste preferences and brewing
                method, and even provide brewing tips to help you recreate the Grounded experience at home.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Ask about our coffee subscription service for regular deliveries of fresh-roasted beans to your door.
              </p>
              <Button className="bg-olive-600 hover:bg-olive-700 text-white">Shop Retail</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-olive-700 dark:bg-olive-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Our Coffee Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit Grounded to enjoy a thoughtfully crafted cup of Michigan&apos;s finest coffee in our serene, welcoming
            space.
          </p>
          <Button asChild size="lg" className="bg-white text-olive-700 hover:bg-gray-100">
            <a href="#menu">View Menu</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
