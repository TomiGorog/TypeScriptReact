import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"
function App() {

  return (
    <>
      <Heading title={"Hello"} />
      <Section title={"Different title"} children={"children?"}></Section>
      <Counter></Counter>
      <List items={["Coffee", "Tacos", "Code"]} render={(item: string) => <span className="gold">{item}</span>} />
    </>
  )
}

export default App
