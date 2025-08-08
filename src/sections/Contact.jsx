import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import Marquee from "../components/Marquee"
import { socials } from "../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Contact = () => {
    const text = `Got a question or want to work together? I'm just an email away! Whether you have a project in mind or just want to say hi, feel free to reach out. Let's create something amazing together!`

    const items = [
        "Let's Connect! ",
        "Let's Connect! ",
        "Let's Connect! ",
        "Let's Connect! ",
        "Let's Connect! ",
    ]

    useGSAP(() => {
        gsap.from(".social-link", {
            y: 100,
            opacity: 0,
            delay: 0.5,
            stagger: 0.3,
            ease: "back.out",
            scrollTrigger: {
                trigger: ".social-link"
            }
        })
    }, [])
  return (
    <section id="contact" className="flex flex-col justify-between min-h-screen bg-black">
        <div>
            <AnimatedHeaderSection subTitle={"You Dream It, I Code It"} title={"Contact"} text={text} withScrollTrigger={true} textColor={"text-white"}/>
            <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
                <div className="flex flex-col w-full gap-10">
                    <div className="social-link">
                        <h2>E-Mail</h2>
                        <div className="w-full h-px my-2 bg-white/30" />
                        <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">delossantos.wander@gmail.com</p>
                    </div>
                    <div className="social-link">
                        <h2>Phone</h2>
                        <div className="w-full h-px my-2 bg-white/30" />
                        <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">347-479-5113</p>
                    </div>
                    <div className="social-link">
                        <h2>Social Media</h2>
                         <div className="w-full h-px my-2 bg-white/30" />
                         <div className="felx flex-wrap gap-2">
                            {socials.map((social, index) => (
                                <a className="text-sm leading-loose tracking-widest uppercase md:text-sm hover:text-white/80 transition-colors duration-200" href={social.href} key={index}>
                                    {"{ "}
                                    {social.name}
                                    {" }"}
                                </a>
                            ))}
                         </div>
                    </div>
                </div>
            </div>
        </div>
        <Marquee items={items} />
    </section>
  )
}
export default Contact