// pages/index.jsx
import { Map } from "@/components/Map";
import { DateSelect } from "@/components/DateSelect";
import { MountainIcon } from "@/components/MountainIcon";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden flex items-center justify-center ">

      <Map />
      <DateSelect className="absolute top-10 left-10 z-10" />
    </div>
  );
}
