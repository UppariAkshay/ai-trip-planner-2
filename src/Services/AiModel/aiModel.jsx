import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"
  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

   export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate travel plan for location hyderabad for 3 days for couple for 3 days with cheap budget, give me hotels option list with hotelname, hotellocation, hotelprice, hotelimage, geo coordinates, rating, and placesSuggectionsList with placename, ticketprice, placeimage, rating, geo cordinates and time to travel for each place within 3 days with best time to visit in JSON format\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"trip_name\": \"Hyderabad Budget Getaway for Couples\",\n  \"duration\": \"3 Days\",\n  \"budget\": \"Cheap/Budget-Friendly\",\n  \"best_time_to_visit\": \"October to March (Pleasant weather)\",\n    \"hotels\": [\n        {\n            \"hotelName\": \"Hotel Aditya Hometel\",\n            \"hotelLocation\": \"Gachibowli\",\n            \"hotelPrice\": \"₹2000 - ₹3000 per night\",\n            \"hotelImage\": \"URL_to_AdityaHometel_Image\",\n            \"geoCoordinates\": {\"latitude\": 17.4417, \"longitude\": 78.3484},\n           \"rating\": 4,\n            \"description\": \"Good budget option with decent rooms.\"\n        },\n        {\n            \"hotelName\": \"Treebo Trend Hotel\",\n            \"hotelLocation\": \"Near Railway Station, Secunderabad\",\n            \"hotelPrice\": \"₹1500 - ₹2500 per night\",\n            \"hotelImage\": \"URL_to_TreeboTrend_Image\",\n            \"geoCoordinates\": {\"latitude\": 17.4391, \"longitude\": 78.5019},\n            \"rating\": 3.8,\n            \"description\": \"Basic accommodation with easy access to transportation.\"\n        },\n         {\n            \"hotelName\": \"OYO Rooms\",\n            \"hotelLocation\": \"Various Locations\",\n            \"hotelPrice\": \"₹1200 - ₹2000 per night\",\n            \"hotelImage\": \"URL_to_OYO_Image\",\n            \"geoCoordinates\": {\"latitude\": 17.3850, \"longitude\": 78.4867},\n             \"rating\": 3.5,\n            \"description\":\"Multiple locations across city providing budget friendly rooms\"\n         }\n    ],\n  \"placesSuggestionsList\": [\n      {\n        \"day\": 1,\n        \"morning\": {\n           \"placeName\": \"Charminar\",\n           \"ticketPrice\": \"₹25 per person\",\n           \"placeImage\": \"URL_to_Charminar_Image\",\n            \"rating\": 4.2,\n           \"geoCoordinates\": {\"latitude\": 17.3616, \"longitude\": 78.4746},\n           \"timeToTravel\": \"30-45 min from most areas\",\n             \"bestTimeToVisit\": \"Morning (less crowded)\"\n        },\n        \"afternoon\": {\n            \"placeName\": \"Mecca Masjid\",\n            \"ticketPrice\": \"Free Entry\",\n           \"placeImage\": \"URL_to_MeccaMasjid_Image\",\n            \"rating\": 4.0,\n           \"geoCoordinates\": {\"latitude\": 17.3591, \"longitude\": 78.4750},\n           \"timeToTravel\": \"Walking distance from Charminar\",\n          \"bestTimeToVisit\": \"Afternoon (observe prayer timings)\"\n         },\n        \"evening\": {\n          \"placeName\": \"Laad Bazaar\",\n          \"ticketPrice\": \"Free Entry\",\n         \"placeImage\": \"URL_to_LaadBazaar_Image\",\n          \"rating\": 4.1,\n          \"geoCoordinates\": {\"latitude\": 17.3600, \"longitude\": 78.4755},\n         \"timeToTravel\":\"Walking distance from Mecca Masjid\",\n           \"bestTimeToVisit\": \"Evening (for shopping)\"\n\n        }\n\n     },\n      {\n        \"day\": 2,\n        \"morning\": {\n            \"placeName\": \"Golkonda Fort\",\n            \"ticketPrice\": \"₹25 per person\",\n           \"placeImage\": \"URL_to_GolkondaFort_Image\",\n            \"rating\": 4.3,\n           \"geoCoordinates\": {\"latitude\": 17.3823, \"longitude\": 78.4012},\n            \"timeToTravel\": \"45-60 min from city center\",\n            \"bestTimeToVisit\":\"Morning (to avoid heat)\"\n         },\n          \"afternoon\": {\n             \"placeName\": \"Qutb Shahi Tombs\",\n              \"ticketPrice\": \"₹10 per person\",\n              \"placeImage\": \"URL_to_QutbShahiTombs_Image\",\n              \"rating\": 4.0,\n             \"geoCoordinates\": {\"latitude\": 17.3806, \"longitude\": 78.3947},\n             \"timeToTravel\": \"Short distance from Golkonda Fort\",\n              \"bestTimeToVisit\": \"Afternoon (peaceful ambiance)\"\n           },\n          \"evening\": {\n            \"placeName\": \"Hussain Sagar Lake\",\n           \"ticketPrice\":\"Boating charges extra\",\n            \"placeImage\": \"URL_to_HussainSagar_Image\",\n            \"rating\": 4.2,\n             \"geoCoordinates\": {\"latitude\": 17.4201, \"longitude\": 78.4776},\n             \"timeToTravel\": \"30-45 min from Qutb Shahi Tombs\",\n            \"bestTimeToVisit\":\"Evening (for sunset views)\"\n          }\n\n       },\n      {\n        \"day\": 3,\n        \"morning\": {\n            \"placeName\": \"Salar Jung Museum\",\n            \"ticketPrice\": \"₹50 per person\",\n           \"placeImage\": \"URL_to_SalarJungMuseum_Image\",\n            \"rating\": 4.4,\n            \"geoCoordinates\": {\"latitude\": 17.3725, \"longitude\": 78.4827},\n           \"timeToTravel\":\"30-45 min from city center\",\n            \"bestTimeToVisit\":\"Morning (to avoid crowds)\"\n           },\n       \"afternoon\": {\n            \"placeName\": \"Birla Mandir\",\n            \"ticketPrice\": \"Free Entry\",\n            \"placeImage\": \"URL_to_BirlaMandir_Image\",\n           \"rating\": 4.3,\n           \"geoCoordinates\": {\"latitude\": 17.4044, \"longitude\": 78.4684},\n          \"timeToTravel\": \"20-30 min from Salar Jung Museum\",\n             \"bestTimeToVisit\": \"Afternoon (for panoramic city views)\"\n          },\n       \"evening\":{\n          \"placeName\": \"Lumbini Park\",\n           \"ticketPrice\":\"₹50 per person\",\n           \"placeImage\":\"URL_to_LumbiniPark_Image\",\n            \"rating\": 4.0,\n           \"geoCoordinates\": {\"latitude\": 17.4104, \"longitude\": 78.4801},\n            \"timeToTravel\": \"15-20 minutes from Birla Mandir\",\n           \"bestTimeToVisit\": \"Evening (to enjoy the laser show)\"\n         }\n     }\n\n  ],\n  \"notes\": [\n      \"Transportation can be done via local buses, auto-rickshaws, or metro rail for cost-effectiveness.\",\n      \"Street food is an affordable and delightful way to experience Hyderabadi cuisine.\",\n      \"Bargaining is common in local markets.\",\n      \"Carry water and stay hydrated.\",\n      \"Pre-book hotels during peak seasons to secure better deals.\"\n     ]\n}\n```"},
          ],
        },
      ],
    });

  
