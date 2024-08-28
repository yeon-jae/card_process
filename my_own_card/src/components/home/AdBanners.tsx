import { css } from "@emotion/react";
import { useQuery } from "react-query";
import { getAdBanners } from "@remote/adBanner";
import Flex from "@shared/Flex";
import Text from "@shared/Text";
import { colors } from "@styles/colorPalette";
import styled from "@emotion/styled";


function AdBanners() {
  return (
    <Container>
      <Flex direction="column" css={bannerContainerStyles}>
        <Text bold={true}>배너 타이틀</Text>
        <Text typography="t7">배너 내용</Text>
      </Flex>
    </Container>
  )
}


const Container = styled.div`
  papdding:24px;
  `

const bannerContainerStyles = css`
  padding:16px;
  background-color:${colors.grey};
  border-radius:4px;
`


export default AdBanners;