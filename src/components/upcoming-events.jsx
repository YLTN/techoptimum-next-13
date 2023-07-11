import { Flex, Heading } from "@chakra-ui/react";
import FirstPlace from "../assets/hackathon/1stplace.png";
import SquiggleLine from "../assets/Squiggly-Line.svg";

export default function UpcomingEvents() {
  return (
    <>
      <br></br>
      <Flex
        color="primary"
        mt="0"
        paddingTop={"4rem"}
        height={["250px", "300px"]}
        backgroundColor={"#05101D"}
        display={"column"}
        align="ce nter"
        justify="center"
      >
        <Heading
          mb={"4rem"}
          fontSize={["3xl", "5xl"]}
          color="primary"
          align="center"
        >
          Upcoming Events
        </Heading>
        <div></div>
        <h2 align="center">More events coming soon...</h2>
      </Flex>
    </>
  );
}
