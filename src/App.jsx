import { Provider } from "react-redux"
import Container from "./Container"
import store from "./Redux/store"

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}

export default App
