import React from 'react';

const Itinerary = () => {
  // Sample data for the itinerary timeline
  const itineraryData = [
    {
      day: "Day 1",
      location: "Arrival at the City",
      description: "Arrive at the airport and transfer to the hotel. Evening free to explore the local area.",
      time: "9:00 AM",
    },
    {
      day: "Day 2",
      location: "City Tour",
      description: "Guided tour of major attractions including historical sites and museums.",
      time: "10:00 AM",
    },
    {
      day: "Day 3",
      location: "Adventure Activities",
      description: "A day full of adventure activities such as hiking and river rafting.",
      time: "8:00 AM",
    },
    {
      day: "Day 4",
      location: "Relax and Return",
      description: "Relax at the resort and prepare for departure.",
      time: "12:00 PM",
    },
  ];

  return (
    <div className="py-6 max-w-4xl mx-auto">
      <div>
        <h3 className="text-2xl font-bold font-serif text-center mb-8">Destination Itinerary</h3>
      </div>
      
      <div className="relative border-l-2 border-dotted border-orange-300">
        {itineraryData.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-1.5 border border-white"></div>
            <p className="text-sm text-gray-500">{item.day}</p>
            <h4 className="text-lg font-semibold text-gray-800">{item.location}</h4>
            <p className="text-sm text-gray-600 mb-2">{item.time}</p>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
