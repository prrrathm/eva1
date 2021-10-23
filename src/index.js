import { render } from 'react-dom'
import Example from "./app/Example"

// function App() {
// 	return (
// 		<div className="App" style={{padding:0}}>
// 			<Mainapp />
// 		</div>
// 	)
// }

const rootElement = document.getElementById('root')
render(<Example />, rootElement)
