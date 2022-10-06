import { NavLink } from "react-router-dom";

export const ItemDetail = (data) => {
    console.log(data);
    return (
        <div className="card item ">
            <div className="row">
                <div className="col-5">
                    <img height={390} src={data.pic} />

                </div>
                <div className="col-7">

                    <div className="mx-auto">
                        <b>
                            <p className="mt-5">{data.title}</p>
                        </b>

                        <b>
                            <span className="text-danger h4">
                                {data.currency} {data.price}
                            </span>
                        </b>

                        <s>
                            <span className="text-muted m-3">
                                {data.fullPrice && data.currency} {data.fullPrice}
                            </span>
                        </s>

                        <b>
                            <p className="h5 mt-4">
                               <b>Color: </b> { data.color} 
                            </p>
                        </b>
                        <b>
                            <p className="h5 mt-4">
                               <b>Marca: </b> { data.brand} 
                            </p>
                        </b>

                        <b>
                            <p className="h5 mt-4">
                               <b>Talles: </b> { data.sizes} 
                            </p>
                        </b>

                        <b>
                            <p className="h5 mt-4">
                                {data.description} 
                            </p>
                        </b>

                        <b>
                            <p className="h5 mt-4">
                            <b>Distribucion: </b>    {data.ship} 
                            </p>
                        </b>

                    </div>
                </div>
            </div>
        </div>
    )
}