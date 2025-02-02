import React, { useEffect, useState } from 'react'
import appStyles from '../../App.module.css'
import signUpStyles from '../../styles/SignInUpForm.module.css'
import profileStyles from '../../styles/Profile.module.css'
import { Col, Container, Row, Spinner, Image, Form, Button, Alert } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq, axiosRes } from '../../api/axiosDefaults'
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";

const Profile = () => {
    const {id} = useParams();
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const [profile, setProfile] = useState([]);

    const [username, setUsername] = useState("");

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
    
    useEffect(() => {
        if (currentUser?.profile_id?.toString() === id) {
          setUsername(currentUser.username);
        } else {
          history.push("/");
        }
      }, [currentUser, history, id]);
    
    const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axiosRes.put("/dj-rest-auth/user/", {
        username,
        });
        setCurrentUser((prevUser) => ({
        ...prevUser,
        username,
        }));
      history.goBack();
    } catch (error) {        
        setErrors(error.response?.data);
    }
    };

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
                        onSubmit={handleSubmit}
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
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            />
                            {errors?.username?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                            ))}                    
                        </Form.Group>
                                                             

                        <Form.Group controlId="password">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                            className={signUpStyles.Input}
                            type="password" 
                            placeholder="Update password" 
                            name="password"
                            // value={password}
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