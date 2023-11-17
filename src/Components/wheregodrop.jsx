import { useState } from 'react';

const DestinationSelect = () => {
    const destinations = [
        'New York',
        'Los Angeles',
        'London',
        'Paris',
        'Tokyo',
        // Add more destinations as needed
    ];

    const [selectedDestination, setSelectedDestination] = useState('');

    const handleDestinationChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedDestination(selectedValue);
    };

    return (
        <div>
            <h1>Select Where to Go</h1>
            <label htmlFor="destinationSelect">Choose a destination:</label>
            <select
                id="destinationSelect"
                value={selectedDestination}
                onChange={handleDestinationChange}
            >
                <option value="">Select a destination</option>
                {destinations.map((destination, index) => (
                    <option key={index} value={destination}>
                        {destination}
                    </option>
                ))}
            </select>

        </div>
    );
};

export default DestinationSelect;
