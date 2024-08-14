import './App.css'
import Text from './components/shared/Text'

function App() {
  return (
    <div>
      <Text typography="t1" display="black" color="red">
        t1
      </Text>
      <Text typography="t2" color="blue">t2</Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text typography="t5">t5</Text>
    </div>
  )
}

export default App
