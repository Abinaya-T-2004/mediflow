package com.mediflow.mediflow_backend.controller;

import com.mediflow.mediflow_backend.models.User;
import com.mediflow.mediflow_backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public Map<String, String> registerUser(@RequestBody User user) {

        Map<String, String> response = new HashMap<>();

        User existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser != null) {

            response.put("message", "User already exists");

            return response;
        }

        userRepository.save(user);

        response.put("message", "Registration successful");

        return response;
    }
    @PostMapping("/login")

public Map<String, String> loginUser(
        @RequestBody User user
) {

    Map<String, String> response =
            new HashMap<>();

    User existingUser =
            userRepository.findByEmailAndPassword(
                    user.getEmail(),
                    user.getPassword()
            );

    if (existingUser != null) {

    response.put(
            "message",
            "Login successful"
    );

    response.put(
        "email",
        existingUser.getEmail()
);

} else {

    response.put(
            "message",
            "Invalid email or password"
    );

}

    return response;
}
}