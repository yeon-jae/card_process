import ListRow from "@shared/ListRow"
import { useQuery } from "react-query"
import { getCards } from "@/remote/card"

function CardList() {
  const { data } = useQuery(['cards'], () => getCards())
  if (data == null) { return null }
  return (
    <div>
      <ul>
        {data.map(() => {
          return (
            <ListRow
              left={<div>left</div>}
              contents={<ListRow.Texts title="타이틀" subTitle="서브타이틀" />}
              right={<div>right</div>}
              withArrow={true}
            />
          )
        })}

      </ul>
    </div>
  )
}
export default CardList