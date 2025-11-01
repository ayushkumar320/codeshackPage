"use client"

import { cn } from "@/lib/utils"
import { Linkedin } from "lucide-react"

interface AuthorCardProps {
  className?: string
  backgroundImage?: string
  linkedinUrl?: string
  author: {
    name: string
    avatar: string
    readTime?: string
  }
  content: {
    title: string
    description: string
  }
}

export const AuthorCard = ({ 
  className,
  backgroundImage,
  linkedinUrl,
  author,
  content
}: AuthorCardProps) => {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 bg-cover",
          className
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Gray overlay on hover */}
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-gray-900 group-hover/card:opacity-60 opacity-0" />

        {/* Content - slightly fades on hover */}
        <div className="flex flex-row items-center space-x-4 z-10 transition-opacity duration-300 group-hover/card:opacity-30">
          <img
            alt={`${author.name}'s avatar`}
            src={author.avatar}
            className="h-10 w-10 rounded-full border-2 border-white object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {author.name}
            </p>
            {author.readTime && (
              <p className="text-sm text-gray-400">{author.readTime}</p>
            )}
          </div>
        </div>

        {/* Text content - slightly fades on hover */}
        <div className="text content transition-opacity duration-300 group-hover/card:opacity-30">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {content.title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {content.description}
          </p>
        </div>

        {/* LinkedIn icon - centered and appears on hover */}
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform group-hover/card:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition-colors group">
              <Linkedin className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
            </div>
          </a>
        )}
      </div>
    </div>
  )
}
