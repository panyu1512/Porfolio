import { motion } from 'framer-motion';
export default function About() {
    return (
        <motion.div 
            className="flex flex-col gap-6 relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
        >
            <h3 className="md:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
            <motion.img
                className='md:mb-0 flex-shrink-0 w-64 h-64 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] lg:mt-[200px] xl:mt-[100px] 2xl:mt-[50px]]'
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                }}
                src="/about.jpg"
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a litle Background</h4>
                <p className='text-base'>Soy un apasionado del desarrollo de software y la tecnología, con experiencia en la creación y mantenimiento de aplicaciones complejas en diferentes sectores.
                Me gusta siempre estar actualizado y aprender cosas nuevas para mejorar en mi profesión. Disfruto trabajar en equipo y ayudar a mis compañeros, además de ser proactivo y rápido para aprender.
                Me enfoco en seguir buenas prácticas en desarrollo de software, tales como la escritura de código limpio, mantenible y el uso de patrones de diseño
                </p>
            </div>
            
        </motion.div>
    )
}