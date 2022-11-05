import {
    Card,
    CardHeader,
    CardBody,
    CardText,
    Container,
} from 'reactstrap';
import { useState } from 'react';
import majorSins from '../majorSins.json';


const TableOfContents = () => {
    const headers = majorSins.map(({ header }) => header);
    return (
        <Container>
            <Card
                className="my-2"
                color="primary"
                style={{ color: 'white' }}
            >
                <CardHeader>
                    Contents
                </CardHeader>
                <CardBody>
                    <CardText style={{ maxHeight: "250px", overflow: "scroll" }}>
                        <ol>
                            {headers.map((header, i) => (
                                <li key={i}>
                                    <span style={{ cursor: 'pointer' }} onClick={() => window.location.href = `#${i}`}>{header}</span>
                                </li>)
                            )}
                        </ol>
                    </CardText>
                </CardBody>
            </Card>
        </Container>
    )
}
export default TableOfContents;
