USE project2_db;

INSERT INTO Classes (class_name) VALUES 
("Creative Writing"),
("Philosophy"),
("Composition");

INSERT INTO Students (first_name, last_name, address, contact_phone, ClassId) VALUES 
("Henry", "Jacobs", "521 Maple Rd", "555-257-9562", "2"),
("Jill", "Marks", "234 Oak Dr", "555-324-4213", "1"),
("Jackie", "Bronson", "809 Bronze St", "555-324-5679", "3"),
("Joe", "Mama", "777 Elm St", "555-345-6789", "2"),
("Hugh", "Jassle", "0 Nowhere Rd", "555-666-7777","1"),
("Some", "Guy", "56 Bumpy Rd", "555-867-5309", "3");

INSERT INTO Assignments (assignment_name, points_possible, ClassId) VALUES 
("Book Report", "100", "3"),
("Essay", "100", "1"),
("Argument", "50", "2"),
("Short Story", "25", "1"),
("Outline", "10", "3"),
("Research Paper", "100", "2");

INSERT INTO Lessonplans (lessonplan_name, notes, ClassId) VALUES 
("Week 1", "Assign outline and book report.", "3"),
("Week 1", "Go over logic symbols for argument activity and assign the research paper.", "2"),
("Week 1", "Explain essay assignment and assign short story.", "1");