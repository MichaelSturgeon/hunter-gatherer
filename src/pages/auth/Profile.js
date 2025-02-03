// Imports
import React, { useEffect, useRef, useState } from 'react'
import appStyles from '../../App.module.css'
import signUpStyles from '../../styles/SignInUpForm.module.css'
import profileStyles from '../../styles/Profile.module.css'
import { Col, Container, Row, Spinner, Image, Form, Button, Alert } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq, axiosRes } from '../../api/axiosDefaults'
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";

const Profile = () => {
    // Extract user ID from URL parameters
    const {id} = useParams();
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();    
    const history = useHistory();
    // States for profile data, username, password, image, and errors
    const [profile, setProfile] = useState(null);
    const [username, setUsername] = useState('');    
    const [password, setPassword] = useState({
        new_password1: "",
        new_password2: "",
      });
    const { new_password1, new_password2 } = password;
    const [profileImage, setProfileImage] = useState('');
    const [errors, setErrors] = useState({});
    // Ref for image file input
    const imageFile = useRef();    
    // Fetch profile data when the component mounts or the `id` changes
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
    // Handle username change for the current user
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
    // Handle password submission
    const handlePasswordSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.post("/dj-rest-auth/password/change/", {
            new_password1,
            new_password2 });
            history.goBack();
        } catch (error) {
            setErrors(error.response?.data);
        }
    };    
    // Handle image file submission
    const handleImgSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();  
        if (imageFile?.current?.files[0]) {
            formData.append("profile_image", imageFile.current.files[0]);
        }    
        try {
            // Send the image data to the API to update the profile image          
            const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
            // Update profile image in the user context          
            setCurrentUser((prevUser) => ({
                ...prevUser,
                profile_image: data.image,
            })); 
            setProfileImage(URL.createObjectURL(imageFile.current.files[0]));
            history.goBack();
        } catch (error) { 
            setErrors(error.response?.data);
        }
    };
  return (
    <Row >
        {/* Conditionally render content based on whether profile data is loaded */}
        {profile? (
            <Col className="my-auto py-2 p-md-2">
                <Container className={`${appStyles.Content}`}>
                <Image src={profile.profile_image} alt={profile.owner} className={profileStyles.Img}/>
                <h1 className={`${signUpStyles.Header} ${profileStyles.username}`}>{profile.owner}</h1>
                
                <span className={profileStyles.header}><i class="fa-solid fa-people-group"></i></span>
                <p className='d-inline-block'>You joined: {profile.created_at}</p>
                <br/>
                <span className={profileStyles.header}><i class="fa-solid fa-comments"></i></span>
                <p className='d-inline-block'>Engagement: {profile.reviews_made ? profile.reviews_made : '0'} reviews</p>                                     
                </Container>  
                <Container className={`${appStyles.Content} mt-2`}>
                    {/* Profile image upload form */}
                    <Form onSubmit={handleImgSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="image-upload">Change the image</Form.Label>
                            <Form.File
                                id="image-upload"
                                accept="image/*"
                                ref={imageFile}
                                onChange={(e) => {
                                    if (e.target.files.length) {
                                        setProfileImage(URL.createObjectURL(e.target.files[0]));
                                    }
                                }}
                            />
                            {/* Show the selected image as a preview */}
                            {profileImage && <Image src={profileImage} className={profileStyles.Img} />}
                            {errors?.image?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                {message}
                                </Alert>
                            ))}
                        </Form.Group>                                            
                        <Button className={signUpStyles.Button} type="submit">
                            Save Profile Picture
                        </Button>
                        {errors?.non_field_errors?.map((message, idx) =>
                            <Alert variant='warning' key={idx}>{message}</Alert>
                        )}                                              
                    </Form>
                    <Form 
                        onSubmit={handleSubmit}
                        >
                        {/* Username update form */}
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
                        <Button className={signUpStyles.Button} type="submit">
                            Save Username
                        </Button>
                        {errors?.non_field_errors?.map((message, idx) =>
                            <Alert variant='warning' key={idx}>{message}</Alert>
                        )}                        
                    </Form>
                    <Form 
                        onSubmit={handlePasswordSubmit}
                        >                                                           
                        {/* Password update form */}
                        <Form.Group controlId="new_password1">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                            className={signUpStyles.Input}
                            type="password" 
                            placeholder="New password" 
                            name="new_password1"
                            value={new_password1}
                            onChange={(event) => setPassword({ ...password, new_password1: event.target.value })}
                            />
                            {errors?.new_password1?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                            ))}
                        </Form.Group>

                        <Form.Group controlId="new_password2">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                            className={signUpStyles.Input}
                            type="password" 
                            placeholder="Confirm password" 
                            name="new_password2"
                            value={new_password2}
                            onChange={(event) => setPassword({ ...password, new_password2: event.target.value })}
                            />
                            {errors?.new_password2?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                            ))}
                        </Form.Group>                                            
                        <Button className={signUpStyles.Button} type="submit">
                            Save Password
                        </Button>
                        {errors?.non_field_errors?.map((message, idx) =>
                            <Alert variant='warning' key={idx}>{message}</Alert>
                        )}                        
                    </Form>
                </Container>    
            </Col>
        ) : (
            // Show a loading spinner while the profile is being fetched       
            <Spinner animation="border" role="status" className={profileStyles.Spinner}>
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}      
    </Row>
  )
}

export default Profile