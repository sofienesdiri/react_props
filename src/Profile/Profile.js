import { Alert, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
const Profile=({fullName, bio, profession,children,handleName})=>{
    return(
        <div className='main'>
            <h2 className='name'>{fullName}</h2>
            <h3 className='profession'>{profession}</h3>
            <p className='bio'>{bio}</p>
            <br/>
            {children}
            <br/>
            <Button variant='dark' onClick={()=> handleName(fullName)}>Alert</Button>
            
        </div>
    )
}
Profile.defaultProps={
    fullName : "mehrez",
    bio : "hi my name is mehrez ,i'm 35 years old and i'm mechatronic engineer",
    profession : "mechatronic engineer"
}
Profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string
}
export default Profile