interface Props {
  img: string;
  title: string;
  desc: string;
}

const CertificateCard = ({ img, title, desc }: Props) => {
  return (
    <div className="p-2 bg-white/30 w-fit rounded-xl">
      <div className="flex-col bg-base-100 w-80 shadow-sm rounded h-full">
        <figure className="border border-black rounded-xl overflow-hidden">
          <img src={img} alt={title} />
        </figure>
        <div className="card-body py-1 bg-black text-white text-center rounded-xl">
          <p className="card-title text-[22px] pb-2">{title}</p>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
