import { Grid, GridItem } from "@chakra-ui/react";

import Sidebar from './ListSidebar'
import Topbar from "./Topbar";

const Layout = ({ children }) => {
    return (
        <Grid templateColumns="repeat(6, 1fr)">
            <GridItem
                as="aside"
                colSpan={{ base: 6, md: 1 }}
                
                minHeight={{ md: '100vh' }}
                // p={{ base: "20px", lg: "30px" }}
                >
                <Sidebar />
            </GridItem>
            <GridItem
                as="main"
                colSpan={{ base: 6, md: 5 }}
                p="40px"
                >
                <Topbar />
                { children }
            </GridItem>


        </Grid>
    )
}

export default Layout