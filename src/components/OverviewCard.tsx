import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import rest1 from "../../public/restaurant-1.webp";
import Link from "next/link";
import FavouriteButton from "./ui/FavouriteButton";
import { useAppDispatch, useAppSelector } from "@/lib/storeHooks";
import { addFavorite, removeFavorite } from "@/lib/features/favSlice";

const OverviewCard = ({ details, favorites }: any) => {
  const [imgSrc, setImgSrc] = useState(details.imageUrl);
  const [isFav, setIsFav] = useState(
    favorites?.items?.some((item: any) => item.id === details.id)
  );

  const dispatch = useAppDispatch();

  const handleAddToFav = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    setIsFav(!isFav);
    if (isFav) {
      dispatch(removeFavorite(details.id));
    } else {
      dispatch(addFavorite(details));
    }
  };
  return (
    <Link href={`/restaurant/${details.restaurantsId}`}>
      <Card className="relative max-w-[300px] w-[100%] cursor-pointer overflow-hidden min-h-[350px]">
        <div className="absolute z-50 right-0 top-0">
          <FavouriteButton
            onClick={(event) => {
              handleAddToFav(event);
            }}
            isClick={isFav}
          />
        </div>
        <div className="w-[300px] h-[200px] relative">
          <Image
            fill
            src={imgSrc}
            alt="restaurant"
            onError={() => setImgSrc(rest1)}
          />
        </div>
        <div className="px-10 py-5 ">
          <p className="font-semibold">{details.name}</p>
          <p className="text-[gray]">{details.state}</p>
        </div>
      </Card>
    </Link>
  );
};

export default OverviewCard;
