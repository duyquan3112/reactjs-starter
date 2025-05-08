import { useState } from 'react'
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { CORE_CONCEPTS as concepts, EXAMPLES as examples } from './data';

function renderCoreConcept() {
  return concepts.map((data) =>
    <CoreConcept
      key={data.title}
      concept={data}
    />);
}

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  console.log('APP EXCECUTING');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic!</p>;

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{examples[selectedTopic].title}</h3>
        <p>{examples[selectedTopic].description}</p>
        <pre>
          <code>
            {examples[selectedTopic].code}
          </code>
        </pre>
      </div>
    )
  };

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
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
