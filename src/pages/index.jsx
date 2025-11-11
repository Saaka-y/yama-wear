// pages/index.jsx
import Image from "next/image";
import { MountainIcon } from "@/components/MountainIcon";
import { DateSelect } from "@/components/DateSelect";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden flex justify-center items-center">

      <div className="
          relative
          w-[900px] h-[900px]        /* スマホ */
          md:w-[1000px] md:h-[1000px]  /* タブレット */
          lg:w-[1200px] lg:h-[1000px] /* PC */
        "
      >
      <Image
        src="/background.svg"
          alt="background"
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
          className="z-0"
      />

      <MountainIcon
        iconClassName="absolute top-[43%] left-[65%] z-20"
        name="Mt.Chausu"
        accessInfo="Tokyo ⇨ Starting point: 2 hours"
      />
      <MountainIcon
        iconClassName="absolute top-[60%] left-[45%] z-20"
        name="Mt.Chausu"
        accessInfo="Tokyo ⇨ Starting point: 2 hours"
      />
      </div>
        <DateSelect className="absolute top-10 left-10 z-10" />
    </div>
  );
}
