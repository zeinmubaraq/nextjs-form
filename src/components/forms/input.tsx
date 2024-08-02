export default function Input({
  type,
  name,
  placeholder,
}: {
  type: string;
  name: string;
  placeholder: string;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  );
}
