import NotFoundImage from '../assets/images/NotFound.jpg';

const NotFound = () => {
    return (
        <img src={NotFoundImage} alt={NotFoundImage}  style={{width: '30%', margin: '80px 0 0 12%'}} />
    )
}

export default NotFound;