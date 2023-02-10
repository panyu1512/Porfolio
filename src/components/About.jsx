import { motion } from 'framer-motion';
export default function About() {
    return (
        <motion.div 
            className="flex flex-col min-[320px]:gap-6 relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
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
                <p className='md:text-xl text-base'>I am passionate about software development and technology, with experience in the creation and maintenance of complex applications in different sectors. I always like to be updated and learn new things to improve in my profession. I enjoy working in a team and helping my colleagues, besides being proactive and quick to learn. 
                I focus on following good practices in software development, such as writing clean and maintainable code and using design patterns.
                </p>
            </div>
            
        </motion.div>
    )
}