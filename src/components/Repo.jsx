import React, {useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate';


function Repo(props) {

  let repo = props.data;
  const username = props.username;
  const urlRepo = `https://github1s.com/${username}/`;

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = repo.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(repo.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % repo.length;
    setItemOffset(newOffset);
  };

  return (

    <div className="col-md-8">
      <div className="">
        <div className="">
        </div>
        <div className="">
          <h2 className="text-lg">All Repositories</h2>

          <div className="mt-5 row">


            

          {currentItems.sort((a, b) => a.stargazers_count< b.stargazers_count ? 1:-1).map((repo) => {
        return ( <div className="col-12 col-lg-4 mb-3">
          <div className="card p-3 h-100">
          
            <div className="d-flex justify-content-between">
            
              <div className="d-flex flex-row align-items-center gap-4">
              <p>Open in:</p>
              <a href={urlRepo+repo.name} target="_blank" className="icon"> <img class="p-2" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="" srcset="" /> </a>
              <a href={repo.svn_url} className="icon" target="_blank"> <i class='bx bxl-github'></i> </a>
              </div>  
            </div>
            <div className="mt-3">
              <h5 className="heading">{repo.name}</h5>
              <div className="mt-3">
                {/* <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                </div> */}
                
                    {/* <div className="badge d-flex align-items-center gap-4 w-100">
                      <span><i class='bx bx-star ps-3'></i> <span>{repo.stargazers_count}</span></span>
                      <span><i class='bx bx-star ps-3'></i> <span>{repo.forks_count}</span> </span>
                      <span><i class='bx bx-star ps-3'></i> <span>{getNbrCommit(repo.name)}</span> </span>
                    </div>   */}
              </div>
            </div>
          </div>
        </div>)

        
        

      })}



          </div>
          </div>

         <div className='d-flex justify-content-center mt-2'>
         <ReactPaginate
        nextLabel="N >"
        previousLabel="< P"
        onPageChange={handlePageClick}
        pageRangeDisplayed={9}
        marginPagesDisplayed={2}
        pageCount={pageCount}        
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
         </div>
        </div>
      </div>
  )
}

export default Repo
