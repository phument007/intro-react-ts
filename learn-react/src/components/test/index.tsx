interface myObject {
    id : number,
    name : string,
    age : number,
}

const Person:myObject = {
    id : 1,
    name : "Phument",
    age : 20,
}

const Gretting = ():any => {
    return (
        <div>
            <h1>ID :  {Person.id}</h1>
            <h1>Name :  {Person.name}</h1>
            <h1>Age :  {Person.age}</h1>
        </div>
    );
}

export default  Gretting