import React from "react";
import { PrimaryBtn } from "../../../../reusableUI/buttons/buttons.style";
import TextHeader from "../../../../reusableUI/TextHeader";

import { StyleTemplates } from "./style.components";



const Templates = () => {
    return (
        <StyleTemplates>
            <TextHeader text={"Templates"}/>
            <PrimaryBtn>Create a template</PrimaryBtn>
            <div className="image-wrapper">
                <img src={"https://www.befunky.com/images/illustrations/no-projects-sidebar.svg"} alt={'svg'} />
            </div>
            <div className="text-wrapper">
                        You haven't save any projects to your account yet.
                </div>

        </StyleTemplates>
    )
}


export default Templates