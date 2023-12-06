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
        <Image src={image.src} alt={image.alt} width={500} height={300} />
      </div>
      <a href={image.src} download="downloaded-image">
        Download Image
      </a>

      <p>Source: </p>
      <p>{image.source}</p>
      <p>Model: </p>
      <p>{image.model}</p>
      <p>Prompt: </p>
      <p>{image.prompt}</p>
    </main>
  );
}
