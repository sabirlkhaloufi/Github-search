import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Repo from './Repo'
import SocialMedia from './SocialMedia'

function Profile() {

    const [username, setUserName] = useState({name:"sabirlkhaloufi"})
    const [dataUser, setDataUser] = useState({})
    const [RepoUser, setRepoUser] = useState([])

    const onChange = (e)=>{
        setUserName({name:e.target.value})
    }

    const getUser = (e)=>{
        e.preventDefault();
        axios.get(`https://api.github.com/users/${username.name}`).then((response)=>{
        setDataUser(response.data)
        getRepo();
        
    }).catch((Error)=>{
        console.log(Error);
    })    
    }

    const getRepo = ()=>{
      axios.get(`https://api.github.com/users/${username.name}/repos`).then((response)=>{
         setRepoUser(response.data);
         
         
     }).catch((Error)=>{
         console.log(Error);
     })
    }

    useEffect(() => {
      axios.get(`https://api.github.com/users/sabirlkhaloufi`).then((response)=>{
        setDataUser(response.data)
        getRepo();
        
    }).catch((Error)=>{
        console.log(Error);
    })   
    }, [])

  return (
    <div className="main-content position-relative max-height-vh-100 h-100">

  <div className="card shadow-lg mx-4 mt-5">
    <div className="card-body">
      <div className="row gx-4">
        <div className="col-auto">
          <div className="avatar avatar-xl position-relative">
            <img src="assets/img/team-2.png
            " alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
          </div>
        </div>
        <div className="col-auto my-auto">
          <div className="h-100">
            <h5 className="mb-1">
            Github Search User
            </h5>
            <p className="mb-0 font-weight-bold text-sm">
              Developed By Sabir Lkhaloufi
            </p>
          </div>
          <SocialMedia/>
        </div>
        
        <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
        <form className="input-group col-auto my-auto" onSubmit={getUser}>
          <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true" /></span>
          <input type="text" className="form-control" name='username' placeholder="Enter Your Username..." onChange={onChange} />
          <button type='submit' className="btn btn-sm btn-dark float-right mb-0 d-lg-block" >search</button>
        </form>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid py-4">
    <div className="row">
      <div className="col-md-4">
        <div className="card card-profile">
          <img src="https://github.blog/wp-content/uploads/2020/12/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?resize=1200%2C630" alt="Image placeholder" className="card-img-top" />
          <div className="row justify-content-center">
            <div className="col-5 col-lg-5 order-lg-2">
              <div className="mt-n4 mt-lg-n7 mb-4 mb-lg-0">

                  <img src={dataUser.avatar_url}className="rounded-circle img-fluid border border-2 border-white"/>
                  <h5>
              {dataUser.name?dataUser.name:"UserName" }
              </h5>

              </div>
              
            </div>
            
          </div>
          <div className="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
            <div className="d-flex justify-content-between">
              <a target="_blank" href={dataUser.html_url } className="btn btn-sm btn-dark float-right mb-0  ">Profile</a>
              <a target="_blank" href={"https://"+dataUser.blog} className="btn btn-sm btn-dark float-right mb-0  ">Portfolio</a>
              {/* <a href="javascript:;" className="btn btn-sm btn-info mb-0 d-block d-lg-none"><i className="ni ni-collection" /></a> */}
              <a href={"https://twitter.com/"+dataUser.twitter_username} target="_blank" className="btn btn-sm btn-dark float-right mb-0 ">Twitter</a>
              {/* <a href="javascript:;" className="btn btn-sm btn-dark float-right mb-0 d-block d-lg-none"><i className="ni ni-email-83" /></a> */}
            </div>
          </div>
          <div className="card-body pt-0">
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-center">
                  <div className="d-grid text-center">
                  
                    <span className="text-lg font-weight-bolder">{dataUser.followers?dataUser.followers:"0" }</span>
                    <span className="text-sm opacity-8">Followers</span>
                  </div>
                  <div className="d-grid text-center mx-4">
                    <span className="text-lg font-weight-bolder">{dataUser.following?dataUser.following:"0" }</span>
                    <span className="text-sm opacity-8">following</span>
                  </div>
                  <div className="d-grid text-center">
                    <span className="text-lg font-weight-bolder">{dataUser.public_repos?dataUser.public_repos:"0" }</span>
                    <span className="text-sm opacity-8">public_repos</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              
              <div className="h6 font-weight-300">
                <i className="ni location_pin mr-2" />{dataUser.bio?dataUser.bio:"bio" }
              </div>
              <div className="h6 mt-4">
                <i className="ni business_briefcase-24 mr-2" />{dataUser.company?dataUser.company:"Your Company" }
              </div>
              <div>
                <i className="ni education_hat mr-2" />created at: {dataUser.created_at}
              </div>
            </div>
          </div>
        </div>
      </div>

      {RepoUser && <Repo data={RepoUser} username={dataUser.login}/>}

    </div>
  </div>
</div>

  )
}

export default Profile
