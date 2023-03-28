import { List, Text, ListItem, Box } from "@chakra-ui/react"
import Link from "next/link"
const ListSection = ({sectionName, pageList}) => {

    return (
        <List align="right">
            <ListItem mb="5px">
                <Text fontSize="1.4em" align="right" color="purple">{sectionName}</Text>
            </ListItem>
            {pageList.map((page, i) => (
                    <Link key={i} href={`/${page}`}>
                        <Text>{page}</Text>
                    </Link>
                ))}
            
        </List>
    )
}

const ListSidebar = () => {

    return (
        <Box>
            <ListSection sectionName={"Ops"} pageList={["games", "about"]} />
        </Box>
    )
}
export default ListSidebar