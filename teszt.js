import logo from '../logo.svg';
import '../App.css';

function generator(){
    let array= [0, 0, 0, 0, 0];
    for(let i=1;i<=5;i++){
        const rndInt = Math.floor(Math.random() * 39) + 1;
        let same = false;
        for(let j=0; j<array.length; j++){
            if(array[j] == rndInt){
                same = true;
            }
        }   
        if(same==true){
            i--;
        }else{
            array[i-1]=rndInt;
        }
    }
return array;
}

let lottery = generator();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello word!</h1>
        <pre>{lottery}</pre>
      </header>
    </div>
  );
}

export default teszt;
