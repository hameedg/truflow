'use client';
import Image from "next/image"

export default function AdvantagesSection() {
  return (
    <section className="w-full py-12 flex justify-center items-center bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex justify-center items-center">

          <Image
            alt="Product preview"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src="/assets/advantages_truflow.png"
            width="550"
            />
            </div>
           <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-6 flex flex-col justify-center items-center md:items-start">
              <Image
                alt="Company logo"
                className="h-8 w-auto"
                height="48"
                src="/assets/truflow_just_logo.png"
                width="48"
              />
              <h2 className="text-4xl font-bold text-center md:text-left">
              Advantages Of Using TruFlow Voice AI 
              <br/>
              <span className="bg-gradient-to-r from-[#aa88ec] to-[#5e24ea] bg-clip-text text-transparent">
              For Your Business:
</span>

              </h2>
              <p className="max-w-[80%] text-gray-500 text-lg">
              Easy Entry, Low Cost, High Returns?
              <br />TruFlow has a low entry cost with great profit potential. Our AI agents are over 500% cheaper than traditional employees, helping you achieve high profit margins. Each TruFlow AI agent can do the work of up to 5 human workers, operating 24/7 without breaks. 
              Maximum Support

<br />
Our dedicated team ensures a smooth experience in building your Voice AI solution. Our ongoing support gives you the resources and guidance to help your business succeed.
Unlimited Possibilities
<br />
Whether you&apos;re a small business or a global enterprise From startups to large corporations, every business enjoys better communication that adapts to your needs.
              </p>
            </div>
            <div className=" flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
            <button className="bg-gradient-to-r from-[#aa88ec] to-[#5e24ea] text-lg text-[#f0f0f0] py-2 px-4 rounded-3xl hover:bg-gradient-to-l">
              Try for Free
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}