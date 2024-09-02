import { css } from "@emotion/react"
import Flex from "./Flex"
import Text from "./Text"

interface ListRowProps {
  left?: React.ReactNode
  contents: React.ReactNode
  right?: React.ReactNode
  withArrow?: boolean
  onClick?: () => void
}
function ListRow({ left, contents, right, withArrow, onClick }: ListRowProps) {
  return (
    <Flex as="li" css={listRowContainerStyles} onClick={onClick}>
      <Flex>{left}</Flex>
      <Flex>{right}</Flex>
      <Flex>{contents}</Flex>
      {withArrow ? <IconArrowRight /> : null}

    </Flex>
  )
}

const listRowContainerStyles = css`
  padding:8px 24px;
`
const listRowLeftStyles = css`
  margin-right:14px;  
`
const listRowContentStyles = css`
  flex:1;
`
function ListRowTexts({
  title, subTitle
}: {
  title: string
  subTitle: string
}) {
  return (
    <Flex direction="column">
      <Text bold={true}>{title}</Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  )
}

function IconArrowRight() {
  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width={20} height={20}>
      <title />
      <path d="M322.7,128.4L423,233.4c6,5.8,9,13.7,9,22.4c0,8.7-3,16.5-9,22.4L322.7,383.6c-11.9,12.5-31.3,12.5-43.2,0  c-11.9-12.5-11.9-32.7,0-45.2l48.2-50.4h-217C93.7,288,80,273.7,80,256c0-17.7,13.7-32,30.6-32h217l-48.2-50.4  c-11.9-12.5-11.9-32.7,0-45.2C291.4,115.9,310.7,115.9,322.7,128.4z" />
    </svg>
  )
}

ListRow.Texts = ListRowTexts
export default ListRow