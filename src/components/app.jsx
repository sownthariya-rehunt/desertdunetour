import React, {Component} from 'react';
import Headers from "./common/headers";
import Footers from "./common/footers";
import HeaderTwo from './common/headers2';
import VideoBackground from './common/VideoBackground';
import Scroll from './common/Scroll';

//For Others route calling this layout
class Layout extends Component {
    render() {
        return (
            <>
           {/* <VideoBackground/> */}
      
           <div style={{ position: 'relative' }}>
           
           <Headers/>
               
                {this.props.children}
               
                <Footers/>
            
           </div>
           
                
            </>
        );
    }
}

export default Layout;
