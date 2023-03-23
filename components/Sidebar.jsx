import { Text, Box, Accordion, AccordionButton, AccordionPanel, AccordionItem, AccordionIcon } from "@chakra-ui/react";
import Link from "next/link";

const AccordSection = ({sectionName, pageList}) => {

    return (
        <AccordionItem>
            <AccordionButton bg="purple.700">
                <Box as="span" flex="1" textAlign="left">
                    <Text color="white">{sectionName}</Text>
                </Box>
            </AccordionButton>
            <AccordionPanel>
                {pageList.map((page, i) => (
                    <Link key={i} href={`/${page}`}>
                        <Text color="white">{page}</Text>
                    </Link>
                ))}
            </AccordionPanel>
        </AccordionItem>
    )
}
const Sidebar = () => {
    return (
    <Accordion allowMultiple>
        <AccordSection sectionName={"Ops"} pageList={["games", "about"]} />
        <AccordionItem>
            <h2>
            <AccordionButton bg="purple.700">
                <Box as="span" flex='1' textAlign='left'>
                <Text color="white">Hello</Text>
                </Box>
                <AccordionIcon color="white"/>
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Link href="/games"><Text color="white">Games</Text></Link>
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Section 2 title
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
            </AccordionPanel>
        </AccordionItem>
    </Accordion>

    )
    

}
export default Sidebar