/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeartLine } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
       © 2022 - Blog34{" "}
        <span className="icon -love">
          <RiHeartLine />
        </span>{" "}
         .<Link to="/"></Link>
      </p>
    </div>
  </footer>
)

export default Footer
