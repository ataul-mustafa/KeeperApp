import './inputBox.css';

const InpBox=(props)=>{

    let titleText, contentText;
    const titleChanger=(event)=>{
        titleText = event.target.value;
    }
    const contentChanger=(event)=>{
        contentText = event.target.value;
    }


    const click=(event)=>{
        event.preventDefault();
        const inpData = {
            title: titleText,
            content: contentText
        }
        props.dataReciever(inpData);
    }

    return(
        <form>
            <div className='inputBox'>
            <input onChange={titleChanger} type="text" placeholder="Write title..." />
            <textarea onChange={contentChanger} placeholder="Write note..." cols="30" rows="10"></textarea>
            
        </div>
        <button onClick={click} className='bt'>Add</button>
        </form>
    )
}

export default InpBox;