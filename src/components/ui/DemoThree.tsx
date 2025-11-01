import { SocialConnect } from "@/components/ui/connect-with-us";
import Component from './stacking-card';

const projects = [
  {
    title: 'Instagram',
    description: 'Follow updates and events',
    link: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop',
    color: '#E1306C',
  },
  {
    title: 'Discord',
    description: 'Join the community server',
    link: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60',
    color: '#5865F2',
  },
  {
    title: 'YouTube',
    description: 'Workshops and talks',
    link: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop',
    color: '#FF0033',
  },
  {
    title: 'WhatsApp',
    description: 'Chat with the community',
    link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
    color: '#25D366',
  },
];

export default function DemoThree() {
  return (
    <>
      <SocialConnect />
      <Component projects={projects} />
    </>
  )
}