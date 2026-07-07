import { FiUploadCloud } from "react-icons/fi";

export default function ImageUploader({
  image,
  setImage,
}) {

  function handleChange(e) {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {

      setImage(reader.result);

    };

    reader.readAsDataURL(file);

  }

  return (

    <div>

      <label className="block font-semibold mb-2">

        Upload Photo

      </label>

      <label className="cursor-pointer">

        <div className="border-2 border-dashed rounded-2xl p-6 flex flex-col items-center hover:border-blue-600 transition">

          <FiUploadCloud
          size={40}
          className="text-blue-600"
          />

          <p className="mt-3 text-sm">

            Click to upload

          </p>

        </div>

        <input

        hidden

        type="file"

        accept="image/*"

        onChange={handleChange}

        />

      </label>

      {

        image &&

        <img

        src={image}

        alt="preview"

        className="rounded-2xl mt-4"

        />

      }

    </div>

  );

}