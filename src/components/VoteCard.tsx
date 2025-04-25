import Point from '@/assets/point.svg';
import Image from 'next/image';

const VoteCard = ({ content }: { content: string }) => {
  return (
    <div className="bg-[#f3f3fe] font-[family-name:var(--font-hanken)] lg:w-[205px] lg:h-[287px] w-[191px] h-[191px] rounded-xl flex items-center justify-start flex-col gap-4 pt-10 lg:pt-14">
      <Image src={Point} width={40} height={40} alt="Dao Point" />
      <p className="text-center font-extralight uppercase w-[80%] lg:text-base text-[10px]">
        {content}
      </p>
    </div>
  );
};

export default VoteCard;
