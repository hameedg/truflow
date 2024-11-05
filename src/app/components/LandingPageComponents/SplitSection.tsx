'use client';
import Image from "next/image"

export default function SplitSection() {
  return (
    <section className="w-full py-12 flex justify-center items-center bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
        <div className="relative w-full max-w-[550px] mx-auto flex justify-center items-center">
  <Image
    alt="Product preview"
    className=" overflow-hidden rounded-xl object-cover object-center sm:w-full"
    height="310"
    src="/assets/split_section_new.png"
    width="550"
  />
  <img
    src="/assets/split_section_gif.gif"
    alt="Overlay GIF"
    className="absolute m-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
    style={{ top: '61.5%', left: '50%', transform: 'translate(-50%, -50%)' }}
  />
 <img
  src="/assets/speaker_right.png"
  alt="Overlay GIF"
  className="absolute m-auto  w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 heartbeat"
  style={{ top: '59%', right: '11.9%', transform: 'translate(-50%, -50%)' }}
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
              Opportunity of Voice AI 
              <br/>
              <span className="bg-gradient-to-r from-[#aa88ec] to-[#5e24ea] bg-clip-text text-transparent">
  Technology
</span>

              </h2>
              <p className="max-w-[80%] text-gray-500 text-lg">
              In today&apos;s busy world every conversation with a customer is a chance to grow your business. Conversational AI is not just a useful tool; it&apos;s essential for scaling up. TruFlow allows you to harness the power of Conversational AI creating new growth opportunities for your business.

<br />
Our advanced system works seamlessly with your existing tools and doesn&apos;t require a specific CRM, providing you with high-level automation and efficiency. With TruFlow, you can stay ahead by delivering the quick and responsive service that customers expect.
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