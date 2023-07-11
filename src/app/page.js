'use client';

import HeroHeader from "@/components/homepage-landing";
import Courses from "@/components/courses";
import Finder from "@/components/internship-finder";
import Approach from "@/components/approach";
import { useToast, Box } from "@chakra-ui/react";

export default function Home() {
  const toast = useToast();

  return (
    <>
      <Box my={["20px", "130px"]}>
        <HeroHeader />

        <Courses />
        <Approach />
        <Finder />
      </Box>
    </>
  );
}
