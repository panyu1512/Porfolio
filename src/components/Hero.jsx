import BackgroundCircles from './BackgroundCircles.jsx';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
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
            />
            <div>
                <h1 className='black text-2xl'>
                    <span>{text}</span>
                    <Cursor cursorColor='#F7AB04'/>
                </h1>
                <div className='flex items-center text-gray-500 pt-2 gap-x-2'>
                    <FaMapMarkerAlt />
                    <h2 className='text-sm uppercase text-gray-500 tracking-[12px]'>Palma de Mallorca</h2>
                </div>
            </div>
        </div>
    )

}