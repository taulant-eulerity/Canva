import React, { useEffect, useState } from "react";
import { FiLayers } from "react-icons/fi";
import LayersTooltip from "./LayersTultip";
import { StyleLayers } from "./style.leayers";
import {gsap} from "gsap";
const Layers = ({ animation, setAnimation}) => {
     const [isTooltipOpen, setTooltipOpen] = useState(false)
     useEffect(() => {
        let an = gsap.timeline({reversed: false}).to('.layersAnimation', {visibility: 'visible', opacity: 1, scale: 1, x: 0, y: 0, duration: 0.3}).reverse()
        setAnimation(an)
     },[])

     const handleOnClick = () => {
       if (animation.reversed()) {
        animation.play();
        } else {
        animation.reverse();
        }
        setTooltipOpen(prew => !prew)
}



    return (
        <StyleLayers>
            <LayersTooltip isTooltipOpen={isTooltipOpen} animation={animation} />
            <div id='layer-button' className="layer" onClick={handleOnClick}><FiLayers id='layer-button' color='#3C415C' size={21}/></div>
        </StyleLayers>
    )
}


export default Layers