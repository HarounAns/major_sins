import {
    Card,
    CardHeader,
    CardBody,
    CardText,
    CardFooter,
    Button,
} from 'reactstrap';
import { useState } from 'react';

const SinCard = ({ header, description }) => {
    const [seeMore, setSeeMore] = useState(false)
    const descrMaxLength = 300;
    if (!seeMore && description.length > descrMaxLength) {
        description = `${description.substring(0, descrMaxLength)}...`;
    }

    return (
        <Card
            className="my-2"
            color="dark"
            outline
        >
            <CardHeader>
                {header}
            </CardHeader>
            <CardBody>
                <CardText>
                    {description}
                </CardText>
            </CardBody>
            <CardFooter>
                {description.length > descrMaxLength && (
                    <Button
                        onClick={() => setSeeMore(!seeMore)}
                        color="primary"
                        style={{ float: 'right' }
                        }>
                        {seeMore ? 'See Less' : 'See More'}
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}
export default SinCard;
