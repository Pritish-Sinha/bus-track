const calculateFare = (distance, vehicleType, isPeakTime, driverAvailability) => {
    let baseFare, perKmRate;
  
    switch (vehicleType) {
      case 'twoWheeler':
        baseFare = Math.floor(Math.random() * (50 - 30 + 1)) + 30;
        perKmRate = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
        break;
      case 'miniTruck':
        baseFare = Math.floor(Math.random() * (250 - 150 + 1)) + 150;
        perKmRate = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
        break;
      case 'truck':
        baseFare = Math.floor(Math.random() * (700 - 500 + 1)) + 500;
        perKmRate = Math.floor(Math.random() * (50 - 35 + 1)) + 35;
        break;
      default:
        throw new Error('Invalid vehicle type');
    }
  
    let totalFare = baseFare + (distance * perKmRate);
  
    if (isPeakTime) {
      totalFare *= 1.2; // Peak time surcharge (20%)
    }
  
    if (driverAvailability < 0.3) {
      totalFare *= 1.5; // Low driver availability surcharge (50%)
    }
  
    return totalFare;
  };
  
  module.exports = calculateFare;
  