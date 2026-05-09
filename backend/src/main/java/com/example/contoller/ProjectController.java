package com.example.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.entity.Project;
import com.example.service.ProjectService;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @PostMapping
    public Project createProject(@RequestBody Project project)
    {
        return projectService.save(project);
    }

    @GetMapping
    public List<Project> getProjects() {
        return projectService.getAll();
    }
}