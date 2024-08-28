import { css } from "@emotion/react";
import { useQuery } from "react-query";
import { getAdBanners } from "@remote/adBanner";
import Flex from "@shared/Flex";
import Text from "@shared/Text";
import { colors, Colors } from "@styles/colorPalette";


function AdBanners() {
  return (
    <Flex direction="column" css={bannerContainerStyles}>
      <Text>배너 타이틀</Text>
      <Text>배너 내용</Text>
    </Flex>
  )
}

const bannerContainerStyles = css`
  padding:16px;
  background-color:${colors.grey};
  border-radius:4px;
`
export default AdBanners;