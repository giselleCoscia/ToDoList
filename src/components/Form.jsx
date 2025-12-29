import { Box, Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";

const Form = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue("");
      toaster.create({
        title: "Tarea agregada",
        type: "success",
        duration: 2000,
      });
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} w="100%">
      <HStack gap={3}>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe una nueva tarea..."
          size="lg"
          variant="subtle"
          focusRingColor="blue.500"
        />
        <Button
          type="submit"
          colorPalette="blue"
          size="lg"
          px={8}
          _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
          transition="all 0.2s"
        >
          Agregar
        </Button>
      </HStack>
    </Box>
  );
};

export default Form;
