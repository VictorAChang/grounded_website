import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// This would typically come from a database
const jobOpenings = [
  {
    id: 1,
    title: "Yoga Instructor",
    type: "Part-time",
    description:
      "We're looking for certified yoga instructors to join our team and lead a variety of classes for all experience levels.",
    requirements: [
      "RYT-200 certification or equivalent",
      "At least 1 year of teaching experience",
      "Ability to create inclusive, welcoming classes",
      "Interest in the connection between yoga and mindful coffee culture",
    ],
    responsibilities: [
      "Lead regular yoga classes according to schedule",
      "Develop class plans that align with our mindfulness philosophy",
      "Provide modifications for students of all levels",
      "Participate in special events and workshops",
    ],
  },
  {
    id: 2,
    title: "Barista",
    type: "Full-time / Part-time",
    description:
      "Join our coffee team to craft exceptional beverages and create a welcoming experience for our community.",
    requirements: [
      "Passion for specialty coffee",
      "Customer service experience preferred",
      "Knowledge of brewing methods and coffee origins a plus",
      "Ability to work in a fast-paced environment",
    ],
    responsibilities: [
      "Prepare coffee and tea beverages to high standards",
      "Educate customers about our coffee offerings and brewing methods",
      "Maintain cleanliness and organization of the coffee bar",
      "Contribute to a positive, mindful atmosphere",
    ],
  },
  {
    id: 3,
    title: "Community Events Coordinator",
    type: "Part-time",
    description:
      "Help us create and manage events that bring our community together around coffee, yoga, and mindfulness.",
    requirements: [
      "Experience in event planning or coordination",
      "Strong organizational and communication skills",
      "Passion for community building",
      "Interest in coffee, yoga, or wellness",
    ],
    responsibilities: [
      "Plan and coordinate regular events and workshops",
      "Manage event logistics, including scheduling and setup",
      "Build relationships with local artists, vendors, and community groups",
      "Promote events through social media and other channels",
    ],
  },
]

// This would typically come from a database
const volunteerOpportunities = [
  {
    id: 1,
    title: "Community Event Support",
    commitment: "Flexible, event-based",
    description:
      "Help us run our community events by assisting with setup, greeting attendees, and ensuring everything runs smoothly.",
  },
  {
    id: 2,
    title: "Yoga Assistant",
    commitment: "2-4 hours per week",
    description:
      "Assist our yoga instructors during classes by helping students with props, adjustments, and creating a welcoming environment.",
  },
  {
    id: 3,
    title: "Local Vendor Liaison",
    commitment: "5-10 hours per month",
    description:
      "Help us discover and connect with local Michigan vendors and artisans for our retail section and special events.",
  },
]

export default function JoinUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-clay-700 to-amber-800 dark:from-clay-900 dark:to-amber-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 serif-font">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Become part of the Grounded community as a team member, volunteer, or event partner.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-clay-700 hover:bg-gray-100">
              <a href="#careers">View Job Openings</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-clay-600">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Our Values</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            At Grounded, these core values guide everything we do.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-clay-100 dark:bg-clay-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-clay-600 dark:text-clay-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <CardTitle className="text-clay-800 dark:text-clay-400 serif-font">Mindfulness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  We approach every interaction and task with presence and intention, creating space for meaningful
                  connections and experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-amber-700 dark:text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <CardTitle className="text-amber-800 dark:text-amber-500 serif-font">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in the power of connection and strive to create a welcoming space where everyone feels
                  valued and included.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-sienna-100 dark:bg-sienna-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-sienna-600 dark:text-sienna-400"
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
                <CardTitle className="text-sienna-800 dark:text-sienna-400 serif-font">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  We make choices that support the wellbeing of our planet, our community, and our local economy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
              The Grounded team members
            </div>
            <div>
              <h2 className="section-heading">Why Join Grounded?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Working or volunteering with us is more than just a job—it&apos;s an opportunity to be part of a
                community that values mindfulness, connection, and growth.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-amber-600 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-amber-800 dark:text-amber-500">Supportive Environment:</strong> We foster a
                    culture of care, respect, and continuous learning.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-clay-500 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-clay-700 dark:text-clay-400">Growth Opportunities:</strong> We encourage
                    personal and professional development through training, workshops, and mentorship.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-clay-500 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-clay-700 dark:text-clay-400">Meaningful Work:</strong> Your contributions
                    directly impact our community and help create a space where people can connect and grow.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="careers" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Current Openings</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Join our team and help us create a space where mindfulness and community thrive.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-amber-800 dark:text-amber-500 serif-font">{job.title}</CardTitle>
                    <span className="text-sm bg-clay-100 dark:bg-clay-900 text-clay-800 dark:text-clay-300 px-2 py-1 rounded">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-clay-800 dark:text-clay-400 mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-clay-800 dark:text-clay-400 mb-2">Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        {job.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-amber-700 hover:bg-amber-800 text-white">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Volunteer Opportunities</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Give back to the community while gaining valuable experience in a supportive environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity) => (
              <Card key={opportunity.id}>
                <CardHeader>
                  <CardTitle className="text-clay-800 dark:text-clay-400 serif-font">{opportunity.title}</CardTitle>
                  <p className="text-sm text-amber-700 dark:text-amber-500 font-medium">{opportunity.commitment}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{opportunity.description}</p>
                  <Button variant="outline" className="w-full border-clay-600 text-clay-700 hover:bg-clay-50">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Get in Touch</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Ready to join our team or have questions about opportunities at Grounded? We&apos;d love to hear from
                you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-amber-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>careers@grounded.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-amber-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>(734) 555-1234</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-amber-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>123 Serenity Street, Ann Arbor, MI 48104</span>
                </div>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
              Contact us to join our team
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-clay-700 to-amber-800 dark:from-clay-900 dark:to-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 serif-font">Ready to Join Our Mission?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking for a career opportunity or want to volunteer, we&apos;d love to have you as
            part of our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-clay-700 hover:bg-gray-100">
              <a href="mailto:careers@grounded.com">Send Your Resume</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-clay-600">
              <a href="#volunteer">Volunteer With Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
