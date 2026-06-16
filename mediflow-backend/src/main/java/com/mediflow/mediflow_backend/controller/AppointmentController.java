package com.mediflow.mediflow_backend.controller;

import com.mediflow.mediflow_backend.models.Appointment;
import com.mediflow.mediflow_backend.repository.AppointmentRepository;

import com.mediflow.mediflow_backend.service.PdfService;
import com.mediflow.mediflow_backend.service.EmailService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import java.util.List;
import java.util.Random;

@RestController

@RequestMapping("/api/appointments")

@CrossOrigin(origins = "http://localhost:5173")

public class AppointmentController {

    @Autowired

    private AppointmentRepository appointmentRepository;

    @Autowired

    private PdfService pdfService;

    @Autowired

    private EmailService emailService;

    @PostMapping("/book")

    public Appointment bookAppointment(
            @RequestBody Appointment appointment
    ) {

        // FIND EXISTING SLOTS

        List<Appointment> existingAppointments =

                appointmentRepository
                        .findByDoctorNameAndAppointmentDate(

                                appointment.getDoctorName(),

                                appointment.getAppointmentDate()

                        );

        // GENERATE NEXT SLOT

        int nextSlot =
                existingAppointments.size() + 1;

        appointment.setSlotNumber(nextSlot);

        // CALCULATE APPOINTMENT TIME

        LocalTime startTime =
                LocalTime.of(9, 0);

        LocalTime appointmentTime =
                startTime.plusMinutes(
                        (nextSlot - 1) * 15
                );

        String formattedTime =
                appointmentTime.format(
                        DateTimeFormatter.ofPattern("hh:mm a")
                );

        appointment.setAppointmentTime(
                formattedTime
        );

        // GENERATE BOOKING ID

        String bookingId =

                "MED" +
                (1000 + new Random().nextInt(9000));

        appointment.setBookingId(
                bookingId
        );

        // STATUS

        appointment.setStatus(
                "Pending"
        );

        // SAVE APPOINTMENT

        Appointment savedAppointment =

                appointmentRepository.save(
                        appointment
                );

        // GENERATE PDF

        String pdfPath =

                pdfService.generateAppointmentPdf(
                        savedAppointment
                );

        // SEND EMAIL WITH PDF

        emailService.sendAppointmentEmail(

                savedAppointment.getEmail(),

                savedAppointment.getBookingId(),

                pdfPath

        );

        // RETURN RESPONSE

        return savedAppointment;

    }

@GetMapping("/patient/{phone}")

public List<Appointment> getAppointmentsByPhone(
        @PathVariable String phone
) {

    return appointmentRepository.findByBookedByMobile(phone);

}

}