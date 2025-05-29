import Link from "next/link";
import Image from "next/image";
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

// This would typically come from a database
const yogaClasses = [
  {
    id: 1,
    title: "Morning Flow",
    description:
      "Start your day with an energizing vinyasa flow suitable for all levels.",
    instructor: "Sarah Johnson",
    duration: "60 min",
    level: "All Levels",
    time: "Mon, Wed, Fri - 7:00 AM",
    image: "/images/morning_flow.svg?height=400&width=600",
    price: 15,
  },
  {
    id: 2,
    title: "Power Yoga",
    description:
      "Build strength and endurance with this challenging power yoga class.",
    instructor: "Michael Chen",
    duration: "75 min",
    level: "Intermediate/Advanced",
    time: "Tue, Thu - 5:30 PM",
    image: "/placeholder.svg?height=400&width=600",
    price: 18,
  },
  {
    id: 3,
    title: "Gentle Restore",
    description:
      "A gentle practice focusing on deep relaxation and stress relief.",
    instructor: "Emma Williams",
    duration: "60 min",
    level: "Beginner",
    time: "Mon, Wed - 6:30 PM",
    image: "/placeholder.svg?height=400&width=600",
    price: 15,
  },
  {
    id: 4,
    title: "Meditation & Breathwork",
    description:
      "Focus on mindfulness meditation and pranayama breathing techniques.",
    instructor: "David Miller",
    duration: "45 min",
    level: "All Levels",
    time: "Tue, Thu - 7:00 AM",
    image: "/placeholder.svg?height=400&width=600",
    price: 12,
  },
  {
    id: 5,
    title: "Yin Yoga",
    description:
      "A slow-paced style of yoga with postures held for longer periods.",
    instructor: "Lisa Thompson",
    duration: "75 min",
    level: "All Levels",
    time: "Fri - 6:00 PM, Sun - 10:00 AM",
    image: "/placeholder.svg?height=400&width=600",
    price: 16,
  },
  {
    id: 6,
    title: "Yoga for Beginners",
    description:
      "An introduction to basic yoga poses and breathing techniques.",
    instructor: "James Wilson",
    duration: "60 min",
    level: "Beginner",
    time: "Sat - 9:00 AM",
    image: "/placeholder.svg?height=400&width=600",
    price: 14,
  },
];

// This would typically come from a database
const instructors = [
  {
    id: 1,
    name: "Sarah Johnson",
    bio: "Sarah has been practicing yoga for over 15 years and teaching for 10. She specializes in vinyasa flow and mindfulness meditation.",
    image: "/placeholder.svg?height=300&width=300",
    certifications: ["RYT-500", "Meditation Certified"],
  },
  {
    id: 2,
    name: "Michael Chen",
    bio: "Michael brings a dynamic approach to yoga, combining traditional practices with modern fitness principles. His classes focus on building strength and flexibility.",
    image: "/placeholder.svg?height=300&width=300",
    certifications: ["RYT-200", "Power Yoga Certified"],
  },
  {
    id: 3,
    name: "Emma Williams",
    bio: "Emma specializes in restorative and therapeutic yoga. Her gentle approach makes yoga accessible to practitioners of all ages and abilities.",
    image: "/placeholder.svg?height=300&width=300",
    certifications: ["RYT-500", "Yoga Therapy Certified"],
  },
];

export default function YogaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-amber-800 dark:bg-amber-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Yoga at Grounded
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Find balance, strength, and peace through our variety of yoga
            classes taught by experienced instructors in a welcoming
            environment.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-amber-800 hover:bg-gray-100"
          >
            <a href="#classes">View Class Schedule</a>
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Yoga practice at The Mindful Mug"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="section-heading">Our Yoga Philosophy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                At Grounded, we believe yoga is for everybody. Our classes
                combine movement, breath, and mindfulness to create a holistic
                practice that nurtures both body and mind.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We offer a variety of classes to suit all levels and
                preferences, from energizing vinyasa flows to gentle restorative
                sessions. Our experienced instructors create a supportive
                environment where you can explore your practice at your own
                pace.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Whether you&apos;re a complete beginner or an experienced yogi,
                you&apos;ll find a class that meets you where you are and helps
                you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section id="classes" className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Class Schedule</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Browse our weekly yoga classes and find the perfect session for your
            schedule and experience level.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yogaClasses.map((yogaClass) => (
              <Card key={yogaClass.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={yogaClass.image || "/placeholder.svg"}
                    alt={yogaClass.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-teal-800 dark:text-teal-400">
                      {yogaClass.title}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-amber-50 dark:bg-amber-900 text-amber-800 dark:text-amber-300"
                    >
                      {yogaClass.level}
                    </Badge>
                  </div>
                  <CardDescription>{yogaClass.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Instructor:</span>
                      <span>{yogaClass.instructor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Duration:</span>
                      <span>{yogaClass.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Schedule:</span>
                      <span>{yogaClass.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Price:</span>
                      <span>${yogaClass.price} per class</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-amber-700 hover:bg-amber-800">
                    Book Class
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#"
              className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
            >
              View Full Schedule →
            </Link>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Meet Our Instructors</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Our experienced and certified yoga instructors are passionate about
            sharing the benefits of yoga with our community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <Card key={instructor.id}>
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-amber-800 dark:text-amber-500">
                    {instructor.name}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {instructor.certifications.map((cert, index) => (
                      <Badge key={index} variant="secondary">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {instructor.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Pricing & Packages</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Choose from our flexible pricing options to find the best fit for
            your practice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-transparent hover:border-amber-600 transition-all">
              <CardHeader>
                <CardTitle className="text-center text-teal-800 dark:text-teal-400">
                  Drop-In
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold">$18</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {" "}
                    / class
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-teal-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Single class attendance
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-teal-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Access to all class types
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-teal-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Mat rental included
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Book Now
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-amber-600 shadow-lg relative">
              <div className="absolute top-0 right-0 bg-amber-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                Popular
              </div>
              <CardHeader>
                <CardTitle className="text-center text-teal-800 dark:text-teal-400">
                  10-Class Pass
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold">$150</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {" "}
                    ($15/class)
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-teal-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    10 classes to use within 3 months
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-teal-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Access to all class types
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-teal-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Mat rental included
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-teal-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    10% off coffee purchases
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Purchase Pass
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-transparent hover:border-amber-600 transition-all">
              <CardHeader>
                <CardTitle className="text-center text-teal-800 dark:text-teal-400">
                  Monthly Unlimited
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold">$120</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {" "}
                    / month
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-teal-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Unlimited classes for 30 days
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-teal-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Priority booking
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-teal-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Mat rental included
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-teal-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    15% off coffee purchases
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Subscribe
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto mt-8 space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-400 mb-2">
                What should I bring to class?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We recommend bringing your own yoga mat if you have one, though
                we do offer mat rentals. Wear comfortable clothing that allows
                you to move freely. A water bottle is also recommended, and you
                might want to bring a small towel for more vigorous classes.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-400 mb-2">
                I'm a complete beginner. Which class should I start with?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We recommend our "Yoga for Beginners" class or "Gentle Restore"
                for those new to yoga. These classes focus on the fundamentals
                and move at a pace that allows you to learn proper alignment and
                breathing techniques.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-400 mb-2">
                How early should I arrive for class?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We recommend arriving 10-15 minutes before your first class to
                complete any necessary paperwork and get settled. For returning
                students, 5-10 minutes is usually sufficient to set up your
                space and center yourself before class begins.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-400 mb-2">
                Do I need to book classes in advance?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                While drop-ins are welcome when space permits, we recommend
                booking classes in advance to guarantee your spot, especially
                for our more popular classes. You can book online through our
                website or mobile app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-800 dark:bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Yoga Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us for a class and experience the perfect blend of mindfulness
            and movement in our welcoming community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-amber-800 hover:bg-gray-100"
            >
              <Link href="#classes">Book a Class</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-amber-700"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
