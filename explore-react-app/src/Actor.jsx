const Actor = ({ singer }) => { 
    console.log(singer);
    const { name, age } = singer;
    return (
        <div>
            <h3>Name: {name}</h3> 
            <p>Age: {age}</p>
        </div>
    );
}

export default Actor;
