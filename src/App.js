import Accordion from "./components/Accordion";
import MultiAccordion from "./components/MultiAccordion";
import "./styles.css";

const items = [
  { name: "test 1", desc: "test 1" },
  { name: "test 2", desc: "test 2" },
  { name: "test 3", desc: "test 3" },
  { name: "test 4", desc: "test 4" },
  { name: "test 5", desc: "test 5" }
];

export default function App() {
  return (
    <div className="App">
      <Accordion items={items} />
      <br />
      <MultiAccordion items={items} />
    </div>
  );
}
