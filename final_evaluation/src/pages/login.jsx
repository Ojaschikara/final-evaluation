import { Heading,Input,Button,VStack,container } from "@chakra-ui/react";
import React,{ useState,useContext } from "react";
// import axios from "axios";
const LoginPage = ()=>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    
    return(
        <Container>
            <VStack>
                <Heading as="h1" size="xl">Login Page</Heading>
                <Input placeholder="Email" type="email" value={email} onChange={(e)=>{setEmail(e.target.value);}}/>
                <Input placeholder="Password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value);}}/>
                <Button variant="outline" colorscheme="red" onClick={handleClick}>Login</Button>

            </VStack>
        </Container>
    )

}
export default LoginPage