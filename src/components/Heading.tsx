interface Props {
  title : string
}

const Heading = ({ title }: Props) => {
  return (
    <div className="w-full flex justify-center relative z-52 ">
    <p className="text-white w-fit border-b-2 border-[red] bg-white/10 rounded p-[6px] text-[25px] md:hidden">{title}</p>
    </div>
  );
};

export default Heading;
