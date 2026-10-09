import "./Nav.css";
import { Link } from "react-router-dom"
import { useEffect } from "react";

const Nav = () => {
    useEffect(() => {

    })
    const numOfTests = 6;
    const createLinks = () => {
        const links = [];
        for (let i = 1; i <= numOfTests; i++) {
            links.push(<li className="testLink"><Link to={"test/" + i}>{"Test " + i}</Link></li>);
        }
        return links;
    }
    return (
        <section>
            <ul className="testLinks">
                <li className="testLink"><Link to="">Home</Link></li>
                {createLinks()}
            </ul>
        </section>
    )
}

export default Nav;