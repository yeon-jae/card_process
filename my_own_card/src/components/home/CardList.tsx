import ListRow from "@shared/ListRow"
import { useQuery, useInfiniteQuery } from "react-query"
import { getCards } from "@/remote/card"

function CardList() {
  const { data } = useQuery(['cards'], () => getCards())
  if (data == null) { return null }
  return (
    <div>
      <ul>
        {data.map((card, index) => {
          return (
            <ListRow
              key={card.id}
              contents={
                <ListRow.Texts title={`${index + 1}위`} subTitle={card.name}
                />}
              right={card.payback != null ? <div>{card.payback}</div> : null}
              withArrow={true}
            />
          )
        })}

      </ul>
    </div>
  )
}
export default CardList