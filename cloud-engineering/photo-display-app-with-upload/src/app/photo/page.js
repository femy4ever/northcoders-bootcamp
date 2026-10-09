import Image from "next/image";
import Link from 'next/link';

export default function Photo({searchParams}) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <h3 className={`mb-20 text-2xl font-semibold`}>{searchParams.imageAlt}</h3>
      </div>

      <div className="gridlg:grid-cols-1 gap-y-5">
        <Image src={searchParams.imagePath} alt={searchParams.imageAlt} width={512} height={576} priority/>
      </div>
      <Link href="/">
        <h4 className={`mb-20 text-2xl font-semibold p-10`}>Back to album</h4>
      </Link>
    </main>
    
  );
}
