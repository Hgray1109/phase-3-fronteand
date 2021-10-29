const Dj = ({dj}) => {

    

    return ( 
        <h1 onClick={() => console.log(dj.id)}>{dj.name}</h1>
     )
}
 
export default Dj