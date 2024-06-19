interface Test2{
    sources?: string;
}
function TestProps2(value:Test2){
    const { sources ="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" } = value;
    return (
        <>
         <img style={{ width: '200px',height: '200px',borderRadius: '50%' }} src={ sources } alt="profile"/>
        </>
    );
}

export default TestProps2;