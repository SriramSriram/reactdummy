
import './App.css';

function App(){
  
const names=[
  {
    title:"sriram", 
    pic:"https://i.pinimg.com/originals/40/18/03/401803755170c9750ab19646a064f534.jpg"
  },
  {
    title:"raghu",
    pic:"https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile-01.png" 
  },
  {
    title:"aniesh",
    pic:"https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile-06-768x766.png"
      
  }
]
  return(
    <div className="app">
      {/* <Message 
      title="sriram" 
      pic="https://i.pinimg.com/originals/40/18/03/401803755170c9750ab19646a064f534.jpg"/>
      
      <Message 
      title="raghu"
      pic="https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile-01.png"
      />
      <Message 
      title="aniesh"
      pic="https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile-06-768x766.png"
      /> */}

      {names.map((nm)=>(
        <Message title={nm.title} pic={nm.pic} />
      ))}
    </div>

  )
}

export default App;

function Message(props){
  return( 
  <div>
    <img className="profile-pic" src={props.pic} alt={props.name} />
    <h1>Hello, {props.title}</h1>
  </div>
)}