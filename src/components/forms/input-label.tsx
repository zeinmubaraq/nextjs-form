export default function InputLabel({ name, label }: { name: string; label: string }) {
  return (
    <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
      {label}
    </label>
  );
}
