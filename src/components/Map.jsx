
import style from "@/components/Map.module.css"
import { MountainIcon } from "@/components/MountainIcon";

export function Map() {
  return (
    <div className={style.mapWrapper}>
      <div className={style.mapContainer}
      >
        <img
          src="/background.svg"
          alt="background"
          className={style.mapImage}
        />
        <MountainIcon
          iconClassName="absolute top-0 left-[65%] z-20"
          name="Mt.Chausu"
          accessInfo="Tokyo ⇨ Starting point: 2 hours"
        />
        <MountainIcon
          iconClassName="absolute top-[60%] left-[45%] z-20"
          name="Mt.Chausu"
          accessInfo="Tokyo ⇨ Starting point: 2 hours"
        />
      </div>

    </div>
  );
}
