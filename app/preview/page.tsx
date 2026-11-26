import Link from 'next/link';

export default function Preview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-500 to-brand-400">
      <section
        className="flex items-center justify-center h-64"
      >
        <h1 className="text-4xl font-bold text-white">Site Preview – Header Background</h1>
      </section>
      <section
        className="flex items-center justify-center h-64"
      >
        <h2 className="text-3xl font-semibold text-white">Another Section</h2>
      </section>
      <div className="p-8">
        <p className="text-center">
          This preview shows the generated background images applied to sections of the page. You can adjust colors or replace the images as needed.
        </p>
        <p className="text-center mt-4">
          <Link href="/" className="text-brand-600 underline">← Back to Home</Link>
        </p>
      </div>
    </div>
  );
}
