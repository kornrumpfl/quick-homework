function Person({name,src,status}){
if (status==="Alive"){
    let color = "green";
}else if (status==="dead"){
    let color = "red";
}else{
    let color="grey";
}
    return(
    <div className="Card" style={{ color: `${color}`}}>
        <img src={src} alt="fail to load"></img>
        <h2>{name}</h2>
    </div>
)}

export default Person;