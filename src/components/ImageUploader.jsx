import { FiUploadCloud, FiImage } from "react-icons/fi";

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
    <div className="mt-5">
      <label className="block text-base font-semibold text-slate-800 mb-3">
        Upload Photo
      </label>

      <label className="cursor-pointer block">
        <div
          className="
            border-2
            border-dashed
            border-sky-300
            bg-sky-50
            rounded-2xl
            p-8
            flex
            flex-col
            items-center
            justify-center
            transition-all
            duration-300
            hover:bg-sky-100
            hover:border-blue-500
            hover:shadow-md
          "
        >
          <FiUploadCloud
            size={48}
            className="text-blue-600"
          />

          <p className="mt-3 font-medium text-slate-700">
            Click to upload
          </p>

          <p className="text-xs text-slate-500 mt-1">
            JPG, PNG or JPEG
          </p>
        </div>

        <input
          hidden
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
      </label>

      {image && (
        <div className="mt-5">
          <p className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
            <FiImage />
            Image Preview
          </p>

          <img
            src={image}
            alt="preview"
            className="
              w-full
              rounded-2xl
              border
              border-sky-200
              shadow-md
              object-cover
              max-h-64
            "
          />
        </div>
      )}
    </div>
  );
}