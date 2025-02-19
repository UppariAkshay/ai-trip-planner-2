import { FaUserAlt, FaUsers, FaHeart, FaSmile } from 'react-icons/fa'; // Importing Font Awesome icons

export const budgetOptionsList = [
    {
      id: 1,
      title: "Cheap",
      icon: "💸", // Icon for cheap option (can be replaced with an actual icon if using an icon library)
      desc: "Affordable options for those who want to travel on a tight budget. Basic amenities and limited luxuries.",
    },
    {
      id: 2,
      title: "Moderate",
      icon: "💰", // Icon for moderate option
      desc: "A balanced option offering good comfort and value for money. Comfortable accommodation and quality experiences.",
    },
    {
      id: 3,
      title: "Luxury",
      icon: "✨", // Icon for luxury option
      desc: "Premium experience with high-end accommodations, top-tier services, and luxury amenities.",
    },
    {
      id: 4,
      title: "Extreme Luxury",
      icon: "💎", // Icon for extreme luxury option
      desc: "Exclusive, extravagant experiences tailored for those seeking the finest. Private villas, personalized services, and ultra-luxury amenities.",
    }
  ];
  
  export const travelOptions = [
    {
      id: 1,
      icon: "🧳", 
      title: "Just Me",
      desc: "Solo travel for those seeking adventure and self-discovery. Perfect for exploring at your own pace."
    },
    {
      id: 2,
      icon: "👨‍👩‍👧‍👦", 
      title: "Family",
      desc: "Travel with your loved ones. Ideal for making memories, relaxing, and enjoying time together."
    },
    {
      id: 3,
      icon: "💑", 
      title: "Couple",
      desc: "Romantic getaways for couples. Perfect for cozy moments, shared experiences, and adventures."
    },
    {
      id: 4,
      icon: "👯‍♂️", 
      title: "Friends",
      desc: "Traveling with friends for the best shared adventures, fun experiences, and making memories together."
    }
  ];

  export const AI_PROMPT = 'Generate travel plan for {location} along with locationImageUrl for travelling with {travellingwith} with {budget} budget for {days} days, give me hotels option list with hotelname, hotellocation, hotelprice, hotelimageUrl, geo coordinates, rating and placesSuggectionsList it should have {day} {morning}, {afternoon}, {evening} having placename, ticketprice,availableTiming, placeimageUrl, rating, geo cordinates, traveltime, bestTimeToVisit in JSON format'