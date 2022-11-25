import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col } from "reactstrap";

import SinCard from "./Components/SinCard";
import TableOfContents from "./Components/TableOfContents";
import majorSins from "./majorSins.json";

const App = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Col>
        <TableOfContents />
        {majorSins.map((ms, i) => (
          <Container style={{ padding: "10px" }} key={ms.number} id={ms.number}>
            {SinCard(ms)}
          </Container>
        ))}
      </Col>
      <a class="top" href="#">
        Back to Top ↑
      </a>
    </Container>
  );
};

export default App;
