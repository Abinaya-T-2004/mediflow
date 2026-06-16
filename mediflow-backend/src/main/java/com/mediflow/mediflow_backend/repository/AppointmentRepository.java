package com.mediflow.mediflow_backend.repository;

import com.mediflow.mediflow_backend.models.Appointment;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentRepository
        extends JpaRepository<Appointment, Long> {

    List<Appointment> findByDoctorNameAndAppointmentDate(
            String doctorName,
            String appointmentDate
    );

    

    List<Appointment>
findByBookedByMobile(
    String bookedByMobile
);

}