export default function TextArea({
  label,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <textarea
        rows={5}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-slate-300 p-4 resize-none
        focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
}