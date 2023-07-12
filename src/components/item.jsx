import './item.css';

let Item = (props)=>{

    function deleteItem(id){
        fetch(`http://localhost:5000/delete/${id}`, {
          method: 'DELETE'
        }).then((res) => {
          res.json().then((dt)=>{
            props.restart();
          })
      })
    }

    return <div className='Item'>
    <h1>{props.title}</h1>
    <h2>{props.content}</h2>
    <button onClick={()=>deleteItem(props.id)}>Delete</button>
</div>
}

export default Item;