import image from '../img/kenbri.jpg'
console.log(image)
export default Card = (props) => {
    const {name, date, image} = props

    const backgroundImage = {
        backgroundImage: `url(./img/${image})`
    }
    return (
        <div>
            <div style={backgroundImage}>
                <h2>{name}</h2>
                <p>{date}</p>
            </div>
        </div>
    )
}