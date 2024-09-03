import ListRow from "@shared/ListRow"
import { useInfiniteQuery } from "react-query"
import { getCards } from "@/remote/card"
import { flatten } from "lodash"


function CardList() {
  const { data } = useInfiniteQuery(
    ['cards'],
    ({ pageParam }) => {
      console.log("pageParam", pageParam)
      return getCards()
    },
    {
      getNextPageParam: (snapshot) => {
        console.log("snapshot", snapshot)
      },
    },
  )
  console.log("data", data)
  console.log(flatten(data?.pages.map(({ items }) => items)))
  if (data == null) { return null }
  return (
    <div>
      <ul>
        {/* {data.map((card, index) => {
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
        })} */}

      </ul>
    </div>
  )
}
export default CardList