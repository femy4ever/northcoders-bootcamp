"use client"; // This is a client component 👈🏽
import { useState } from "react";
import { useS3Upload } from "next-s3-upload";

export default function Upload() {
  let [imageUrl, setImageUrl] = useState();
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  let handleFileChange = async (file) => {
    let { url } = await uploadToS3(file);
    setImageUrl(url);
  };


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <h1 className={`mb-10 text-2xl font-semibold`}>Add your photo</h1>
      </div>

      <div>
        <FileInput  onChange={handleFileChange} />

        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={openFileDialog}>
            Upload
        </button>
      </div>

      {imageUrl && 
      <div>
        <h3>Image successfully uploaded</h3>
      </div>
      }
    </main>
  );
}
