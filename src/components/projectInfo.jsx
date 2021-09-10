import React from 'react';
import Header from './header';


function projectInfo(props) {
  console.log(props);

  const { element }= props;
  return (
    <div>
      <Header />
      <h1>{element.name}</h1>
      <h1>{element.data}</h1>

      <p>{element.descrição}</p>
      <h1>{element.organização}</h1>
      <h1>{element.processo}</h1>
      <h1>{element.status}</h1>
      <h1>{element.github}</h1>
      <h1>{element.page}</h1>
    </div>
  );
}

export default projectInfo;