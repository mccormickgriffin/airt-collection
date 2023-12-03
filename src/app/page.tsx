import ImageGrid from "@/components/image-grid"
import { getImages } from "@/lib/utils"

export default function Home() {
  return (
    <main>
      <ImageGrid images={getImages()} />        
    </main>
  )
}
