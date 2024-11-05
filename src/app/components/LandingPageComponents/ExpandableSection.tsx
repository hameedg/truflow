"use client";
import * as React from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { Orbit } from "../ShadCnComponents/Orbit";

// Simple utility function to replace cn from @lib/utils
const classNames = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

// Update categories to use images
const categories = [
  {
    image: "/assets/expandable_images/1.png",
    name: "We Do It All",
    description:
      "At Truflow, we’re equipped to take on any company’s needs and seamlessly implement AI solutions that simplify management and boost profitability. No matter the industry, our AI assistants can be tailored to handle your specific tasks, from customer support to lead generation. Our highly skilled team will teach, train, and launch customized AI solutions that fit your unique niche, streamlining workflows and helping your business thrive. With Truflow, you get AI that adapts to you, making work easier and driving better results.",
  },
  { image: "/assets/expandable_images/2.png", name: "Tech Support", description:"provides round-the-clock tech troubleshooting, guiding users through common issues and solutions. It handles inquiries, escalates complex problems to human agents, and ensures fast, accurate responses, enhancing customer satisfaction with seamless, natural language support." },
  { image: "/assets/expandable_images/3.png", name: "Real Estate", description:"Truflow’s AI simplifies every stage of client interactions, from capturing leads to scheduling tours and providing listing details. It can handle mortgage queries and guide clients through the buying or renting process, delivering engaging, real estate-specific conversations that enhance customer service." },
  { image: "/assets/expandable_images/3.png", name: "Solar", description:"educates potential customers about solar energy benefits, handles inquiries on installation and savings, and schedules consultation appointments. It qualifies leads by assessing their needs and guides them through the process, delivering clear, engaging conversations tailored to the solar industry." },
  { image: "/assets/expandable_images/3.png", name: "Customer Support ", description:"Truflow’s AI handles a wide range of customer inquiries, from order status updates to account troubleshooting. It provides quick answers, guides customers through solutions, and seamlessly transfers complex issues to human agents, ensuring a smooth and efficient support experience around the clock." },
  { image: "/assets/expandable_images/3.png", name: "Health Insurance ", description:"Truflow’s AI assists clients with policy inquiries, explains coverage options, and guides them through the claims process. It can schedule consultations, address common concerns, and help clients find the right plan—all through clear, personalized conversations that make navigating health insurance simply." },
  { image: "/assets/expandable_images/3.png", name: "Roofing ", description:"Truflow’s AI manages everything from scheduling roof inspections to answering questions about materials, repairs, and maintenance. It qualifies leads, books appointments, and provides follow-ups, offering clear and helpful communication that keeps homeowners informed throughout their roofing projects." },


];

export default function ExpandableSection() {
  const [openItem, setOpenItem] = React.useState(3); // Fourth item open by default

  const handleItemClick = (index: React.SetStateAction<number>) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#bd9dfe] to-[#723ef2] flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex justify-center">
              <Image
                src="/assets/truflow_just_logo.png"
                alt="Logo"
                width={96}
                height={96}
                className="rounded-full"
              />
            </div>
            <h2 className="text-3xl font-bold text-white">
              Explore Assistants for Different Use Cases
            </h2>
          </div>
        </div>

        <div className="mx-auto container mt-12 grid gap-6 lg:grid-cols-2 text-white">
          <div className="space-y-4">
            {categories.map((category, index) => (
              <div key={index} className="border rounded-xl overflow-hidden">
                <button
                  onClick={() => handleItemClick(index)}
                  className={classNames(
                    "flex items-center justify-between p-4 w-full text-left",
                    openItem === index ? "bg-[#a080df]" : "hover:bg-[#a080df]"
                  )}
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={24}
                      height={24}
                    />
                    <span className="font-semibold">{category.name}</span>
                  </div>
                  {openItem === index ? (
                    <Minus className="h-4 w-4 shrink-0 text-muted-foreground" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />
                  )}
                </button>
                {openItem === index && (
                  <div className="p-4 bg-[#a080df]">
                    <p>{category.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center lg:justify-end relative">
            <div className="absolute inset-0 bg-fit bg-center bg-[url('/assets/dna.png')] opacity-100 z-1000"></div>
            <div className="absolute inset-0 bg-cover bg-center bg-[url('/assets/dna_bg.png')] opacity-50 z-1000"></div>
            <div className="absolute inset-0 bg-cover bg-center bg-[url('/assets/dna_bg_1.png')] opacity-50 z-10000"></div>
            <Orbit />
          </div>
        </div>
      </div>
    </section>
  );
}
