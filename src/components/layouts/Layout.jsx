import Proptypes from "prop-types" 
import { Outlet } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"


export default function Layout() {
    return (
        <body>
            <Navbar />
            <Outlet />
            <Footer />
        </body>
    )
}

Layout.propTypes = {
    children: Proptypes.node.isRequired,
}
