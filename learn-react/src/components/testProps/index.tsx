interface props {
    description : string;
}

// const TestProps:React.FC<props> = (value) => {

//     return (
//         <div>
//             <h1 title="this props ">{value.description}</h1>
//         </div>
//     );
// }

function TestProps(value:props){
     return (
         <div>
            <h1 title="this props">{value.description}</h1>
         </div>
     );
}

export default TestProps