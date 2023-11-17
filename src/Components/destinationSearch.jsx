import { useState } from 'react';

const TourBooking = () => {
    const destinations = [
        'City Tour',
        'Adventure Tour',
        'Cultural Tour',
        'Beach Tour',
        // Add more tour types as needed
    ];

    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedTourType, setSelectedTourType] = useState('');

    const handleDestinationChange = (e) => {
        setSelectedDestination(e.target.value);
    };

    const handleTourTypeChange = (e) => {
        setSelectedTourType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the form submission here, such as sending the selected destination and tour type to a server
        console.log('Selected Destination:', selectedDestination);
        console.log('Selected Tour Type:', selectedTourType);
    };

    return (
        <div>
            <h1>Tour Booking</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="destinationSelect">Select a destination:</label>
                    <select
                        id="destinationSelect"
                        value={selectedDestination}
                        onChange={handleDestinationChange}
                    >
                        <option value="">Choose a destination</option>
                        {destinations.map((destination, index) => (
                            <option key={index} value={destination}>
                                {destination}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="tourTypeSelect">Select a tour type:</label>
                    <select
                        id="tourTypeSelect"
                        value={selectedTourType}
                        onChange={handleTourTypeChange}
                    >
                        <option value="">Choose a tour type</option>
                        <option value="City Tour">City Tour</option>
                        <option value="Adventure Tour">Adventure Tour</option>
                        <option value="Cultural Tour">Cultural Tour</option>
                        <option value="Beach Tour">Beach Tour</option>
                        {/* Add more tour types as needed */}
                    </select>
                </div>
                <button type="submit">Book Tour</button>
            </form>
        </div>
    );
};

export default TourBooking;
