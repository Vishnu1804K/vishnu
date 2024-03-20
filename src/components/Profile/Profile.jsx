import React from 'react'
import img1 from '../../Images/icons8-codechef-96.png'
import img2 from '../../Images/icons8-geeksforgeeks-96.png'
import img3 from '../../Images/icons8-level-up-your-coding-skills-and-quickly-land-a-job-96.png'
import './Profile.css'
const getImageSize = () => {
  if (window.innerWidth <= 600) {
    return { height: 25, width: 25 ,paddingLeft:6,paddingRight:6};
  } else {
    return { height: 100};
  }
};

const Profile = () => {
  return (
    <div className='ProfileArea'>
    <h1 className="ProfileHead" style={{textAlign:'center',borderBottom:'2px solid #7B2CBF',marginBottom:'25px'}}>Profile</h1>
    <div className='ProfileContainer'>
      <a href="https://leetcode.com/BoltHead/" className='Pro'>
      <div >
        <img src={img3} alt="leetcode"/>
       <h3>LeetCode</h3>
      </div>
      </a>
      <a href="https://www.codechef.com/users/c0der_star_7" className='Pro'>
      <div>
        <img className="profileImg" src={img1} alt="gfg" />
        <h3>Codechef</h3>
      </div>
      </a>
      <a href="https://auth.geeksforgeeks.org/user/vishnu1804ksri" className='Pro'>
      <div>
        <img className="profileImg" src={img2} alt="codechef" />
        <h3>GeekForGeeks</h3>
      </div>
      </a>
    </div>
    </div>
  )
}

export default Profile
