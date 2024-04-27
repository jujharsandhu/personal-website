import { Link, NavLink } from 'react-router-dom'
import './index.scss'
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faGamepad, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {ChildCare, SportsFootball, Home, Analytics, GitHub, LinkedIn } from '@mui/icons-material'

const Sidebar = () => (
    <div className = "nav-bar">
        <Link className = "logo" to="/">
            {/* <img src = {LogoS} alt = "logo" /> */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" className="home-link" to='/'>
                <Home sx={{ fontSize: 38, color: "#f0ffff" }} color="error"/>
                {/* <FontAwesomeIcon icon={faHome} color='#f0ffff'/> */}
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to='/projects'>
                <Analytics sx={{ fontSize: 38, color: "#f0ffff" }} color="error"/>
                {/* <FontAwesomeIcon icon={AnalyticsIcon} color='#f0ffff'/> */}
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="hobbies-link" to='/hobbies'>
                <SportsFootball sx={{ fontSize: 38, color: "#f0ffff" }} color="error"/>

                {/* <FontAwesomeIcon icon={faGamepad} color='#f0ffff'/> */}
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="wall-link" to='/wallofjokes'>
                {/* <FontAwesomeIcon icon={faEnvelope} color='#f0ffff'/> */}
                <ChildCare sx={{ fontSize: 38, color: "#f0ffff" }} color="error"/>

            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://www.linkedin.com/in/jujhar-sandhu-840305180/'
                >
                <LinkedIn sx={{ fontSize: 20, color: "#4d4d4e" }} color="error"/>
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://github.com/jujharsandhu'
                    >
                <GitHub sx={{ fontSize: 20, color: "#4d4d4e" }} color="error"/>
                </a>
            </li>
        </ul>
    </div>
    )

export default Sidebar