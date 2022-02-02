import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';
import {Row, Col, Container} from "react-bootstrap"

function App() {
  const fullName = "Sofiene Sdiri"
  const bio = "Hi my name is Sofiene, i'm 27 years old and i'm a fullstack developper"
  const profession = "Fullstack developper"
  const handleName=(a)=>{
    return alert(`${a}`)
  }
  return (
    <div>
    <Container>
      <Row>
        <Col></Col>
        <Col><Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName}>
              <img src='image.jpg'></img>
            </Profile>
          </Col>
        <Col></Col>
      </Row>
    </Container>
    

      
    </div>
  );
}

export default App;
