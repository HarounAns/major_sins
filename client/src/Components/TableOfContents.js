import {
    Card,
    CardHeader,
    CardBody,
    CardText,
    Container,
    InputGroup,
    InputGroupText,
    Input,
} from 'reactstrap';
import { useState } from 'react';
import majorSins from '../majorSins.json';

const TableOfContents = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeSins, setActiveSins] = useState(majorSins);

    const handleSearchChange = ({ target: { value } }) => {
        const _activeSins = majorSins.filter(({ header }) => header.toLowerCase().includes(value.toLowerCase()));
        setSearchQuery(value);
        setActiveSins(_activeSins);
    }

    const handleClickListItem = (number, header) => {
        document.title = header;
        window.location.href = `#${number}`;
    }

    return (
        <Container>
            <Card
                className="my-2"
                color="primary"
                style={{ color: 'white' }}
            >
                <CardHeader>
                    <span>
                        Contents
                        <InputGroup style={{ float: 'right', "width": "35%" }}>
                            <Input placeholder="search" value={searchQuery} onChange={handleSearchChange} />
                            <InputGroupText>
                                🔍
                            </InputGroupText>
                        </InputGroup>
                    </span>
                </CardHeader>
                <CardBody>
                    <CardText style={{ maxHeight: "250px", overflow: "scroll" }}>
                        <ol>
                            {activeSins.map(({ header, number }) => (
                                <li key={number}>
                                    <span style={{ cursor: 'pointer' }} onClick={() => handleClickListItem(number, header)}>{header}</span>
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
