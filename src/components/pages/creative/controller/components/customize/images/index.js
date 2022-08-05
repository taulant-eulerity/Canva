import React from "react";

import { Remove } from "../../../../../../reusableUI/buttons/remove";
import UpIndex from "../../../../../../reusableUI/buttons/UpIndex";
import { HeaderMd } from "../../../../../../reusableUI/typography";
import ImageFilters from "../../ImageFilters";
import { StyleCustumizeWrapper, StyleIcons, StyleRemoveIcon, StyleWrappIcons } from "../style.customize";

const CustomizeImages = ({ animation }) => {
//   const { name } = useSelector((state) => state.navigation.navigate);

  return (
    <StyleCustumizeWrapper>
      <StyleWrappIcons>
        <StyleRemoveIcon>
          <Remove animation={animation} />
        </StyleRemoveIcon>
        <StyleIcons>
            <UpIndex  />
        </StyleIcons>
      </StyleWrappIcons>
      <HeaderMd style={{marginTop: '1rem'}}>Filters</HeaderMd>
      <ImageFilters />
    </StyleCustumizeWrapper>
  );
};

export default CustomizeImages;
