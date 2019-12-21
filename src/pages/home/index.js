import React from 'react';
import Hooks from '../../components/hooks';
import Greeting from '../../components/greeting';


function Pages(){
return(
    <div>
        <h1>Ini Halaman Home</h1>
        <Greeting nama='Afifah'/>
      <Greeting nama='Aku'/>
      <Hooks/>
    </div>
);
}
export default Pages;