import React, { useEffect, useState } from 'react'
import appStyles from '../../App.module.css'
import signUpStyles from '../../styles/SignInUpForm.module.css'
import profileStyles from '../../styles/Profile.module.css'
import { Col, Container, Row, Spinner, Image, Form, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults'

const Profile = () => {
    const {id} = useParams();

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axiosReq.get(`/profiles/${id}/`);
                setProfile(data);
            } catch (error) {
                
            }
        }
        fetchData();
    }, [id, setProfile]);  

  return (
    <Row >
        {profile? (
            <Col className="my-auto py-2 p-md-2">
                <Container className={`${appStyles.Content}`}>
                <Image src={profile.profile_image} alt={profile.owner} rounded className={profileStyles.Img}/>
                <h1 className={`${signUpStyles.Header} ${profileStyles.username}`}>{profile.owner}</h1>
                
                <span className={profileStyles.header}><i class="fa-solid fa-people-group"></i></span>
                <p className='d-inline-block'>You joined: {profile.created_at}</p>
                <br/>
                <span className={profileStyles.header}><i class="fa-solid fa-comments"></i></span>
                <p className='d-inline-block'>Engagement: {profile.reviews_made ? profile.reviews_made : '0'} reviews</p>                                     
                </Container>  
                <Container className={`${appStyles.Content} mt-2`}>

                    <Form 
                        // onSubmit={handleSubmit}
                        >

                        <Form.Group>
                            <Form.Label htmlFor="image-upload"> Change the image</Form.Label>                        
                        <Form.File
                            id="image-upload"                            
                            accept="image/*"

                            // onChange={(e) => {
                            //     if (e.target.files.length) {
                            //       setProfileData({
                            //         ...profileData,
                            //         image: URL.createObjectURL(e.target.files[0]),
                            //       });
                            //     }
                            // }}
                            />
                        </Form.Group>


                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                            className={signUpStyles.Input} 
                            type="text" 
                            placeholder="Update username"
                            name="username"
                            // value={username}
                            // onChange={handleChange}
                            />                    
                        </Form.Group>                                      

                        <Form.Group controlId="password">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                            className={signUpStyles.Input}
                            type="password" 
                            placeholder="Update password" 
                            name="password"
                            // value={password1}
                            // onChange={handleChange}
                            />
                        </Form.Group>
                                            
                        <Button className={signUpStyles.Button} type="submit">
                            Save changes
                        </Button>
                        
                    </Form>


                </Container>    
            </Col>
        ) : (            
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}      
    </Row>
  )
}

export default Profile