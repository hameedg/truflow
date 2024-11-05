'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

export default function Marquee() {
  const [activeSet, setActiveSet] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  const logoSets = [
    [
      '/assets/marquee_logos/1.png',
      '/assets/marquee_logos/2.png',
      '/assets/marquee_logos/3.png',
      '/assets/marquee_logos/4.png',

    ],
    [
        '/assets/marquee_logos/13.png',
        '/assets/marquee_logos/6.png',
        '/assets/marquee_logos/7.png',
        '/assets/marquee_logos/8.png',

    ],
    [
        '/assets/marquee_logos/9.png',
        '/assets/marquee_logos/10.png',
        '/assets/marquee_logos/11.png',
        '/assets/marquee_logos/12.png',

    ],
  ]

  const nextSet = useCallback(() => {
    setActiveSet((prevSet) => (prevSet + 1) % logoSets.length)
  }, [logoSets.length])

  useEffect(() => {
    autoPlayRef.current = setInterval(nextSet, 5000)
    return () => clearInterval(autoPlayRef.current)
  }, [nextSet])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSet()
    }
    if (touchStart - touchEnd < -50) {
      setActiveSet((prevSet) => (prevSet - 1 + logoSets.length) % logoSets.length)
    }
  }

  return (
    <section className="w-full py-12 bg-gradient-to-r from-[#bd9dfe] to-[#723ef2] flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-normal text-white max-w-2xl">
            Seamless Integration Expert Configurations for Different CRMs
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeSet * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {logoSets.map((set, setIndex) => (
              <div key={setIndex} className="flex flex-wrap justify-center items-center w-full flex-shrink-0">
                {set.map((logo, logoIndex) => (
                  <div key={logoIndex} className="m-4">
                    <Image
                      src={logo}
                      alt={`CRM Logo ${setIndex * 4 + logoIndex + 1}`}
                      width={180}
                      height={60}
                      className="filter grayscale opacity-50 hover:filter-none hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center space-x-2">
            {logoSets.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSet(index)}
                className={`h-[0.1rem] w-6 md:w-4 rounded-full transition-all duration-300 ${
                  activeSet === index ? 'bg-[#6743ad]' : 'bg-gray-300'
                }`}
                aria-label={`View logo set ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
