import './App.css'
import Img from './drake.jpg'



function App() {
  return (
    <>
    <section className='Card'>
      <div className='Up'>
        <img src={Img} alt="Album" />
        </div>
        <div className='tittle'>
        <h2>
          Take Care
        </h2>
        <p className='stars'>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
        <h4>Secondary Text</h4>
        <p className='textt'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        </div>
        <div className='Sub'>
        <h3 className='H33'>Subtitle</h3>
          <li>
          <h2 className='item'>Item 1</h2>
          <h2 className='item'>Item 2</h2>
          <h2 className='item'>Item 3</h2>
          <h2 className='item'>Item 4</h2>
          </li> 
        </div>
        <div className='Action'>
          ACTION 1
        </div>
      </section>    
    </>
  )
}

export default App
