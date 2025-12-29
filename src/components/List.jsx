import { useState } from "react";
import { Box, Input, Button, Text } from "@chakra-ui/react";

const List = ({ tasks, deleteTask, editTask, chageStatusTask }) => {
  const [taskId, setTaskId] = useState();
  const [taskNew, setTaskNew] = useState();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "100%",
      }}
    >
      {tasks.map((task) => {
        return (
          <Box
            key={`item-${task.id}`}
            width="100%"
            padding="16px"
            bg="white"
            borderRadius="lg"
            boxShadow="sm"
            _hover={{ boxShadow: "md" }}
            transition="all 0.2s"
            borderLeftWidth="4px"
            borderLeftColor={task.isCompleted ? "green.400" : "gray.200"}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flex: 1,
                  alignItems: "center",
                }}
              >
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => chageStatusTask(task.id)}
                  style={{ width: "20px", height: "20px", cursor: "pointer" }}
                />

                {taskId === task.id ? (
                  <Input
                    type="text"
                    onChange={(e) => setTaskNew(e.target.value)}
                    defaultValue={task.name}
                    size="md"
                    autoFocus
                    flex={1}
                  />
                ) : (
                  <Text
                    fontSize="lg"
                    textDecoration={task.isCompleted ? "line-through" : "none"}
                    color={task.isCompleted ? "gray.500" : "gray.700"}
                    flex={1}
                  >
                    {task.name}
                  </Text>
                )}
              </div>

              <div style={{ display: "flex", gap: "8px" }}>
                {taskId === task.id ? (
                  <Button
                    onClick={() => {
                      editTask(taskId, taskNew);
                      setTaskId(null);
                    }}
                    colorPalette="green"
                    size="sm"
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    onClick={() => setTaskId(task.id)}
                    colorPalette="blue"
                    variant="ghost"
                    size="sm"
                  >
                    Edit
                  </Button>
                )}
                <Button
                  onClick={() => deleteTask(task.id)}
                  colorPalette="red"
                  variant="ghost"
                  size="sm"
                >
                  Delete
                </Button>
              </div>
            </div>
          </Box>
        );
      })}
    </div>
  );
};

export default List;
