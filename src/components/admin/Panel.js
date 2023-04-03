import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteFunc } from "../../config/action"
import error from '../../image/error.gif';

const Panel = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data = useSelector(data => data)
    //! handle Error from the api
    if (data.error !== '') {
        console.log(data.error.message)
        return (
            <img src={error} alt="error" />
        )

    }
    //*waiting data in an empty div
    else if (data.data.length === 0) {

        return (<div></div>)
    }
    return (
        <div className="container ">
            <div>
                <button className="d-flex mt-4 mb-4 btn btn-primary" onClick={() => { navigate('/panel/addblog') }} >ADD USER</button>

            </div>
            <div className="container border border-secondary rounded">
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.sort((a, b) => a.id - b.id)
                            .map(
                                elm => {
                                    return (
                                        <tr key={elm.id}>
                                            <td>{elm.id}</td>
                                            <td><img src={elm.image} alt={elm.title} style={{ width: '80px' }} /> </td>
                                            <td>{elm.title}</td>
                                            <td >{elm.description}</td>
                                            <td style={{ width: '20%' }} >
                                                <button className='btn btn-secondary mx-4' onClick={() => { navigate(`/panel/update/${elm.id}`) }}>UPDATE</button>
                                                <button className='btn btn-danger' onClick={() => { dispatch(deleteFunc(elm.id)) }}>DELETE</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Panel;