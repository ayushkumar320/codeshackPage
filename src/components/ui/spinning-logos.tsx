import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import { 
  InstagramIcon, 
  GithubIcon, 
  LinkedinIcon, 
  // WhatsApp icon import added
  Code
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const SpinningLogos: React.FC = () => {
  const radiusToCenterOfIcons = 180;
  const iconWrapperWidth = 60;
  const ringPadding = 40;

  const toRadians = (degrees: number): number => (Math.PI / 180) * degrees;

  const logos = [
    { Icon: InstagramIcon, className: 'bg-gradient-to-tr from-pink-500 via-yellow-400 to-pink-400 text-white', name: 'Instagram' },
    {  Icon: FaWhatsapp, className: 'bg-green-600 text-white', name: 'WhatsApp'  },
    { Icon: LinkedinIcon, className: 'bg-blue-700 text-white', name: 'LinkedIn' },
    { Icon: GithubIcon, className: 'bg-gray-900 text-white', name: 'GitHub' },
    { Icon: Code, className: 'bg-purple-600 text-white', name: 'VSCode' },
    
  ];

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-black to-blue-600 p-8 overflow-hidden">
      <div
        style={{
          width: radiusToCenterOfIcons * 2 + iconWrapperWidth + ringPadding,
          height: radiusToCenterOfIcons * 2 + iconWrapperWidth + ringPadding,
        }}
        className="relative rounded-full bg-muted/50 shadow-lg border border-border"
      >
        <div className="absolute inset-0 animate-spin-medium">
          {logos.map((logo, index) => {
            const angle = (360 / logos.length) * index;
            return (
              <div
                key={index}
                style={{
                  top: `calc(50% - ${iconWrapperWidth / 2}px + ${radiusToCenterOfIcons * Math.sin(toRadians(angle))}px)`,
                  left: `calc(50% - ${iconWrapperWidth / 2}px + ${radiusToCenterOfIcons * Math.cos(toRadians(angle))}px)`,
                  width: iconWrapperWidth,
                  height: iconWrapperWidth,
                }}
                className={cn(
                  "absolute flex items-center justify-center rounded-full shadow-md border-2 border-white dark:border-gray-800 animate-spin-reverse",
                  logo.className
                )}
                aria-label={`${logo.name} logo`}
              >
                <logo.Icon className="w-6 h-6" />
              </div>
            );
          })}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gray-300 rounded-full w-3/5 h-3/5 flex items-center justify-center shadow-inner border-4 border-border">
            <span className="text-2xl sm:text-3xl font-bold text-foreground text-center px-4">
              CODESHACK
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
