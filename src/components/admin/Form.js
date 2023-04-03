import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { createFunc, updateFunc } from "../../config/action"
import { useNavigate, useParams } from "react-router-dom"

const Form = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { updateId } = useParams()
    const data = useSelector(data => data.data)
    const newId = data[data.length - 1] ? data[data.length - 1].id + 1 : 0
    const [object, setObject] = useState({ id: newId })
    // setObject to a Blog when Id is defined
    useEffect(() => {
        if (updateId) {
            setObject(data.filter((obj) => obj.id === +updateId)[0])
        }

    }, [updateId, data])


    // handle On Change 
    const handleChange = (e) => {
        setObject({ ...object, [e.target.name]: e.target.value })
    }

    // add image to Object usin createObjectUrl
    const handleFile = (e) => {
        setObject({ ...object, image: URL.createObjectURL(e.target.files[0]) });
    }


    const handleSumbit = (e) => {
        e.preventDefault();

        if (updateId) {
            // on Update 
            dispatch(updateFunc(object))
            setObject({ "id": newId })
        }
        else {
            // on CREATE
            dispatch(createFunc(object))

        }
        // back to panel page
        navigate('/panel')
    }
    return (
        <div className="container mt-5">
            <form onSubmit={handleSumbit}>
                <div className="form-group">
                    <label htmlFor="title">title</label>
                    <input type="text" className="form-control" id="title" value={object.title ? object.title : ''} name="title" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Example textarea</label>
                    <textarea className="form-control" id="description" name="description" value={object.description ? object.description : ''} rows="3" onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="image">image</label>
                    <div className="image p-4">
                        {object.image && <img src={object.image} style={{ width: '80px' }} alt={object.title ? object.title : ''} />}
                    </div>
                    <input type="file" className="form-control" id="image" name="image" onChange={handleFile} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form;