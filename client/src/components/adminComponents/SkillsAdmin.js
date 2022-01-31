import React from 'react'
import { Link } from 'react-router-dom'
import '../Homepages/skills.css'

const SkillsAdmin = () => {
    return (
        <div className="same-component">
        <div className="same-form">
          <form>
            <h4>Skills Component</h4>
  
            <label htmlFor="text">Technical Skills</label>
            

            
            <button type="submit">Add Item</button>
          </form>
          <form>
            <h4>Skills Component</h4>
  
            <label htmlFor="text"> Professional Skills</label>
            


            <button type="submit">Add Item</button>
          </form>
        </div>
  



















        <div className="same-item">
          <div className="about-info">
            <div className="icons">
              <Link to={"/editEdication"}>
                <i className="fas fa-edit"></i>
              </Link>
              <i className="fas fa-trash"></i>
            </div>
  
  <div className="bar">
                          <div className="info">
                            <span>CSS</span>
                          </div>
                          <div className="progress-line css">
                            <span></span>
                          </div>
                        </div>
  </div>
  {/* <h3 className="item-delete-tab"></h3> */}
            
          
        </div>
      </div>
    )
}

export default SkillsAdmin
