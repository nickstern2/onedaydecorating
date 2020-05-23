import React from 'react';
import '../styles/process.css';


const StagingProcess = () => {
  return(
    <>
    <div className="process-container">
      <div className="cards">
        <div className="card-container">
          <h3>Step 1:</h3>
            <div className="card-category1" >
              Consultation
            </div>
          </div>
          <div className="card-container">
            <h3>Step 2:</h3>
            <div className="card-category2" >
              Proposal
            </div>
          </div>
        <div className="card-container">
          <h3>Step 3:</h3>
          <div className="card-category3" >
            Staging
          </div>
        </div>
        <div className="card-container">
          <h3>Step 4:</h3>
          <div className="card-category4" >
            Showcase
          </div>
        </div>
      </div>
    </div>
    </>

  );
}

export default StagingProcess