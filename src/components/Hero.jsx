import BackgroundCircles from './BackgroundCircles.jsx';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
export default function Hero() {

    const [text, count] = useTypewriter({
        words: [
            "Hi my name is Kike.", 
            "I'm a Full Stack Developer.", 
            "Currently working at Possible Inc.",
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles/>
            <img
                className='realive rounded-full h-32 w-32 mx-auto object-cover'
                src='https://media.licdn.com/dms/image/D4D03AQH2JFOaJ3rGfg/profile-displayphoto-shrink_800_800/0/1665775544515?e=1681344000&v=beta&t=Vk_dvYGkNxGVpMnLjy8NTzD-F7fA3ymfts5TS3eCLdk'
                alt='profile_picture' 
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 tracking-[20px]'>Palma de Mallorca</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB04'/>
                </h1>
                <div className="pt-5 ">
                    <a href='#about'><button className='px-6 py-2 border border-[#242424] rounded-full text-xs tracking-widest text-gray-500 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#F7AB04]'>About</button></a>
                    <a><button className='px-6 py-2 border border-[#242424] rounded-full text-xs tracking-widest text-gray-500 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#F7AB04]'>Experiencie</button></a>
                    <a><button className='px-6 py-2 border border-[#242424] rounded-full text-xs tracking-widest text-gray-500 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#F7AB04]'>Skills</button></a>
                    <a><button className='px-6 py-2 border border-[#242424] rounded-full text-xs tracking-widest text-gray-500 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#F7AB04]'>Projects</button></a>
                </div>
            </div>
        </div>
    )

}