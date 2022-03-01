import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = ({ setSpecies, setStatus, setPageNUmber, setGender }) => {
let clear =() =>{
  setSpecies("");
  setStatus("");
  setPageNUmber("");
  setGender("");
  window.location.reload(false);
}

  return <div className='col-3'>
    <div className='text-center fw-bold fs-4 mb-2' > Filter </div>
    <div 
        onClick={clear}
        style={{ cursor: "pointer"}}
        className='text-center text-primary text-decoration-underline mb-4'>
      Clear Filters
    </div>

 <div className="accordion" id="accordionExample">
    <Status setPageNUmber={setPageNUmber} setStatus={setStatus} />
    <Species setPageNUmber={setPageNUmber} setSpecies={setSpecies} />
    <Gender setGender={setGender} setPageNUmber={setPageNUmber} />
    
</div>


  </div>;
};

export default Filters;
