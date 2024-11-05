"use client"

import Image from "next/image"

export default function Circle() {
  return (
    <div className="relative w-[500px] h-[500px] mx-auto">
      {/* Rotating dotted circle */}
      <div className="absolute inset-0 animate-spin-slow">
        <Image
          src="/assets/dotted.png"
          alt="Dotted circle"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>

      {/* Center image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20">
        <Image
          src="/placeholder.svg?height=80&width=80"
          alt="Center"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>

      {/* Top left image */}
      <div className="absolute top-0 left-0 w-16 h-16">
        <Image
          src="/placeholder.svg?height=64&width=64"
          alt="Top left"
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>

      {/* Top right image */}
      <div className="absolute top-0 right-0 w-16 h-16">
        <Image
          src="/placeholder.svg?height=64&width=64"
          alt="Top right"
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>

      {/* Bottom left image */}
      <div className="absolute bottom-0 left-0 w-16 h-16">
        <Image
          src="/placeholder.svg?height=64&width=64"
          alt="Bottom left"
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>

      {/* Bottom right image */}
      <div className="absolute bottom-0 right-0 w-16 h-16">
        <Image
          src="/placeholder.svg?height=64&width=64"
          alt="Bottom right"
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>
    </div>
  )
}