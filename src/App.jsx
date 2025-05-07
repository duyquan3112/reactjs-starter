import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { CORE_CONCEPTS as concepts } from './data';

function renderCoreConcept() {
  return concepts.map((data) =>
    <CoreConcept
      key={data.title}
      concept={data}
    />);
}

function App() {
  function handleSelect() {
    console.log('Selected!');
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id='core-concepts'>
          <ul>
            {renderCoreConcept()}
          </ul>
        </section>
        <section id='examples'>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
