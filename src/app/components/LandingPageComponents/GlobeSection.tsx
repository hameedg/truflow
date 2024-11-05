'use client';
import * as React from 'react';
import Image from 'next/image';

export default function GlobeSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center items-center">
      <div className="container px-4 md:px-6">
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
    <h2 className="text-3xl font-bold ">Transform Your Business With SimpleTalk</h2>
    <p className="max-w-[900px] text-zinc-500 text-center">
    We add advanced AI and automation to any CRM to make communication and daily tasks easier. Our AI helps with customer service, sales, follow-ups, and tracking engagement, so you can always stay connected with your customers and never miss an opportunity.
    </p>
  </div>
        {/* Added image in the middle of the container */}
        <div className="mx-auto container grid place-items-center mt-10">
          <Image
            src="/assets/mobile_truflow.png" // Replace with your image path
            alt="Centered Product"
            width={600} // Adjust the width as needed
            height={500} // Adjust the height as needed
          />
        </div>
      </div>
    </section>
  );
}
