package com.mediflow.mediflow_backend.repository;

import com.mediflow.mediflow_backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository
        extends JpaRepository<User, Long> {

    User findByEmail(String email);

    User findByEmailAndPassword(
            String email,
            String password
    );

}