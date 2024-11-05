'use client';
import Image from "next/image"

export default function JoinSection() {
  return (
    <section className="w-full py-12 flex justify-center items-center bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <Image
            alt="Product preview"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full "
            height="310"
            src="/assets/join_section.png"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Image
                alt="Company logo"
                className="h-12 w-auto"
                height="48"
                src="/assets/truflow_just_logo.png"
                width="48"
              />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Join the SimpleTalk
Revolution

              </h2>
          
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <button className="bg-gradient-to-r from-[#aa88ec] to-[#5e24ea] text-[#f0f0f0] py-2 px-4 rounded-3xl hover:bg-gradient-to-l">
            Launch your First Human Voice AI Agent with Simpletalk!
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}