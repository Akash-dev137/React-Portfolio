import type { Skill } from "../Skills";
import styles from "./SkillCard.module.css";

interface Props {
  title: string;
  images: Skill[];
}

const SkillCard = ({ title, images }: Props) => {
  return (
    <>
      <div className="hidden md:block md:flex flex-col m-4 text-white border  md:rounded-full text-[20px] md:text-[50px] bg-white/10 justify-around items-center md:flex-row  md:m-5">
        <div className="w-[30%] border md:rounded-full bg-[red]">
          <p className="text-center">{title}</p>
        </div>

        <div className="flex flex-col w-fit md:flex-row justify-center gap-10 md:gap-15 md:w-[70%]">
          {images.map((image) => (
            <div
              className={`${styles.skill} border p-2 rounded-2xl cursor-pointer relative`}
            >
              <p className="absolute -top-14 bg-[red] left-1 text-center border p-[2px] rounded-xl text-[17px] text-white">
                {image.name}
              </p>
              <div>{image.icon}</div>
            </div>
          ))}
        </div>
      </div>


      <div className="border-1 border-[red] bg-white/30 mt-5 rounded-2xl md:hidden">
        <div className="text-white rounded-2xl overflow-hidden w-full">
          <p className="px-4 py-3 border-b-1 font-bold text-[20px] border-[red]  bg-black">
            {title}
          </p>
        </div>
        <div className="w-full text-white text-[40px] rounded-full py-2 ">
          <div className="flex justify-evenly">
            {images.map((image) => (
              <div
                className={`${styles.skill} border p-2 rounded-2xl cursor-pointer relative`}
              >
                <p className="absolute -top-10 bg-[red] left-1 text-center border p-[2px] rounded-xl text-[12px] text-white">
                  {image.name}
                </p>
                <div>{image.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
