package com.mediflow.mediflow_backend.repository;

import com.mediflow.mediflow_backend.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository
        extends JpaRepository<Patient, Long> {

    boolean existsByMobile(String mobile);

    // ADD THIS LINE
    Patient findByMobile(String mobile);

    Patient findByEmail(String email);

}