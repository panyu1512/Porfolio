import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between opacity-90 max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1.5
            }}
            className="flex flex-row items-center relative overflow-hidden">
                <SocialIcon 
                    url="https://www.linkedin.com/in/enrique-ferrer-agius-05844a217/"
                    fgColor="#F7AB04"
                    bgColor="transparent"
                    className='hover:-translate-y-1 hover:scale-110 duration-300'
                />
                <SocialIcon 
                    url="https://github.com/panyu1512"
                    fgColor="#F7AB04"
                    bgColor="transparent"
                    className='hover:-translate-y-1 hover:scale-110 duration-300'
                />
                <SocialIcon 
                    url="https://twitter.com/kike20ferrer"
                    fgColor="#F7AB04"
                    bgColor="transparent"
                    className='hover:-translate-y-1 hover:scale-110 duration-300'
                />
                <SocialIcon 
                    url="https://www.instagram.com/kiikeferrer/"
                    fgColor="#F7AB04"
                    bgColor="transparent"
                    className='hover:-translate-y-1 hover:scale-110 duration-300'
                />
            </motion.div>
            <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1.5
            }}
            className="flex flex-row items-center text-[#F7AB04] cursor-pointer">
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="#F7AB04"
                    bgColor="transparent"
                />
                <p className="uppercase hidden md:inline-flex text-sm">
                    Get In Touch
                </p>
            </motion.div>
        </header>
    );
}