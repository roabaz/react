import { NavLink } from "react-router-dom";

export const Item = (data) => {
    return (
        <div className="card item mx-auto my-auto mb-3 col-xl-3 col-6 cursor-auto">
            <NavLink to={`/itemDetail/${data.id}`}>

                    <img height={190} src={data.pic} />
                    <b>
                        <p className="mt-2 text-center">{data.title}</p>
                    </b>
               
                <hr />
                <div className="mx-auto">
                    <b>
                        <span className="price text-danger">
                            {data.currency} {data.price}
                        </span>
                    </b>

                    <s>
                        <span className="price text-muted m-3">
                            {data.fullPrice && data.currency} {data.fullPrice}
                        </span>
                    </s>

                </div>
            </NavLink>

            <button className="btn btn-dark m-3">Agregar</button>
        </div>
    )
}