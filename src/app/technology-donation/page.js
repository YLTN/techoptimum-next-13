"use client";
import {
  FormControl,
  FormLabel,
  Textarea,
  Button,
  VStack,
  Box,
  useToast,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Text,
  Select,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { useState } from "react";

export default function DonationForm() {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [donationItems, setDonationItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [additionalInfo, setAdditionalInfo] = useState("");

  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const webhookURL =
      "https://discord.com/api/webhooks/1115401017626992720/bLrzgoyA2vlLjz5yRXkIKiFSWVzjKpHuDYWjo0bG9T-dZjUZ1utn8_EpZcZg6tzk--Pj"; // replace with your Discord webhook URL

    const data = {
      embeds: [
        {
          title: "New Donation Request",
          fields: [
            { name: "Company Name", value: companyName },
            { name: "Contact Name", value: contactName },
            { name: "Contact Email", value: contactEmail },
            { name: "Items to donate", value: donationItems.join(", ") },
            {
              name: "Number of Items to donate",
              value: itemQuantity.toString(),
            },
            { name: "Additional Information", value: additionalInfo },
          ],
        },
      ],
    };

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          description:
            "You have successfully contacted Tech Optimum regarding donating technology. We will get back to you as soon as possible.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setCompanyName("");
        setContactName("");
        setContactEmail("");
        setDonationItems([]);
        setItemQuantity(1);
        setAdditionalInfo("");
      } else {
        throw new Error("Error sending form");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box margin="auto" mb="4rem" p={4}>
        <Heading
          color="primary"
          textAlign="center"
          mt="7rem"
          fontSize="5xl"
          fontWeight="medium"
          mb="1rem"
        >
          Donation Form
        </Heading>
        <Text mb="2rem" color="primary" textAlign="center">
          If you are interested in donating technology to help Tech Optimum
          bridge the digital <br />
          divide, please fill out the form below and we will get back to you as
          soon as possible.
        </Text>
        <VStack
          margin="auto"
          spacing={4}
          maxW="700px"
          as="form"
          onSubmit={handleSubmit}
          borderRadius="8px"
          px="2rem"
          py="2rem"
          color="primary !important"
          bg="gray.100"
        >
          <FormControl isRequired id="companyName">
            <FormLabel color="primary">Company Name</FormLabel>
            <Input
              _placeholder={{ color: "primary" }}
              variant="flushed"
              borderColor={"gray.300"}
              placeholder="Please enter your Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired id="contactName">
            <FormLabel color="primary">Contact Name</FormLabel>
            <Input
              _placeholder={{ color: "primary" }}
              variant="flushed"
              borderColor={"gray.300"}
              placeholder="Please enter your Name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired id="contactEmail">
            <FormLabel color="primary">Contact Email</FormLabel>
            <Input
              _placeholder={{ color: "primary" }}
              variant="flushed"
              borderColor={"gray.300"}
              type="email"
              placeholder="Please enter your Email (We will contact you here)"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
          </FormControl>

          <FormControl id="donationItems">
            <FormLabel color="primary">Items to Donate</FormLabel>
            <CheckboxGroup value={donationItems} onChange={setDonationItems}>
              <Checkbox value="Laptops">Laptops</Checkbox>
              <Checkbox ml="10px" value="Desktops">
                Desktops
              </Checkbox>
              <Checkbox ml="10px" value="Monitors">
                Monitors
              </Checkbox>
              <Checkbox ml="10px" value="Keyboards">
                Keyboards
              </Checkbox>
              <Checkbox ml="10px" value="Mouses">
                Mouses
              </Checkbox>
            </CheckboxGroup>
          </FormControl>

          <FormControl id="itemQuantity">
            <FormLabel color="primary">Number of Items to Donate</FormLabel>
            <NumberInput
              _placeholder={{ color: "primary" }}
              variant="flushed"
              borderColor={"gray.300"}
              placeholder="130"
              value={itemQuantity}
              onChange={setItemQuantity}
              min={1}
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>

          <FormControl id="additionalInfo">
            <FormLabel color="primary">Additional Information</FormLabel>
            <Textarea
              _placeholder={{ color: "primary" }}
              variant="flushed"
              borderColor={"gray.300"}
              placeholder="Please include any Additional Information here"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
            />
          </FormControl>

          <Button
            fontWeight="thin"
            mt="18px !important"
            colorScheme="blue"
            type="submit"
          >
            Submit
          </Button>
        </VStack>
      </Box>
    </>
  );
}
