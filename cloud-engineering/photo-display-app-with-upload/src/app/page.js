import Image from "next/image";
import Link from 'next/link';

const images = [
  {
    path:"/scraper.jpg",
    alt: "White sky scraper shot from below against a blue sky"
  },
  {
    path:"/family-field.jpg",
    alt: "Greyscale photo of our family set against a field of barley"
  },
  {
    path:"/mountain.jpg",
    alt: "Mountain view of Lake Northcoder"
  },
  {
    path:"/boarding.jpg",
    alt: "The beautiful Blackpool coast 🤔"
  },
  {
    path:"/district.jpg",
    alt: "Large hill just outside Northcodershire"
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <h1 className={`mb-10 text-2xl font-semibold`}>Family Photo Album</h1>
      </div>

      <div>
        <Link href="/upload"><h2 className={`mb-5 font-semibold`}>Upload new photo</h2></Link>
      </div>

      <div className="grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 gap-y-5">

        {images.map((image) => {
          return <Link key={image.path} href={{pathname: '/photo', query: {imagePath: image.path, imageAlt: image.alt}}}>
            <Image src={image.path} alt={image.alt} width={160} height={180} priority/>
          </Link>
        })}
      </div>
    </main>
  );
}
