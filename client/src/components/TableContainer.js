import {
  TableContainer,
  Th,
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { IconButton } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
const TableList = (props, children) => {
  const [ListItems, setListItems] = useState([]);
  useEffect(() => {
    setListItems(props.books);
  }, []);
  const UpdateClick=(data)=>{
    props.UpdateClickHandler(data)
  }
  const DelClick=(data)=>{
    console.log(data)
    props.delClickHandler(data,true)
  }
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Genre</Th>
            <Th>Author</Th>
            <Th>Publisher</Th>
            <Th>Update</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {ListItems.map((item) => {
            return (
              <Tr>
                <Td>{item.book_name}</Td>
                <Td>{item.book_genre}</Td>
                <Td>{item.book_author}</Td>
                <Td>{item.book_publisher}</Td>
                <Td>
                  <IconButton
                    colorScheme="blue"
                    onClick={()=>{UpdateClick(item)}}
                    icon={<BiPencil />}
                  ></IconButton>
                </Td>
                <Td>
                  <IconButton
                    colorScheme="red"
                    icon={<AiFillDelete />}
                    onClick={()=>{DelClick(item.book_id)}}
                  ></IconButton>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
