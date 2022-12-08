import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formateCurrency";

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const quantity = 0;
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }}></Card.Img>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <button className="w-100">+ Add To Cart</button>
                    ) :
                        <div className="d-flex align-item-center flex-column" style={{ gap:".5rem" }}>
                            <div className="d-flex align-items-center justfy-content-center" style={{  }}>
                            </div>
                        </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}