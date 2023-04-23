// import {useState} from "react";
// import Select from 'react-select';
// import './style.css';


// const option=[{value:'one',label :'One'},
// {value:'two',label :'Two'},
// {value:'three',label :'Three'},
// ]

// function App(){
//     const [selectedOption, setSelectedOption] = useState(null);

//     const handleChange = (selectedOption) => {
//       setSelectedOption(selectedOption);
//     };


//     return( 
//         <div>
//               <h3 className="He">Recat Skil Test Drop_Down</h3>

//           < Select className="Sel" options={option} onChange={handleChange} />
//        <>    {selectedOption} </>
    
        
//           </div>
//         )  
// }

// export default App;
import React, {useState} from "react";
import Select from 'react-select';
import './style.css';

const options = [
  {value: 'one', label: 'One'},
  {value: 'two', label: 'Two'},
  {value: 'three', label: 'Three'}
];

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <h3 className="He">React Skill Test Drop Down</h3>
      <Select className="Sel" options={options} value={selectedOption} onChange={handleChange} />
      {selectedOption && <h4 className="Head">You selected: {selectedOption.label}</h4>}
    </div>
  );
}

export default App;
