import Form from "./Form";
import List from "./List";
import { useEffect, useState } from "react";
import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); 
  
  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(localTasks);
  }, []);
  
  useEffect(() => {
    if (tasks.length <= 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  const addTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: task,
        isCompleted: false,
      },
    ]);
  };
  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  
  const editTask = (id, taskNew) => {
    setTasks(
      tasks.map((task) => {
        if (task.id == id) {
          return { ...task, name: taskNew };
        }
        return task;
      })
    );
  };
  
  const chageStatusTask = (id) => {
    setTasks(
      tasks.map((task) => {
        return {
          ...task,
          isCompleted: task.id == id ? !task.isCompleted : task.isCompleted,
        };
      })
    );
  };
  
  const getFilteredTasks = () => {
    if (filter === "completed") {
      return tasks.filter(task => task.isCompleted);
    }
    if (filter === "active") {
      return tasks.filter(task => !task.isCompleted);
    }
    return tasks;
  };
  
  const filteredTasks = getFilteredTasks();
  const completedCount = tasks.filter(t => t.isCompleted).length;
  const activeCount = tasks.length - completedCount;
  
  return (
    <Box minHeight="100vh" bg="gray.50" py={10}>
      <Container maxW="3xl">
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Header */}
          <Box textAlign="center" mb={4}>
            <Heading size="4xl" color="blue.600" mb={2}>
              Todo
            </Heading>
            <Text color="gray.600" fontSize="lg">
              {tasks.length} tareas totales - {completedCount} completadas • {activeCount} activas
            </Text>
          </Box>

          <Box height="1px" bg="gray.200" />

          <Form addTask={addTask} />

          <Box 
            bg="white" 
            p={4} 
            borderRadius="lg" 
            boxShadow="sm"
          >
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Button
                onClick={() => setFilter("all")}
                colorPalette={filter === "all" ? "blue" : "gray"}
                variant={filter === "all" ? "solid" : "outline"}
                size="md"
              >
                Todas ({tasks.length})
              </Button>
              <Button
                onClick={() => setFilter("active")}
                colorPalette={filter === "active" ? "orange" : "gray"}
                variant={filter === "active" ? "solid" : "outline"}
                size="md"
              >
                Activas ({activeCount})
              </Button>
              <Button
                onClick={() => setFilter("completed")}
                colorPalette={filter === "completed" ? "green" : "gray"}
                variant={filter === "completed" ? "solid" : "outline"}
                size="md"
              >
                Completadas ({completedCount})
              </Button>
            </div>
          </Box>

          <List
            tasks={filteredTasks}
            deleteTask={deleteTask}
            editTask={editTask}
            chageStatusTask={chageStatusTask}
          />

          {filteredTasks.length === 0 && tasks.length > 0 && (
            <Box textAlign="center" py={8}>
              <Text fontSize="xl" color="gray.500">
                {filter === "completed" && "No hay tareas completadas todavía"}
                {filter === "active" && "¡Todas las tareas están completadas! 🎉"}
              </Text>
            </Box>
          )}

          {tasks.length === 0 && (
            <Box textAlign="center" py={8}>
              <Text fontSize="xl" color="gray.500">
                No hay tareas. ¡Agrega una nueva!
              </Text>
            </Box>
          )}
        </div>
      </Container>
    </Box>
  );
};

export default ToDoList;