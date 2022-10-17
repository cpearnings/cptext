import React, {useState} from 'react'

export default function TextForm(props) {

    const UpClick = () =>{
        // console.log(text);
        setText(text.toUpperCase());
        props.showAlert('Text has been converted to Upper case','success')
    }

    const ClClick = () =>{
        // console.log(text);
        setText('');
        props.showAlert('Text has been cleared','success')
    }


    const CoClick = () =>{
        // console.log(text);
        var text=document.getElementById('box');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text has been copy','success')
    }



    const SpClick = () =>{
        // console.log(text);
        var newtext=text.split(/[ ]+/);
        setText(newtext.join(' '));
        props.showAlert('Text has been removed extra spaces','success')
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert(text,'success')
    }


    const ReWClick = () => {
        /* Convert string to array*/
        let strArr = text.split(" ");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join(" ");
        setText(newText);
        props.showAlert('Text has been converted to reverse word case','success')
    };

    const ReCClick = () => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
        props.showAlert('Text has been converted to reverse character case','success')
    };


    const LoClick = () =>{
        // console.log(text);
        setText(text.toLowerCase());
        props.showAlert('Text has been converted to lower case','success')
    }

    const handleOnChange = (event) =>{
        // console.log('Upper clicked Changed');
        setText(event.target.value);
    }



    function DownLoadFile(filename, NewText) {
        const element = document.createElement("a");
    
        //A blob is a data type that can store binary data
        // "type" is a MIME type
        // It can have a different value, based on a file you want to save
        const blob = new Blob([NewText], { type: "application/msword" });
    
        //createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.
        const fileUrl = URL.createObjectURL(blob);
    
        //setAttribute() Sets the value of an attribute on the specified element.
        element.setAttribute("href", fileUrl); //file location
        element.setAttribute("download", filename); // file name
        element.style.display = "none";
    
        //use appendChild() method to move an element from one element to another
        document.body.appendChild(element);
        element.click();
    
        //The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node
        document.body.removeChild(element);
    }
    const DownloadText = () => {
        let fileName = "cp";
    
        DownLoadFile(fileName, text);
        props.showAlert('Your file has been downloaded','success')
    };


    



    const [text, setText] = useState('Welcome To CPEARNINGS');


    // const [btntext, setBtnText] = useState('Enable Dark Mode');

    // const [newStyle, setnewStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // });
    


    // const ToggleMode = () =>{
    //     if(newStyle.color === 'black'){
    //         setnewStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnText('Enable Light Mode')
    //     }
    //     else{
    //         setnewStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText('Enable Dark Mode')
    //     }
    // }




    
return (
    <>
    <div className="container my-3 p-2" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>
        <div className="mb-3">
            <h2>{props.name}</h2>
            <textarea className="form-control" id="box" rows="8" value={ text } onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}></textarea>
        </div>
        
        <button className="btn btn-outline-success m-1" onClick={UpClick}>UpperCase</button>
        <button className="btn btn-outline-success m-1" onClick={LoClick}>LowerCase</button>
        <button className="btn btn-outline-success m-1" onClick={ClClick}>Clear</button>
        <button className="btn btn-outline-success m-1" onClick={CoClick}>Copy</button>
        <button className="btn btn-outline-success m-1" onClick={SpClick}>Space Remove</button>
        <button className="btn btn-outline-success m-1" onClick={speak}>Speak</button>
        <button className="btn btn-outline-success m-1" onClick={ReWClick}>Reverse Word</button>
        <button className="btn btn-outline-success m-1" onClick={ReCClick}>Reverse Charac</button>
        <button className="btn btn-outline-success m-1" onClick={DownloadText}>Download</button>
    
    </div>


    <div className="container ts" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white',boxShadow:props.mode==='light'?'1px 1px 8px black':'1px 1px 8px white'}}>
        <h3>Text Summary</h3>
        <p>words {text.split(' ').length}, character {text.length}</p>
        <p>Time takes to read this text is {0.008*text.split(' ').length} minutes</p>
    </div>



    <div className="container my-3 tp" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white',boxShadow:props.mode==='light'?'1px 1px 8px black':'1px 1px 8px white'}}>
        <h3>Text Preview</h3>
        <p>{text.length>0?text:'Enter some text to preview it here...'}</p>
    </div>


    {/* <div className="container my-3">
        <button className="btn btn-outline-success" onClick={ToggleMode}>{btntext}</button>
    </div> */}

    </>
)
}
