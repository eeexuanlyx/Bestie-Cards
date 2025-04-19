import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Radio,
  Flex,
  RadioGroup,
} from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";

const CreateUserModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>
        <BiAddToQueue size={20} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>My new Besties!</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <Flex alignItems={"center"} gap={4}>
              {/*left side*/}
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input placeholder="John Doe" />
              </FormControl>
              {/*right side*/}
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input placeholder="Software Engineer" />
              </FormControl>
            </Flex>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                resize={"none"}
                overflowY={"hidden"}
                placeholder="He is a Software Engineer"
              />
            </FormControl>

            <RadioGroup mt={"4"}>
              <Flex gap={5}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Flex>
            </RadioGroup>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateUserModal;
