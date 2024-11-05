import OrbitingCircles from "@/components/ui/orbiting-circles";
import Image from "next/image";

export function Orbit() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
      <Image
        src="/assets/truflow_white_logo.png"
        alt="Logo"
        width={96}
        height={96}
        className="rounded-full"
      />
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[100px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
         <Image
          src="/assets/orbits_images/1.png" // Replace with your PNG path
          alt="Notion"
          width={100}
          height={100}
        />
      </OrbitingCircles>
      
      <OrbitingCircles
        className="size-[100px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Image
          src="/assets/orbits_images/2.png" // Replace with your PNG path
          alt="Notion"
          width={100}
          height={100}
        />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      {/* <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Icons.googleDrive />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[150px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
                 <Image
          src="/assets/orbits_images/7.png" // Replace with your PNG path
          alt="Notion"
          width={150}
          height={150}
        />
      </OrbitingCircles> */}
      <OrbitingCircles
        className="size-[150px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
          <Image
          src="/assets/orbits_images/6.png" // Replace with your PNG path
          alt="Notion"
          width={150}
          height={150}
        />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[150px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
             <Image
          src="/assets/orbits_images/5.png" // Replace with your PNG path
          alt="Notion"
          width={150}
          height={150}
        />
      </OrbitingCircles>
    </div>
  );
}

