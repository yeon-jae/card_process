import Top from "@shared/Top";
import { useEffect } from "react";
import { getCards } from "@remote/card";
function HomePage() {
    useEffect(() => {
        getCards()
    }, [])
    return (
        <div>
            <Top
                title="혜택 좋은 카드"
                subTitle="회원님을 위해서 좋은 카드를 모았어요" />

        </div>
    )
}
export default HomePage;