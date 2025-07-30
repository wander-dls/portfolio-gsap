import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const AnimatedTextLines = ({text, className}) => {
    const containerRef = useRef(null)
    const lineRefs = useRef([])
    const lines = text.split("\n").filter(line => line.trim() !== "")

    useGSAP(() => {
        if(lineRefs.current.length > 0) {
            gsap.from(lineRefs.current, {
                y: 100,
                opacity: 0,
                durantion: 1,
                stagger: 0.3,
                ease: "back.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                }
            })
        }
    }, [])
  return (
    <div className={className} ref={containerRef}>
        {lines.map((line, index) => (
            <span ref={(el) => (lineRefs.current[index] = el)} key={index} className='block leading-relaxed tracking-wide text-pretty'>{line}</span>
        ))}
    </div>
  )
}
export default AnimatedTextLines