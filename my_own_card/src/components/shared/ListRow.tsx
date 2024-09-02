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
      <Flex>{contents}</Flex>
      <Flex>{right}</Flex>

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
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
      <title />
      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
    </svg>
  )
}



ListRow.Texts = ListRowTexts
export default ListRow