import '../stylesheets/dataStructuresStyles.css';
import {BinarySearch} from '../components'

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
    { id: "bubble", title: "Bubble" },
  ];


  return (
    <div className="container">
      <section className="section section-1">
        <div className="data-header-content"> 
          <h1>Algorithms</h1>
        </div>
      </section>
      <section className="section section-2">Section 2</section>
      <section className="section section-3">Section 3</section>
      <section className="section section-4">Section 4</section>
    </div>


    /*
    <section className="data">
      <div className="data-container" style={{paddingTop: "80px"}}>
        <div className="data-header-content"> 
          <h1>Algorithms</h1>
        </div>

        <div className="allLinear-container">
          <h2>Searching Algorithm</h2>
          <div className="all-items-carousel">
            {searchingNavLinks.map((item) => (
            <div to={item.id} className="item" key={item.id}>
              <h3>{item.title}</h3>
            </div>
            ))}
          </div>
        </div>

        <div className="allNonLinear-container">
          <h2>Sorting Algorithms</h2>
          <div className="all-items-carousel">
            {sortNavLinks.map((item) => (
            <div to={item.id} className="item" key={item.id}>
              <h3>{item.title}</h3>
            </div>
            ))}
          </div>
        </div>

        <div className="content-container"> 
          <BinarySearch/>
          
        </div>

        <div className="content-container"> 
          

        </div>
      </div>

 
    </section>
    */
  )
}

export default Algorithms