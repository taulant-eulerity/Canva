import React, { useEffect } from "react";
import Slider from "../../../../../../reusableUI/slider/Slider";
import { getLastValue } from "../../../../../../util/util";
import {useSelector} from 'react-redux'

const OpacitySlider = ({setOpacity, value, attr}) => {

 const canvas = useSelector(state => state.canvas.canvas)
    useEffect(() => {
        let rgba = canvas?.getActiveObject()?.[attr]


        if (!rgba) return
             let numbers = getLastValue(rgba);
             setOpacity(Math.round(numbers[numbers.length - 1] * 100));
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
      useEffect(() => {
          let rgba = canvas?.getActiveObject()?.[attr]
          if (!rgba) return
            let numbers = getLastValue(rgba);
            canvas?.getActiveObject().set(attr, `rgba(${numbers.join(",")})`);
            canvas.renderAll();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [value]);


      const onInput = (e) => {
            setOpacity(Math.round(e.target.value));
            const rgba = canvas?.getActiveObject()?.[attr]
            if (rgba) {
              let numbers = getLastValue(rgba);
              numbers[numbers.length - 1] = e.target.value / 100;
              canvas?.getActiveObject().set(attr, `rgba(${numbers.join(",")})`);
              canvas.renderAll();
            }
      }

      return (
        <Slider onInput={onInput} value={value}/>
      )
}


export default  OpacitySlider