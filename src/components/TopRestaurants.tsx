"use client";
import React, { useCallback, useEffect, useState } from "react";
import OverviewCard from "./OverviewCard";
import rest1 from "../../public/restaurant-1.webp";
import { createClient } from "../../utils/supabase/client";
import { useAppSelector } from "@/lib/storeHooks";

const TopRestaurants = () => {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [dataSet, setDataSet] = useState<any>([]);
  const favorites = useAppSelector((state) => state.favourites);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase.from("restaurants").select("*");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setDataSet(data);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    getProfile();
  }, []);

  const restaurants = [
    {
      img: rest1,
      title: "Golden Bakery",
      address: "Naimarmoola",
      rating: 4,
    },
  ];
  return (
    <div className="p-5">
      <p className="text-[24px] font-semibold mb-5">Top Restaurants</p>
      <div className="flex w-[100%] justify-around flex-wrap gap-5">
        {dataSet?.map((res: any) => (
          <OverviewCard details={res} key={res?.id} favorites={favorites} />
        ))}
      </div>
    </div>
  );
};

export default TopRestaurants;
