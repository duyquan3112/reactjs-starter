import reactImg from './assets/react-core-concepts.png'
import { CORE_CONCEPTS as concepts } from './data';

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}

function renderCoreConcept() {
  return concepts.map((data) => <CoreConcept key={data.title} concept={data} />);
}

function Header() {
  const description = reactDescriptions[genRandomIndex(reactDescriptions.length - 1)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({ concept }) {
  const { image, title, description } = concept; // destructuring props
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
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
      </main>
    </div>
  );
}

export default App;
