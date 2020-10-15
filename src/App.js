import React from 'react';

const raptors = {
  aaa111: {
    name: "Kawhi Leonard"
  },
  bbb222: {
    name: "Kyle Lowry"
  },
  ccc333: {
    name: "Spicy P"
  }
};



function App() {

  
  return (
  <>
    <ul>
      {//Object.key returns an array with the keys of the object
      //then we can map the keys, using each key to access the correct attribute

      Object.keys(raptors).map(objectKey => (
      <li key={objectKey}>{raptors[objectKey].name}</li>
      ))}
    </ul>
    
    <ul>
      {//Object.values returns an array with the values of the object
      //then we can also map the values and access the attribute we want to display
      //this solution has some issues, because we may not have an id attribute
      Object.values(raptors).map(( value, index ) => (
        <li key={index}>{value.name}</li>
      ))}
    </ul>

    <ul>
      {//Object.entries returns a tuple, wich the first element is the key and the second a value
      //this way we can easily access both the key and the value, being a more flexible approach
      Object.entries(raptors).map(([objectKey,objectValues]) => (
        <li key={objectKey}>{objectValues.name}</li>
      ))
      }
    </ul>
  </>
  );
}

export default App;
