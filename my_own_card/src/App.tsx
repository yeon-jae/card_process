import './App.css'
// import Text from './components/shared/Text'
import Text from "@shared/Text"
import Button from '@shared/Button'
import Input from '@shared/Input'
import TextField from '@shared/TextField'

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

      <div style={{ height: 10, width: '100%', background: '#efefef' }}></div>
      <Button color='success'>클릭해주세요</Button>
      <Button color='error'>클릭해주세요</Button>
      <Button color='success' weak={true}>클릭해주세요</Button>
      <Button color='error' weak={true}>클릭해주세요</Button>
      <Button full={true}>클릭해주세요</Button>
      <Button full={true} disabled={true}> 클릭해주세요</Button>

      <div style={{ height: 10, width: '100%', background: '#efefef' }} />
      <Input placeholder='로그인' aria-invalid={false} />
      <Input aria-invalid={true} />

      <TextField label="아이디" />
      <TextField label="패스워드" />

      <div style={{ height: 10, width: '100%', background: '#efefef' }} />





    </div>
  )
}

export default App
