import { Hero } from "@/components/sections/Hero";
import { Amenities } from "@/components/sections/Amenities";
import { Features } from "@/components/sections/Features";
import { Gallery } from "@/components/sections/Gallery";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <Amenities />
      <Features />
      <Gallery />
      <Location />
    </>
  );
}
