package com.mediflow.mediflow_backend.controller;

import com.mediflow.mediflow_backend.models.Patient;
import com.mediflow.mediflow_backend.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins = "http://localhost:5173")

public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    /* ── SAVE PATIENT ── */
    @PostMapping("/save")
    public Map<String, String> savePatient(
            @RequestBody Patient patient
    ) {

        Map<String, String> response = new HashMap<>();

        if (patientRepository.existsByMobile(patient.getMobile())) {
            response.put("message", "Patient already exists");
            return response;
        }

        patientRepository.save(patient);
        response.put("message", "Patient details saved successfully");
        return response;
    }

    /* ── GET PATIENT BY EMAIL ── */
   @GetMapping("/get/{mobile}")
public Patient getPatient(@PathVariable String mobile) {
    return patientRepository.findByMobile(mobile);
}

}