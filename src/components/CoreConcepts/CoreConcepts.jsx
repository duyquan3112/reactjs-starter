import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS as concepts } from "../../data.js";

function CoreConcepts() {
  function renderCoreConcept() {
    return concepts.map((data) => <CoreConcept key={data.title} {...data} />);
  }
  return (
    <>
      <h2>Time to get started!</h2>
      <section id="core-concepts">
        <ul>{renderCoreConcept()}</ul>
      </section>
    </>
  );
}

export default CoreConcepts;
