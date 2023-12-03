import ImageGrid from "@/components/image-grid"

const images = [
  { src: "/example_image.jpg", alt: "Example Image" },
  { src: "/example_image.jpg", alt: "Example Image" },
  { src: "/example_image.jpg", alt: "Example Image" },
  { src: "/example_image.jpg", alt: "Example Image" },
  { src: "/example_image.jpg", alt: "Example Image" },
  { src: "/example_image.jpg", alt: "Example Image" },
  { src: "/example_image.jpg", alt: "Example Image" },
  { src: "/example_image.jpg", alt: "Example Image" },
  { src: "/example_image.jpg", alt: "Example Image" },
  { src: "/example_image.jpg", alt: "Example Image" },
]

export default function Home() {
  return (
    <main>
      <ImageGrid images={images} />        
    </main>
  )
}
