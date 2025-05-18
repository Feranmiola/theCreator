"use client";
import MakingItBigText from "@/components/MakingItBigText";
import ContactUs from "@/components/PageComponents/ContactUs";
import Hero from "@/components/PageComponents/Hero";
import MakingIt from "@/components/PageComponents/MakingIt";
import Topbar from "@/components/Shared/Topbar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    // Ensure this only runs in the browser
    if (typeof window === "undefined") return;

    let scrollTimer = 0;

    // Function to update scrollbar properties
    function updateScrollbar() {
      const scrollPercentage =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      const scrollbarHeight =
        (window.innerHeight / document.documentElement.scrollHeight) *
        window.innerHeight;
      const scrollTop =
        scrollPercentage * (window.innerHeight - scrollbarHeight);

      document.body.style.setProperty("--scroll-top", `${scrollTop}px`);
      document.body.style.setProperty(
        "--scrollbar-height",
        `${scrollbarHeight}px`
      );

      document.body.classList.add("is-scrolling");

      clearTimeout(scrollTimer);
      // @ts-ignore
      scrollTimer = setTimeout(() => {
        document.body.classList.remove("is-scrolling");
      }, 1000);
    }

    // Add event listeners for scroll and resize
    window.addEventListener("scroll", updateScrollbar);
    window.addEventListener("resize", updateScrollbar);

    // Initial call to set the correct scrollbar size
    updateScrollbar();

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);
    };
  }, []);
  return (
    <div className="flex flex-col w-screen relative  min-h-screen bg-[#F8F5F0]">
      <Topbar />
      <Hero />
      <ContactUs />
      <MakingIt />
    </div>
  );
}
