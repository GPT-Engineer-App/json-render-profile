import { useState } from 'react';
import { Container, Text, VStack, Textarea, Button, Box, SimpleGrid, Heading } from '@chakra-ui/react';

const Index = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [profiles, setProfiles] = useState([]);

  const handleInputChange = (e) => {
    setJsonInput(e.target.value);
  };

  const parseJson = () => {
    try {
      const parsedData = JSON.parse(jsonInput);
      if (Array.isArray(parsedData)) {
        setProfiles(parsedData);
      } else {
        alert('Please enter a valid JSON array.');
      }
    } catch (error) {
      alert('Invalid JSON format.');
    }
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">Candidate Profile Viewer</Heading>
        <Textarea
          placeholder="Paste JSON array here..."
          value={jsonInput}
          onChange={handleInputChange}
          size="lg"
          height="200px"
        />
        <Button colorScheme="blue" onClick={parseJson}>Render Profiles</Button>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {profiles.map((profile, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">{profile.headline}</Heading>
              <Text mt={4}>Skills: {profile.skills.join(', ')}</Text>
              <Text mt={4}>Experience: {profile.experience} years</Text>
              <Text mt={4}>Preferences: {profile.preferences.join(', ')}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;