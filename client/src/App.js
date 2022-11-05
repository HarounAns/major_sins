import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Col
} from 'reactstrap';

import SinCard from './Components/SinCard';
import TableOfContents from './Components/TableOfContents';
import majorSins from './majorSins.json';


const App = () => {
  return (
    <Container style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Col>
        <TableOfContents />
        {majorSins.map((ms, i) => (
          <Container style={{ padding: '10px' }} key={i} id={i}>
            {SinCard(ms)}
          </Container>)
        )}
      </Col>
    </Container>
  );
}

export default App;
