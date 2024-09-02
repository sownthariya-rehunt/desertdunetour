import React from 'react'
import '../../../assets/css/slider.css'
export const Slider_new = () => {
    function myFunction(imgs) {
        var expandImg = document.getElementById("expandedImg");
        var imgText = document.getElementById("imgtext");
        expandImg.src = imgs.src;
        imgText.innerHTML = imgs.alt;
        expandImg.parentElement.style.display = "block";
    }
    return (
        <div className='boxshade'>




     

            <div class="row">
                <div class="column1">
                    <img   loading="lazy" src="https://static.euronews.com/articles/stories/04/45/99/98/945x531_cmsv2_371acacd-a248-570b-8e4a-a28481ce9f55-4459998.jpg" alt="Snow" style="width:100%" onclick="myFunction(this);" />
                </div>
                <div class="column1">
                    <img   loading="lazy" src="https://images.unsplash.com/photo-1525879956410-c4918fef883c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" alt="Bokeh" style="width:100%" onclick="myFunction(this);" />
                </div>
                <div class="column1">
                    <img   loading="lazy" src="https://www.theuiaa.org/wp-content/uploads/2017/12/2018_banner.jpg" alt="Mountain" style="width:100%" onclick="myFunction(this);" />
                </div>
                <div class="column1">
                    <img   loading="lazy" src="https://media.istockphoto.com/photos/gold-glitter-sparkle-texture-background-picture-id671079988" alt="Glitter" style="width:100%" onclick="myFunction(this);" />
                </div>
            </div>

            <div class="container1">
                <span onclick="this.parentElement.style.display='none'" class="closebtn">&times;</span>
                <img   loading="lazy" id="expandedImg" style="width:100%" />
                <div id="imgtext"></div>
            </div>




         </div>   );
}
