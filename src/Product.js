import { useEffect,useState } from "react";
function Product(){


    // 1.Called at every render and rerender 
    // 2.can stop by passing an blank Array
    // 3.You can pass variables in array for which particular rerender u want to call it for
    //

    let  [name,setName]=useState("Kushal")
    let [age,setAge]=useState(20)

    useEffect(()=>{
       
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))

        return function(){
            console.log("Dummy unmounted")
        }
        
    })


    return(
        <div className="product">
            <h3>Samsung s23</h3>
            <h2>{name}</h2>
            <button onClick={()=>{
                setName('Ken')
            }}>Click</button>

            <h2>{age}</h2>
            <button onClick={()=>{
                setAge(27)
            }}>Click</button>
        </div>
    )
}

export default Product;