"use client";

import About_User from "../components/about-user";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Profile = () => {
  
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard?component=about-user");
  }, [router]);

  return null;
};

export default Profile;
