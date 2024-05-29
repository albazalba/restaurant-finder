"use client";
import OverviewCard from "@/components/OverviewCard";
import { useAppSelector } from "@/lib/storeHooks";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const page = () => {
  const favorites = useAppSelector((state) => state.favourites);

  return (
    <div className="px-[30px] py-[20px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Favourites</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="text-[24px] font-semibold mt-[20px]">Favourites</p>

      <div className="flex  w-[100%] js flex-wrap gap-5">
        {favorites?.items?.map((item) => (
          <OverviewCard key={item.id} details={item} favorites={favorites} />
        ))}
      </div>
    </div>
  );
};

export default page;
