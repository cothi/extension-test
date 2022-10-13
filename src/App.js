/*global chrome*/
import './App.css'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 100%; ;
`

function App() {
    let value = 'te'
    chrome.storage.sync.set({ key: value }, function () {
        console.log('Value is set to ' + value)
    })

    return <Wrapper></Wrapper>
}

export default App
