package com.mediflow.mediflow_backend.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.core.io.FileSystemResource;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import org.springframework.stereotype.Service;

import jakarta.mail.internet.MimeMessage;

import java.io.File;

@Service

public class EmailService {

    @Autowired

    private JavaMailSender mailSender;

    public void sendAppointmentEmail(

            String toEmail,
            String bookingId,
            String pdfPath

    ) {

        try {

            MimeMessage message =
                    mailSender.createMimeMessage();

            MimeMessageHelper helper =
                    new MimeMessageHelper(
                            message,
                            true
                    );

            helper.setTo(toEmail);

            helper.setSubject(
                    "MediFlow Appointment Confirmation"
            );

            helper.setText(

                    "Your appointment has been confirmed.\n\n" +

                    "Booking ID: " +
                    bookingId +
                    "\n\n" +

                    "Please find attached PDF."

            );

            // ATTACH PDF

            FileSystemResource file =
                    new FileSystemResource(
                            new File(pdfPath)
                    );

            helper.addAttachment(
                    file.getFilename(),
                    file
            );

            mailSender.send(message);

            System.out.println(
                    "Email sent successfully"
            );

        } catch (Exception e) {

            e.printStackTrace();

        }

    }

}