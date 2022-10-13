import './App.css'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 100%; ;
`

function App() {
    chrome.storage.local.set({ key: 'test' })
    return <Wrapper></Wrapper>
}

export default App
