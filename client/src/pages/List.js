import { Box, Heading, Spinner, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import TableList from "../components/TableContainer";
import Updatemodel from "../components/Updatemodal";

const axios = require("axios");

const List = ({ props, children }) => {
  const [books, setBooks] = useState();
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalData, setModalData] = useState();
  const fetchData = async () => {
    let res = await axios.get("/book", {
      proxy: {
        host: "backend",
        port: 5000,
      },
    });
    setBooks(res.data);
  };
  useEffect(() => {
    if (loading == true) {
      fetchData();
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading]);
  useEffect(() => {
    if (books == null) {
      return;
    }
  }, [books]);
  const UpdateClickHandler = (data) => {
    if (data == modalData) {
      onOpen();
    }
    setModalData(data);
  };
  useEffect(() => {
    if (modalData === null) {
      return;
    }
    onOpen();
  }, [modalData]);
  const delClickHandler = async (bookId, submitted) => {
    let res = axios.delete(`/books/${bookId}`, {
      proxy: {
        host: "backend",
        port: 5000,
      },
    });

    if (submitted === true) {
      setLoading(true);
      console.log(loading);
    }
  };
  const updateSubmit = (submitted) => {
    if (submitted === true) {
      setLoading(true);
      console.log(loading);
    }
  };
  return (
    <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Heading size="md" mb={3}>
        Saved Books
      </Heading>

      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <TableList
          UpdateClickHandler={UpdateClickHandler}
          delClickHandler={delClickHandler}
          books={books}
        />
      )}
      {modalData != null && (
        <Updatemodel
          updateSubmitted={updateSubmit}
          modalData={modalData}
          onClose={onClose}
          isClose={onClose}
          isOpen={isOpen}
        />
      )}
    </Box>
  );
};

export default List;
