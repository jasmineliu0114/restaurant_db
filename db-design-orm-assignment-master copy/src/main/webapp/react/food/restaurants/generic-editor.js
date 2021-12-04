const {useState, useEffect} = React
const {useParams} = window.ReactRouterDOM;
const RESTAURANT_URL = "http://localhost:8080/api/restaurants"

const RestaurantEditor = (
    {
        schema = {
            title: {type: "text"},
            // id: {type: "text"}
        }
    }) => {
    const [item, setItem] = useState({})
    const {id} = useParams()
    useEffect(() => {
        findById(id)
    }, []);
    const findById = (id) =>
        fetch(`${RESTAURANT_URL}/${id}`)
            .then(response => response.json())
            .then(item => setItem(item))
    return (
        <div>
            <h2>Restaurant Editor {id}</h2>
            {JSON.stringify(item)}
            <ul className="list-group">
                {
                    Object.keys(item).map((key, ndx) => {
                        if(!schema[key]) return null
                        return(
                            <li>
                                {
                                    
                                }
                                <input
                                    className="form-control"
                                    type={schema[key].type}
                                    value={item[key]}/>
                            </li>)

                    })
                }
            </ul>
        </div>
    )
}

export default RestaurantEditor