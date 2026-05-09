package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Task;
import com.example.repository.TaskRepository;

@Service
public class TaskService
{
	@Autowired
	private TaskRepository taskRepository;
	
	public Task save(Task task) {
		
		return (Task) taskRepository.findAll();
	}
	
	public List<Task> getAll()
	{
		return taskRepository.findAll();
	}
	
	public Task updateStatus(Long id, String status)
	{
		Task task = taskRepository.findById(id)
				.orElseThrow(() ->  new RuntimeException("Task Not Found!"));
		task.setStatus(status);
		
		return taskRepository.save(task);
	}
	
	public List<Task> getTasksByUser(Long userId) {
	    return taskRepository.findByAssignedToId(userId);
	}
}
