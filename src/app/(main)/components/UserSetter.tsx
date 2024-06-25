"use client";
import { useAppDispatch } from "@/lib/storeHooks";
import React, { useEffect } from "react";
import { createClient } from "../../../../utils/supabase/client";
import { setUser } from "@/lib/features/userSlice";

const UserSetter = () => {
  const dispatch = useAppDispatch();
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        dispatch(setUser(user));
      }
    };
    fetchUser();
  }, []);
  return <div></div>;
};

export default UserSetter;
