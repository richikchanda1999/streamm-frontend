import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useArcanaAuth } from "src/utils/useArcanaAuth";
import { ethers } from "ethers"
import ABI from "src/abi/TradeableCashflow1.json"

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function MintNFTModal({ isOpen, onClose }: Props) {
  const buildComponent = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={6}>
            <Flex direction={"column"} align="center">
              <Text fontFamily={"Pacifico"} fontSize="32px">
                Raise Fund
              </Text>
              <Text mt={4}>
                Enter the details below to mint an NFT and start a fundraising
                campaign
              </Text>
              <Input
                mt={2}
                placeholder="Enter the title of your campaign"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Textarea
                mt={2}
                placeholder="Enter the description of your campaign"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button
                w="100%"
                bg="accent.azure"
                _hover={{ bg: "accent.jeans" }}
                color="white"
                mt={6}
                onClick={onClick}
              >
                Mint NFT
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { provider, user } = useArcanaAuth();

  const onClick = async () => {
    if (!user || title === '' || description === '') return;

    const iface = new ethers.utils.Interface(ABI)
    const data = iface.encodeFunctionData('mintNFT', [title, description])

    const hash = await provider.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: user.address,
          to: "0x0a3c7EcD69604e924027f642dB14403e8cbb2e2e",
          value: "0",
          data,
        },
      ],
    });
    console.log({ hash });
  };

  return buildComponent();
}
export default MintNFTModal;
