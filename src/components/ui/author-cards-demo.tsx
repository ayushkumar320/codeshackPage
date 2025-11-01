"use client"

import { AuthorCard } from "@/components/ui/content-card"

export function AuthorCardsDemo() {
  const techHubMembers = [
    {
      backgroundImage: "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
      linkedinUrl: "https://www.linkedin.com/in/techhub-member-1",
      author: {
        name: "TechHub Member 1",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
        readTime: "Team Lead"
      },
      content: {
        title: "Team TechHub",
        description: "Leading innovation in technology and development."
      }
    },
    {
      backgroundImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
      linkedinUrl: "https://www.linkedin.com/in/techhub-member-2",
      author: {
        name: "TechHub Member 2",
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80",
        readTime: "Developer"
      },
      content: {
        title: "Team TechHub",
        description: "Building cutting-edge solutions for tomorrow."
      }
    }
  ]

  const glugMembers = [
    {
      backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
      linkedinUrl: "https://www.linkedin.com/in/glug-member-1",
      author: {
        name: "GLUG Member 1",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
        readTime: "Lead Developer"
      },
      content: {
        title: "Team GLUG",
        description: "Promoting open source and community collaboration."
      }
    },
    {
      backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
      linkedinUrl: "https://www.linkedin.com/in/glug-member-2",
      author: {
        name: "GLUG Member 2",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
        readTime: "Community Manager"
      },
      content: {
        title: "Team GLUG",
        description: "Connecting developers and fostering growth."
      }
    }
  ]

  return (
    <section className="w-full py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        {/* TechHub Team */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Team TechHub</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {techHubMembers.map((member, index) => (
              <AuthorCard
                key={`techhub-${index}`}
                backgroundImage={member.backgroundImage}
                linkedinUrl={member.linkedinUrl}
                author={member.author}
                content={member.content}
              />
            ))}
          </div>
        </div>

        {/* GLUG Team */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Team GLUG</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {glugMembers.map((member, index) => (
              <AuthorCard
                key={`glug-${index}`}
                backgroundImage={member.backgroundImage}
                linkedinUrl={member.linkedinUrl}
                author={member.author}
                content={member.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
