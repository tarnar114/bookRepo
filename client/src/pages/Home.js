import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  useToast,
  typography,
} from "@chakra-ui/react";
import { Formik, useFormik, Form } from "formik";
const axios=require('axios')
const Home = (props) => {
  const toast = useToast();
  const handleSubmit = () => {
    toast({
      title: "book added",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  };
  return (
    //formik form for later MAKE SURE!!!!!!!!!!!!!!! https://formik.org
    <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Formik
        initialValues={{
          Name: "",
          Genre: "",
          Author: "",
          Publisher: "",
        }}
        onSubmit={(values,{resetForm}) => {
          console.log(values);
          try {
            const res=axios.post('/book',values,{
                proxy:{
                  host:'backend',
                  port:5000
              }
            })
            console.log(res)
            resetForm({values:''})
          } catch (error) {
            console.log(error)
          }
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <FormControl label="Add book">
              <Heading size="lg" mb={5}>
                Add Book
              </Heading>
              <FormLabel htmlFor="Name">Book Name</FormLabel>
              <Input
                id="Name"
                variant="flushed"
                mb={5}
                value={props.values.Name}
                onChange={props.handleChange}
              ></Input>
              <FormLabel htmlFor="Genre">Genre</FormLabel>
              <Input
                id="Genre"
                variant="flushed"
                mb={5}
                value={props.values.Genre}
                onChange={props.handleChange}
              ></Input>
              <FormLabel htmlFor="Author">Author</FormLabel>
              <Input
                id="Author"
                variant="flushed"
                mb={5}
                value={props.values.Author}
                onChange={props.handleChange}
              ></Input>
              <FormLabel htmlFor="Publisher">Publisher</FormLabel>
              <Input
                id="Publisher"
                variant="flushed"
                mb={5}
                value={props.values.Publisher}
                onChange={props.handleChange}
              ></Input>
              <Box flexGrow={1} align="right">
                <Button colorScheme="teal" variant="solid" type="submit">
                  Submit
                </Button>
              </Box>
            </FormControl>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Home;
