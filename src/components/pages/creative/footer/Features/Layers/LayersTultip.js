/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React, { useEffect, useRef,useState } from "react";
import { FiX, FiPenTool } from "react-icons/fi";
import { CgFormatText, CgImage } from "react-icons/cg";
import { StyleElements, StyleLayersOrder, StyleLayersTooltip } from "./style.leayers";
import { HeaderMd } from "../../../../../reusableUI/typography";
import { useSelector } from "react-redux";
const LayersTooltip = ({ animation }) => {
  const canvas = useSelector((state) => state.canvas.canvas);
  const dragSrcEl = useRef();
  const listItems = useRef([]);
  const dragIndex = useRef();
  const handleOnClick = (obj) => {
    canvas.setActiveObject(obj);
    canvas.renderAll();
  };

  const SctructureLayers = () => {
    const objects = canvas?.getObjects();
    const [s, setS] = useState()

    useEffect(() => {
      listItems.current = document.querySelectorAll(".draggable");
      Array.from(listItems.current).forEach((item) => {
        addEventsDragAndDrop(item);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!objects) return <></>;

    function dragStart(e) {
      this.style.opacity = "0.4";
      dragSrcEl.current = this;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", this.innerHTML);
      dragIndex.current = e.srcElement.id;
    }

    function dragEnter(e) {
      this.classList.add("over");
    }

    function dragLeave(e) {
      e.stopPropagation();
      this.classList.remove("over");
    }

    function dragOver(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      return false;
    }

    function dragDrop(e) {
      if (dragSrcEl.current !== this) {
        dragSrcEl.current.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData("text/html");
      }
      let dropedId = e.srcElement.id;

      let firstObjIdx = objects.findIndex((obj) => obj.index == dropedId);
      let secondObjIdx = objects.findIndex((obj) => obj.index == dragIndex.current);

      const createMaper = () => {
        let obj = {};
        for (let i = 0, b = listItems.current.length - 1; i < listItems.current.length; i++, b--) {
          obj[i] = b;
        }
        return obj;
      };

      let copyObj = [...objects];
      let mapper = createMaper();

      copyObj[secondObjIdx].moveTo(mapper[dropedId]);
      copyObj[firstObjIdx].moveTo(mapper[dragIndex.current]);

      let temp = copyObj[firstObjIdx];
      copyObj[firstObjIdx] = copyObj[secondObjIdx];
      copyObj[secondObjIdx] = temp;

      canvas._objects = copyObj.reverse();
      canvas.requestRenderAll()

      return false;
    }

    function dragEnd(e) {
      Array.from(listItems.current).forEach((item) => {
        addEventsDragAndDrop(item);
      });
      this.style.opacity = "1";
    }

    function addEventsDragAndDrop(el) {
      el.addEventListener("dragstart", dragStart, false);
      el.addEventListener("dragenter", dragEnter, false);
      el.addEventListener("dragover", dragOver, false);
      el.addEventListener("dragleave", dragLeave, false);
      el.addEventListener("drop", dragDrop, false);
      el.addEventListener("dragend", dragEnd, false);
    }

    return (
      <StyleLayersOrder>
        <div className="closing" onClick={() => animation.reverse()}>
          <HeaderMd>Layers</HeaderMd> <FiX size={23} />
        </div>
        {objects.reverse().map((obj, index) => {
          obj.index = index;
          if (obj.type === "image") {
            return (
              <StyleElements key={obj.id} id={index} className="draggable" draggable={true} onClick={() => handleOnClick(obj)}>
                <CgImage style={{ marginRight: "0.5rem" }} size="23" color="#3C415C" />
                <img style={{ borderRadius: "4px" }} height={"30px"} src={obj._element?.src} alt="ihm" />
              </StyleElements>
            );
          }
          if (obj.type === "textbox") {
            return (
              <StyleElements key={obj.id} id={index} className="draggable" draggable={true} onClick={() => handleOnClick(obj)}>
                <CgFormatText style={{ marginRight: "0.5rem" }} size="25" color="#3C415C" /> {obj.text.length > 20 ? obj.text.slice(0, 20) + "..." : obj.text}
              </StyleElements>
            );
          }
          return (
            <StyleElements key={obj.id} id={index} className="draggable" draggable={true} onClick={() => handleOnClick(obj)}>
              <FiPenTool size="22" style={{ marginRight: "0.5rem" }} color="#3C415C" />
              SVG
            </StyleElements>
          );
        })}
      </StyleLayersOrder>
    );
  };

  return (
    <StyleLayersTooltip id="tooltip" className="layersAnimation">
      <SctructureLayers />
    </StyleLayersTooltip>
  );
};

export default LayersTooltip;
