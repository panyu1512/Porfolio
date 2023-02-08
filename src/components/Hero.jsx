import { Cursor, useTypewriter } from 'react-simple-typewriter'
export default function Hero() {

    const [text, count] = useTypewriter({
        words: [
            "Hi my name is Kike", 
            "I'm a Full Stack Developer", 
            "Currently working at Possible Inc",
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div>
            <h1 className='black text-2xl'>
                <span>{text}</span>
                <Cursor cursorColor='yellow'/>
            </h1>
        </div>
    )

}