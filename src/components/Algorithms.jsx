import '../stylesheets/dataStructuresStyles.css';
import {BinarySearch, BubbleSort, InsertionSort, LinearSearch, MergeSort, QuickSort, SelectionSort} from '../components'

const Algorithms = () => {

  const sortNavLinks = [
    { id: "bubble", title: "Bubble",},
    { id: "selection", title: "Selection" },
    { id: "insertion", title: "Insertion" },
    { id: "merge", title: "Merge" },
    { id: "quick", title: "Quick" },
  ];


  const searchingNavLinks = [
    { id: "linear", title: "Linear",},
    { id: "binary", title: "Binary" },
  ];

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <section className="section section-1">
        <div className="data-container">
          <div className="data-header-content"> 
            <h1>Algorithms</h1>
          </div>

          <div>
            <h2>Searching Algorithm</h2>
            <div className="all-items-carousel">
              {searchingNavLinks.map((item) => (
              <div key={item.id} className="item" onClick={() => handleScrollToSection(item.id)}>
                <h3>{item.title}</h3>
            </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2>Sorting Algorithms</h2>
            <div className="all-items-carousel">
              {sortNavLinks.map((item) => (
              <div key={item.id} className="item" onClick={() => handleScrollToSection(item.id)}>
                <h3>{item.title}</h3>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section id="linear" className="section  section-2">
        <div className="data-container">
          <LinearSearch/>
        </div>
      </section>

      <section id="binary" className="section section-3">
        <div className="data-container">
          <BinarySearch/>
        </div>
      </section>

      <section id="bubble" className="section section-4">
        <div className="data-container">
          <BubbleSort/>
        </div>
      </section>

      <section id="selection" className="section section-5">
        <div className="data-container">
          <SelectionSort/>
        </div>
      </section>

      <section id="insertion" className="section section-6">
        <div className="data-container">
          <InsertionSort/>
        </div>
      </section>

      <section id="merge" className="section section-7">
        <div className="data-container">
          <MergeSort/>
        </div>
      </section>

      <section id="quick" className="section section-8">
        <div className="data-container">
          <QuickSort/>
        </div>
      </section>



    </div>

  )
}

export default Algorithms