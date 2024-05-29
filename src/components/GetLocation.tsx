"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useLocationContext } from "../../utils/Context";

const GetLocation = () => {
    const {location, setLocation} = useLocationContext()
    console.log("🚀 ~ GetLocation ~ location:", location)
  const [userLocation, setUserLocation] = useState<{
      latitude: number;
      longitude: number;
    } | null>(null);
    console.log("🚀 ~ GetLocation ~ userLocation:", userLocation)

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setUserLocation({ latitude, longitude });
          setLocation({latitude, longitude})
        },

        (error) => {
          console.error("Error get user location: ", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  };

  return (
    <div>
      <Button variant={"ghost"} onClick={getUserLocation}>
        Location {location?.latitude}
      </Button>
    </div>
  );
};

export default GetLocation;
