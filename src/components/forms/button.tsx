export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
      {children}
    </button>
  );
}
