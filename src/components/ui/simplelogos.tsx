import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

export const SocialHandlesWebPage: React.FC = () => {
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const socials = [
    {
      name: 'Instagram',
      description: 'Stories from the tech-enthusiasts',
      Icon: FaInstagram,
      className: 'bg-gradient-to-tr from-yellow-300 via-pink-400 to-purple-600 text-black',
    },
    {
      name: 'WhatsApp',
      description: 'Quick chat and support',
      Icon: FaWhatsapp,
      className: 'bg-green-500 text-black',
    },
    {
      name: 'LinkedIn',
      description: 'Professional updates & thought leadership',
      Icon: FaLinkedin,
      className: 'bg-blue-900 text-black',
    },
    {
      name: 'GitHub',
      description: 'Open source & development updates',
      Icon: FaGithub,
      className: 'bg-gray-900 text-black',
    },
  ];

  const handleClick = (name: string) => {
    setMessage(`Connected with ${name}! We'll see you in our community.`);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="h-screen w-full bg-gradient-to-r from-black to-blue-600 flex flex-col items-center justify-center p-10 font-sans">
      {/* Container */}
      <div className=" max-w-4xl w-full bg-white rounded-3xl p-16 shadow-lg relative overflow-hidden">
        {/* Header with underline bar */}
        <div className="text-center relative inline-block w-full">
          <h1 className="text-[2.4rem] font-extrabold text-[#3a6351] mb-4">
            Stay Connected
          </h1>
          <div
            className="mx-auto"
            style={{
              width: '50%',
              height: '12px',
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='100' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4.5C25 1.5 75 7.5 99 4.5' stroke='%23f4845f' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% auto',
              marginTop: '-1.2rem',
              marginBottom: '2rem',
            }}
          />

          
        </div>

        {/* Social Icons Grid */}
        <div className="grid grid-cols-4 gap-12 sm:grid-cols-2">
          {socials.map(({ name, description, Icon, className }) => (
            <button
              key={name}
              onClick={() => handleClick(name)}
              className={`flex flex-col items-center rounded-2xl p-7 cursor-pointer transition-all border-2 border-dashed border-transparent hover:-translate-y-1 hover:border-[#f4845f] hover:bg-[#fff9f6] focus:outline-none ${className}`}
              aria-label={name}
            >
              <div className="relative w-20 h-20 mb-6 rounded-full bg-white shadow-md flex justify-center items-center transition-shadow hover:shadow-[0_8px_20px_rgba(244,132,95,0.2)]">
                <Icon className="w-12 h-12" />
              </div>
              <div className="font-bold text-[#3a6351] text-xl mb-2">{name}</div>
              <div className="text-sm text-gray-500 text-center">{description}</div>
            </button>
          ))}
        </div>

        {/* Popup Message */}
        {showPopup && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-[#3a6351] text-white py-3 px-10 rounded-full font-semibold shadow-lg z-50 opacity-100 transition-opacity duration-400">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};
export default {SocialHandlesWebPage};