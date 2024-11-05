'use client';
import Image from "next/image"

export default function Features() {
  const features = [
    {
      title: "Effortless Transition to Human Support",
      description: "Easily move from AI to a live agent with smooth call transfers, preserving the flow of every conversation. Our round-robin system ensures calls are routed to the next available team member, maintaining high-quality engagement at any scale.",
      image: "/assets/features_cards_new/1.png"
    },
    {
      title: "Unlimited Call Capacity",
      description: "Unlimited Call Capacity: Make and receive thousands of calls within minutes, engaging with each person simultaneously for unparalleled efficiency and customer service ",
      image: "/assets/features_cards_new/2.png"
    },
    {
      title: "Redefining Global Communication",
      description: "Redefining Global Communication: Effortlessly reach a worldwide audience. Our AI supports 15 languages—like English, Spanish, French, and Hindi—eliminating language barriers for smooth, natural customer interactions.",
      image: "/assets/features_cards_new/3.png"
    },
    {
      title: "Smart, Live Engagement",
      description: "Smart, Live Engagement: Truflow’s AI provides intelligent, live interaction, adapting smoothly to conversations with a level of understanding that feels truly human. It dynamically assesses each exchange, ensuring responses are thoughtful, relevant, and naturally engaging.",
      image: "/assets/features_cards_new/4.png"
    },
    {
      title: "Unified Calendar Integration",
      description: "Our AI automatically schedules and syncs appointments with all major calendar platforms, including Google, Outlook, and Apple Calendar, ensuring a smooth and cohesive scheduling experience.",
      image: "/assets/features_cards_new/5.png"
    },
    {
      title: "Smart Assistan",
      description: "Smart Assistant:Missed calls are handled instantly by AI, eliminating the need for voicemail. Works effortlessly with iOS and Android, scheduling appointments, addressing customer inquiries, redirecting calls, and sending call summaries and recordings right to your device",
      image: "/assets/features_cards_new/6.png"
    }
  ]

  return (
    <section className="py-12 px-4 md:px-8 lg:px-12 bg-white flex justify-center items-center">
    <div className="container px-4 md:px-6">
      <div className="text-center md:text-left mb-8">
        <Image
          src="/assets/truflow_just_logo.png"
          alt="Truflow Logo"
          width={50}
          height={50}
          className="mx-auto md:mx-0"
        />
                     <h2 className="text-4xl font-bold mt-4">
              Truflow
              <span className="ml-2 bg-gradient-to-r from-[#aa88ec] to-[#5e24ea] bg-clip-text text-transparent">
  Features
</span>

              </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-60 bg-white">
              <Image
                src={feature.image}
                alt={feature.title}
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className=" font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}