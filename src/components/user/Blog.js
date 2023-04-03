import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import error from '../../image/error.gif';

const Blog = () => {
    const data = useSelector(data => data)
    //! handle Error from the api
    if (data.data.length === 0 && data.error !== '') {
        console.log(data.error.message)
        return (
            <img src={error} alt="error" />
        )
    }
    return (
        <div className="container mt-4 ">
            <div className="row gap-5">
                {data.data.map((element) => {
                    return (
                        <div key={element.id} className="card col-sm-4 d-flex flex-column justify-content-between" style={{ width: "25rem" }}>
                            <img src={element.image} style={{ width: '150px', height: '200px' }} className="card-img-top d-flex mx-auto" alt={element.title} />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title">{element.title}</h5>
                                <p className="card-text">{element.description.slice(0, 75)}...</p>
                                <Link to={`/blog/${element.id}`} className="btn btn-primary">SEE MORE</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Blog;