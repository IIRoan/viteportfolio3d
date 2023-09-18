import Landingstyles from './landing.module.scss'
import { useEffect } from 'react';
import { initSTLViewer } from './stl_loader.js';

function Landing() {

    useEffect(() => {
        initSTLViewer('/model.stl', 'rightdivid');
    }, []);
    
    
    return (
        <>
            <div className={Landingstyles.hero}>
                <div className={Landingstyles.leftsection}>
                    <div className={Landingstyles.lefttext}>
                        <h1>Roan van Westerop</h1>
                        <p> DevOps/Software Developer
                            <br /> HR</p>
                    </div>


                    <div className={Landingstyles.leftbottom}>
                        <button> Click me!</button>
                    </div>

                </div>


                {/*Right section with*/}

                <div id="rightdivid" className={Landingstyles.rightsection}>



                </div>
            </div>
        </>
    )
}

export default Landing
