import { useState } from 'react';

const DestinationCard = ({ destination, isHovered, onMouseEnter, onMouseLeave }: any) => {
    return (
        <div
            className={`relative rounded-xl overflow-hidden transition-all duration-700 ease-in-out cursor-pointer group 
        ${isHovered ? 'flex-grow-[4] sm:flex-grow-[3]' : 'flex-grow-[1]'}`}
            style={{
                flexBasis: 0,
                height: '400px',
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <img
                src={destination.image}
                alt={destination.name}
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className={`absolute bottom-0 left-0 p-4 transition-all duration-500 ease-in-out w-full
        ${isHovered ? 'p-6' : 'p-4'}`}>

                <h3 className="text-white font-bold text-xl drop-shadow-md">
                    {destination.name}
                </h3>

                <div className={`mt-4 transition-all duration-500 ease-out 
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <button className="cursor-pointer border border-white/80 text-white/90 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 hover:border-white transition-colors duration-200">
                        Xem tất cả
                    </button>
                </div>
            </div>
        </div>
    );
};

const DestinationAccordion = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const destinations = [
        {
            id: 1,
            name: "Ba Be",
            image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop"
        },
        {
            id: 2,
            name: "Bac Giang",
            image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=600&h=400&fit=crop"
        },
        {
            id: 3,
            name: "Da Lat",
            image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=600&h=400&fit=crop"
        },
        {
            id: 4,
            name: "Da Nang",
            image: "https://images.unsplash.com/photo-1517713982677-4b66332f98de?w=600&h=400&fit=crop"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white min-h-screen">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
                    Các điểm đến hàng đầu
                </h2>
            </div>

            <div className="flex flex-row items-stretch gap-4">
                {destinations.map((dest, index) => (
                    <DestinationCard
                        key={dest.id}
                        destination={dest}
                        isHovered={index === hoveredIndex}
                        onMouseEnter={() => setHoveredIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default DestinationAccordion;