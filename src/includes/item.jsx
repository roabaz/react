
export const Item = (data) => {

    console.log(data)
    return (
        <div className="card mx-auto my-auto mb-3 col-xl-3 col-6 cursor-auto">
            <a href="#">
                <img height={190} src={data.pic} />
                <b><p className="mt-2 text-center">{data.title}</p></b>
            </a>
            <hr />
            <div className="mx-auto">
                <b><span className="price text-danger">
                    {data.currency} {data.price}
                </span></b>
            </div>
        </div>
    )
}