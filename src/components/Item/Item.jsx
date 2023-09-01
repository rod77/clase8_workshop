
export const Item = ({name,category,img,price}) => {
    console.log(name,category,price)
  return (
    <div>
        <h1>{name}</h1>
        <img src={img} alt={name} width={70} />
        <p>{category}</p>
        <p>Precio: {price}</p>
        <hr />
    </div>
  )
}
