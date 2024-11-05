'use client';
import React from 'react'
import Image from 'next/image'

export default function DashboardSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <Image
            src="/assets/truflow_dashboard.png"
            alt="AI Agent Dashboard"
            width={1280}
            height={720}
            className="w-full h-auto rounded-lg shadow-xl"
          />
          {/* Adjusted button positioning */}
          <div className="mt-4 text-center md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
            <button className="bg-gradient-to-r from-[#aa88ec] to-[#5e24ea] text-[#f0f0f0] py-4 px-4 rounded-[4.375rem] hover:bg-gradient-to-l max-w-xs whitespace-normal">
              Get custom made voice AI agents for your business
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
