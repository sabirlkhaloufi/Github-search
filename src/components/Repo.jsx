import React, {useState,useEffect} from 'react'
import Pagination from 'react-paginate';

function Repo(props) {
  
  let repo = props.data;
  const urlRepo = "https://github1s.com/sabirlkhaloufi/";

  return (

    <div className="col-md-8">
      <div className="card">
        <div className="card-header pb-0">
        </div>
        <div className="card-body">
          <h2 className="text-lg">All Repositories</h2>

          <div className="grid-container">


            

          {repo.sort((a, b) => a.stargazers_count< b.stargazers_count ? 1:-1).map((repo) => {
        return  <a target="_blank" href={urlRepo+repo.name}>
        <div className="card w-auto h-100 d-flex flex-row justify-content-center align-items-center py-2">
        <div className="card-header p-2 text-center">
          
          
        </div>

        
        <div>
        <h6 className="text-center mb-0 p-3">{repo.name}</h6>
        <div>
        <div>
        <i class="fa-regular fa-star"></i> <span>{repo.stargazers_count}</span>
        </div>

        </div>
        </div>
          
          
        
      </div>
      </a>
      })}

      <div>
      
      </div>


              
                  
                
  

          </div>
          </div>

        </div>
      </div>
  )
}

export default Repo
