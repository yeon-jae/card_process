import ListRow from "@shared/ListRow"

function CardList() {
  return (
    <div>
      <ul>
        <ListRow
          left={<div>left</div>}
          contents={<ListRow.Texts title="" subTitle="" />} right={<div>right</div>} />
      </ul>
    </div>
  )
}
export default CardList