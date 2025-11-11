
import { JapanMap } from "@/components/japanMap"
import { MountainIcon } from "@/components/MountainIcon";


export default function Home() {
  return (
    <div 
    style={{ backgroundColor: "var(--background)" }}
    className="bg-var(--background) w-screen h-screen relative overflow-hidden">
      <JapanMap />
      <MountainIcon 
        className="top-[25%] left-[70%]"/>
    </div>
    
  );
}
