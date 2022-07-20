import { Text,Flex, Input, Button, Box, Center, Spacer } from '@chakra-ui/react'
import React from 'react'
import {SearchIcon} from "@chakra-ui/icons"

const Seachbar = () => {
  return (
    <Box>
        <Flex marginLeft='15rem' >
            <Flex borderRadius='5%' marginLeft='1rem' marginRight='1rem' border='1px solid black'>
                <Text   marginTop='.5em'>What</Text>
                <Input w='20em' border='null'  placeholder='job titles, keyword or compnay'/>
                <SearchIcon marginTop='.8em' color='black'/>
            </Flex>
            <Flex border='1px solid black' borderRadius='5%'>
                <Text marginTop='.5em'>Where</Text>
                <Input w='20em' border='null'  placeholder='City state or pincode'/>
                <SearchIcon marginTop='.8em' color='black'/>
            </Flex>
            <Button  colorScheme='blue'>Find Jobs</Button>
        </Flex>
        <Box marginLeft='30rem' marginTop='1rem' fontSize='1.1rem'>
        <Flex  ><Text color='blue' >Post your resume   : </Text><Text> it will take few second</Text></Flex>
        <Flex  ><Text color='blue' >Employer: Post a job   :</Text><Text>Your next hire is here</Text></Flex>
        </Box>
        <Flex fontSize='2rem'>
            <Center >Job feed</Center>
            <Spacer/>
            <Center>Recent searches</Center>
        </Flex>
        
    </Box>
  )
}

export default Seachbar