const MyApp = () => {

    const [title_1, setTitle_1] = React.useState("What are you studying");
    const [title_2, setTitle_2] = React.useState("Learn What Else");

    const handleButtonClick = () => {
        setTitle_1("Learn Javascript");
        setTitle_2("Learn React");
    }

    return(
       <div>
        <h3>{title_1}</h3>
        <h3>{title_2}</h3>
        <button onClick={handleButtonClick}>Ayo Belajar Pemograman</button>
        </div> 
    )
}

const myElement = <MyApp />
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);