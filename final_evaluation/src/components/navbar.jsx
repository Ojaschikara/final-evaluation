import {Link as ChakraLink , Flex} from "@chakra-ui/react"
import {Link as ReactRouterLink ,useNavigate} from "react-router-dom"
import React from "react"

// import { useContext } from "react"




   
    export default function Navbar(){
        const links=[
            {
                to:"/",
                label:"Home"
            },
            {
                to:"./login",
                label:"Login"
            }
    
        ]
      return (
        <Flex align="center" justifyContent="space-around" background="gray.400" padding={4}>
        {links?.map((link)=>(
        <ChakraLink color="gray.900" as ={ReactRouterLink} key={link.to} to={link.to}>{link.label}</ChakraLink>
        ))}
        </Flex>
      )

      }