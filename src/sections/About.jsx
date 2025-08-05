import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import AnimatedTextLines from "../components/AnimatedTextLines"

const About = () => {
    const imgRef = useRef(null)
    const text = `I am a passionate web developer with a focus on creating dynamic and engaging user experiences. My journey in web development has been driven by a love for coding and a desire to build scalable applications that solve real-world problems. I thrive on challenges and continuously seek to improve my skills and knowledge in the ever-evolving tech landscape.`
    const aboutText = `With a strong foundation in both front-end and back-end technologies, I specialize in building responsive, user-friendly websites and applications. I am proficient in modern frameworks and libraries, and I enjoy collaborating with cross-functional teams to bring ideas to life. My goal is to create seamless digital experiences that not only meet but exceed user expectations.`

    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
                // markers: true,
            },
            ease: "power1.inOut",
        })

        gsap.set(imgRef.current, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        })
        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: { trigger: imgRef.current}
      
        })
    }, [])
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
        <AnimatedHeaderSection subTitle={"Code with purpose, Built to scale"} title={"About"} text={text} textColor={"text-white"} withScrollTrigger={true}/>
        <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
            <img ref={imgRef} src="/images/myphoto.jpeg" alt="myphoto" className="w-md rounded-full" />
            <AnimatedTextLines text={aboutText} className="w-full" />
        </div>
    </section>
  )
}
export default About