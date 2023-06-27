import Image from 'next/image';

const TeamMemberCard = ({ name, designation, image }) => {
  return (
    <div className="pb-10 md:pb-0">
      <Image
        src={image.src}
        alt={name}
        width={376}
        height={472}
        className="w-full object-cover"
      />
      <div className="p-3">
        <p className="text-sm font-semibold uppercase md:text-base">{name}</p>
        <p className="font-ptSans text-xs md:text-base">{designation}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
