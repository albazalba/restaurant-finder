"use client";
import React, { useCallback, useEffect, useState } from "react";

import { Input } from "./ui/input";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { createClient } from "../../utils/supabase/client";
const Overlay = () => {
  const [open, setOpen] = useState(false);
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [dataSet, setDataSet] = useState<any>([]);

  const getData = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("restaurants")
        .select("*");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setDataSet(data);
      }
    } catch (error) {
      console.log("🚀 ~ getData ~ error:", error)
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex justify-center items-center w-[100%] h-[400px] bg-[url('../../public/restaurant-1.webp')] bg-cover bg-center backdrop-blur-lg bg-no-repeat">
      <Input
        className="w-[40%] focus:border-none focus:outline-none"
        type="text"
        placeholder="Search for restaurant"
        onClick={() => setOpen(true)}
      />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {dataSet.map((data: any) => (
                <CommandItem key={data.id}>{data.name}</CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
};

export default Overlay;
