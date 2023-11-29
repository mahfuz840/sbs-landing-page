const Feature = ({name, description}) => {
    return (
        <div className="feature">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}
 
export default Feature;