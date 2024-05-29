const { createClient } = require("@supabase/supabase-js");

// // Initialize Supabase client
const supabase = createClient(
  "https://xtzhljdgwdzsrolhutom.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0emhsamRnd2R6c3JvbGh1dG9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5NTM2OTgsImV4cCI6MjAyOTUyOTY5OH0.CjXONSd8cTH4pQU2HXnRTtNogMSxAP47s37nslLkqMU"
);

// Fetch data from the API

const url =
  "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=297633";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f309a70bf5mshe99cae495ebe633p1870f4jsn66945e930398",
    "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log("🚀 ~ .then ~ data:", data);
    // Process the fetched data as needed
    const processedData = data?.data?.data?.map((item) => ({
      name: item.name,
      address: "",
      rating: item.averageRating,
      state: item.parentGeoName,
      country: "India",
      imageUrl: item.heroImgUrl,
      locationId: item.locationId || "",
      restaurantsId: item.restaurantsId,
      userReviewCount: item.userReviewCount
      // Map other properties as needed
    }));

    // Insert the processed data into the Supabase table
    supabase
      .from("restaurants")
      .insert(processedData)
      .then((response) => {
        console.log("Data inserted successfully:", response);
      })
      .catch((error) => {
        console.error("Error inserting data:", error.message);
      });
  })
  .catch((error) => {
    console.error("Error fetching data from API:", error);
  });
