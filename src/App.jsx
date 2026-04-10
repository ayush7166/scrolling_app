import './App.css'
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function App() {
  const carRef = useRef(null)
  const trailRef = useRef(null)
  const stat1Ref = useRef(null)
  const stat2Ref = useRef(null)
  const stat3Ref = useRef(null)
  const stat4Ref = useRef(null)

  useEffect(() => {
    gsap.to(carRef.current, {
      x: 1270,
      scrollTrigger: {
        trigger: ".a",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5
      }
    })

    gsap.to(trailRef.current, {
      x: 1270,
      scrollTrigger: {
        trigger: ".a",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5
      }
    })
    const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".a",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5
    }
  })

  tl.to(stat1Ref.current, { opacity: 1, duration: 0.5 })
    .to(stat2Ref.current, { opacity: 1, duration: 0.4 }, "+=1")
    .to(stat3Ref.current, { opacity: 1, duration: 0.4 }, "+=1")
    .to(stat4Ref.current, { opacity: 1, duration: 0.4 }, "+=1")


  }, [])

  return (
    <>
      <div className="container">
        <div className="stat1" ref={stat1Ref}>
          <span>58%</span>
          <p>Increase in pick up point use</p>
        </div>
        <div className="stat2"  ref={stat2Ref}>
          <span>27%</span>
          <p>Increase in pick up point use</p>
        </div>
        <div className="road">
          <img
            ref={carRef}
            className="car"
            src="https://paraschaturvedi.github.io/car-scroll-animation/McLaren%20720S%202022%20top%20view.png"
            alt=""
          />

          <div className="data">
            {"WELCOMEITZFIZZ".split("").map((ch, i) => (
              <span key={i}><b>{ch}</b></span>
            ))}
          </div>

          <div className="trail" ref={trailRef}></div>
        </div>
        <div className="stat3"  ref={stat3Ref}>
          <span>23%</span>
          <p>Decreased in customer phone calls</p>
        </div>
        <div className="stat4"  ref={stat4Ref}>
          <span>40%</span>
          <p>Decreased in customer phone calls</p>
        </div>
      </div>
    </>
  )
}

export default App