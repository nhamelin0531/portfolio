import data from '../data/works.json'
import Card from './card'
export default CardGrid = () => {
    return(
        <div className="card-grid">
            {
                data.map(work => {
                    const {name, date, image} = work
                    return (
                        <Card name={name} date={date} image={image}></Card>
                    )
                })
            }
        </div>
    )
}