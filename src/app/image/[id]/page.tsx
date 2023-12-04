import { getImages } from "@/lib/utils";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export default async function EventsPage({ params }: Props) {
  const id: number = parseInt(params.id);
  const image = getImages()[id];

  return (
    <main>
      <div className="h-300">
        <Image
          src={image.src}
          alt={image.alt}
          width={500}
          height={300}
        />
      </div>
    </main>
  );
}
