import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {rightImg, watchImg} from "../utils"
import VideoCarousel from "./VideoCarousel"
import ScrollTrigger from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

const Highlights = () => {
  useGSAP(()=>{
    gsap.to('#title',{opacity:1,y:0,scrollTrigger:{
      trigger:'#title',
      toggleActions: 'restart reverse restart reverse',
      start:'top 85%',
  }})
    gsap.to('.link',{opacity:1,y:0,duration:1, stagger:0.25,scrollTrigger:{
      trigger:'#title',
      toggleActions: 'restart reverse restart reverse',
      start:'top 85%',}})
  },[])
  return (
    <section id="highlights" className="w-full overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2 mt-1"/>
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="watch" className="ml-2 mt-1"/>
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights