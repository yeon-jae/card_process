import { css } from "@emotion/react";
import { getAdBanners } from "@remote/adBanner";
import Flex from "@shared/Flex";
import Text from "@shared/Text";
import { colors } from "@styles/colorPalette";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from "react-query";

function AdBanners() {
  const { data } = useQuery(['adBanners'], () => getAdBanners())
  return (
    <Container>
      <Swiper spaceBetween={8}>
        {data?.map((banner) => {
          return (
            <SwiperSlide key={banner.id}>
              <Link to={banner.link}>
                <Flex direction="column" css={bannerContainerStyles}>
                  <Text bold={true}>{banner.title}</Text>
                  <Text typography="t7">{banner.description}</Text>
                </Flex>
              </Link>
            </SwiperSlide>


          )
        })}
      </Swiper>
    </Container>
  )
}


const Container = styled.div`
  padding:24px;
  background-color:${colors.grey};
  
  `

const bannerContainerStyles = css`
  padding:16px;
  border-radius:4px;
`


export default AdBanners;