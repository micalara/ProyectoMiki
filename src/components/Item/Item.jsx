import "./Item.css";

export const Item = ({name, price, description, image, children }) => {
    return (
        <article className="card">
            <img src={image} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            
            {/*podemos usar children y reutilizar este componente*/}
            {children}
        </article>
    );
};