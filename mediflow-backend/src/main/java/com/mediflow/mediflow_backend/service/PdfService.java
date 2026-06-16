package com.mediflow.mediflow_backend.service;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.*;

import com.mediflow.mediflow_backend.models.Appointment;

import org.springframework.stereotype.Service;

import java.io.FileOutputStream;

@Service

public class PdfService {

    public String generateAppointmentPdf(
            Appointment appointment
    ) {

        try {

            String fileName =
                    "appointment_" +
                    appointment.getBookingId() +
                    ".pdf";

            Document document =
                    new Document(
                            PageSize.A4,
                            40,
                            40,
                            50,
                            50
                    );

            PdfWriter.getInstance(
                    document,
                    new FileOutputStream(fileName)
            );

            document.open();

            // COLORS

            BaseColor primaryColor =
                    new BaseColor(
                            33,
                            150,
                            243
                    );

            BaseColor lightGray =
                    new BaseColor(
                            245,
                            245,
                            245
                    );

            // TITLE FONT

            Font titleFont =
                    FontFactory.getFont(
                            FontFactory.HELVETICA_BOLD,
                            26,
                            primaryColor
                    );

            Font sectionFont =
                    FontFactory.getFont(
                            FontFactory.HELVETICA_BOLD,
                            18,
                            BaseColor.BLACK
                    );

            Font textFont =
                    FontFactory.getFont(
                            FontFactory.HELVETICA,
                            13,
                            BaseColor.BLACK
                    );

            // HOSPITAL TITLE

            Paragraph hospitalTitle =
                    new Paragraph(
                            "MediFlow Hospital",
                            titleFont
                    );

            hospitalTitle.setAlignment(
                    Element.ALIGN_CENTER
            );

            document.add(hospitalTitle);

            // SUBTITLE

            Paragraph subtitle =
                    new Paragraph(
                            "Appointment Confirmation",
                            sectionFont
                    );

            subtitle.setSpacingBefore(10);
            subtitle.setSpacingAfter(25);

            subtitle.setAlignment(
                    Element.ALIGN_CENTER
            );

            document.add(subtitle);

            // APPOINTMENT INFO TABLE

            PdfPTable table =
                    new PdfPTable(2);

            table.setWidthPercentage(100);

            table.setSpacingBefore(10);

            table.setWidths(
                    new float[]{3, 5}
            );

            // HELPER METHOD STYLE

            addTableRow(
                    table,
                    "Booking ID",
                    appointment.getBookingId(),
                    textFont,
                    lightGray
            );

            addTableRow(
                    table,
                    "Patient Name",
                    appointment.getPatientName(),
                    textFont,
                    lightGray
            );

            addTableRow(
                    table,
                    "Doctor Name",
                    appointment.getDoctorName(),
                    textFont,
                    lightGray
            );

            addTableRow(
                    table,
                    "Speciality",
                    appointment.getSpeciality(),
                    textFont,
                    lightGray
            );

            addTableRow(
                    table,
                    "Hospital",
                    appointment.getHospital(),
                    textFont,
                    lightGray
            );

            addTableRow(
                    table,
                    "Appointment Date",
                    appointment.getAppointmentDate(),
                    textFont,
                    lightGray
            );

            addTableRow(
                    table,
                    "Slot Number",
                    String.valueOf(
                            appointment.getSlotNumber()
                    ),
                    textFont,
                    lightGray
            );

            addTableRow(
                    table,
                    "Appointment Time",
                    appointment.getAppointmentTime(),
                    textFont,
                    lightGray
            );

            addTableRow(
                    table,
                    "Symptoms",
                    appointment.getSymptoms(),
                    textFont,
                    lightGray
            );

            document.add(table);

            // IMPORTANT NOTE

            Paragraph note =
                    new Paragraph(

                            "\nPlease arrive 15 minutes before your appointment time.",

                            textFont

                    );

            note.setSpacingBefore(25);

            document.add(note);

            // FOOTER

            Paragraph footer =
                    new Paragraph(

                            "\nThank you for choosing MediFlow.\nWishing you good health!",

                            sectionFont

                    );

            footer.setAlignment(
                    Element.ALIGN_CENTER
            );

            footer.setSpacingBefore(40);

            document.add(footer);

            document.close();

            return fileName;

        } catch (Exception e) {

            e.printStackTrace();

            return null;

        }

    }

    // TABLE ROW METHOD

    private void addTableRow(

            PdfPTable table,

            String key,

            String value,

            Font font,

            BaseColor bgColor

    ) {

        PdfPCell cell1 =
                new PdfPCell(
                        new Phrase(key, font)
                );

        PdfPCell cell2 =
                new PdfPCell(
                        new Phrase(value, font)
                );

        cell1.setBackgroundColor(bgColor);
        cell2.setBackgroundColor(BaseColor.WHITE);

        cell1.setPadding(10);
        cell2.setPadding(10);

        table.addCell(cell1);
        table.addCell(cell2);

    }

}