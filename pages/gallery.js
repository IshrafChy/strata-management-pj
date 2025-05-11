import Navbar from '../components/Navbar';

const images = [
  '/gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg',
  '/gallery6.jpg',
];

export default function Gallery() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 