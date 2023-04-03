import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Oneblog = () => {
    let { id } = useParams()
    const oneBlog = useSelector(data => data.data).filter(elem => elem.id === +id)[0]

    if (!oneBlog) {
        return (<div></div>)
    }
    return (
        <div className="container d-flex flex-column justify-content-center flex-grow-1 align-items-center">
            <div className="card mb-3" style={{ maxWidth: "1000px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={oneBlog.image} className="img-fluid rounded-start" alt={oneBlog.title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{oneBlog.title}</h5>
                            <p className="card-text"><strong className="pt-3 px-3">Description  :</strong>{oneBlog.description}</p>
                            <Link to={`/blog`} className="btn btn-primary">BACK HOME</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Oneblog;