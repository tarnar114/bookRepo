import {
  FormControl,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  FormLabel,
  Input,
  ModalFooter,
  Button
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Formik, useFormik, Form } from "formik";
const axios=require('axios')
const Updatemodel = ({updateSubmitted,modalData,isClose,isOpen,onClose}) => {
  const [data, setModalData] = useState();
  useEffect(() => {
    setModalData(modalData);
  }, []);
  return (
    <Modal isOpen={isOpen} onClose={isClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update</ModalHeader>
        <ModalCloseButton />

        <Formik
          initialValues={{
            ID:modalData.book_id,
            Name: modalData.book_name,
            Genre: modalData.book_genre,
            Author: modalData.book_author,
            Publisher: modalData.book_publisher,
          }}
          onSubmit={(values)=>{
            try {
              const res=axios.put(`/books/${values.ID}`,values,{
                proxy:{
                  host:'backend',
                  port:5000
                }
              })
              console.log(res)
              onClose()
              updateSubmitted(true)
            } catch (error) {
              console.log(error)
              updateSubmitted(false)
            }
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel htmlFor="Name">Book Name</FormLabel>
                  <Input
                    id="Name"
                    value={props.values.Name}
                    onChange={props.handleChange}
                  />
                  <FormLabel htmlFor="Author">Book Author</FormLabel>
                  <Input
                    id="Author"
                    value={props.values.Author}
                    onChange={props.handleChange}
                  />
                  <FormLabel htmlFor="Genre">Book Genre</FormLabel>
                  <Input
                    id="Genre"
                    value={props.values.Genre}
                    onChange={props.handleChange}
                  />
                  <FormLabel htmlFor="Publisher">Book Publisher</FormLabel>
                  <Input
                    id="Publisher"
                    value={props.values.Publisher}
                    onChange={props.handleChange}
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} type="submit" >
                  Submit
                </Button>
              </ModalFooter>
            </form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export default Updatemodel;
