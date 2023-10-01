import Navstyles from './navbar.module.scss'

function Navbar() {

    return (
        <>
            <div className={Navstyles.parent}>
                <div className={Navstyles.logo}> <img src='./logo.png' /> </div>
                <div className={Navstyles.menu}>
                    
                    <a className={Navstyles.menuicon}>

                    <ul className={Navstyles.ullist}>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>First</a></li>
                        <li><a href='#'>Second</a></li>
                        <li><a href='#'>Third</a></li>
                        <li><a href='#'>Fourth</a></li>
                    </ul>
                    </a>
                
                
                 </div>
            </div>
        </>
    )
}

export default Navbar

